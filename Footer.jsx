import React from 'react'

import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-white border-y">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        
        <div className="md:flex md:justify-between">
          
          {/* Logo */}
          <div className="mb-6 md:mb-0">
            <Link to="/" className="flex items-center">
              <img
                src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                className="mr-3 h-16"
                alt="Logo"
              />
            </Link>
          </div>

          {/* Links Section */}
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            
            {/* Resources */}
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                Resources
              </h2>

              <ul className="text-gray-500 font-medium">
                <li className="mb-4">
                  <Link to="/" className="hover:underline">
                    Home
                  </Link>
                </li>

                <li>
                  <Link to="/about" className="hover:underline">
                    About
                  </Link>
                </li>
              </ul>
            </div>

            {/* Follow Us */}
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                Follow us
              </h2>

              <ul className="text-gray-500 font-medium">
                <li className="mb-4">
                  <a
                    href="https://github.com/hiteshchoudhary"
                    className="hover:underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github
                  </a>
                </li>

                <li>
                  <a
                    href="https://discord.gg/"
                    className="hover:underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Discord
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                Legal
              </h2>

              <ul className="text-gray-500 font-medium">
                <li className="mb-4">
                  <Link to="#" className="hover:underline">
                    Privacy Policy
                  </Link>
                </li>

                <li>
                  <Link to="#" className="hover:underline">
                    Terms &amp; Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />

        <div className="sm:flex sm:items-center sm:justify-between">
          
          <span className="text-sm text-gray-500 sm:text-center">
            © 2023{" "}
            <a
              href="https://hiteshchoudhary.com/"
              className="hover:underline"
            >
              hiteshchoudhary
            </a>
            . All Rights Reserved.
          </span>

          {/* Social Icons */}
          <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
            
            {/* Facebook */}
            <Link to="#" className="text-gray-500 hover:text-gray-900">
              <svg
                className="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 8 19"
              >
                <path d="M6.135 3H8V0H5.192C2.6 0 1 1.7 1 4.8V7H0v3h1v9h3v-9h3l1-3H4V5c0-1 .3-2 2.135-2z" />
              </svg>
            </Link>

            {/* Discord */}
            <Link to="#" className="text-gray-500 hover:text-gray-900">
              <svg
                className="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 21 16"
              >
                <path d="M16.942 1.556a16.3 16.3 0 00-4.126-1.3l-.2.4a15.2 15.2 0 00-4.232 0l-.2-.4A16.3 16.3 0 004.058 1.556C1.5 5.2.8 8.7 1.1 12.1a16.6 16.6 0 005 2.5l.6-1a10.7 10.7 0 01-1.6-.8l.4-.3c3 1.4 6.2 1.4 9.2 0l.4.3c-.5.3-1 .6-1.6.8l.6 1a16.6 16.6 0 005-2.5c.4-3.9-.7-7.4-3.3-10.5z" />
              </svg>
            </Link>

            {/* Twitter */}
            <Link to="#" className="text-gray-500 hover:text-gray-900">
              <svg
                className="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 17"
              >
                <path d="M20 1.892a8.178 8.178 0 01-2.355.635 4.074 4.074 0 001.8-2.235 8.344 8.344 0 01-2.605.98A4.153 4.153 0 009.85 4.03a11.8 11.8 0 01-8.6-4.2A4.084 4.084 0 002.5 6.3a4.1 4.1 0 01-1.86-.5v.05a4.15 4.15 0 003.3 4.06 4.2 4.2 0 01-1.85.07 4.15 4.15 0 003.88 2.88A8.33 8.33 0 010 15.4 11.73 11.73 0 006.29 17c7.55 0 11.675-6.155 11.675-11.49v-.52A8.18 8.18 0 0020 1.892z" />
              </svg>
            </Link>

            {/* GitHub */}
            <Link to="#" className="text-gray-500 hover:text-gray-900">
              <svg
                className="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a10 10 0 00-3.162 19.5c.5.1.688-.213.688-.475 0-.238-.013-1.025-.013-1.863-2.5.45-3.15-.613-3.35-1.175-.112-.288-.6-1.175-1.025-1.413-.35-.188-.85-.65-.013-.663.788-.013 1.35.725 1.538 1.025.9 1.513 2.35 1.088 2.925.825.088-.65.35-1.088.638-1.338-2.225-.25-4.55-1.113-4.55-4.95 0-1.088.388-1.975 1.025-2.675-.1-.25-.45-1.275.1-2.65 0 0 .838-.263 2.75 1.025A9.44 9.44 0 0110 5.35c.85 0 1.7.113 2.5.338 1.912-1.3 2.75-1.025 2.75-1.025.55 1.375.2 2.4.1 2.65.638.7 1.025 1.575 1.025 2.675 0 3.85-2.338 4.7-4.563 4.95.363.313.675.913.675 1.85 0 1.338-.012 2.413-.012 2.75 0 .263.188.575.688.475A10 10 0 0010 .5z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
