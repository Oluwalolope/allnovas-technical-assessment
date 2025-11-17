import logo from "../assets/logo.png";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useScrollLock from "../hooks/useScrollLock";

const NAV_ITEMS = [
  { name: "find freelancers", href: "#find-freelancers" },
  { name: "services", href: "#services" },
  { name: "resources", href: "#resources" },
  { name: "about us", href: "#about-us" },
  { name: "offshore services", href: "#offshore-services" },
];

const Header = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState<boolean>(false);
  const [isButtonHover, setIsButtonHover] = useState<boolean>(false);
  const handleClick = () => {
    setIsMobileNavOpen((prev) => !prev);
  };

  useScrollLock(isMobileNavOpen);

  return (
    <motion.header>
      <div className="flex flex-row justify-between items-center w-full max-w-[1512px] mx-auto px-4 md:px-6 pt-10 pb-5 relative">
        <a href="#">
          <img src={logo} alt="Allnovas logo" />
        </a>

        <nav className="hidden lg:block">
          <ul className="flex flex-row justify-between w-full gap-x-10 items-center">
            {NAV_ITEMS.map((item, index) => (
              <a key={index} href={item.href}>
                <li className="capitalize text-[#0F0F0F] hover:text-primary-color transition-all duration-200 font-semibold">
                  {item.name}
                </li>
              </a>
            ))}
          </ul>
        </nav>

        <div className="flex flex-row gap-4 items-center">
          <div className="inline-flex items-center gap-x-3">
            <a href="#sign-in" className="hidden md:block">
              <p className="text-primary-color hover:text-primary-text capitalize font-medium py-[7.5px] px-[21px] transition-all duration-300">
                sign in
              </p>
            </a>
            <motion.button
              onMouseEnter={() => setIsButtonHover(true)}
              onMouseLeave={() => setIsButtonHover(false)}
              className={`bg-primary-color text-white rounded-2xl py-[7.5px] px-[21px] hidden md:inline-flex items-center cursor-pointer box-border ${
                isButtonHover ? "w-[100px]" : "w-[72px]"
              } transition-[width] duration-300 ease-out`}
              layout
              transition={{
                layout: {
                  type: "tween",
                  duration: 0.3,
                  ease: "easeInOut",
                },
              }}
            >
              <p className="font-medium text-center">Join</p>
              <AnimatePresence>
                {isButtonHover && (
                  <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 12 }}
                    transition={{ duration: 0.5 }}
                    className="size-4 ms-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </motion.svg>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
          <div className="flex flex-row gap-4 md:gap-8 items-center lg:hidden">
            <button
              type="button"
              className="p-2 transition-all"
              onClick={handleClick}
            >
              {!isMobileNavOpen && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="size-6 text-primary-color"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
              {isMobileNavOpen && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="size-6 text-primary-color"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>

          <AnimatePresence>
            {isMobileNavOpen && (
              <motion.nav
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute bg-white w-full min-h-[calc(100dvh-100px)] top-[100px] flex flex-col gap-10 left-0 lg:hidden z-50"
              >
                <ul className="flex flex-col gap-8 items-center pt-10 ps-4 lg:hidden">
                  {NAV_ITEMS.map((item, index) => (
                    <a key={index} href={item.href}>
                      <li
                        className="capitalize text-[#0F0F0F] font-semibold"
                        onClick={handleClick}
                      >
                        {item.name}
                      </li>
                    </a>
                  ))}
                  <li>
                    <a href="#sign-in" className="md:hidden">
                      <p className="text-primary-color hover:text-primary-text capitalize font-medium py-[7.5px] px-[21px] transition-all duration-300">
                        sign in
                      </p>
                    </a>
                  </li>
                  <li>
                    <a href="#sign-up"
                      className='bg-primary-color text-white rounded-2xl inline-block py-[7.5px] px-[21px] w-full font-medium text-center cursor-pointer box-border md:hidden'
                    >
                      Join
                    </a>
                  </li>
                </ul>
              </motion.nav>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
