import { useState } from "react";
import { OUR_MISSIONS } from "../lib/constants";
import MissionCard from "./MissionCard";

const MissionSection = () => {
  const [expandedSectionIndex, setExpandedSectionIndex] = useState<number>(1);

  const handleExpandedIndex = (index: number) => {
    setExpandedSectionIndex(index);
  };

  return (
    <div className="py-[120px]">
      <div className="flex flex-col justify-center w-full max-w-[1512px] mx-auto px-4 md:px-6 lg:px-[138px] pb-44">
        <div className="mx-auto">
          <h3 className="text-secondary-color text-center font-semibold pb-0.5">
            Our Mission
          </h3>
          <h2 className="capitalize pb-5 font-semibold font-inter text-[30px] lg:text-[36px] max-w-[750px] text-center text-primary-text">
            Building A Trusted Ecosystem Where Talents Thrive And Opportunities
            Grow
          </h2>
          <p className="max-w-[684px] text-center text-secondary-text text-xl font-normal">
            Secured payments, verified talents and transparent projects
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-5 mt-16">
          {OUR_MISSIONS.map((mission, index) => (
            <MissionCard
              key={index}
              icon={mission.icon}
              title={mission.title}
              description={mission.description}
              isExpanded={expandedSectionIndex === index}
              index={index}
              handleExpandedIndex={handleExpandedIndex}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MissionSection;
