"use client";
import { useLanguage } from "@/components/LanguageProvider";

export default function ContactUs() {
  const { language } = useLanguage(); // Replace this with your useLanguage hook if implemented

  return (
    <div className="container mx-auto my-8 p-6 max-w-2xl">
      <h1 className="text-4xl font-bold text-center mb-6">
        {language === "DE" ? "Nehmen Sie Kontakt mit uns auf" : "Contact Us"}
      </h1>
      <p className="text-center text-gray-600 mb-8">
        {language === "DE"
          ? "Haben Sie eine Frage, einen Kommentar oder möchten Sie einfach nur Hallo sagen? Wir würden uns freuen, von Ihnen zu hören! Unser Team ist für Sie da und beantwortet Ihre Anfragen so schnell wie möglich."
          : "Do you have a question, comment, or just want to say hello? We’d love to hear from you! Our team is here to assist and will respond to your inquiries as quickly as possible."}
      </p>
      <form className="space-y-6">
        <div>
          <label
            htmlFor="name"
            className="block text-gray-700 font-medium mb-1"
          >
            {language === "DE" ? "Name" : "Name"}
          </label>
          <input
            type="text"
            id="name"
            placeholder={language === "DE" ? "Name" : "Name"}
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-gray-700 font-medium mb-1"
          >
            {language === "DE" ? "Email" : "Email"}
          </label>
          <input
            type="email"
            id="email"
            placeholder={language === "DE" ? "Email" : "Email"}
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-gray-700 font-medium mb-1"
          >
            {language === "DE" ? "Nachricht" : "Message"}
          </label>
          <textarea
            id="message"
            rows={4}
            placeholder={
              language === "DE"
                ? "Geben Sie Ihre Nachricht ein..."
                : "Enter your message..."
            }
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring focus:ring-blue-300"
          ></textarea>
        </div>
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="terms"
            className="h-5 w-5 border-gray-300 rounded focus:ring-blue-300"
          />
          <label htmlFor="terms" className="text-gray-600">
            {language === "DE" ? "Ich akzeptiere das" : "I accept the"}{" "}
            <a href="#" className="text-blue-500 underline">
              {language === "DE" ? "Begriff" : "Terms"}
            </a>
          </label>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 rounded-lg"
        >
          {language === "DE" ? "Kontaktiere uns heute!" : "Contact Us Today!"}
        </button>
      </form>
    </div>
  );
}
