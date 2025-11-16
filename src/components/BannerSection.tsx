import { motion } from "framer-motion";
import bannerOne from "../assets/banner/banner-one.png";
import bannerTwo from "../assets/banner/banner-two.png";
import bannerThree from "../assets/banner/banner-three.png";
import bannerFour from "../assets/banner/banner-four.png";
import bannerFive from "../assets/banner/banner-five.png";

const BannerSection = () => {
  const containerAnimation = {
    initial: {},
    hover: {
      transition: {
        staggerChildren: 0,
      },
    },
  };

  const arrowAnimation = {
    initial: { x: 0 },
    hover: { x: 130 },
    transition: {
      duration: 1,
      type: "spring",
      stiffness: 0,
    },
  };
  const textAnimation = {
    initial: { x: 0 },
    hover: { x: -40 },
    transition: {
      duration: 1,
      type: "spring",
      stiffness: 0,
    },
  };
  return (
    <div className="pt-[124px] min-h-dvh bg-linear-to-r from-[#111111] via-[#1E1D1A] to-[#1C3843]">
      <div className="flex flex-col justify-center w-full max-w-[1512px] mx-auto px-4 md:px-6 lg:px-[138px] pb-44">
        <div className="mx-auto">
          <h2 className="capitalize pb-5 font-semibold font-inter text-[26px] lg:text-[36px] text-center text-white banner-arrow">
            Build Templates. Download Free. Grow Together
          </h2>
          <p className="text-center text-[#FFFDFD] text-[16px] md:text-xl font-normal">
            Upload your designs or download free resources.
          </p>
        </div>

        <div className="w-full max-w-[1512px] mx-auto grid md:grid-cols-4 md:grid-rows-2 gap-6 items-center mt-16">
          {/* Background Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="block h-full rounded-[10px] overflow-hidden md:col-span-2 md:row-span-2"
          >
            <img
              src={bannerOne}
              alt="banner one"
              className="w-full h-full object-contain"
              draggable={false}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="hidden md:block h-full rounded-[10px] overflow-hidden"
          >
            <img
              src={bannerTwo}
              alt="banner two"
              className="w-full h-full object-fill"
              draggable={false}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="hidden md:block h-full rounded-[10px] overflow-hidden"
          >
            <img
              src={bannerThree}
              alt="banner three"
              className="w-full h-full object-fill"
              draggable={false}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="hidden md:block h-full rounded-[10px] overflow-hidden"
          >
            <img
              src={bannerFour}
              alt="banner four"
              className="w-full h-full object-fill"
              draggable={false}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="hidden md:block h-full rounded-[10px] overflow-hidden"
          >
            <img
              src={bannerFive}
              alt="banner five"
              className="w-full h-full object-fill"
              draggable={false}
            />
          </motion.div>
        </div>
        <motion.button
          initial="initial"
          whileHover="hover"
          variants={containerAnimation}
          className="flex flex-row items-center bg-neutral-900/15 px-[18px] py-2.5 text-white rounded-[22px] gap-x-2.5 cursor-pointer mt-[30px] mx-auto"
        >
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
          <motion.p variants={textAnimation}>Browse Template</motion.p>
        </motion.button>
      </div>
    </div>
  );
};

export default BannerSection;
