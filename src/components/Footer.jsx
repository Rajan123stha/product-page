import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-10">
      <div className="container mx-auto px-4 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="font-bold text-lg">DISCOVERY WORLD TREKKING</h2>
            <p>Post Box: 21576, Kaldhara Marg, Thamel, Kathmandu, Nepal</p>
            <p>Phone: +977 1 5352366, +977 1 5351649</p>
            <p>Cell: +9779840055491</p>
            <p>
              Email:{" "}
              <a
                href="mailto:info@discoveryworldtrekking.com"
                className="text-blue-300"
              >
                info@discoveryworldtrekking.com
              </a>
            </p>
            <p>Address: Saat Ghumti Chowk, Thamel, Kathmandu, Nepal</p>
          </div>
          <div>
            <h2 className="font-bold text-lg">SUBSCRIBE OUR NEWSLETTER</h2>
            <p>
              Get the latest news, offers and inspiring travel stories straight
              to your inbox.
            </p>
            <form className="mt-4">
              <input
                type="text"
                placeholder="Your Name"
                className="p-2 w-full mb-2"
              />
              <input
                type="email"
                placeholder="Your Email Address"
                className="p-2 w-full mb-2"
              />
              <button
                type="submit"
                className="bg-blue-500 text-white p-2 w-full"
              >
                Subscribe
              </button>
            </form>
          </div>
          <div>
            <h2 className="font-bold text-lg">PAGES</h2>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="text-blue-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-300">
                  Our Team
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-300">
                  CSR
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-300">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-300">
                  Make a Payment
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
