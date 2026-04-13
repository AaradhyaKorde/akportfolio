import nodemailer from "nodemailer";
import formidable from "formidable";
import { promises as fs } from "fs";
import path from "path";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    // Ensure uploads directory exists
    const uploadDir = path.join(process.cwd(), "public", "uploads");
    try {
      await fs.access(uploadDir);
    } catch {
      await fs.mkdir(uploadDir, { recursive: true });
    }

    const form = formidable({
      uploadDir,
      keepExtensions: true,
      maxFileSize: 10 * 1024 * 1024, // 10MB limit
      filter: function({name, originalFilename, mimetype}) {
        return mimetype && ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'].includes(mimetype);
      }
    });

    // Add timeout to form parsing
    const [fields, files] = await Promise.race([
      new Promise((resolve, reject) => {
        form.parse(req, (err, fields, files) => {
          if (err) reject(err);
          resolve([fields, files]);
        });
      }),
      new Promise((_, reject) =>
        setTimeout(() => reject(new Error('Form parsing timeout')), 15000)
      )
    ]);

    // Validate required fields
    const requiredFields = ['name', 'email', 'position', 'coverLetter'];
    for (const field of requiredFields) {
      if (!fields[field]) {
        return res.status(400).json({ error: `${field} is required` });
      }
    }

    // Extract first value from array fields
    const name = Array.isArray(fields.name) ? fields.name[0] : fields.name;
    const email = Array.isArray(fields.email) ? fields.email[0] : fields.email;
    const position = Array.isArray(fields.position) ? fields.position[0] : fields.position;
    const coverLetter = Array.isArray(fields.coverLetter) ? fields.coverLetter[0] : fields.coverLetter;

    if (!files.resume) {
      return res.status(400).json({ error: "Resume file is required" });
    }

    const resumeFile = Array.isArray(files.resume) ? files.resume[0] : files.resume;
    const resumePath = resumeFile.filepath;

    // Set up email notification
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
      connectionTimeout: 5000,
      greetingTimeout: 5000,
      socketTimeout: 5000,
    });

    const mailOptions = {
      from: process.env.EMAIL_USERNAME,
      to: "business@noxalgo.com",
      subject: `New Career Application from ${name}!`,
      text: `You have received a new career application.\n\nName: ${name}\nEmail: ${email}\nPosition: ${position}\nCover Letter: ${coverLetter}`,
      attachments: [{
        filename: path.basename(resumePath),
        path: resumePath
      }]
    };

    await transporter.sendMail(mailOptions);

    // Clean up uploaded file after sending email
    try {
      await fs.unlink(resumePath);
    } catch (unlinkError) {
      console.error("Error deleting file:", unlinkError);
    }

    res.status(200).json({ message: 'Application submitted successfully!' });

  } catch (error) {
    console.error("Error:", error);
    console.error("Stack Trace:", error.stack);

    // Clean up any uploaded files in case of error
    if (error.filepath) {
      try {
        await fs.unlink(error.filepath);
      } catch (unlinkError) {
        console.error("Error deleting file:", unlinkError);
      }
    }

    // Send appropriate error response
    if (error.message.includes('timeout')) {
      return res.status(504).json({ error: "Request timed out. Please try again." });
    }
    
    return res.status(500).json({ 
      error: "Server error occurred",
      details: error.message 
    });
  }
}