import { useState } from "react";
import { useAnimation } from "framer-motion";

import { motion } from "framer-motion";
import { scroller } from "react-scroll";

import styles from "../styles";
import { navVariants } from "../utils/motion";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
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
        <img
          src="/search.svg"
          alt="search"
          className="w-[24px] h-[24px] object-contain"
        />
        <h2 className="font-extrabold text-[24px] leading-[30.24px] text-white cursor-pointer hover:cursor-pointer hover:brightness-125 hover:shadow-white">
          COSMONET
        </h2>
        <button
          className="w-[24px] h-[24px] border-none bg-transparent"
          onClick={toggleMenu}
        >
          <img
            src="/menu.svg"
            alt="menu"
            className="w-full h-full object-contain hover:scale-120  hover:shadow-white"
          />
        </button>
      </div>
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-dark">
          <ul className="flex flex-col items-center py-4">
            <li
              className="py-2 cursor-pointer hover:text-blue-500"
              onClick={() => scrollToSection("hero")}
            >
              Home
            </li>
            <li
              className="py-2 cursor-pointer hover:text-blue-500"
              onClick={() => scrollToSection("about")}
            >
              About
            </li>
            <li
              className="py-2 cursor-pointer hover:text-blue-500"
              onClick={() => scrollToSection("explore")}
            >
              Explore
            </li>
            <li
              className="py-2 cursor-pointer hover:text-blue-500"
              onClick={() => scrollToSection("feedback")}
            >
              Feedback
            </li>
            <li
              className="py-2 cursor-pointer hover:text-blue-500"
              onClick={() => scrollToSection("getstarted")}
            >
              GetStarted
            </li>
            <li
              className="py-2 cursor-pointer hover:text-blue-500"
              onClick={() => scrollToSection("whatsnew")}
            >
              WhatsNew
            </li>
            <li
              className="py-2 cursor-pointer hover:text-blue-500"
              onClick={() => scrollToSection("world")}
            >
              World
            </li>
          </ul>

          {/* FIX THE ISSUE WITH THE MENU SHOWING BELOW THE HERO SECTION'S TEXT*/}
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
