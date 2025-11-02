import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
  // State to track the form submission status: null, 'sending', 'success', 'error'
  const [status, setStatus] = useState(null); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending'); // Set status to show loading/processing

    const form = e.target;
    const data = new FormData(form);

    // CRUCIAL: Serialize data for Netlify's endpoint
    const encoded = new URLSearchParams(data).toString();

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encoded,
      });

      // Netlify often returns status 204 (No Content) for successful AJAX submissions
      if (response.status === 200 || response.status === 204) {
        setStatus('success'); 
        form.reset(); // Clear the form
        // Reset status after a few seconds
        setTimeout(() => setStatus(null), 5000); 
      } else {
        setStatus('error');
        console.error("Netlify submission failed with status:", response.status);
      }
    } catch (error) {
      setStatus('error');
      console.error("Form submission error:", error);
    }
  };


  return (
    <div
      name="contact"
      className="w-full bg-gradient-to-b from-black via-black to-pink-900 py-12"
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
          name="contact_form" 
          method="POST" 
          data-netlify="true"
          onSubmit={handleSubmit} // <-- AJAX HANDLER
          className="p-6"
        >
          
          {/* Hidden fields for Netlify and spam protection (CRUCIAL) */}
          <input type="hidden" name="form-name" value="contact_form" />
          {/* Honeypot field: Type text and hide it with Tailwind (more robust against simple bots) */}
          <input type="text" name="bot-field" className="hidden" aria-hidden="true" /> 
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-pink-100">
            
            {/* First Name */}
            <div className="flex flex-col">
              <label htmlFor="first-name">{t('form_label_firstname')}</label>
              <input
                type="text"
                id="first-name"
                name="user_firstname"
                placeholder={t('form_label_firstname')}
                className="form-input px-3 py-2 rounded-md border-2 bg-transparent text-pink-50 focus:outline-none focus:ring-2 focus:ring-pink-500"
                required
                autoComplete="given-name" // 💡 ADDED autocomplete
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
                className="form-input px-3 py-2 rounded-md border-2 bg-transparent text-pink-50 focus:outline-none focus:ring-2 focus:ring-pink-500"
                required
                autoComplete="family-name" // 💡 ADDED autocomplete
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
                className="form-input px-3 py-2 rounded-md border-2 bg-transparent text-pink-50 focus:outline-none focus:ring-2 focus:ring-pink-500"
                required
                autoComplete="email" // 💡 ADDED autocomplete
              />
            </div>
            
            {/* Phone */}
            <div className="flex flex-col">
              <label htmlFor="phone">
                <div className="flex justify-between">
                  {t('form_label_phone')}
                  <span className="opacity-75 text-pink-500 text-sm">{t('form_optional')}</span>
                </div>
              </label>
              <input
                type="tel"
                id="phone"
                name="user_phone"
                placeholder={t('form_placeholder_phone')}
                className="form-input px-3 py-2 rounded-md border-2 bg-transparent text-pink-50 focus:outline-none focus:ring-2 focus:ring-pink-500"
                autoComplete="tel" // 💡 ADDED autocomplete
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
                className="form-input px-3 py-2 rounded-md border-2 bg-transparent text-pink-50 focus:outline-none focus:ring-2 focus:ring-pink-500"
                required
              />
            </div>
            
            {/* Message */}
            <div className="flex flex-col col-span-2">
              <label htmlFor="message">
                <div className="flex justify-between">
                  {t('form_label_message')}
                  <span className="opacity-75 text-sm">{t('form_max_chars')}</span>
                </div>
              </label>
              <textarea
                maxLength="500"
                rows="4"
                id="message"
                name="message"
                placeholder={t('form_label_message_placeholder')}
                className="form-input px-3 py-2 rounded-md border-2 bg-transparent text-pink-50 resize-none focus:outline-none focus:ring-2 focus:ring-pink-500"
                required
              />
            </div>
          </div>
          
          {/* Submit Button & Status Messages */}
          <div className="flex flex-col items-center py-4">
            
            {/* Conditional Button Text/Styling */}
            <button
              type="submit"
              disabled={status === 'sending'} 
              className={`
                text-pink-100 cursor-pointer px-6 py-3 my-4 mx-auto flex items-center rounded-md duration-300 w-full md:w-fit
                ${status === 'sending' 
                    ? 'bg-gray-600 cursor-not-allowed' // Grey out while sending
                    : 'bg-gradient-to-b from-pink-500 to-pink-900 hover:scale-105'
                }
              `}
            >
              {status === 'sending' ? t('form_btn_sending') : t('form_btn_submit')}
            </button>

            {/* In-Page Success Message (Will now display the correct translation) */}
            {status === 'success' && (
              <p className="text-center text-lg font-bold text-green-400 mt-2">
                {t('form_success_message')} 
              </p>
            )}

            {/* In-Page Error Message */}
            {status === 'error' && (
              <p className="text-center text-lg font-bold text-pink-300 mt-2">
                {t('form_error_message')} 
              </p>
            )}

          </div>
          
        </form>
      </div>
    </div>
  );
};

export default Contact;