"use client";
import { useLanguage } from "@/components/LanguageProvider";
import React, { useState } from "react";
import hr1 from "/public/hr1.jpeg";
import hr2 from "/public/hr.jpeg";
import Image from "next/image";

export default function Home() {
  const { language } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqItems = [
    {
      question: {
        DE: "Welche Leistungen bieten wir Ihnen an?",
        EN: "What services do we offer?",
      },
      answer: {
        DE:
          "Wir bieten eine Reihe von Rekrutierungsdienstleistungen an, darunter die Suche nach Kandidaten, die Überprüfung von Lebenslaufen und die Planung von Vorstellungsgesprächen. Wir beraten Sie auch bei der Gehaltsverhandlung und dem Management von Stellenangeboten.",
        EN:
          "We offer a range of recruitment services, including candidate search, resume review, and interview planning. We also advise you on salary negotiations and job offer management.",
      },
    },
    {
      question: {
        DE: "Wie stellen wir die Qualität unserer Kandidaten sicher?",
        EN: "How do we ensure the quality of our candidates?",
      },
      answer: {
        DE:
          "Wir durchlaufen einen strengen Auswahlprozess mit mehreren Interviews, Referenzprüfungen und Fähigkeitstests, um sicherzustellen, dass nur die qualifiziertesten Kandidaten empfohlen werden.",
        EN:
          "We go through a rigorous selection process with multiple interviews, reference checks, and skill assessments to ensure only the most qualified candidates are recommended.",
      },
    },
    {
      question: {
        DE: "Was ist ein Over-Rekrutierungsprozess?",
        EN: "What is an over-recruitment process?",
      },
      answer: {
        DE:
          "Ein Over-Rekrutierungsprozess bedeutet, dass wir mehr Kandidaten identifizieren und evaluieren, als unmittelbar benötigt, um sicherzustellen, dass wir die besten Talente für unsere Kunden finden.",
        EN:
          "An over-recruitment process means we identify and evaluate more candidates than immediately needed to ensure we find the best talent for our clients.",
      },
    },
    {
      question: {
        DE: "Wie lange dauert der Rekrutierungsprozess?",
        EN: "How long does the recruitment process take?",
      },
      answer: {
        DE:
          "Die Dauer variiert je nach Rolle und Branche, aber typischerweise dauert unser Rekrutierungsprozess zwischen 2-6 Wochen von der ersten Kontaktaufnahme bis zur Stellenbesetzung.",
        EN:
          "The duration varies depending on the role and industry, but typically our recruitment process takes 2-6 weeks from initial contact to job placement.",
      },
    },
    {
      question: {
        DE: "Was zeichnet Personalvermittlungsdienste aus?",
        EN: "What characterizes our Talent Acquisition services?",
      },
      answer: {
        DE:
          "Unsere Personalvermittlungsdienste zeichnen sich durch individuelle Betreuung, umfassende Kandidatensuche, persönliche Matching-Prozesse und kontinuierliche Unterstützung aus.",
        EN:
          "Our Talent Acquisition services are characterized by personalized attention, comprehensive candidate search, tailored matching processes, and ongoing support.",
      },
    },
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <div className="container mx-auto my-8">
        <h1 className="text-4xl font-bold text-center my-[300px]">
          {language === "DE"
            ? "Willkommen bei AMG HR – Ihrem Partner bei der Suche nach außergewöhnlichen Talenten"
            : "Welcome to AMG HR - Your Partner in Finding Exceptional Talent"}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="bg-gray-200 px-6 py-4 font-bold">
              <h2 className="text-lg">
                {language === "DE"
                  ? "Willkommen bei AMG HR – Ihrem Partner bei der Suche nach außergewöhnlichen Talenten"
                  : "Welcome to AMG HR - Your Partner in Finding Exceptional Talent"}
              </h2>
            </div>
            <div className="p-6">
              {language === "DE"
                ? "Entdecken Sie, wie unsere professionellen Personalvermittlungsdienste Ihnen dabei helfen können, den perfekten Kandidaten für Ihr Team zu finden. Mit unserem umfangreichen Netzwerk und unserem individuellen Ansatz helfen wir Ihnen, selbst die anspruchsvollsten Positionen mit hochqualifizierten Fachkräften zu besetzen."
                : "Discover how our professional Talent Acquisition services can help you find the perfect candidates for your team. With our extensive network and individualized approach, we help you fill even the most challenging positions with highly qualified specialists."}
            </div>
            <div className="flex justify-between px-6 py-4">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                {language === "DE" ? "Loslegen" : "Get Started"}
              </button>
              <button className="bg-white hover:bg-gray-200 text-blue-500 font-bold py-2 px-4 rounded border border-blue-500">
                {language === "DE"
                  ? "Finden Sie Top-Talente"
                  : "Find Top Talent"}
              </button>
            </div>
          </div>
          <Image src={hr1} alt="" className="h-[350px]" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-3">
          <Image src={hr2} alt="" className="h-[350px]" />
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="bg-gray-200 px-6 py-4 font-bold">
              <h2 className="text-lg">
                {language === "DE"
                  ? "Experten-Rekrutierungslösungen für Ihr Unternehmen"
                  : "Talent Acquisition Solutions for Your Business"}
              </h2>
            </div>
            <div className="p-6">
              {language === "DE"
                ? "Unsere umfassenden Rekrutierungsdienstleistungen sollen Ihnen dabei helfen, die besten Talente für Ihr Unternehmen zu finden. Von der Personalvermittlung bis zur Arbeitnehmerbindung bieten wir individuelle Lösungen für Ihre spezifischen Bedürfnisse. Unser Expertenteam arbeitet eng mit Ihnen zusammen, um Ihre Anforderungen zu verstehen und die perfekten Kandidaten für Ihr Team zu finden."
                : "Our comprehensive Talent Acquisition services are designed to help you find the best talent for your business. From Recruiting to Retention, we offer tailored solutions for your specific needs. Our expert team works closely with you to understand your requirements and identify the perfect candidates for your team."}
            </div>
            <div className="flex justify-end px-6 py-4">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                {language === "DE"
                  ? "Unser Rekrutierungsprozess"
                  : "Our Recruiting Process"}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* cards appear here */}

      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="bg-gray-200 px-6 py-4 font-bold">
          <h2 className="text-lg">
            {language === "DE"
              ? "Häufig gestellte Fragen"
              : "Frequently Asked Questions"}
          </h2>
        </div>
        <div className="p-6 space-y-4">
          {faqItems.map((item, index) => (
            <div key={index} className="border-b pb-4 last:border-b-0">
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex justify-between items-center font-bold text-left hover:text-blue-600 transition-colors duration-300"
              >
                <span>
                  {language === "DE" ? item.question.DE : item.question.EN}
                </span>
                <svg
                  className={`h-6 w-6 text-gray-500 transform transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openIndex === index && (
                <div className="mt-2 text-gray-600 transition-all duration-300 ease-in-out">
                  {language === "DE" ? item.answer.DE : item.answer.EN}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="flex justify-end px-6 py-4">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            {language === "DE" ? "Kontaktieren Sie uns" : "Contact us"}
          </button>
        </div>
      </div>
    </>
  );
}
