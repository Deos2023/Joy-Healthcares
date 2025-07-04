"use client";
import { useState } from "react";
import Image from "next/image";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaClock } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    service: ""
  });

  const services = [
    "Nursing Care",
    "Aya Services",
    "Equipment Rental",
    "Equipment Sales",
    "Post-Hospitalization Care",
    "Elderly Care"
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const sendWhatsAppMessage = () => {
    const { name, phone, email, message, service } = formData;
    const text = `New Contact Request:%0A%0AName: ${name}%0APhone: ${phone}%0AEmail: ${email}%0AService Needed: ${service}%0AMessage: ${message}`;
    window.open(`https://wa.me/919674998665?text=${text}`, '_blank');
  };

  return (
    <div className="relative w-full overflow-hidden">
      {/* Hero Section */}
      <div className="relative w-full h-96">
        {/* Hero Image Background */}
        <div className="absolute top-0 left-0 w-full h-full bg-teal-800">
          {/* <Image
            src="/contact-hero.jpg"
            alt="Contact Joy Health Cares"
            fill
            className="object-cover"
          /> */}
        </div>

        {/* Content Wrapper */}
        <div className="relative z-10 flex flex-col justify-center items-center h-full w-full px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Contact Us
          </h1>
          <p className="text-white text-xl max-w-2xl">
            Reach out for healthcare solutions tailored to your needs
          </p>
        </div>

        {/* Wavey Bottom */}
        <svg
          className="absolute bottom-0 left-0 w-full"
          viewBox="0 0 1440 150"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#ffffff"
            d="M0,0 C360,150 1080,0 1440,150 L1440,150 L0,150 Z"
          />
        </svg>
      </div>

      {/* Contact Details & Map Section */}
      <div className="bg-white py-20 px-8 md:px-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-teal-800 mb-12 text-center">
            Get In Touch
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-teal-100 p-3 rounded-full mr-4">
                  <FaMapMarkerAlt className="text-teal-700 text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-teal-800 mb-2">Our Location</h3>
                  <p className="text-gray-700">
                    860/1, Sreenagar Main Road, Sreenagar West,<br />
                    Srinagar, Panchasayar, Kolkata - 700094
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-teal-100 p-3 rounded-full mr-4">
                  <FaPhone className="text-teal-700 text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-teal-800 mb-2">Phone Numbers</h3>
                  <p className="text-gray-700 mb-1">
                    <a href="tel:9674998665" className="hover:text-teal-700">9674998665</a>
                  </p>
                  <p className="text-gray-700">
                    <a href="tel:8981617236" className="hover:text-teal-700">8981617236</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-teal-100 p-3 rounded-full mr-4">
                  <FaEnvelope className="text-teal-700 text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-teal-800 mb-2">Email Address</h3>
                  <p className="text-gray-700">
                    <a href="mailto:joyhealthcareskol@gmail.com" className="hover:text-teal-700">
                      joyhealthcareskol@gmail.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-teal-100 p-3 rounded-full mr-4">
                  <FaClock className="text-teal-700 text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-teal-800 mb-2">Business Hours</h3>
                  <p className="text-gray-700 mb-1">
                    Monday - Sunday: 24/7 Emergency Services
                  </p>
                  <p className="text-gray-700">
                    Office Hours: 8:00 AM - 8:00 PM
                  </p>
                </div>
              </div>

              <div className="pt-4">
                <h3 className="text-xl font-bold text-teal-800 mb-4">Connect With Us</h3>
                <div className="flex space-x-4">
                  <a 
                    href="https://wa.me/919674998665" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-green-500 text-white p-3 rounded-full hover:bg-green-600"
                  >
                    <FaWhatsapp className="text-2xl" />
                  </a>
                  {/* Add more social icons as needed */}
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="h-full min-h-80 rounded-lg overflow-hidden shadow-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.123456789012!2d88.12345678901234!3d22.123456789012345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDA3JzI0LjQiTiA4OMKwMDcnMjQuNiJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="min-h-80"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="bg-gray-100 py-20 px-8 md:px-20 relative">
        <svg
          className="absolute top-0 left-0 w-full rotate-180"
          viewBox="0 0 1440 150"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#ffffff"
            d="M0,0 C360,150 1080,0 1440,150 L1440,150 L0,150 Z"
          />
        </svg>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-bold text-teal-800 mb-6">Send Us a Message</h2>
            <p className="text-gray-700 mb-8">
              Have questions about our services? Fill out the form below and we'll get back to you as soon as possible.
            </p>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-teal-100 p-3 rounded-full mr-4">
                  <FaWhatsapp className="text-teal-700 text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-teal-800 mb-2">Quick WhatsApp Contact</h3>
                  <p className="text-gray-700 mb-4">
                    Prefer to chat directly? Click below to message us on WhatsApp.
                  </p>
                  <a 
                    href="https://wa.me/919674998665" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-green-500 text-white px-6 py-3 rounded font-semibold hover:bg-green-600 inline-flex items-center"
                  >
                    <FaWhatsapp className="mr-2" /> Chat Now
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">Full Name*</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-gray-700 mb-2">Phone Number*</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>
              
              <div>
                <label htmlFor="service" className="block text-gray-700 mb-2">Service Needed</label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
                >
                  <option value="">Select a service</option>
                  {services.map((service, index) => (
                    <option key={index} value={service}>{service}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2">Your Message*</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
                  required
                ></textarea>
              </div>
              
              <button
                onClick={sendWhatsAppMessage}
                className="bg-teal-700 text-white px-6 py-3 rounded hover:bg-teal-800 font-semibold w-full flex items-center justify-center"
              >
                <FaWhatsapp className="mr-2" /> Send via WhatsApp
              </button>
            </div>
          </div>
        </div>
        <svg
          className="absolute bottom-0 left-0 w-full"
          viewBox="0 0 1440 150"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#ffffff"
            d="M0,0 C360,150 1080,0 1440,150 L1440,150 L0,150 Z"
          />
        </svg>
      </div>

      {/* CTA Section */}
      <div className="bg-teal-800 text-white py-16 px-8 text-center">
        <h2 className="text-3xl font-bold mb-6">Need Immediate Assistance?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Call us now for emergency healthcare services or equipment needs.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a 
            href="tel:9674998665" 
            className="bg-white text-teal-800 px-8 py-3 rounded font-semibold hover:bg-gray-100 transition-colors"
          >
            Call Now: 9674998665
          </a>
          <a 
            href="tel:8981617236" 
            className="bg-teal-700 text-white px-8 py-3 rounded font-semibold hover:bg-teal-600 transition-colors"
          >
            Alternate: 8981617236
          </a>
        </div>
      </div>
    </div>
  );
}