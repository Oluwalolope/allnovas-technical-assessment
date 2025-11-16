import type { mission } from "../lib/constants";
import { motion } from "framer-motion";

interface MissionCard extends mission {
  isExpanded: boolean;
  index: number;
  handleExpandedIndex: (index: number) => void;
}

const MissionCard = ({
  icon,
  title,
  description,
  isExpanded,
  index,
  handleExpandedIndex,
}: MissionCard) => {
  let gradient = "bg-linear-0 from-[#460050] to-[#630071]";

  if (index === 0) {
    gradient = "bg-linear-30 from-[#011E40] to-[#014088]";
  }

  if (index === 2) {
    gradient = "bg-linear-270 from-[#026813] to-[#003B0A]";
  }

  const containerAnimation = {
    initial: {},
    hover: {
        transition: {
            staggerChildren: 0
        }
    }
  };

  const textAnimation = {
    initial: { x: 0 },
    hover: { x: 35 },
    transition: {
      duration: 1,
      type: "spring",
      stiffness: 0,
    },
  };
  const arrowAnimation = {
    initial: { x: 0 },
    hover: { x: -90 },
    transition: {
      duration: 1,
      type: "spring",
      stiffness: 0,
    },
  };

  return (
    <article
      onMouseEnter={() => handleExpandedIndex(index)}
      onMouseLeave={() => handleExpandedIndex(1)}
      className={`h-[400px] lg:h-[500px] ${
        isExpanded ? "w-full lg:w-[650px]" : "w-full lg:w-[318px]"
      } rounded-bl-[36px] rounded-tr-[36px] ${gradient} pt-[26px] pb-[58px] px-3 flex flex-col items-center justify-between transition-[width] duration-200 ease-in-out`}
    >
      <div>
        <img
          src={icon}
          alt={title}
          draggable={false}
          className="size-20 mx-auto"
        />
        <h2
          className={`text-[40px] ${
            isExpanded ? "block lg:block" : "block lg:hidden"
          } text-white font-mali font-normal capitalize text-center py-2.5`}
        >
          {title}
        </h2>
        <p
          className={`text-[16px] ${
            isExpanded ? "block lg:block" : "block lg:hidden"
          } text-white font-manrope font-semibold text-center max-w-[425px]`}
        >
          {description}
        </p>
      </div>
      <h2
        className={`text-[40px] text-white ${
          !isExpanded ? "hidden lg:block" : "hidden"
        } font-normal font-mali capitalize text-center`}
      >
        {title}
      </h2>

      <motion.button
        initial="initial"
        whileHover="hover"
        variants={containerAnimation}
        className={`${
          isExpanded ? "flex" : "flex lg:hidden"
        } flex-row items-center bg-neutral-900/15 px-[18px] py-2.5 text-white rounded-[22px] gap-x-2.5 cursor-pointer`}
      >
        <motion.p variants={textAnimation}>Get Started</motion.p>
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          variants={arrowAnimation}
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
          />
        </motion.svg>
      </motion.button>
    </article>
  );
};

export default MissionCard;
