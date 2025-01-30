"use client";
import React from "react";
import { useLanguage } from "./LanguageProvider";
import Link from "next/link";
import logo from "/public/AssetStar-logo.png";
import Image from "next/image";

export default function Header() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <header className="bg-gray-200 text-gray-800 py-4 sticky top-0 left-0 right-0 z-40">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Image src={logo} alt="" width={50} height={50} />
          <Link href="/">
            {language === "DE"
              ? "Asset Star Personaldienstleistungen"
              : "Asset Star HR Services"}
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <button
            className="text-gray-400 hover:text-white transition-colors"
            onClick={toggleLanguage}
          >
            {language === "DE" ? (
              <span>
                EN <span className="emoji">🇬🇧</span>
              </span>
            ) : (
              <span>
                DE <span className="emoji">🇩🇪</span>
              </span>
            )}
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
