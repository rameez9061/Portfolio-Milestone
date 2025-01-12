export default function Page() {
    return (
      <>
        <div className="footer w-full min-h-[250px] bg-black grid grid-cols-1 md:grid-cols-2  gap-4 p-5">
          {/* Left Section */}
          <div className="footer-left flex flex-col md:flex-row items-center justify-center md:justify-start gap-4 p-10">
            <li className="text-white text-[5vw] sm:text-[3vw] md:text-[1.5vw] list-none cursor-pointer hover:text-gray-500">
              Home
            </li>
            <li className="text-white text-[5vw] sm:text-[3vw] md:text-[1.5vw] list-none cursor-pointer hover:text-gray-500">
              About
            </li>
            <li className="text-white text-[5vw] sm:text-[3vw] md:text-[1.5vw] list-none cursor-pointer hover:text-gray-500">
              Contact
            </li>
          </div>
  
          {/* Right Section */}
          <div className="footer-right flex flex-col items-center md:items-start justify-center gap-2 p-10">
            <h1 className="footer-title text-white text-[6vw] sm:text-[4vw] md:text-[1.5vw] font-bold">
              Contact Me
            </h1>
            <p className="footer-subtitle text-white text-[5vw] sm:text-[3vw] md:text-[1.2vw]">
              Email: uidibis@gmail.com
            </p>
          </div>
        </div>
      </>
    );
  }
  