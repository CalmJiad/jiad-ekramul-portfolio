/* eslint-disable react-hooks/exhaustive-deps */
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        // if scrolling down, hide the navbar
        setShow(false);
      } else {
        // if scrolling up, show the navbar
        setShow(true);
      }

      // remember the current page location for the next move
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <div
      className={`navbar bg-transparent border-b border-[#1D2534] flex justify-between items-center sticky top-0 w-full transition-transform duration-300 transform ${
        show ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost sm:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <motion.li
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <a href="#home">Home</a>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <a href="#projects">Projects</a>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <a href="#about">About</a>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <a href="#contact">Contact</a>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <a
                href="https://drive.google.com/file/d/1kH6rpSYw6X-uCyPNoJNzdBlQuFBd2aXQ/view?usp=sharing"
                target="__blank"
              >
                Resume
              </a>
            </motion.li>
          </ul>
        </div>
        <div className="pr-12"></div>
        <motion.a
          href="#Home"
          className="btn btn-ghost text-center text-[#6bc4a6] font-cute-font text-3xl font-medium"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Ekramul Jiad
        </motion.a>
      </div>
      <div className="navbar-center hidden sm:flex">
        <ul className="menu menu-horizontal px-12">
          <motion.li
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="hover:text-white"
          >
            <a href="#">Home</a>
          </motion.li>
          <motion.li
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="hover:text-white"
          >
            <a href="#">Projects</a>
          </motion.li>
          <motion.li
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="hover:text-white"
          >
            <a href="#">About</a>
          </motion.li>
          <motion.li
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="hover:text-white"
          >
            <a href="#">Contact</a>
          </motion.li>
          <motion.li
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="hover:text-white"
          >
            <a
              href="https://drive.google.com/file/d/1kH6rpSYw6X-uCyPNoJNzdBlQuFBd2aXQ/view?usp=sharing"
              target="__blank"
            >
              Resume
            </a>
          </motion.li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
