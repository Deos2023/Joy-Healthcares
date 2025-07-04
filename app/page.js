"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Stethoscope, Baby, HeartPulse } from "lucide-react"; // Lucide icons
export default function Home() {
  const titles = [
    "We Provide Best Healthcare",
    "Your Health is Our Priority",
    "Quality Care for Everyone",
  ];
  const [currentTitle, setCurrentTitle] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: ""
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const sendWhatsAppMessage = () => {
    const { name, phone, message } = formData;
    const text = `Name: ${name}%0APhone: ${phone}%0AMessage: ${message}`;
    window.open(`https://wa.me/919674998665?text=${text}`, '_blank');
  };

  return (
    <div className="relative w-full overflow-hidden">
      {/* Hero Section */}
      <div className="relative w-full h-screen">
        {/* Hero Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/vid1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-teal-800/20"></div>

        {/* Content Wrapper */}
        <div className="relative z-10 flex flex-col md:flex-row justify-center items-center h-full w-full px-8 md:px-20 gap-12">
          {/* Logo */}
          <div className="flex-shrink-0 mb-8 md:mb-0">
            <Image
              src="/logo.png"
              alt="Logo"
              width={320}
              height={100}
              priority
            />
          </div>

          {/* Text Content */}
          <div className="text-white max-w-xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 transition-all duration-500">
              {titles[currentTitle]}
            </h1>
            <p className="mb-6 text-lg">
              We are committed to providing exceptional medical care and ensuring your well-being.
            </p>
            <button className="bg-white text-teal-700 px-6 py-3 rounded hover:bg-gray-100 font-semibold">
              Read More
            </button>
          </div>
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

      {/* About Us Section */}
      <div className="bg-white py-20 px-8 md:px-20 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-teal-800 mb-12 text-center">About Joy Health Cares</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-700 mb-6">
                Established in 2001, Joy Health Cares has been a trusted name in Kolkata's healthcare sector for over two decades. We specialize in providing comprehensive healthcare solutions to meet all your medical needs.
              </p>
              <p className="text-gray-700 mb-6">
                Our team of dedicated professionals is committed to delivering exceptional care with compassion and expertise. We understand that every patient has unique needs, and we tailor our services accordingly.
              </p>
              <p className="text-gray-700">
                Located in the heart of Kolkata, we serve clients across the city with reliable and affordable healthcare services.
              </p>
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden shadow-xl">
              <Image 
                src="/img2.jpg" 
                alt="About Joy Health Cares"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Our Departments Section */}
      <div className="bg-teal-100 py-20 px-8 md:px-20 relative">
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
        <div className="max-w-6xl my-10 mx-auto">
          <h2 className="text-4xl font-bold text-teal-800 mb-12 text-center">Our Departments</h2>
          

<div className="grid md:grid-cols-3 gap-8">
  <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
    <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
      <Stethoscope className="text-teal-800 w-8 h-8" />
    </div>
    <h3 className="text-xl font-bold text-teal-800 mb-3">Nursing Services</h3>
    <p className="text-gray-700">
      Professional nursing care at your doorstep. Our trained nurses provide compassionate care for patients of all ages.
    </p>
  </div>

  <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
    <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
      <Baby className="text-teal-800 w-8 h-8" />
    </div>
    <h3 className="text-xl font-bold text-teal-800 mb-3">Aya Services</h3>
    <p className="text-gray-700">
      Experienced and trustworthy ayas for patient care, newborn care, and elderly assistance at home or hospital.
    </p>
  </div>

  <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
    <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
      <HeartPulse className="text-teal-800 w-8 h-8" />
    </div>
    <h3 className="text-xl font-bold text-teal-800 mb-3">Medical Equipment</h3>
    <p className="text-gray-700">
      High-quality medical equipment for sale or rent including wheelchairs, hospital beds, oxygen cylinders and more.
    </p>
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

      {/* Our Services Section */}
      <div className="bg-white py-20 px-8 md:px-20 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-teal-800 mb-12 text-center">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="border border-teal-100 rounded-lg p-6 hover:bg-teal-50 transition-all">
              <h3 className="text-xl font-bold text-teal-800 mb-3">24/7 Nursing Care</h3>
              <p className="text-gray-700">
                Round-the-clock nursing services for post-operative care, chronic illness management, and elderly care.
              </p>
            </div>
            <div className="border border-teal-100 rounded-lg p-6 hover:bg-teal-50 transition-all">
              <h3 className="text-xl font-bold text-teal-800 mb-3">Trained Ayas</h3>
              <p className="text-gray-700">
                Certified ayas for maternity care, newborn care, and patient assistance in hospitals and homes.
              </p>
            </div>
            <div className="border border-teal-100 rounded-lg p-6 hover:bg-teal-50 transition-all">
              <h3 className="text-xl font-bold text-teal-800 mb-3">Medical Equipment Rental</h3>
              <p className="text-gray-700">
                Affordable rental options for medical equipment with delivery, setup, and maintenance support.
              </p>
            </div>
            <div className="border border-teal-100 rounded-lg p-6 hover:bg-teal-50 transition-all">
              <h3 className="text-xl font-bold text-teal-800 mb-3">Equipment Sales</h3>
              <p className="text-gray-700">
                High-quality medical equipment including wheelchairs, walkers, hospital beds, and more.
              </p>
            </div>
            <div className="border border-teal-100 rounded-lg p-6 hover:bg-teal-50 transition-all">
              <h3 className="text-xl font-bold text-teal-800 mb-3">Post-Hospitalization Care</h3>
              <p className="text-gray-700">
                Comprehensive care plans for patients recovering from surgery or hospitalization.
              </p>
            </div>
            <div className="border border-teal-100 rounded-lg p-6 hover:bg-teal-50 transition-all">
              <h3 className="text-xl font-bold text-teal-800 mb-3">Elderly Care Services</h3>
              <p className="text-gray-700">
                Specialized care for senior citizens including companionship, medication management, and daily assistance.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <h2 className="text-4xl font-bold  bg-white text-neutral-700 text-center">Why Choose Joy Health Cares</h2>
      <div
  className="bg-teal-800 text-white py-20 px-8 md:px-20 relative text-center bg-cover bg-fixed"
  style={{ backgroundImage: "url('/img1.jpg')" }}
>
  {/* Light transparent overlay BEHIND content */}
  <div className="absolute inset-0 bg-black/40 z-0 pointer-events-none"></div>

  <svg
    className="absolute top-0 left-0 w-full rotate-180 z-10"
    viewBox="0 0 1440 150"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill="#ffffff"
      d="M0,0 C360,150 1080,0 1440,150 L1440,150 L0,150 Z"
    />
  </svg>

  <div className="relative z-10 max-w-6xl my-10 mx-auto">
    
    <div className="grid md:grid-cols-3 gap-8">
      <div className="text-center p-6">
        <div className="bg-teal-700 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-3xl">20+</span>
        </div>
        <h3 className="text-xl font-bold mb-2">Years of Experience</h3>
        <p>Trusted healthcare provider since 2001 with thousands of satisfied clients.</p>
      </div>
      <div className="text-center p-6">
        <div className="bg-teal-700 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-3xl">500+</span>
        </div>
        <h3 className="text-xl font-bold mb-2">Trained Professionals</h3>
        <p>Highly skilled nurses and ayas with proper certification and training.</p>
      </div>
      <div className="text-center p-6">
        <div className="bg-teal-700 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-3xl">24/7</span>
        </div>
        <h3 className="text-xl font-bold mb-2">Availability</h3>
        <p>Emergency services available round the clock for urgent requirements.</p>
      </div>
    </div>
    <div className="mt-12 grid md:grid-cols-2 gap-8">
      <div className="bg-teal-900 p-8 rounded-lg">
        <h3 className="text-xl font-bold mb-4">Our Mission</h3>
        <p>
          To provide compassionate, reliable, and affordable healthcare services that enhance the quality of life for our patients and their families.
        </p>
      </div>
      <div className="bg-teal-900 p-8 rounded-lg">
        <h3 className="text-xl font-bold mb-4">Our Vision</h3>
        <p>
          To be Kolkata's most trusted healthcare service provider by setting benchmarks in patient care and medical support services.
        </p>
      </div>
    </div>
  </div>

  <svg
    className="absolute bottom-0 left-0 w-full z-10"
    viewBox="0 0 1440 150"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill="#ffffff"
      d="M0,0 C360,150 1080,0 1440,150 L1440,150 L0,150 Z"
    />
  </svg>
</div>


      {/* Testimonials Section */}
      <div className="bg-white text-black py-20 px-8 md:px-20 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-teal-800 mb-12 text-center">What Our Clients Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="border border-gray-200 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center text-teal-800 font-bold mr-4">AS</div>
                <div>
                  <h4 className="font-bold">Amit Sharma</h4>
                  <div className="flex text-yellow-400">
                    ★ ★ ★ ★ ★
                  </div>
                </div>
              </div>
              <p className="text-gray-700">
                "Joy Health Cares provided excellent nursing care for my mother after her surgery. The nurse was professional, punctual and very caring. Highly recommended!"
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center text-teal-800 font-bold mr-4">PD</div>
                <div>
                  <h4 className="font-bold">Priya Das</h4>
                  <div className="flex text-yellow-400">
                    ★ ★ ★ ★ ★
                  </div>
                </div>
              </div>
              <p className="text-gray-700">
                "We rented a hospital bed and wheelchair for 3 months. The equipment was in perfect condition and their delivery and pickup service was very convenient."
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center text-teal-800 font-bold mr-4">RK</div>
                <div>
                  <h4 className="font-bold">Rajiv Kumar</h4>
                  <div className="flex text-yellow-400">
                    ★ ★ ★ ★ ☆
                  </div>
                </div>
              </div>
              <p className="text-gray-700">
                "Their aya service helped us tremendously when my wife delivered our baby. The aya was experienced and took great care of both mother and child."
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
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
            <h2 className="text-4xl font-bold text-teal-800 mb-6">Contact Us</h2>
            <div className="mb-8">
              <h3 className="text-xl font-bold text-teal-800 mb-3">Address</h3>
              <p className="text-gray-700">
                860/1, Sreenagar Main Road, Sreenagar West, Srinagar, Panchasayar, Kolkata - 700094
              </p>
            </div>
            <div className="mb-8">
              <h3 className="text-xl font-bold text-teal-800 mb-3">Contact Information</h3>
              <p className="text-gray-700 mb-2">
                <strong>Phone:</strong> 9674998665 / 8981617236
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Email:</strong> joyhealthcareskol@gmail.com
              </p>
              <p className="text-gray-700">
                <strong>Website:</strong> joyhealthcares.com
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-teal-800 mb-3">Business Hours</h3>
              <p className="text-gray-700">
                Monday - Sunday: 24/7 Emergency Services Available
              </p>
            </div>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-teal-800 mb-6">Send Us a Message</h3>
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">Your Name</label>
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
                <label htmlFor="phone" className="block text-gray-700 mb-2">Phone Number</label>
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
                <label htmlFor="message" className="block text-gray-700 mb-2">Your Message</label>
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
                className="bg-teal-700 text-white px-6 py-3 rounded hover:bg-teal-800 font-semibold w-full"
              >
                Send via WhatsApp
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
        <h2 className="text-3xl font-bold mb-6">Need Healthcare Services?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Contact us today for reliable and compassionate healthcare solutions tailored to your needs.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a 
            href="tel:9674998665" 
            className="bg-white text-teal-800 px-8 py-3 rounded font-semibold hover:bg-gray-100 transition-colors"
          >
            Call Now: 9674998665
          </a>
          <a 
            href="https://wa.me/919674998665" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-green-500 text-white px-8 py-3 rounded font-semibold hover:bg-green-600 transition-colors"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}