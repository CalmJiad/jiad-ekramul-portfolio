import { motion } from "framer-motion";
import "../index.css";
import styles from "../styles/heroArea.module.css";
import profileImage from "/images/profile2.png";

const HeroArea = () => {
  const textVariants = {
    initial: {
      x: -500,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
    scrollButton: {
      opacity: 0,
      y: 10,
      transition: {
        duration: 2,
        repeat: Infinity,
      },
    },
  };

  return (
    <div className="w-full md:h-[70svh] h-[calc(100svh-75px)] bg:transparent">
      <div className="w-full h-full bg-[#181E29] bg-opacity-70 flex sm:flex-row flex-col justify-between items-center px-6">
        <div className="sm:w-1/12"></div>
        <div className="sm:w-6/12 w-full">
          <motion.div
            className="textContainer sm:text-left text-center flex flex-col sm:justify-start justify-center sm:items-start items-center"
            variants={textVariants}
            initial="initial"
            animate="animate"
          >
            <motion.h2
              variants={textVariants}
              className="font-cute-font text-[#836aae] xl:text-[4.8em] lg:text-[3.2em] md:text-[2.8em] text-[2.5em] lg:tracking-[5px] md:tracking-[2px] tracking-[0px] font-semibold mb-0 pb-0"
            >
              Md Ekramul Haque Jiad
            </motion.h2>
            <motion.h1
              className="xl:text-[2.6em] lg:text-[2em] md:[1.9em] 2xs:text-[1.24em] text-[1.2em] xl:tracking-[2px] md:tracking-[1px] tracking-[0.4px] font-cute-font font-medium text-white"
              variants={textVariants}
            >
              Software Developer & DevOps Enthusiast
            </motion.h1>
            <motion.div
              variants={textVariants}
              className="flex items-center sm:justify-start justify-between gap-x-8 lg:mt-10 md:mt-7 mt-6"
            >
              <motion.button
                className="lg:px-8 lg:py-3 md:px-4 md:py-1 px-4 py-[0.15rem] rounded-md bg-transparent border border-white btn btn-neutral hover:bg-[#2b3344] text-white hover:border-white hover:text-white"
                variants={textVariants}
              >
                Projects
              </motion.button>
              <motion.button
                className="lg:px-8 lg:py-3 md:px-4 md:py-1 px-4 py-[0.15rem] rounded-md bg-transparent border border-white btn btn-neutral hover:bg-[#2b3344] text-white hover:border-white hover:text-white"
                variants={textVariants}
              >
                Contact Me
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
        <div className="sm:w-5/12 flex items-center justify-center w-full sm:py-0 py-10">
          <div className={styles.fancyBorderBox}>
            <div className={styles.content}>
              <img
                className={styles.image}
                src={profileImage}
                alt="Jiad-Profile-Img"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroArea;
