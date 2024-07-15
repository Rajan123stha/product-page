import React, { useEffect, useState, useRef } from "react";
import "../Styles/Style.css";
import Overview from "./Sections/Overview";
import Images from "./Sections/Images";
import Itinerary from "./Sections/Itinerary";

const sections = [
  { id: "overview", label: "Overview" },
  { id: "photos-videos", label: "Photos/Videos" },
  { id: "itinerary", label: "Itinerary" },
  { id: "includes", label: "Includes" },
  { id: "map", label: "Map" },
  { id: "equipments", label: "Equipments" },
  { id: "trip-info", label: "Trip Info" },
  { id: "cost-dates", label: "Cost & Dates" },
  { id: "reviews", label: "Reviews" },
  { id: "faqs", label: "FAQs" },
];

const ScrollNavbar = ({ showNavbar }) => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      let currentSection = "";

      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element && scrollPosition >= element.offsetTop - 50) {
          currentSection = section.id;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!showNavbar) return null;

  return (
    <div className="scroll-navbar">
      <ul>
        {sections.map((section) => (
          <li
            key={section.id}
            className={activeSection === section.id ? "active" : ""}
          >
            <a href={`#${section.id}`}>{section.label}</a>
          </li>
        ))}
      </ul>
      <button className="book-now-button">Book Now</button>
    </div>
  );
};

const Sections = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [showScrollButton, setShowScrollButton] = useState(false);
  const sectionsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowNavbar(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    if (sectionsRef.current) {
      observer.observe(sectionsRef.current);
    }

    return () => {
      if (sectionsRef.current) {
        observer.unobserve(sectionsRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById("hero");
      if (heroSection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
        setShowScrollButton(window.scrollY > heroBottom);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div ref={sectionsRef}>
      <ScrollNavbar showNavbar={showNavbar} />
      <div id="overview">
        <Overview />
      </div>
      <div id="photos-videos">
        <Images />
      </div>
      <div id="itinerary">
        <Itinerary />
      </div>
      <div id="includes">Includes Content</div>
      <div id="map">Map Content</div>
      <div id="equipments">Equipments Content</div>
      <div id="trip-info">Trip Info Content</div>
      <div id="cost-dates">Cost & Dates Content</div>
      <div id="reviews">Reviews Content</div>
      <div id="faqs">FAQs Content</div>

      {showScrollButton && (
        <button className="scroll-to-top-button" onClick={scrollToTop}>
          ↑
        </button>
      )}
    </div>
  );
};

export default Sections;
