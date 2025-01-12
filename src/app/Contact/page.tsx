export default function Page() {
    return (
      <>
        <div className="outer-form w-full bg-white">
          {/* Hero Section */}
          <div className="contact-hero w-full h-[100vh] bg-black flex justify-center items-center">
            <div className="Contact-hero-content flex flex-col items-center px-4">
            <h1 className="hero-title text-white font-black text-[10vw] sm:text-[8vw] md:text-[6vw] lg:text-[5vw] ">Contact Me</h1>
            <p className="hero-subtitle text-white font-thin text-[6vw] sm:text-[5vw] md:text-[4vw] lg:text-[3vw]">Say Hello to Rameez!</p>
            </div>
          </div>
  
          {/* Contact Form */}
          <div className="w-full max-w-4xl mx-auto px-6 py-8 bg-white shadow-lg rounded-lg mt-20 sm:mt-28 lg:mt-32">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-6">
              Contact Us
            </h2>
            <form>
              {/* Full Name */}
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm sm:text-base font-medium text-gray-700"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm lg:text-base"
                />
              </div>
  
              {/* Email Address */}
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm sm:text-base font-medium text-gray-700"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm lg:text-base"
                />
              </div>
  
              {/* Message */}
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-sm sm:text-base font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm lg:text-base"
                />
              </div>
  
              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  className="w-full sm:w-auto bg-indigo-600 text-white py-2 px-6 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
  