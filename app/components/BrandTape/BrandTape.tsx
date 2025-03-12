import React from "react";
import "./brandtape.css";

const brands = [
  {
    name: "Mark Wiens",
    image: "/brands/brands1.png",
    circle: true,
  },
  {
    name: "The Chosen",
    image: "/brands/brands2.png",
    circle: true,
  },
  {
    name: "Strange Parts",
    image: "/brands/brands3.png",
    circle: true,
  },
  {
    name: "Slapped Ham Mysteries",
    image: "/brands/brands4.png",
    circle: true,
  },
  {
    name: "Mark Abroad",
    image: "/brands/brands5.png",
    circle: true,
  },
  {
    name: "Retired Working For You",
    image: "/brands/brands6.png",
    circle: true,
  },
  {
    name: "Sprouht",
    image: "/brands/brands7.png",
    circle: true,
  },
  {
    name: "Slapped Ham",
    image: "/brands/brands14.png",
    circle: true,
  },
  {
    name: "",
    image: "/brands/bunglowV2.png",
    circle: false,
  },

  {
    name: "",
    image: "/brands/roundlast.png",
    circle: false,
  },
  {
    name: "",
    image: "/brands/keshet_v2_circle.png",
    circle: false,
  },
  {
    name: "",
    image: "/brands/Vizio.png",
    circle: false,
  },
  {
    name: "National Geographic",
    image: "/brands/natGeoV2.png",
    circle: true,
  },

  
  {
    name: "Dhar Mann Studios",
    image: "/brands/DharV2.png",
    circle: true,
  },
];

// Repeat the brands array 5 times to match the original repetition
const repeatedBrands = [...Array(5)].flatMap(() => brands);

const BrandTape = () => {
  return (
    <div className="carousel min-h-56 py-2">
      <div className="carousel-track">
        {repeatedBrands.map((brand, index) => (
          <div
            key={index}
            className="carousel-item flex flex-col items-center justify-start text-sm"
          >
            <img
              src={brand.image}
              alt={brand.name || "Brand"}
              className={brand.circle ? "circular" : ""}
            />
            {brand.name && <p className="">{brand.name}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandTape;
