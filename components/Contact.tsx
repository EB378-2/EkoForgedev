"use client";

import { useTranslations } from "next-intl";
import React, { FormEvent } from "react";

const Contact = ({ locale }: { locale: string }) => {
  const t = useTranslations("Contact");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "f1363286-3773-4366-a303-f62f033511e6", // Replace with your Web3Forms access key
          name: formData.get("name"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          company: formData.get("company"),
          reason: formData.get("reason"),
          source: formData.get("source"),
          website: formData.get("website"),
          budget: formData.get("budget"),
        }),
      });

      const result = await response.json();
      if (result.success) {
        alert("Thank you for your submission!");
      } else {
        alert("Submission failed. Please try again.");
      }
    } catch (error) {
      alert("An error occurred. Please try again.");
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div
      id="contactsec"
      className="bg-[url('/backgroundmain-2.png')] bg-cover mt-5 bg-fixed bg-center py-16 px-8 w-full overflow-hidden flex text-white"
    >
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Form */}
        <div className="bg-white bg-opacity-90 rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-center text-black mb-6">
            {t("title")}
          </h1>
          <form
            name="contact"
            className="space-y-4"
            onSubmit={handleSubmit}
            data-netlify="true"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder={t("name")}
                required
                className="w-full p-3 rounded border border-gray-300 text-black focus:outline-none focus:ring focus:ring-yellow-500"
              />
              <input
                type="email"
                name="email"
                placeholder={t("emailentry")}
                required
                className="w-full p-3 rounded border border-gray-300 text-black focus:outline-none focus:ring focus:ring-yellow-500"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="tel"
                name="phone"
                placeholder={t("phoneentry")}
                required
                className="w-full p-3 rounded border border-gray-300 text-black focus:outline-none focus:ring focus:ring-yellow-500"
              />
              <input
                type="text"
                name="company"
                placeholder={t("company")}
                className="w-full p-3 rounded border border-gray-300 text-black focus:outline-none focus:ring focus:ring-yellow-500"
              />
            </div>
            <input
              type="text"
              name="reason"
              placeholder={t("reason")}
              required
              className="w-full p-3 rounded border border-gray-300 text-black focus:outline-none focus:ring focus:ring-yellow-500"
            />
            <input
              type="text"
              name="source"
              placeholder={t("source")}
              className="w-full p-3 rounded border border-gray-300 text-black focus:outline-none focus:ring focus:ring-yellow-500"
            />
            <input
              type="text"
              name="website"
              placeholder={t("website")}
              className="w-full p-3 rounded border border-gray-300 text-black focus:outline-none focus:ring focus:ring-yellow-500"
            />
            <input
              type="text"
              name="budget"
              placeholder={t("budget")}
              className="w-full p-3 rounded border border-gray-300 text-black focus:outline-none focus:ring focus:ring-yellow-500"
            />
            <button
              type="submit"
              className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-3 rounded transition duration-200"
            >
              {t("send")}
            </button>
          </form>
        </div>

        {/* Quote and Contact Information */}
        <div className="flex flex-col justify-center items-center space-y-8 text-center lg:text-left">
          {/* Quote Section */}
          <div className="bg-black bg-opacity-70 text-white p-6 rounded-lg border border-gray-500 shadow-md">
            <h3 className="text-xl font-medium">
              {t("q1")}
              <br />
              {t("q2")}
            </h3>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold">{t("contact information")}</h2>
            <p className="mt-4">
              <strong>EkoForge Oy</strong>
              <br />
              {t("phone")}:{" "}
              <a
                href="tel:+358442413840"
                className="text-yellow-500 hover:underline"
              >
                +358 44 2413 840
              </a>
              <br />
              {t("email")}:{" "}
              <a
                href="mailto:ekoforge@gmail.com"
                className="text-yellow-500 hover:underline"
              >
                ekoforge@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;