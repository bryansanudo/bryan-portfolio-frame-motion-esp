import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import { MdNightsStay, MdWbSunny } from "react-icons/md";

const Navbar = ({ darkMode, setDarkMode }) => {
  const [isMenuShown, setIsMenuShown] = useState(false);
  const links = [
    {
      id: 1,
      link: "inicio",
    },
    {
      id: 2,
      link: "portafolio",
    },
    {
      id: 3,
      link: "tecnologías",
    },
    {
      id: 4,
      link: "contacto",
    },
  ];

  return (
    <>
      <div className="fixed w-full h-16 bg-gray-900 text-white z-20  ">
        <div className="flex justify-between  md:gap-5 items-center max-w-screen-xl mx-auto px-8 h-full">
          <div className="hidden lg:flex items-center">
            <ul className="flex ">
              {links.map(({ id, link }) => (
                <Link key={id} to={link} smooth duration={500}>
                  <li className="p-4 uppercase duration-300 hover:text-[#29A52D] hover:scale-110 cursor-pointer">
                    {link}
                  </li>
                </Link>
              ))}
            </ul>
          </div>

          <div
            onClick={() => setIsMenuShown(!isMenuShown)}
            className="block lg:hidden cursor-pointer"
          >
            {isMenuShown ? <FaTimes size={30} /> : <FaBars size={30} />}
          </div>

          <div className="flex items-center flex-row justify-center gap-2 ">
            <div onClick={() => setDarkMode(!darkMode)}>
              {darkMode ? (
                <MdWbSunny className="text-2xl cursor-pointer hover:text-[#29A52D] duration-300" />
              ) : (
                <MdNightsStay className="text-2xl cursor-pointer hover:text-[#29A52D] duration-300" />
              )}
            </div>
            <a href="#">
              <span className="hover:text-[#29A52D] duration-300">ENG</span>
            </a>
            <a href="#">
              <span className="hover:text-[#29A52D] duration-300">ESP</span>
            </a>
          </div>
        </div>
      </div>

      <div
        className={`fixed w-full  text-white z-10 left-0 h-fit py-12 lg:hidden flex justify-center text-center text-2xl duration-500 ${
          isMenuShown
            ? "top-16 rounded-b-2xl bg-gray-900 opacity-95"
            : "top-[-100%]"
        }`}
      >
        <ul>
          {links.map(({ id, link }) => (
            <Link
              onClick={() => setIsMenuShown(!isMenuShown)}
              to={link}
              smooth
              duration={500}
              key={id}
            >
              <li className="p-4 uppercase cursor-pointer duration-300 hover:text-thPrimary">
                {link}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
