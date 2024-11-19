"use client";
import React from "react";
import { useLanguage } from "./LanguageProvider";
import Link from "next/link";

export default function Header() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <header className="bg-gray-800 text-white py-4 sticky top-0 left-0 right-0 z-20">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <Link href="/">
            {language === "DE"
              ? "AMG Personaldienstleistungen"
              : "AMG HR Services"}
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <button
            className="text-gray-400 hover:text-white transition-colors"
            onClick={toggleLanguage}
          >
            {language === "DE" ? "EN 🇬🇧" : "DE 🇩🇪"}
          </button>
          <Link
            href="/contact"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
          >
            {language === "DE" ? "Kontaktieren Sie uns" : "Contact Us"}
          </Link>
        </div>
      </div>
    </header>
  );
}
