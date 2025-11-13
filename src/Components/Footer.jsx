import React from "react";
import { FaFacebook, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="bg-[#1C274C] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Main Content Grid (4 Columns) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {/* Column 1: Logo & Description */}
            <div>
              <div className="flex items-center mb-6">
                {/* Logo Icon Placeholder */}
                <svg
                  className="w-8 h-8 text-green-400 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5s3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18s-3.332.477-4.5 1.253"
                  ></path>
                </svg>
                <h3 className="text-xl font-bold text-white">Edusion</h3>
              </div>
              <p className="text-sm text-gray-400 mb-6 max-w-xs">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                vitae risus nec dui venenatis dignissim.
              </p>

              {/* Social Links */}
              <div className="flex items-center space-x-4">
                <span className="text-sm font-medium text-white uppercase mr-2 hidden sm:inline-block">
                  CONNECT WITH:
                </span>

                {/* Social Icon Placeholders (Repeat for each icon: FB, IG, Twitter, Pinterest) */}
                <a
                  href="https://www.facebook.com/"
                  aria-label="Facebook"
                  className=" hover:text-green-400 transition"
                >
                  <FaFacebook />
                </a>
                <a
                  href="https://www.linkedin.com/feed/"
                  aria-label="Linkedin"
                  className="hover:text-green-400 transition"
                >
                  <FaLinkedin />
                </a>
                {/* ... other social links ... */}
              </div>
            </div>

            {/* Column 2: Courses */}
            <div>
              <h4 className="text-lg font-bold text-white mb-6">Courses</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-400 hover:text-green-400 transition"
                  >
                    Creative Writing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-400 hover:text-green-400 transition"
                  >
                    Digital Marketing
                  </a>
                </li>
                {/* ... other courses ... */}
              </ul>
            </div>

            {/* Column 3: Company */}
            <div>
              <h4 className="text-lg font-bold text-white mb-6">Company</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-400 hover:text-green-400 transition"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-400 hover:text-green-400 transition"
                  >
                    Knowledge Base
                  </a>
                </li>
                {/* ... other company links ... */}
              </ul>
            </div>

            {/* Column 4: Contact Info */}
            <div>
              <h4 className="text-lg font-bold text-white mb-6">
                Contact Info
              </h4>
              <div className="space-y-4">
                {/* Phone Number */}
                <div className="flex items-start mb-6">
                  <svg
                    className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.144a11.042 11.042 0 005.426 5.426l1.144-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    ></path>
                  </svg>
                  <div>
                    <p className="text-base font-semibold text-white">
                      Phone Number
                    </p>
                    <p className="text-sm text-gray-400">+88 457 845 695</p>
                  </div>
                </div>

                {/* Email Address */}
                <div className="flex items-start mb-6">
                  <svg
                    className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-8-3h.01M3 8v10a2 2 0 002 2h14a2 2 0 002-2V8M3 8l9 6 9-6"
                    ></path>
                  </svg>
                  <div>
                    <p className="text-base font-semibold text-white">
                      Email Address
                    </p>
                    <p className="text-sm text-gray-400">
                      example@yourmail.com
                    </p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start mb-6">
                  <svg
                    className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                  </svg>
                  <div>
                    <p className="text-base font-semibold text-white">
                      Location
                    </p>
                    <p className="text-sm text-gray-400">California, USA</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Separator */}
          <hr className="my-10 border-gray-700" />

          {/* Bottom Section: Copyright & Legal Links */}
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <p className="text-gray-400 mb-4 md:mb-0">
              &copy; 2025 Edusion. All Rights Reserved
            </p>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-gray-400 hover:text-green-400 transition"
              >
                Terms & Conditions
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-green-400 transition"
              >
                Special
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-green-400 transition"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
