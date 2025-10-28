import React from "react";
import { useTranslation } from "react-i18next";
// Removed: import emailjs from "@emailjs/browser";
// Removed: import { useRef, useState } from "react";

const Contact = () => {
  const { t } = useTranslation();
  // Removed: const form = useRef();
  // Removed: const [status, setStatus] = useState("");
  // Removed: const sendEmail = (e) => { ... };

  return (
    <div
      name="contact"
      className="w-full bg-gradient-to-b from-black via-black to-pink-900"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center">
        <div className="pb-2 text-pink-100">
          <p className="text-4xl font-bold inline border-b-4 border-pink-500">
            {t('contact_title')}
          </p>
          <p className="py-6">{t('contact_subtitle')}</p>
        </div>

        {/* AI FEATURE NOTE INTEGRATION */}
        <div className='my-6 p-4 border-l-4 border-pink-500 bg-gray-900/50 rounded-r-lg'>
            <p className='text-md text-gray-300 italic'>
                {t('form_ai_note')}
            </p>
        </div>

        {/* NETLIFY FORM CONFIGURATION */}
        <form 
          name="contact_form"                      // 1. Unique name for Netlify
          method="POST"                           // 2. Must be POST
          data-netlify="true"                     // 3. Enables Netlify Forms
          netlify-honeypot="bot-field"            // 4. Spam protection
          className="p-6"
        >
          {/* Hidden fields for Netlify and spam protection */}
          <input type="hidden" name="form-name" value="contact_form" />
          <input type="hidden" name="bot-field" /> 
          
          <div className="grid grid-cols-2 gap-4">
            
            {/* First Name */}
            <div className="flex flex-col">
              <label htmlFor="first-name">{t('form_label_firstname')}</label>
              <input
                type="text"
                id="first-name"
                name="user_firstname"
                placeholder={t('form_label_firstname')}
                className="form-input px-3 py-2 rounded-md border-2 bg-transparent text-pink-50"
                required
              />
            </div>
            
            {/* Last Name */}
            <div className="flex flex-col">
              <label htmlFor="last-name">{t('form_label_lastname')}</label>
              <input
                type="text"
                id="last-name"
                name="user_lastname"
                placeholder={t('form_label_lastname')}
                className="form-input px-3 py-2 rounded-md border-2 bg-transparent text-pink-50"
                required
              />
            </div>
            
            {/* Email */}
            <div className="flex flex-col">
              <label htmlFor="email">{t('form_label_email')}</label>
              <input
                type="email"
                id="email"
                name="user_email"
                placeholder="email@gmail.com"
                className="form-input px-3 py-2 rounded-md border-2 bg-transparent text-pink-50"
                required
              />
            </div>
            
            {/* Phone */}
            <div className="flex flex-col">
              <label htmlFor="phone">
                <div className="flex align-items">
                  {t('form_label_phone')}
                  <span className="ml-auto opacity-75 text-pink-500">{t('form_optional')}</span>
                </div>
              </label>
              <input
                type="tel"
                id="phone"
                name="user_phone"
                placeholder={t('form_placeholder_phone')}
                className="form-input px-3 py-2 rounded-md border-2 bg-transparent text-pink-50"
              />
            </div>
            
            {/* Subject */}
            <div className="flex flex-col col-span-2">
              <label htmlFor="subject">{t('form_label_subject')}</label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder={t('form_label_subject')}
                className="form-input px-3 py-2 rounded-md border-2 bg-transparent text-pink-50"
                required
              />
            </div>
            
            {/* Message */}
            <div className="flex flex-col col-span-2">
              <label htmlFor="message">
                <div className="flex align-items">
                  {t('form_label_message')}
                  <span className="ml-auto opacity-75">{t('form_max_chars')}</span>
                </div>
              </label>
              <textarea
                maxLength="500"
                rows="4"
                id="message"
                name="message"
                placeholder={t('form_label_message_placeholder')}
                className="form-input px-3 py-2 rounded-md border-2 bg-transparent text-pink-50"
                required
              />
            </div>
          </div>
          
          {/* Submit Button */}
          <div className="flex justify-end py-4">
            <button
              type="submit"
              className="text-pink-100 bg-gradient-to-b from-pink-500 to-pink-900 cursor-pointer px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300 group w-fill"
            >
              {t('form_btn_submit')}
            </button>
          </div>
          
        </form>
      </div>
    </div>
  );
};

export default Contact;