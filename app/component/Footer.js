"use client";
import Link from "next/link";
import { 
  FaPhone, FaMapMarkerAlt, FaEnvelope, FaClock, 
  FaFacebook, FaTwitter, FaInstagram 
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-teal-900 text-white">
      {/* Wave divider at top */}
      <svg 
        className="w-full"
        viewBox="0 0 1440 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          fill="#ffffff" 
          d="M0,50 C150,150 350,0 500,50 C700,100 800,0 1000,50 C1200,100 1300,0 1440,50 L1440,100 L0,100 Z"
        />
      </svg>

      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* About Column */}
          <div>
            <h3 className="text-xl font-bold mb-4">Joy Health Cares</h3>
            <p className="mb-4">
              Providing quality healthcare services in Kolkata since 2001.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-teal-300">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="hover:text-teal-300">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="hover:text-teal-300">
                <FaInstagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-teal-300">Home</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-teal-300">About Us</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-teal-300">Services</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-teal-300">Contact</Link>
              </li>
              {/* <li>
                <Link href="/blog" className="hover:text-teal-300">Blog</Link>
              </li> */}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-3 flex-shrink-0" />
                <span>860/1, Sreenagar Main Road, Kolkata - 700094</span>
              </li>
              <li className="flex items-center">
                <FaPhone className="mr-3" />
                <div>
                  <a href="tel:9674998665" className="hover:text-teal-300 block">9674998665</a>
                  <a href="tel:8981617236" className="hover:text-teal-300 block">8981617236</a>
                </div>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-3" />
                <a href="mailto:joyhealthcareskol@gmail.com" className="hover:text-teal-300">
                  joyhealthcareskol@gmail.com
                </a>
              </li>
              <li className="flex items-center">
                <FaClock className="mr-3" />
                <span>24/7 Emergency Services</span>
              </li>
            </ul>
          </div>

          {/* Map */}
          <div>
            <h3 className="text-xl font-bold mb-4">Our Location</h3>
            <div className="h-48 rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.123456789012!2d88.12345678901234!3d22.123456789012345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDA3JzI0LjQiTiA4OMKwMDcnMjQuNiJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-teal-800 mt-8 pt-6 text-center">
          <p>
            © {new Date().getFullYear()} Joy Health Cares. All rights reserved. Website developed and maintained by Digital Exposure Online Services.
          </p>
        </div>
      </div>
    </footer>
  );
}
