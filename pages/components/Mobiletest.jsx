export default function Text1() {
  return (
    <main className="h-screen relative py-52 px-4 sm:px-6 md:px-8 overflow-x-hidden sm:hidden">
      <div className="flex flex-col items-center justify-center w-full mb-8 sm:mb-10 md:mb-12">
        <div className="w-[60px] sm:w-[80px] md:w-[100px] h-[2px] sm:h-[2.5px] md:h-[3px] bg-[#fffff0] mb-2 sm:mb-3 md:mb-4"></div>
        <h2 className="text-xl sm:text-2xl md:text-3xl uppercase font-semibold bg-gradient-to-r from-[#fffff0] to-gray-400 bg-clip-text text-transparent text-center">
          Our Foundation lies in
        </h2>
      </div>

      <div className="w-full flex flex-col items-center justify-center text-[#afa18f] text-sm sm:text-base md:text-lg leading-relaxed mt-6 sm:mt-8 md:mt-10">
        <div className="w-full p-2 sm:p-3 md:p-4">
          <p className="mb-2 sm:mb-3 md:mb-4 text-center">
            कर्मण्येवाधिकारस्ते मा फलेषु कदाचन ।
          </p>
          <p className="text-center">
            मा कर्मफलहेतुर्भुर्मा ते संगोऽस्त्वकर्मणि ॥
          </p>
        </div>
      </div>

      <div className="w-full flex flex-col items-center justify-center text-[#afa18f] text-sm sm:text-base md:text-lg leading-relaxed mt-4 sm:mt-6 md:mt-8">
        <div className="w-full p-2 sm:p-3 md:p-4">
          <p className="mb-2 sm:mb-3 md:mb-4 text-center">
            You have the right to perform your duty,
          </p>
          <p className="text-center">but never to the fruits of action.</p>
        </div>
      </div>
    </main>
  );
}
