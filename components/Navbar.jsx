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
        <ul className="hidden md:flex gap-6 mr-20 pr-16">
          <li
            className="cursor-pointer hover:text-purple-500 text-white"
            onClick={() => scrollToSection("about")}
          >
            About
          </li>
          <li
            className="cursor-pointer hover:text-purple-500 text-white"
            onClick={() => scrollToSection("explore")}
          >
            Explore
          </li>
          <li
            className="cursor-pointer hover:text-purple-500 text-white"
            onClick={() => scrollToSection("feedback")}
          >
            Feedback
          </li>
          <li
            className="cursor-pointer hover:text-purple-500 text-white"
            onClick={() => scrollToSection("getstarted")}
          >
            Get Started
          </li>
          <li
            className="cursor-pointer hover:text-purple-500 text-white"
            onClick={() => scrollToSection("whatsnew")}
          >
            What's New
          </li>
          <li
            className="cursor-pointer hover:text-purple-500 text-white"
            onClick={() => scrollToSection("world")}
          >
            World
          </li>
        </ul>
      </div>
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-dark">
          <ul className="flex flex-col items-center py-4">
            <li
              className="py-2 cursor-pointer hover:text-purple-500"
              onClick={() => scrollToSection("about")}
            >
              About
            </li>
            <li
              className="py-2 cursor-pointer hover:text-purple-500"
              onClick={() => scrollToSection("explore")}
            >
              Explore
            </li>
            <li
              className="py-2 cursor-pointer hover:text-purple-500"
              onClick={() => scrollToSection("feedback")}
            >
              Feedback
            </li>
            <li
              className="py-2 cursor-pointer hover:text-purple-500"
              onClick={() => scrollToSection("getstarted")}
            >
              Get Started
            </li>
            <li
              className="py-2 cursor-pointer hover:text-purple-500"
              onClick={() => scrollToSection("whatsnew")}
            >
              What's New
            </li>
            <li
              className="py-2 cursor-pointer hover:text-purple-500"
              onClick={() => scrollToSection("world")}
            >
              World
            </li>
          </ul>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
