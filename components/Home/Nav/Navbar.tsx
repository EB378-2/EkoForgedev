"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import React, { useState, ChangeEvent } from "react";

const Navbar = ({
  children,
  locale,
}: {
  children: React.ReactNode;
  locale: string;
}) => {
  const t = useTranslations("NavbarLinks");
  const pathname = usePathname();
  const router = useRouter();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const currentLocale = pathname.split("/")[1] || locale || "en"; // Default to 'en'

  const handleLanguageChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value;
    if (newLocale === currentLocale) return;
    const path = pathname.split("/").slice(2).join("/");
    router.push(`/${newLocale}/${path}`);
  };

  return (
    <nav className="bg-black text-white w-screen max-h-16 md:max-h-24">
      <div className="max-w-7xl mx-auto px-6 sm:py-2 md:py-2 flex justify-between items-center">
        {/* Logo */}
        <Link href={`/${currentLocale}/`}>
          <Image
            src="/Logo.png" // Replace with the aircraft rental logo path
            width={60}
            height={20}
            alt="Southern Finland Aircraft Rentals"
            className="cursor-pointer"
          />
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-xl focus:outline-none focus:ring-2 focus:ring-yellow-500"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          ☰
        </button>

        {/* Desktop Links */}
        <div className="hidden lg:flex gap-8 items-center">
          <Link
            href={`/${currentLocale}/#aircraft-options`}
            className="text-md font-bold align-middle hover:text-transparent hover:bg-gradient-to-r from-blue-400 to-white transition-transform transform hover:scale-110"
          >
            {t("aircraftOptions")}
          </Link>
          <Link
            href={`/${currentLocale}/#contactsec`}
            className="text-md font-bold align-middle hover:text-transparent hover:bg-gradient-to-r from-blue-400 to-white transition-transform transform hover:scale-110"
          >
            {t("contact")}
          </Link>
          <Link
            href={`/${currentLocale}/protected/book`}
            className="text-md font-bold align-middle hover:text-transparent hover:bg-gradient-to-r from-blue-400 to-white transition-transform transform hover:scale-110"
          >
            {t("bookFlight")}
          </Link>
          <Link
            href={`/${currentLocale}/protected`}
            className="text-md font-bold align-middle hover:text-transparent hover:bg-gradient-to-r from-blue-400 to-white transition-transform transform hover:scale-110"
          >
            Protected
          </Link>
          {children}
          <select
            value={currentLocale}
            onChange={handleLanguageChange}
            className="rounded-md text-md px-4 py-2 bg-black border border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="en">EN</option>
            <option value="fi">FI</option>
          </select>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-blue-800 text-white px-6 py-4 space-y-4">
          <Link
            href={`/${currentLocale}/#aircraft-options`}
            className="block text-lg font-bold hover:text-transparent hover:bg-gradient-to-r from-blue-400 to-white"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {t("aircraftOptions")}
          </Link>
          <Link
            href={`/${currentLocale}/#testimonials`}
            className="block text-lg font-bold hover:text-transparent hover:bg-gradient-to-r from-blue-400 to-white"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {t("testimonials")}
          </Link>
          <Link
            href={`/${currentLocale}/#contactsec`}
            className="block text-lg font-bold hover:text-transparent hover:bg-gradient-to-r from-blue-400 to-white"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {t("contact")}
          </Link>
          <Link
            href={`/${currentLocale}/protected/book`}
            className="block text-lg font-bold hover:text-transparent hover:bg-gradient-to-r from-blue-400 to-white"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {t("bookFlight")}
          </Link>
          <Link
            href={`/${currentLocale}/protected`}
            className="block text-lg font-bold hover:text-transparent hover:bg-gradient-to-r from-blue-400 to-white"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Protected
          </Link>
          {children}
          <select
            value={currentLocale}
            onChange={handleLanguageChange}
            className="block rounded-md px-4 py-2 bg-black border border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="en">EN</option>
            <option value="fi">FI</option>
          </select>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
