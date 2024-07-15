import React from "react";
import img1 from "../../assets/image1.jpg";

export default function Images() {
  return (
    <div className="container mx-auto p-4">
      <h3 className="text-2xl font-bold mb-4">
        EBC Tour Videos & Pictures: Truly a once in a lifetime experience in the
        Khumbu region of Nepal
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <img
          src={img1}
          alt="Everest Base Camp Trek"
          className="w-auto h-auto rounded-lg"
        />
        <img
          src={img1}
          alt="Everest Base Camp Trek"
          className="w-full h-auto rounded-lg"
        />
        <img
          src={img1}
          alt="Everest Base Camp Trek"
          className="w-full h-auto rounded-lg"
        />
        <img
          src={img1}
          alt="Everest Base Camp Trek"
          className="w-full h-auto rounded-lg"
        />
      </div>
    </div>
  );
}
