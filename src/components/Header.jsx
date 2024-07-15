import React, { useState } from "react";
import Logo from "../assets/Company_logo.png";
import Profile from "../assets/profile.jpg";
import {
  FaUserCircle,
  FaWhatsapp,
  FaViber,
  FaEnvelope,
  FaBars,
  FaSearch,
  FaTimes,
} from "react-icons/fa";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header>
      <div className="bg-blue-500 text-yellow-400 text-center py-3 text-lg font-semibold underline-offset-4">
        <a href="https://www.discoveryworldtrekking.com/blog/nepal-trek-booking-open">
          Nepal Trek Booking Open For 2024/25 (Note: From September, The Lukla
          Flights Will Be From Ramechhap)
        </a>
      </div>

      {/* Main Header */}
      <div className="bg-white py-6 border-b border-gray-200">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <img
              src={Logo}
              alt="Discovery World Trekking Logo"
              className="h-20"
            />
          </div>

          <div className="hidden md:flex items-center space-x-10">
            <div className="text-center">
              <p className="text-gray-700 text-lg">Quick Questions? Email Us</p>
              <p className="font-semibold text-lg">
                info@discoveryworldtrekking.com
              </p>
            </div>
            <div className="text-center justify-end">
              <p className="text-gray-700 text-lg">
                Talk to a Travel Expert (Paul)
              </p>
              <p className="font-semibold text-lg flex items-center">
                <FaWhatsapp size={25} color="green" className="mr-2" />
                <FaViber size={22} color="purple" className="mr-2" />
                +9779840055491
              </p>
            </div>
          </div>

          <div className="flex md:hidden items-center space-x-3">
            <FaWhatsapp size={22} color="green" />
            <FaViber size={22} color="purple" />
            <FaEnvelope size={22} color="gray" />
            <button className="flex items-center border border-gray-300 p-2 rounded-full hover:bg-gray-100">
              <FaUserCircle size={25} color="blue" />
            </button>
          </div>

          <div className="hidden md:flex items-center space-x-3">
            <img
              src={Profile}
              alt="Profile"
              className="h-12 w-12 rounded-full"
            />
            <button className="flex items-center border border-gray-300 px-4 py-2 md:px-6 md:py-3 rounded-2xl hover:bg-gray-100 text-lg">
              <FaUserCircle className="mr-2" size={25} color="blue" />
              Login
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="bg-gray-800 text-white py-3">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 flex justify-between items-center">
          <div className="flex space-x-3 items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden hover:text-gray-300 flex items-center"
            >
              {isMenuOpen ? (
                <FaTimes className="w-6 h-6" />
              ) : (
                <FaBars className="w-6 h-6" />
              )}
              <span className="ml-2">{isMenuOpen ? "Close" : "Menu"}</span>
            </button>
          </div>
          <ul
            className={`md:flex space-x-6 lg:space-x-8 text-lg font-bold hidden  ${
              isMenuOpen
                ? "flex flex-col space-y-2 md:hidden"
                : "hidden md:flex"
            }`}
          >
            <li>
              <a href="#nepal-tours" className="hover:text-gray-300">
                NEPAL TOURS AND TRIPS
              </a>
            </li>
            <li>
              <a href="#day-tours" className="hover:text-gray-300">
                DAY TOURS
              </a>
            </li>
            <li>
              <a href="#best-deals" className="hover:text-gray-300">
                BEST DEALS
              </a>
            </li>
            <li>
              <a href="#travel-info" className="hover:text-gray-300">
                TRAVEL INFO
              </a>
            </li>
            <li>
              <a href="#about-us" className="hover:text-gray-300">
                ABOUT US
              </a>
            </li>
            <li>
              <a href="#blog" className="hover:text-gray-300">
                BLOG
              </a>
            </li>
            <li>
              <a href="#reviews" className="hover:text-gray-300">
                REVIEWS
              </a>
            </li>
            <li>
              <a href="#contact-us" className="hover:text-gray-300">
                CONTACT US
              </a>
            </li>
          </ul>
          <button className="hover:text-gray-300">
            <FaSearch className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="bg-gray-800 text-white py-3 md:hidden">
          <div className="container mx-auto px-4 flex flex-col space-y-2 text-lg font-bold">
            <a href="#nepal-tours" className="hover:text-gray-300">
              NEPAL TOURS AND TRIPS
            </a>
            <a href="#day-tours" className="hover:text-gray-300">
              DAY TOURS
            </a>
            <a href="#best-deals" className="hover:text-gray-300">
              BEST DEALS
            </a>
            <a href="#travel-info" className="hover:text-gray-300">
              TRAVEL INFO
            </a>
            <a href="#about-us" className="hover:text-gray-300">
              ABOUT US
            </a>
            <a href="#blog" className="hover:text-gray-300">
              BLOG
            </a>
            <a href="#reviews" className="hover:text-gray-300">
              REVIEWS
            </a>
            <a href="#contact-us" className="hover:text-gray-300">
              CONTACT US
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
