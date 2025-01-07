"use client";

import { useState } from "react";
import { EB_Garamond } from "next/font/google";
import { Lora } from "next/font/google";
const ebGaramond = EB_Garamond({ weight: "800", subsets: ["latin"] });
const lora = Lora({ weight: "700", subsets: ["latin"] });
export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResponseMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setResponseMessage("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setResponseMessage("Have a good day!");
      }
    } catch (error) {
      console.error(error);
      setResponseMessage("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6  shadow-md rounded-lg space-y-6">
      <h2 className={`${ebGaramond.className} text-2xl font-bold text-yellow-500`}>Contact Us</h2>

      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
          Message
        </label>
        <textarea
          name="message"
          id="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          required
          className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        ></textarea>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className={`justify-center py-2 px-4 rounded-md text-white ${
          isSubmitting ? "bg-gray-400" : "bg-gradient-to-r from-yellow-400 via-pink-500 to-red-500 text-black px-4 py-2 rounded hover:bg-gradient-to-r hover:from-pink-500 hover:via-yellow-400 hover:to-red-500 transition"
        }`}
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>

      {responseMessage && (
        <p className="text-center text-sm mt-4 text-green-600">{responseMessage}</p>
      )}
    </form>
  );
}
