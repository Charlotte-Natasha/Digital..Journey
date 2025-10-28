import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(() => {
        setStatus("Message sent successfully!");
        form.current.reset();
      })
      .catch(() => {
        setStatus("Failed to send message. Please try again.");
      });
  };

  return (
    <div
      name="contact"
      className="w-full bg-gradient-to-b from-black via-black to-pink-900"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 text-pink-100">
          <p className="text-4xl font-bold inline border-b-4 border-pink-900">
            Contact
          </p>
          <p className="py-6">Get in touch here.</p>
        </div>

        <form ref={form} onSubmit={sendEmail} className="p-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label htmlFor="first-name">First name</label>
              <input
                type="text"
                id="first-name"
                name="user_firstname"
                placeholder="First name"
                className="form-input px-3 py-2 rounded-md border-2 bg-transparent text-pink-50"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="last-name">Last name</label>
              <input
                type="text"
                id="last-name"
                name="user_lastname"
                placeholder="Last name"
                className="form-input px-3 py-2 rounded-md border-2 bg-transparent text-pink-50"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="user_email"
                placeholder="email@gmail.com"
                className="form-input px-3 py-2 rounded-md border-2 bg-transparent text-pink-50"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="phone">
                <div className="flex align-items">
                  Phone
                  <span className="ml-auto opacity-75 text-pink-500">Optional</span>
                </div>
              </label>
              <input
                type="tel"
                id="phone"
                name="user_phone"
                placeholder="+33000000"
                className="form-input px-3 py-2 rounded-md border-2 bg-transparent text-pink-50"
              />
            </div>
            <div className="flex flex-col col-span-2">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Topic"
                className="form-input px-3 py-2 rounded-md border-2 bg-transparent text-pink-50"
                required
              />
            </div>
            <div className="flex flex-col col-span-2">
              <label htmlFor="message">
                <div className="flex align-items">
                  Message
                  <span className="ml-auto opacity-75">Max. 500 characters</span>
                </div>
              </label>
              <textarea
                maxLength="500"
                rows="4"
                id="message"
                name="message"
                placeholder="Your message here"
                className="form-input px-3 py-2 rounded-md border-2 bg-transparent text-pink-50"
                required
              />
            </div>
          </div>
          <div className="flex justify-end py-4">
            <button
              type="submit"
              className="text-pink-100 bg-gradient-to-b from-pink-500 to-pink-900 cursor-pointer px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300 group w-fill"
            >
              Let's Talk..
            </button>
          </div>
          {status && (
            <p className="text-center text-pink-400 font-medium">{status}</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
