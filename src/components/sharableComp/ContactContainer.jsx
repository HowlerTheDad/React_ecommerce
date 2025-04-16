import { Link } from "react-router-dom";

export const ContactContainer = () => {
  return (
    <>
      <section className="min-h-screen flex flex-col justify-center items-center w-full relative pt-16 ">
        <div className="w-full max-w-lg   p-8">
         
          
          <form>
            <div className="mb-1">
              <label
                htmlFor="name"
                className="block text-lg font-medium   mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                className="w-full placeholder-gray-400 dark:placeholder-gray-400 border-b border-gray-300 dark:border-gray-700 rounded-lg px-4 py-2    dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-1">
              <label
                htmlFor="email"
                className="block text-lg font-medium   mb-2"
              >
                E-mail
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full placeholder-gray-400 dark:placeholder-gray-400 border-b border-gray-300 dark:border-gray-700 rounded-lg px-4 py-2    dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-1">
              <label
                htmlFor="number"
                className="block text-lg font-medium   mb-2"
              >
                Phone No:
              </label>
              <input
                type="text"
                id="number"
                placeholder="Enter your phone number"
                className="w-full placeholder-gray-400 dark:placeholder-gray-400 border-b border-gray-300 dark:border-gray-700 rounded-lg px-4 py-2    dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-1">
              <label
                htmlFor="message"
                className="block text-lg font-medium   mb-2"
              >
                Message
              </label>
              <textarea
              style={{height: '51px'}}
                id="message"
                placeholder="Write your message here"
                rows="4"
                className="w-full placeholder-gray-400 dark:placeholder-gray-400 border-b border-gray-300 dark:border-gray-700 rounded-lg px-4 py-2    dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-3 px-6 rounded-lg font-medium transition-all duration-200 hover:bg-blue-600 hover:shadow-lg"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};