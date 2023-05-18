"use client";

import { motion } from "framer-motion";
import { TypingText } from "../components";

import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";

const About = () => (
  <section id="about" className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Cosmonet" textStyles="text-center" />

      <motion.p
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <span className="font-extrabold text-white">Cosmonet</span> the gateway
        to an extraordinary virtual realm that blurs the line between
        imagination and reality. Immerse yourself in a{" "}
        <span className="font-extrabold text-white">metaverse</span> experience
        like never before, where the boundaries of possibility are pushed to the
        extreme. With the power of{" "}
        <span className="font-extrabold text-white">
          virtual reality (VR) devices
        </span>{" "}
        CosmoNet transports you to limitless worlds, allowing you to tangibly{" "}
        <span className="font-extrabold text-white"> feel the wonders</span> of
        this digital universe.
      </motion.p>

      <motion.img
        variants={fadeIn("up", "tween", 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
