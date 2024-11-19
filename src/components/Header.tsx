"use client";

import React from "react";
import { useLanguage } from "./LanguageProvider";
import Link from "next/link";

export default function Header() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <header className="flex justify-between items-center p-4 bg-gray-100">
      <div className="flex items-center">
        <Link href="/" className="flex items-center">
          {/* <img
            src="/placeholder-logo.png"
            alt="AMG Logo"
            className="mr-4 h-10"
          /> */}
          <span className="font-bold text-lg">
            {language === "DE"
              ? "AMG Personaldienstleistungen"
              : "AMG HR Services"}
          </span>
        </Link>
      </div>
      <button
        onClick={toggleLanguage}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        {language === "DE" ? "EN 🇬🇧" : "DE 🇩🇪"}
      </button>
    </header>
  );
}
