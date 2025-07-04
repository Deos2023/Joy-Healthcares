"use client";
import Image from "next/image";
import { Target, Eye, HeartHandshake } from "lucide-react";

export default function About() {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Hero Section */}
      <div className="relative w-full h-96">
        {/* Hero Image Background */}
        <div className="absolute top-0 left-0 w-full h-full bg-teal-800">
          {/* <Image
            src="/about-hero.jpg"
            alt="Joy Health Cares Team"
            fill
            className="object-cover"
          /> */}
        </div>

        {/* Content Wrapper */}
        <div className="relative z-10 flex flex-col justify-center items-center h-full w-full px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About Joy Health Cares
          </h1>
          <p className="text-white text-xl max-w-2xl">
            Providing compassionate healthcare services in Kolkata since 2001
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

      {/* Our Story Section */}
      <div className="bg-white py-20 px-8 md:px-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-teal-800 mb-12 text-center">
            Our Story
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <p className="text-gray-700 mb-6">
                Founded in 2001, Joy Health Cares began as a small nursing service provider in Kolkata with a simple mission: to deliver quality healthcare services with compassion and professionalism.
              </p>
              <p className="text-gray-700 mb-6">
                What started as a modest operation with just a handful of nurses has grown into one of Kolkata's most trusted healthcare service providers, offering comprehensive solutions including nursing care, aya services, and medical equipment rental.
              </p>
              <p className="text-gray-700">
                Over the past two decades, we've served thousands of families, building lasting relationships based on trust, reliability, and exceptional service.
              </p>
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden shadow-xl order-1 md:order-2">
              <Image 
                src="/img3.jpg" 
                alt="Joy Health Cares Founder"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Values Section */}
      

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

  <div className="max-w-6xl mx-auto">
    <h2 className="text-4xl font-bold text-teal-800 mb-12 text-center">
      Our Mission & Values
    </h2>
    <div className="grid md:grid-cols-3 gap-8">
      {/* Mission Card */}
      <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
        <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
          <Target className="text-teal-800 w-8 h-8" />
        </div>
        <h3 className="text-xl font-bold text-teal-800 mb-3 text-center">Mission</h3>
        <p className="text-gray-700 text-center">
          To provide accessible, compassionate, and professional healthcare services that improve quality of life for our patients and their families.
        </p>
      </div>

      {/* Vision Card */}
      <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
        <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
          <Eye className="text-teal-800 w-8 h-8" />
        </div>
        <h3 className="text-xl font-bold text-teal-800 mb-3 text-center">Vision</h3>
        <p className="text-gray-700 text-center">
          To be Kolkata's most trusted healthcare service provider through innovation, compassion, and unwavering commitment to patient care.
        </p>
      </div>

      {/* Core Values Card */}
      <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
        <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
          <HeartHandshake className="text-teal-800 w-8 h-8" />
        </div>
        <h3 className="text-xl font-bold text-teal-800 mb-3 text-center">Core Values</h3>
        <ul className="text-gray-700 space-y-2 text-center">
          <li>• Compassion</li>
          <li>• Integrity</li>
          <li>• Professionalism</li>
          <li>• Reliability</li>
        </ul>
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


      {/* Team Section */}
      <div className="bg-white py-20 px-8 md:px-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-teal-800 mb-12 text-center">
            Our Team
          </h2>
          <p className="text-gray-700 text-center max-w-3xl mx-auto mb-12">
            Our strength lies in our team of dedicated healthcare professionals who bring expertise, compassion, and commitment to every patient interaction.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-48 h-48 rounded-full overflow-hidden mx-auto mb-4 border-4 border-teal-100">
                <Image 
                  src="/nurse-team.jpg" 
                  alt="Nursing Team"
                  width={192}
                  height={192}
                  className="object-cover h-full"
                />
              </div>
              <h3 className="text-xl font-bold text-teal-800 mb-2">Nursing Staff</h3>
              <p className="text-gray-700">
                Certified nurses with specialized training in post-operative care, elderly care, and chronic condition management.
              </p>
            </div>
            <div className="text-center">
              <div className="w-48 h-48 rounded-full overflow-hidden mx-auto mb-4 border-4 border-teal-100">
                <Image 
                  src="/aya-team.jpg" 
                  alt="Aya Team"
                  width={192}
                  height={192}
                  className="object-cover h-full"
                />
              </div>
              <h3 className="text-xl font-bold text-teal-800 mb-2">Aya Professionals</h3>
              <p className="text-gray-700">
                Experienced ayas trained in newborn care, maternity assistance, and patient support services.
              </p>
            </div>
            <div className="text-center">
              <div className="w-48 h-48 rounded-full overflow-hidden mx-auto mb-4 border-4 border-teal-100">
                <Image 
                  src="/support-team.jpg" 
                  alt="Support Team"
                  width={192}
                  height={192}
                  className="object-cover h-full"
                />
              </div>
              <h3 className="text-xl font-bold text-teal-800 mb-2">Support Staff</h3>
              <p className="text-gray-700">
                Our administrative and logistics team ensures smooth operations and timely service delivery.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Community Impact Section */}
      <div className="bg-teal-800 text-white py-20 px-8 md:px-20 relative">
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
        <div className="max-w-6xl mb-8 mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Community Impact
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="mb-6 text-lg">
                At Joy Health Cares, we believe in giving back to the community that has supported us for over two decades.
              </p>
              <p className="mb-6 text-lg">
                We regularly organize health camps, provide subsidized services to underprivileged families, and participate in community health awareness programs.
              </p>
              <p className="text-lg">
                Our team volunteers time and resources to make quality healthcare accessible to all sections of society.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-teal-700 p-6 rounded-lg text-center">
                <div className="text-3xl font-bold mb-2">50+</div>
                <div>Health Camps Organized</div>
              </div>
              <div className="bg-teal-700 p-6 rounded-lg text-center">
                <div className="text-3xl font-bold mb-2">200+</div>
                <div>Families Assisted Annually</div>
              </div>
              <div className="bg-teal-700 p-6 rounded-lg text-center">
                <div className="text-3xl font-bold mb-2">1000+</div>
                <div>Free Checkups Conducted</div>
              </div>
              <div className="bg-teal-700 p-6 rounded-lg text-center">
                <div className="text-3xl font-bold mb-2">24/7</div>
                <div>Emergency Support</div>
              </div>
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
      <div className="bg-white py-16 px-8 text-center">
        <h2 className="text-3xl font-bold text-teal-800 mb-6">Join Us in Making a Difference</h2>
        <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
          Whether you need our services or want to join our team, we'd love to connect with you.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a 
            href="/contact" 
            className="bg-teal-700 text-white px-8 py-3 rounded font-semibold hover:bg-teal-800 transition-colors"
          >
            Contact Us
          </a>
          <a 
            href="/careers" 
            className="bg-white text-teal-700 px-8 py-3 rounded font-semibold border border-teal-700 hover:bg-teal-50 transition-colors"
          >
            Career Opportunities
          </a>
        </div>
      </div>
    </div>
  );
}