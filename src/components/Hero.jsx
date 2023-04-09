import React from "react";
import { FaArrowDown } from "react-icons/fa";
import avatar from "@/assets/hero.svg";
import { motion } from "framer-motion";
import { staggerContainer, zoomIn } from "@/utils/motion";
import { TypingText } from "@/components/CustomTexts";

const Hero = () => {
  window.addEventListener("scroll", function () {
    const downArrow = document.querySelector(".down-arrow");

    if (this.scrollY >= 90) downArrow.classList.add("hide-down-arrow");
    else downArrow.classList.remove("hide-down-arrow");
  });

  return (
    <motion.section
      name="inicio"
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="min-h-screen flex flex-col justify-start items-center p-5 text-center pt-16"
    >
      <TypingText
        title="Bryan Sañudo Garcia"
        textStyles="font-bold text-4xl my-8 text-center text-transparent bg-clip-text  bg-gradient-to-r from-[#29A52D] to-[#5C24B3] hover:from-[#5C24B3] hover:to-[#29A52D] transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 md:text-5xl"
      />
      <TypingText title="Ingeniero de software " textStyles="py-3 text-2xl" />
      <p className="max-w-xl font-light text-gray-500 mb-10">
        Hola <span className="animate-pulse text-4xl">👋</span>, Bienvenido/a a
        mi sitio. Soy desarrollador frontend con énfasis en Diseño UX/UI. Me
        encanta trabajar en desarrollo web.
      </p>

      <motion.div variants={zoomIn(0.4, 1)}>
        <a
          href="/hdvBryanEsp.pdf"
          download={true}
          className="flex items-center justify-center  bg-gradient-to-r from-[#29A52D] to-[#5C24B3] text-white py-2 rounded-lg mb-10 hover:scale-110 duration-300"
        >
          HDV
        </a>
        <img
          src={avatar}
          alt=""
          className=" h-[280px] w-full md:h-[400px] object-cover object-top bg-gradient-to-b from-[#29A52D] rounded-xl m"
        />
      </motion.div>

      <div className="mt-10 down-arrow">
        <FaArrowDown className="text-gray-400 text-2xl animate-bounce" />
      </div>
    </motion.section>
  );
};

export default Hero;
