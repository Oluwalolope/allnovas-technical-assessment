import { motion } from "framer-motion";
import resourceIllustration from "../assets/resource-illustration.png";
import { useState } from "react";

const WHAT_WE_OFFER = [
  {
    icon: (
      <svg
        width="24"
        height="29"
        viewBox="0 0 24 29"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.0495 7.53126L4.02953 11.4613C2.09953 12.7213 2.09953 15.5413 4.02953 16.8013L10.0495 20.7313C11.1295 21.4413 12.9095 21.4413 13.9895 20.7313L19.9795 16.8013C21.8995 15.5413 21.8995 12.7313 19.9795 11.4713L13.9895 7.54126C12.9095 6.82126 11.1295 6.82126 10.0495 7.53126Z"
          stroke="#171717"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M5.63012 18.0781L5.62012 22.7681C5.62012 24.0381 6.60012 25.3981 7.80012 25.7981L10.9901 26.8581C11.5401 27.0381 12.4501 27.0381 13.0101 26.8581L16.2001 25.7981C17.4001 25.3981 18.3801 24.0381 18.3801 22.7681V18.1281"
          stroke="#171717"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M21.4004 20V14"
          stroke="#171717"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
    title: "Tutorials by Experts:",
    summary:
      "Master new techniques with step-by-step guides created by industry leaders.",
  },
  {
    icon: (
      <svg
        width="24"
        height="29"
        viewBox="0 0 24 29"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18.0001 12.16C17.9401 12.15 17.8701 12.15 17.8101 12.16C16.4301 12.11 15.3301 10.98 15.3301 9.58C15.3301 8.15 16.4801 7 17.9101 7C19.3401 7 20.4901 8.16 20.4901 9.58C20.4801 10.98 19.3801 12.11 18.0001 12.16Z"
          stroke="#171717"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M16.9704 19.4402C18.3404 19.6702 19.8504 19.4302 20.9104 18.7202C22.3204 17.7802 22.3204 16.2402 20.9104 15.3002C19.8404 14.5902 18.3104 14.3502 16.9404 14.5902"
          stroke="#171717"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M5.97047 12.16C6.03047 12.15 6.10047 12.15 6.16047 12.16C7.54047 12.11 8.64047 10.98 8.64047 9.58C8.64047 8.15 7.49047 7 6.06047 7C4.63047 7 3.48047 8.16 3.48047 9.58C3.49047 10.98 4.59047 12.11 5.97047 12.16Z"
          stroke="#171717"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M7.00043 19.4402C5.63043 19.6702 4.12043 19.4302 3.06043 18.7202C1.65043 17.7802 1.65043 16.2402 3.06043 15.3002C4.13043 14.5902 5.66043 14.3502 7.03043 14.5902"
          stroke="#171717"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M12.0001 19.6288C11.9401 19.6188 11.8701 19.6188 11.8101 19.6288C10.4301 19.5788 9.33008 18.4488 9.33008 17.0488C9.33008 15.6188 10.4801 14.4688 11.9101 14.4688C13.3401 14.4688 14.4901 15.6288 14.4901 17.0488C14.4801 18.4488 13.3801 19.5888 12.0001 19.6288Z"
          stroke="#171717"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M9.08973 22.7794C7.67973 23.7194 7.67973 25.2594 9.08973 26.1994C10.6897 27.2694 13.3097 27.2694 14.9097 26.1994C16.3197 25.2594 16.3197 23.7194 14.9097 22.7794C13.3197 21.7194 10.6897 21.7194 9.08973 22.7794Z"
          stroke="#171717"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),

    title: "Interactive Webinars:",
    summary:
      "Learn directly from the pros in live sessions, complete with Q&A.",
  },
  {
    icon: (
      <svg
        width="24"
        height="29"
        viewBox="0 0 24 29"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3.5 23V12C3.5 8 4.5 7 8.5 7H15.5C19.5 7 20.5 8 20.5 12V22C20.5 22.14 20.5 22.28 20.49 22.42"
          stroke="#171717"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M6.35 20H20.5V23.5C20.5 25.43 18.93 27 17 27H7C5.07 27 3.5 25.43 3.5 23.5V22.85C3.5 21.28 4.78 20 6.35 20Z"
          stroke="#171717"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M8 12H16"
          stroke="#171717"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M8 15.5H13"
          stroke="#171717"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),

    title: "eBooks and Templates:",
    summary:
      "Access downloadable guides and templates to speed up your projects.",
  },
  {
    icon: (
      <svg
        width="24"
        height="29"
        viewBox="0 0 24 29"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.30035 23.0363V21.8763C6.00035 20.4863 4.11035 17.7763 4.11035 14.8963C4.11035 9.94627 8.66035 6.06627 13.8004 7.18627C16.0604 7.68627 18.0404 9.18627 19.0704 11.2563C21.1604 15.4563 18.9604 19.9163 15.7304 21.8663V23.0263C15.7304 23.3163 15.8404 23.9863 14.7704 23.9863H9.26035C8.16035 23.9963 8.30035 23.5663 8.30035 23.0363Z"
          stroke="#171717"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M8.5 27.0031C10.79 26.3531 13.21 26.3531 15.5 27.0031"
          stroke="#171717"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),

    title: "Tips and Trends:",
    summary: "Stay ahead with insights into cutting-edge design trends.",
  },
];

const ResourcesSection = () => {
  const [isButtonHover, setIsButtonHover] = useState<boolean>(false);
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
    hover: { x: 140 },
    transition: {
      duration: 1,
      type: "spring",
      stiffness: 0,
    },
  };
  const textAnimation = {
    initial: { x: 0 },
    hover: { x: -30 },
    transition: {
      duration: 1,
      type: "spring",
      stiffness: 0,
    },
  };
  return (
    <div className="py-[124px]">
      <div className="flex flex-col justify-center w-full max-w-[1512px] mx-auto px-4 md:px-6 lg:px-[138px] pb-44">
        <div className="mx-auto">
          <h2 className="capitalize pb-5 font-semibold font-inter text-[30px] lg:text-[36px] text-center text-primary-text">
            Grow Your Skills With Free Resources From Allnovas
          </h2>
          <p className="text-center text-secondary-text text-xl font-normal">
            We connect clients with high-end freelancers across these categories
          </p>
        </div>

        <div className="w-full max-w-[1512px] mx-auto grid md:grid-cols-2 gap-20 items-center mt-16">
          {/* Background Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="hidden md:block h-full rounded-[10px] overflow-hidden"
          >
            <img
              src={resourceIllustration}
              alt="resource illustration"
              className="w-full h-full object-cover"
              draggable={false}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <motion.ul
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="text-start text-sm md:text-base space-y-8 w-full"
            >
              {WHAT_WE_OFFER.map((offer, index) => (
                <li key={index}>
                  <div className="space-y-2 inline-flex flex-row gap-x-4 items-start">
                    {offer.icon}
                    <div className="space-y-3">
                      <h3 className="font-semibold text-[20px] text-primary-text capitalize">
                        {offer.title}
                      </h3>
                      <p className="text-[16px] text-secondary-text font-normal">
                        {offer.summary}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </motion.ul>

            <div className="flex flex-row justify-center mt-10">
              <div className="flex flex-col md:flex-row justify-between gap-4">
                <motion.button
                  initial="initial"
                  whileHover="hover"
                  variants={containerAnimation}
                  className="flex flex-row items-center bg-primary-color px-[21px] py-4 text-white rounded-xl gap-x-2.5 cursor-pointer"
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
                  <motion.p
                    variants={textAnimation}
                    className="text-[12px] font-medium whitespace-nowrap"
                  >
                    Explore Free Resources
                  </motion.p>
                </motion.button>

                <motion.button
                  onMouseEnter={() => setIsButtonHover(true)}
                  onMouseLeave={() => setIsButtonHover(false)}
                  className="flex flex-row items-center bg-[#F3F4F6] px-[21px] py-4 text-primary-color rounded-xl gap-x-2 cursor-pointer"
                  layout
                  transition={{
                    layout: {
                      type: "tween",
                      duration: 0.3,
                      ease: "easeInOut",
                    },
                  }}
                >
                  <p className="font-medium text-[12px] whitespace-nowrap">
                    Register for free Resources
                  </p>

                  <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className={`size-4 ${
                      isButtonHover ? "text-primary-color" : "text-transparent"
                    } transition-all duration-200 ease-in-out`}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </motion.svg>
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ResourcesSection;
