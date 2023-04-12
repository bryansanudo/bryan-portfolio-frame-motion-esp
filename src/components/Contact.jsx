import React from "react";
import Section from "@/components/common/Section";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

import { motion } from "framer-motion";

import { fadeIn, staggerContainer, zoomIn } from "@/utils/motion";

const Contact = () => {
  const SOCIAL = [
    {
      id: 1,
      link: "https://github.com/bryansanudo",
      icon: <FaGithub />,
    },
    {
      id: 2,
      link: "https://www.instagram.com/bryan_sanudo/",
      icon: <FaInstagram />,
    },
    {
      id: 3,
      link: "https://www.linkedin.com/in/bryan-sa%C3%B1udo-garcia-299923271/",
      icon: <FaLinkedin />,
    },
  ];

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
    >
      <Section
        name="contacto"
        title="Contacto"
        subtitle=" Estoy dispuesto a hablar sobre oportunidades de medio tiempo o tiempo completo. Siéntete libre de contactarme a través de tu medio preferido."
      >
        <div className="flex flex-col items-center justify-center gap-8 text-center">
          <motion.div
            variants={fadeIn("right", "tween", 0.5, 1)}
            className="flex w-full items-center justify-evenly text-3xl"
          >
            {SOCIAL.map(({ id, link, icon }) => (
              <a
                key={id}
                href={link}
                target="_blank"
                rel="noopener noreferrerr"
                className="duration-500 hover:scale-150 "
              >
                {icon}
              </a>
            ))}
          </motion.div>

          <div className="p-8 text-left md:w-[500px] w-[300px]">
            <form
              action="https://getform.io/f/16a9722a-c19f-41b1-97cb-c1e57bf098f5"
              method="POST"
            >
              <div className="flex flex-col gap-2 w-full ">
                <motion.div
                  className="flex flex-col"
                  variants={zoomIn(0.5, 1.5)}
                >
                  <label className="capitalize text-sm py-2 font-extralight">
                    nombre
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white"
                  />
                </motion.div>
                <motion.div className="flex flex-col" variants={zoomIn(1, 1.5)}>
                  <label className="capitalize text-sm py-2 font-extralight">
                    teléfono
                  </label>
                  <input
                    type="text"
                    name="phone"
                    className="border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white"
                  />
                </motion.div>
                <motion.div
                  className="flex flex-col"
                  variants={zoomIn(1.5, 1.5)}
                >
                  <label className="capitalize text-sm py-2 font-extralight">
                    correo
                  </label>
                  <input
                    type="text"
                    name="email"
                    className="border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white"
                  />
                </motion.div>
                <motion.div
                  className="flex flex-col"
                  variants={zoomIn(2.0, 1.5)}
                >
                  <label className="capitalize text-sm py-2 font-extralight">
                    mensaje
                  </label>
                  <textarea
                    name="message"
                    rows="4"
                    className="border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white resize-none"
                  ></textarea>
                </motion.div>
              </div>

              <div className="flex items-center justify-center">
                <button className="my-8 bg-gradient-to-r from-[#29A52D] to-[#5C24B3] text-white px-6 py-3  rounded-md tracking-wider cursor-pointer hover:scale-105 duration-200 capitalize">
                  Enviar Mensaje
                </button>
              </div>
            </form>
          </div>
        </div>
      </Section>
    </motion.div>
  );
};

export default Contact;
