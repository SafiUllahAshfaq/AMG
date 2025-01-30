"use client";
import { useLanguage } from "@/components/LanguageProvider";
import React, { useState } from "react";
import hr1 from "/public/hr.png";
import hr2 from "/public/hr.jpeg";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const { language } = useLanguage();
  const router = useRouter();
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
        <section className="relative h-screen flex items-center justify-center overflow-hidden my-4">
          {/* Background Video for Larger Screens */}
          <video
            autoPlay
            loop
            muted
            className="absolute z-0 w-full h-full object-cover hidden sm:block"
          >
            <source src="/v2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Background Replacement for Mobile */}
          <div className="absolute z-0 w-full h-full bg-gradient-to-b from-blue-600 to-purple-800 block sm:hidden">
            {/* You can replace this with an image */}
            <div className="flex items-center justify-center h-full">
              {/* <img
                src="/placeholder-mobile.png"
                alt="Mobile Background"
                className="w-3/4 max-w-xs"
              /> */}
            </div>
          </div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>

          {/* Content */}
          <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 animate-fade-in-up">
              {language === "DE"
                ? "Willkommen bei Asset Star HR"
                : "Welcome to Asset Star HR"}
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-white mb-8 animate-fade-in-up animation-delay-200">
              {language === "DE"
                ? "Ihr Partner für die Suche nach außergewöhnlichen Talenten"
                : "Your Partner in Finding Exceptional Talent"}
            </p>
            <p className="text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto mb-10 animate-fade-in-up animation-delay-400">
              {language === "DE"
                ? "Wir verbinden Spitzenkräfte mit führenden Unternehmen und sorgen für die perfekte Übereinstimmung Ihrer organisatorischen Bedürfnisse."
                : "We connect top-tier professionals with leading companies, ensuring the perfect match for your organizational needs."}
            </p>
            <button
              onClick={() => router.push("/contact")}
              className="bg-white text-blue-600 hover:bg-blue-100 transition-colors duration-300 text-lg py-3 px-8 rounded-full font-semibold animate-fade-in-up animation-delay-600"
            >
              {language === "DE" ? "Loslegen" : "Get Started"}
            </button>
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="bg-gray-200 px-6 py-4 font-bold">
              <h2 className="text-lg">
                {language === "DE"
                  ? "Willkommen bei Asset Star HR – Ihrem Partner bei der Suche nach außergewöhnlichen Talenten"
                  : "Welcome to Asset Star HR - Your Partner in Finding Exceptional Talent"}
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-12">
          {[
            {
              title: {
                DE: "Zugang qualifizierter Kandidaten",
                EN: "Access to Qualified Candidates",
              },
              content: {
                DE:
                  "„Nutzen Sie unser umfangreiches Netzwerk hochqualifizierter Kandidaten, die sorgfältig ausgewählt wurden, um Ihren Geschäftsanforderungen gerecht zu werden. Erhalten Sie Zugang zu Top-Talenten, die bereit sind, Ihr Unternehmen voranzutreiben.“",
                EN:
                  "“Leverage our extensive network of highly qualified candidates carefully selected to meet your business requirements. Gain access to top talent ready to drive your company forward.”",
              },
              image: hr1,
            },
            {
              title: {
                DE: "Nachgewiesener Erfolgskurs",
                EN: "Proven Track Record of Success",
              },
              content: {
                DE:
                  "„Erreichen Sie Ihre Ziele mit einem vertrauenswürdigen Partner, der nachweislich erfolgreich ist. Zuverlässige und effiziente Lösungen, die Ergebnisse liefern, die Ihre Erwartungen übertreffen.“",
                EN:
                  "“Achieve your goals with a trusted partner proven to succeed. Reliable and efficient solutions that deliver results beyond your expectations.”",
              },
              image: hr2,
            },
            {
              title: {
                DE: "Kompetente Anleitung und Unterstützung",
                EN: "Expert Guidance and Support",
              },
              content: {
                DE:
                  "„Navigieren Sie Ihren Weg zum Erfolg mit fachkundiger Anleitung und Unterstützung bei jedem Schritt. Vertrauen Sie auf unsere erfahrenen Fachleute, die Ihnen persönliche Beratung und Betreuung bieten.“",
                EN:
                  "“Navigate your way to success with expert guidance and support every step of the way. Rely on our experienced professionals for personalized advice and care.”",
              },
              image: hr1,
            },
          ].map((card, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 text-center space-y-4"
            >
              <div className="flex justify-center">
                <Image
                  src={card.image}
                  alt=""
                  className="rounded-full w-16 h-16"
                />
              </div>
              <h3 className="text-xl font-bold">
                {language === "DE" ? card.title.DE : card.title.EN}
              </h3>
              <p className="text-gray-600">
                {language === "DE" ? card.content.DE : card.content.EN}
              </p>
            </div>
          ))}
        </div>

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
            <Link
              href="/contact"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
            >
              {language === "DE" ? "Kontaktieren Sie uns" : "Contact Us"}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
