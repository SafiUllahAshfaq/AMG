"use client";

import { useLanguage } from "@/components/LanguageProvider";
import React from "react";

export default function Impressum() {
  const { language } = useLanguage();

  const content = {
    DE: {
      title: "Impressum",
      companyDetails: "Unternehmensangaben",
      companyName: "AMG HR – AMG Human Resources und Vermögens GmbH",
      address: "Seegefelder Weg 353, 13591 Berlin",
      phone: "Tel: +49 (0) 30 – 30837491",
      email: "E-Mail: awan@amghr.de",
      liabilityContentTitle: "Haftung für Inhalte",
      liabilityContentText: `Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.`,
      // Add other content sections in German...
    },
    EN: {
      title: "Legal Notice",
      companyDetails: "Company Details",
      companyName: "AMG HR – AMG Human Resources and Assets GmbH",
      address: "Seegefelder Weg 353, 13591 Berlin",
      phone: "Phone: +49 (0) 30 – 30837491",
      email: "Email: awan@amghr.de",
      liabilityContentTitle: "Liability for Content",
      liabilityContentText: `As a service provider, we are responsible for our own content on these pages in accordance with Section 7(1) of the German Telemedia Act (TMG). However, pursuant to Sections 8 to 10 of the TMG, we are not obligated to monitor transmitted or stored external information or investigate circumstances indicating illegal activity. Obligations to remove or block the use of information under general laws remain unaffected. Liability in this regard is, however, only possible from the time of knowledge of a specific infringement. Upon becoming aware of such violations, we will remove the content immediately.`,
      // Add other content sections in English...
    },
  };

  const currentContent = content[language];

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{currentContent.title}</h1>
      <div className="bg-white p-6 rounded shadow">
        <h2 className="text-xl font-semibold mb-2">
          {currentContent.companyDetails}
        </h2>
        <p>{currentContent.companyName}</p>
        <p>{currentContent.address}</p>
        <p>{currentContent.phone}</p>
        <p>{currentContent.email}</p>
      </div>
      <div className="bg-white p-6 rounded shadow mt-4">
        <h2 className="text-xl font-semibold mb-2">
          {currentContent.liabilityContentTitle}
        </h2>
        <p>{currentContent.liabilityContentText}</p>
      </div>
      {/* Add other sections dynamically as needed */}
    </div>
  );
}
