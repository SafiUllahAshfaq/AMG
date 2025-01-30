"use client";

import { useLanguage } from "@/components/LanguageProvider";
import React from "react";

export default function Datenschutz() {
  const { language } = useLanguage();

  const content = {
    DE: {
      title: "Datenschutzerklärung",
      sections: [
        {
          heading: "1. Datenschutz auf einen Blick",
          content: `
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie unsere Website besuchen.
            Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer Datenschutzerklärung.
          `,
        },
        {
          heading: "2. Allgemeine Hinweise und Pflichtinformationen",
          content: `
            Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
            Hinweis zur verantwortlichen Stelle: Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist Asset Star Human Resources und Vermögens GmbH, Seegefelder Weg 353, 13591 Berlin.
          `,
        },
        {
          heading: "3. Datenerfassung auf unserer Website",
          subsections: [
            {
              subheading: "Cookies",
              subcontent: `
                Diese Internetseiten verwenden teilweise so genannte Cookies. Cookies richten auf Ihrem Rechner keinen Schaden an und enthalten keine Viren. Cookies dienen dazu, unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen.
              `,
            },
            {
              subheading: "Server-Log-Dateien",
              subcontent: `
                Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind z.B. Browsertyp, Hostname des zugreifenden Rechners, und Uhrzeit der Serveranfrage.
              `,
            },
          ],
        },
        {
          heading: "4. Analyse-Tools und Werbung",
          content: `
            Auf unserer Website werden Tools wie AWStats und Google AdWords verwendet, um Nutzerdaten anonymisiert zu analysieren und unser Angebot zu verbessern.
          `,
        },
        {
          heading: "5. Plugins und Tools",
          content: `
            Wir nutzen Google Maps, um eine benutzerfreundliche Karte darzustellen. Diese Integration benötigt Ihre IP-Adresse und wird gemäß DSGVO verarbeitet.
          `,
        },
      ],
    },
    EN: {
      title: "Privacy Policy",
      sections: [
        {
          heading: "1. Data Protection at a Glance",
          content: `
            The following notes provide a simple overview of what happens to your personal data when you visit our website. Personal data includes all data that can identify you personally.
          `,
        },
        {
          heading: "2. General Information and Mandatory Details",
          content: `
            The operators of these pages take the protection of your personal data very seriously. We handle your personal data confidentially and in accordance with legal data protection regulations and this privacy policy.
            Responsible Party: Asset Star Human Resources and Assets GmbH, Seegefelder Weg 353, 13591 Berlin.
          `,
        },
        {
          heading: "3. Data Collection on Our Website",
          subsections: [
            {
              subheading: "Cookies",
              subcontent: `
                These web pages partially use so-called cookies. Cookies do not harm your computer and do not contain viruses. Cookies serve to make our offer more user-friendly, effective, and secure.
              `,
            },
            {
              subheading: "Server Log Files",
              subcontent: `
                The provider of these pages automatically collects and stores information in so-called server log files, which your browser automatically transmits to us. Examples include browser type, hostname of the accessing computer, and time of the server request.
              `,
            },
          ],
        },
        {
          heading: "4. Analysis Tools and Advertising",
          content: `
            Tools such as AWStats and Google AdWords are used on our website to analyze user data anonymously and improve our services.
          `,
        },
        {
          heading: "5. Plugins and Tools",
          content: `
            We use Google Maps to display a user-friendly map. This integration requires your IP address, processed under GDPR compliance.
          `,
        },
      ],
    },
  };

  const currentContent = content[language];

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">{currentContent.title}</h1>
      {currentContent.sections.map((section, index) => (
        <div key={index} className="bg-white p-6 rounded shadow mb-4">
          <h2 className="text-xl font-semibold mb-2">{section.heading}</h2>
          <p>{section.content}</p>
          {section.subsections &&
            section.subsections.map((sub, subIndex) => (
              <div key={subIndex} className="mt-4">
                <h3 className="text-lg font-semibold mb-2">{sub.subheading}</h3>
                <p>{sub.subcontent}</p>
              </div>
            ))}
        </div>
      ))}
    </div>
  );
}
