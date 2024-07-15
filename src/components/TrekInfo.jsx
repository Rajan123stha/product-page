import React, { useState, useEffect } from "react";
import {
  FaMapMarkerAlt,
  FaHiking,
  FaMountain,
  FaRulerCombined,
  FaCalendarAlt,
  FaUsers,
  FaBed,
  FaUtensils,
  FaPlane,
  FaFacebook,
  FaEnvelope,
  FaTimes,
  FaLink,
} from "react-icons/fa";
import "../Styles/Style.css";

function TrekInfo() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="container mx-auto px-4 py-6 relative trek-info-section">
      <div className="flex flex-col items-center mb-6">
        <span className="text-gray-700 text-lg mb-2">
          Share with your Friends
        </span>
        <div className="flex space-x-4">
          <FaFacebook size={32} color="#0077b5" />
          <FaEnvelope size={32} color="#0077b5" />
          <FaTimes size={32} color="#0077b5" />
          <FaLink size={32} color="#0077b5" />
        </div>
      </div>

      <div className="flex flex-wrap">
        <div className="w-full lg:w-3/4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xl">
            <div className="flex items-center space-x-2 p-4">
              <FaMapMarkerAlt size={32} />
              <div className="p-4">
                <p className="text-gray-700">Destination</p>
                <p className="font-semibold">Nepal</p>
              </div>
            </div>

            <div className="flex items-center space-x-2 p-4">
              <FaHiking size={32} />
              <div>
                <p className="text-gray-700">Activity</p>
                <p className="font-semibold">Everest Treks</p>
              </div>
            </div>

            <div className="flex items-center space-x-2 p-4">
              <FaMountain size={32} />
              <div>
                <p className="text-gray-700">Region</p>
                <p className="font-semibold">Everest Region</p>
              </div>
            </div>

            <div className="flex items-center space-x-2 p-4">
              <FaRulerCombined size={32} />
              <div>
                <p className="text-gray-700">Distance</p>
                <p className="font-semibold">Lukla-EBC-Lukla(130km/80miles)</p>
              </div>
            </div>

            <div className="flex items-center space-x-2 p-4">
              <FaCalendarAlt size={32} />
              <div>
                <p className="text-gray-700">Duration</p>
                <p className="font-semibold">14 Days</p>
              </div>
            </div>

            <div className="flex items-center space-x-2 p-4">
              <FaMountain size={32} />
              <div>
                <p className="text-gray-700">Max. Altitude</p>
                <p className="font-semibold">5,555m at Kalapathar</p>
              </div>
            </div>

            <div className="flex items-center space-x-2 p-4">
              <FaUsers size={32} />
              <div>
                <p className="text-gray-700">Group Size</p>
                <p className="font-semibold">2-30</p>
              </div>
            </div>

            <div className="flex items-center space-x-2 p-4">
              <FaBed size={32} />
              <div>
                <p className="text-gray-700">Nature Of Trek</p>
                <p className="font-semibold">Lodge to Lodge Trekking</p>
              </div>
            </div>

            <div className="flex items-center space-x-2 p-4">
              <FaCalendarAlt size={32} />
              <div>
                <p className="text-gray-700">Best Season</p>
                <p className="font-semibold">
                  Feb, Mar, Apr, May, June, Sep, Oct, Nov & Dec
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-2 p-4">
              <FaUtensils size={32} />
              <div>
                <p className="text-gray-700">Meals Included</p>
                <p className="font-semibold">
                  All Meals (Breakfast, Lunch & Dinner) during the trek
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-2 p-4">
              <FaPlane size={32} />
              <div>
                <p className="text-gray-700">Start / End Point</p>
                <p className="font-semibold">Kathmandu / Kathmandu</p>
              </div>
            </div>

            <div className="flex items-center space-x-2 p-4">
              <FaPlane size={32} />
              <div>
                <p className="text-gray-700">Transportation</p>
                <p className="font-semibold">Domestic flight (KTM-Lukla-KTM)</p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:w-1/4 mt-8 lg:mt-0 h-auto bg-white border border-gray-200 rounded-lg shadow-lg p-4 lg:block floating-box">
          <div className="text-center">
            <h3 className="text-xl font-bold mb-2">14 Days from US$ 1330 PP</h3>
            <span className="text-green-500 font-semibold">
              Save $470 Per Pax
            </span>
          </div>
          <div className="text-center mt-4">
            <p className="text-sm text-gray-500">Group Discount Available</p>
            <p className="text-sm text-gray-500">
              Discounts are solely based on your group size. We do not add
              anyone to your group.
            </p>
            <ul className="mt-2 text-left text-sm">
              <li>2 Pax: US$ 1330</li>
              <li>3 Pax: US$ 1300</li>
              <li>4-6 Pax: US$ 1260</li>
              <li>7-12 Pax: US$ 1220</li>
              <li>13-18 Pax: US$ 1180</li>
              <li>19-24 Pax: US$ 1160</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-8 w-3/4">
        <h2 className="text-3xl font-bold mb-4">
          Everest Base Camp Trek Overview
        </h2>
        <p className="text-xl">
          Everest Base Camp Trek is one of the finest treks in the world that
          centers on the world's highest peak Mt. Everest (29,029 ft/8,848.68m).
          This trek will provide you with a natural thrill as it takes you
          through breathtaking high-altitude landscapes, esoteric Buddhist
          monasteries, traditional Sherpa villages, high-altitude flora and
          fauna, and snow-capped mountains. Climbing Mount Everest Base Camp is
          a milestone in mountaineering.
        </p>
        <h3 className="text-2xl font-bold mt-6 mb-4">EBC Trek Highlights</h3>
        <ul className="list-disc ml-5 text-xl">
          <li>World’s highest airport at Syangboche (3,780m/12,402ft)</li>
          <li>
            Chance to explore the culture and lifestyles of the local Sherpa
            people
          </li>
          <li>
            The magnificent views of the world’s highest peak, 8,848.68m/29,029
            ft.
          </li>
          <li>
            Views of other peaks such as Mt. Lhotse (8,516m), Cho Oyu (8,201m),
            and Mt. Makalu (8,463m)
          </li>
          <li>Explore Sagarmatha National Park</li>
          <li>
            Prayer wheels, colorful flags, Mani stones, high suspension bridges
          </li>
          <li>Wide range of flora and fauna</li>
        </ul>
      </div>
    </div>
  );
}
export default TrekInfo;
