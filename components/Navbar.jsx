import { useState } from "react";
import { motion } from "framer-motion";
import { scroller } from "react-scroll";

import styles from "../styles";
import { navVariants } from "../utils/motion";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  const closeMenu = () => {
    setMenuOpen(false);
  };

  const scrollToSection = (sectionId) => {
    scroller.scrollTo(sectionId, {
      duration: 500,
      offset: -100,
      smooth: true,
    });

    setMenuOpen(false);
  };

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} py-8 relative`}
    >
      <div className="absolute w-[50%] inset-0 gradient-01" />
      <div
        className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}
      >
        <h2 className="font-extrabold text-[24px] text-white hover:cursor-pointer hover:brightness-125 hover:shadow-white">
          COSMONET
        </h2>

        {isMenuOpen ? (
          <button
            className="w-[24px] h-[24px] border-none bg-transparent absolute right-8 top-4 z-10"
            onClick={closeMenu}
          >
            <img
              src="/close.png"
              alt="close"
              className="w-full h-full object-contain hover:scale-120 hover:shadow-white"
            />
          </button>
        ) : (
          <button
            className="w-[24px] h-[24px] border-none bg-transparent md:hidden"
            onClick={toggleMenu}
          >
            <img
              src="/menu.svg"
              alt="menu"
              className="w-full h-full object-contain hover:scale-120 hover:shadow-white"
            />
          </button>
        )}

        <ul
          className={`${
            isMenuOpen ? "" : "hidden"
          } md:flex gap-6 mr-20 mt-2 pr-16`}
        >
          <li
            className="hover:cursor-pointer hover:text-purple-500 text-white"
            onClick={() => scrollToSection("about")}
          >
            About
          </li>
          <li
            className="hover:cursor-pointer hover:text-purple-500 text-white"
            onClick={() => scrollToSection("explore")}
          >
            Explore
          </li>
          <li
            className="hover:cursor-pointer hover:text-purple-500 text-white"
            onClick={() => scrollToSection("feedback")}
          >
            Feedback
          </li>
          <li
            className="hover:cursor-pointer hover:text-purple-500 text-white"
            onClick={() => scrollToSection("getstarted")}
          >
            Get Started
          </li>
          <li
            className="hover:cursor-pointer hover:text-purple-500 text-white"
            onClick={() => scrollToSection("whatsnew")}
          >
            What's New
          </li>
          <li
            className="hover:cursor-pointer hover:text-purple-500 text-white"
            onClick={() => scrollToSection("world")}
          >
            World
          </li>
          {/*  move this one to be an inline button */}
        </ul>
        <button
          type="button"
          className="flex items-center h-fit py-4 px-6 bg-purple-500 rounded-[32px] gap-[12px] hover:scale-105 hover:brightness-110 shadow-2xl"
        >
          <img
            src="/headset.svg"
            alt="headset"
            className="w-[24px] h-[24px] object-contain"
          />
          <span className="font-normal text-[16px] text-white">
            Try Cosmonet Now{" "}
          </span>
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
