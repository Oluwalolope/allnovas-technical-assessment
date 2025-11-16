import { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import { leftOrbData, rightOrbData } from "../lib/constants";

const HeroSection = () => {
  const [leftIndex, setLeftIndex] = useState(0);
  const [rightIndex, setRightIndex] = useState(0);
  const [leftVisible, setLeftVisible] = useState(true);
  const [rightVisible, setRightVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setLeftVisible(false);
      setTimeout(() => {
        setLeftIndex((prev) => (prev + 1) % leftOrbData.length);
        setLeftVisible(true);
      }, 450);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setRightVisible(false);
      setTimeout(() => {
        setRightIndex((prev) => (prev + 1) % rightOrbData.length);
        setRightVisible(true);
      }, 450);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const left = leftOrbData[leftIndex];
  const right = rightOrbData[rightIndex];

  return (
    <div className="relative pt-[124px] w-full overflow-visible">
      {/* LEFT ORB */}
      <div
        className={`
          hidden md:flex
          absolute top-[55%] left-[8%]
          -translate-y-1/2
          ${left.bg} rounded-xl 
          p-5 pr-6 w-[260px]
          transition-opacity duration-500
          ${leftVisible ? "opacity-100" : "opacity-0"}
          ${left.rotate}
          z-10
        `}
      >
        <img
          src={left.img}
          className="w-14 h-14 rounded-full object-cover absolute -top-6 -left-6 shadow-md"
        />
        <p className="text-[15px] text-primary-text font-medium leading-snug mt-4">
          {left.text}
        </p>
      </div>

      {/* RIGHT ORB */}
      <div
        className={`
          hidden md:flex
          absolute top-[55%] right-[8%]
          -translate-y-1/2
          ${right.bg} rounded-xl 
          p-5 pl-6 w-[260px]
          transition-opacity duration-500
          ${rightVisible ? "opacity-100" : "opacity-0"}
          ${right.rotate}
          origin-top-right
          z-20
        `}
      >
        <img
          src={right.img}
          className="w-14 h-14 rounded-full object-cover absolute -top-6 -right-6 shadow-md"
        />
        <p className="text-[15px] text-primary-text font-medium leading-snug mt-4">
          {right.text}
        </p>
      </div>

      {/* HERO CONTENT */}
      <div className="flex flex-col justify-center w-full max-w-[1512px] mx-auto px-4 md:px-6 lg:px-[138px] pb-44 overflow-hidden text-center">
        <h3 className="text-secondary-color font-semibold pb-0.5">
          Designed for modern collaboration
        </h3>

        <h1 className="capitalize pb-5 font-bold font-inter text-[48px] lg:text-[56px] max-w-[750px] mx-auto text-primary-text">
          Co-Creating Your Vision,{" "}
          <span className="text-primary-color">One Step at a Time</span>
        </h1>

        <p className="max-w-[684px] mx-auto text-secondary-text text-xl font-normal">
          From concept to final deliverables, we build with transparency at
          every stage, keeping you inspired throughout the journey.
        </p>

        <div className="mt-8">
          <SearchBar />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
