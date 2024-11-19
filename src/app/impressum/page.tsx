"use client";

import { useLanguage } from "@/components/LanguageProvider";
import React from "react";

export default function Impressum() {
  const { language } = useLanguage();

  const content = {
    DE: {
      title: "Impressum",
      companyDetails: "Angaben gemäß § 5 TMG",
      companyName: "AMG HR – AMG Human Resources und Vermögens GmbH",
      address: "Seegefelder Weg 353, 13591 Berlin",
      representedBy: "Vertreten durch: Hasan Ali Awan",
      contact: "Kontakt:",
      phone: "Telefon: +49 (0) 30 – 30837491",
      mobile: "Mobil: +49 (0) 176 84888038",
      email: "E-Mail: awan@amghr.de",
      registerDetails: "Registereintrag:",
      registerCourt: "Eintragung im Handelsregister",
      court: "Registergericht: Amtsgericht Berlin Charlottenburg",
      registerNumber: "Registernummer: HRB 93778 B",
      vat: "Umsatzsteuer:",
      vatDetails:
        "Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:",
      vatNumber: "DE 238442900",
      supervisoryAuthority: "Aufsichtsbehörde:",
      supervisoryDetails: "Bundesagentur für Arbeit Kiel",
      supervisoryAddress: "Adolf-Westphal-Str. 2, 24143 Kiel",
      supervisoryLink:
        "https://con.arbeitsagentur.de/prod/apok/service-vor-ort/agentur-fuer-arbeit-kieler-umland-kiel.html",
      disputeResolution: "Streitschlichtung",
      disputeText:
        "Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: https://ec.europa.eu/consumers/odr. Unsere E-Mail-Adresse finden Sie oben im Impressum.",
      disputeObligation:
        "Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.",
      liabilityContentTitle: "Haftung für Inhalte",
      liabilityContentText: `Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.`,
      liabilityLinksTitle: "Haftung für Links",
      liabilityLinksText: `Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.`,
    },
    EN: {
      title: "Legal Notice",
      companyDetails: "According to Section 5 TMG",
      companyName: "AMG HR – AMG Human Resources and Assets GmbH",
      address: "Seegefelder Weg 353, 13591 Berlin",
      representedBy: "Represented by: Hasan Ali Awan",
      contact: "Contact:",
      phone: "Phone: +49 (0) 30 – 30837491",
      mobile: "Mobile: +49 (0) 176 84888038",
      email: "Email: awan@amghr.de",
      registerDetails: "Commercial Register Entry:",
      registerCourt: "Entry in the commercial register",
      court: "Register Court: District Court of Berlin Charlottenburg",
      registerNumber: "Register Number: HRB 93778 B",
      vat: "VAT:",
      vatDetails:
        "VAT identification number according to Section 27 a of the VAT Act:",
      vatNumber: "DE 238442900",
      supervisoryAuthority: "Supervisory Authority:",
      supervisoryDetails: "Federal Employment Agency Kiel",
      supervisoryAddress: "Adolf-Westphal-Str. 2, 24143 Kiel",
      supervisoryLink:
        "https://con.arbeitsagentur.de/prod/apok/service-vor-ort/agentur-fuer-arbeit-kieler-umland-kiel.html",
      disputeResolution: "Dispute Resolution",
      disputeText:
        "The European Commission provides a platform for online dispute resolution (OS): https://ec.europa.eu/consumers/odr. You can find our email address in the legal notice above.",
      disputeObligation:
        "We are not willing or obliged to participate in dispute resolution procedures before a consumer arbitration board.",
      liabilityContentTitle: "Liability for Content",
      liabilityContentText: `As a service provider, we are responsible for our own content on these pages in accordance with Section 7(1) of the German Telemedia Act (TMG). However, pursuant to Sections 8 to 10 of the TMG, we are not obligated to monitor transmitted or stored external information or investigate circumstances indicating illegal activity. Obligations to remove or block the use of information under general laws remain unaffected. Liability in this regard is, however, only possible from the time of knowledge of a specific infringement. Upon becoming aware of such violations, we will remove the content immediately.`,
      liabilityLinksTitle: "Liability for Links",
      liabilityLinksText: `Our offer contains links to external third-party websites, over whose content we have no influence. Therefore, we cannot accept any liability for these external contents. The respective provider or operator of the pages is always responsible for the contents of the linked pages. The linked pages were checked for possible legal violations at the time of linking. Illegal content was not recognizable at the time of linking.`,
    },
  };

  const currentContent = content[language];

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{currentContent.title}</h1>

      {/* Company Details */}
      <div className="bg-white p-6 rounded shadow mb-4">
        <h2 className="text-xl font-semibold mb-2">
          {currentContent.companyDetails}
        </h2>
        <p>{currentContent.companyName}</p>
        <p>{currentContent.address}</p>
        <p>{currentContent.representedBy}</p>
        <h3 className="font-semibold mt-4">{currentContent.contact}</h3>
        <p>{currentContent.phone}</p>
        <p>{currentContent.mobile}</p>
        <p>{currentContent.email}</p>
      </div>

      {/* Register Details */}
      <div className="bg-white p-6 rounded shadow mb-4">
        <h2 className="text-xl font-semibold mb-2">
          {currentContent.registerDetails}
        </h2>
        <p>{currentContent.registerCourt}</p>
        <p>{currentContent.court}</p>
        <p>{currentContent.registerNumber}</p>
      </div>

      {/* Liability for Content */}
      <div className="bg-white p-6 rounded shadow mb-4">
        <h2 className="text-xl font-semibold mb-2">
          {currentContent.liabilityContentTitle}
        </h2>
        <p>{currentContent.liabilityContentText}</p>
      </div>

      {/* Liability for Links */}
      <div className="bg-white p-6 rounded shadow mb-4">
        <h2 className="text-xl font-semibold mb-2">
          {currentContent.liabilityLinksTitle}
        </h2>
        <p>{currentContent.liabilityLinksText}</p>
      </div>

      {/* Dispute Resolution */}
      <div className="bg-white p-6 rounded shadow mb-4">
        <h2 className="text-xl font-semibold mb-2">
          {currentContent.disputeResolution}
        </h2>
        <p>{currentContent.disputeText}</p>
        <p>{currentContent.disputeObligation}</p>
        <a
          href={currentContent.supervisoryLink}
          className="text-blue-600 underline"
        >
          {currentContent.supervisoryLink}
        </a>
      </div>
    </div>
  );
}
