"use client";
import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

const ContactUs = () => {
  return (
    <>
      <Navbar /> <br /><br />
      <div className="max-w-screen-lg mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold uppercase">Get Help</h1>
          <input
            type="text"
            placeholder="What can we help you with?"
            className="mt-4 w-full max-w-md p-3 border border-gray-300 rounded-lg"
          />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div>
            <h2 className="text-xl font-bold mb-4">
              What payment options can I use on Nike orders?
            </h2>
            <p className="text-gray-600 mb-4">
              We want to make buying your favorite Nike shoes and gear fast and easy, and we accept the following payment options:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-6">
              <li>Visa, MasterCard, Diners Club, Discover, American Express, Elo, Boleto, Maestro</li>
              <li>Apple Pay</li>
              <li>
                Nike Members can save multiple debit or credit cards in their profile for faster checkout.
              </li>
            </ul>
            <div className="flex gap-4">
              <button className="bg-black text-white px-6 py-2 rounded-lg">Join Us</button>
              <button className="bg-black text-white px-6 py-2 rounded-lg">Shop Nike</button>
            </div>

            {/* FAQs */}
            <div className="mt-6">
              <h3 className="font-semibold mb-2">Does my card need international purchases enabled?</h3>
              <p className="text-gray-600">
                Yes, we recommend enabling your card to allow international purchases on your card.
              </p>
            </div>
            <div className="mt-4">
              <h3 className="font-semibold mb-2">Can I pay for my order with multiple methods?</h3>
              <p className="text-gray-600">
                No, we currently cannot accept payment using multiple payment methods.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div>
            <h2 className="text-xl font-bold mb-4">Contact Us</h2>
            <ul className="space-y-6 text-gray-700">
              <li>
                <p><strong>Phone:</strong> 0800 056 0360</p>
                <p>Products & Orders: 8 hours a day, 7 days a week</p>
              </li>
              <li>
                <p><strong>Email Support:</strong> support@nike.com</p>
                <p>We&apos;ll reply within five business days</p> {/* Fixed apostrophe */}
              </li>
              <li>
                <p><strong>Store Locator:</strong> Find Nike retail stores near you</p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ContactUs;
