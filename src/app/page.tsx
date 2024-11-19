"use client";

import { useLanguage } from "@/components/LanguageProvider";
import React from "react";

export default function Home() {
  const { language } = useLanguage();

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">
        {language === "DE"
          ? "Willkommen bei AMG Personaldienstleistungen"
          : "Welcome to AMG HR Services"}
      </h1>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold mb-2">
            {language === "DE" ? "Unsere Dienstleistungen" : "Our Services"}
          </h2>
          <p>
            {language === "DE"
              ? "Wir bieten umfassende Personaldienstleistungen."
              : "We provide comprehensive HR services."}
          </p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold mb-2">
            {language === "DE" ? "Über Uns" : "About Us"}
          </h2>
          <p>
            {language === "DE"
              ? "AMG ist Ihr zuverlässiger Partner in Personalfragen."
              : "AMG is your reliable partner in HR matters."}
          </p>
        </div>
      </div>
    </div>
  );
}
