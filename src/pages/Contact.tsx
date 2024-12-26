import React from "react";

const Contact: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-white px-6">
      <h2 className="text-4xl font-bold mb-4 text-black">Get In Touch</h2>
      <p className="text-lg text-black text-center max-w-2xl mb-8 font-poppins">
        I'd love to hear from you! Whether you have a question, want to
        collaborate, or just want to say hi, feel free to drop a message.
      </p>

      {/* Contact Form */}
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-lg p-8">
        <form className="space-y-6">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-sm font-medium mb-2 text-red-500">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="bg-gray-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="text-sm font-medium mb-2 text-red-500">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="bg-gray-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="message" className="text-sm font-medium mb-2 text-red-500">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              className="bg-gray-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Write your message here..."
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-red-400 text-white py-2 rounded-lg font-medium hover:bg-red-600 transition"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Social Links */}
      <div className="mt-12 flex space-x-6">
        <a
          href="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition"
          aria-label="GitHub"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="w-6 h-6"
            viewBox="0 0 16 16"
          >
            <path d="..." />
          </svg>
        </a>
        <a
          href="https://linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition"
          aria-label="LinkedIn"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="w-6 h-6"
            viewBox="0 0 16 16"
          >
            <path d="..." />
          </svg>
        </a>
        <a
          href="mailto:youremail@example.com"
          className="text-gray-400 hover:text-white transition"
          aria-label="Email"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="w-6 h-6"
            viewBox="0 0 16 16"
          >
            <path d="..." />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Contact;
