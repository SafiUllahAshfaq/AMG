"use client";

import React from "react";
import { useLanguage } from "./LanguageProvider";
import Link from "next/link";

export default function Footer() {
  const { language } = useLanguage();

  return (
    <footer className="bg-gray-200 p-6 text-sm">
      <div className="container mx-auto grid md:grid-cols-2 gap-4">
        <div>
          <h3 className="font-bold mb-2">
            {language === "DE" ? "Wichtige Links" : "Important Links"}
          </h3>
          <ul>
            <li>
              <Link href="/impressum" className="text-blue-600">
                {language === "DE" ? "Impressum" : "Legal Notice"}
              </Link>
            </li>
            <li>
              <Link href="/datenschutzerklaerung" className="text-blue-600">
                {language === "DE" ? "Datenschutzerklärung" : "Privacy Policy"}
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-2">
            {language === "DE" ? "Kontakt" : "Contact"}
          </h3>
          <p>Asset Star HR – Asset Star Human Resources</p>
          <p>Seegefelder Weg 353, 13591 Berlin</p>
          <p>Tel: +49 (0) 30 – 30837491</p>
        </div>
      </div>
    </footer>
  );
}
