import { motion } from "framer-motion";
import profileImage from "../../public/images/profile2.png";
import "../index.css";
import styles from "../styles/heroArea.module.css";

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
    <div className="w-full h-[70svh] bg:transparent">
      <div className="w-full h-full bg-[#181E29] bg-opacity-70 flex justify-between items-center px-16">
        <div className="w-7/12 flex items-center justify-center ml-8">
          <div className="flex items-center justify-center">
            <motion.div
              className="textContainer"
              variants={textVariants}
              initial="initial"
              animate="animate"
            >
              <motion.h2
                variants={textVariants}
                className="font-cute-font text-[#836aae] text-[4.8em] tracking-[5px] font-semibold mb-0 pb-0"
              >
                Md Ekramul Haque Jiad
              </motion.h2>
              <motion.h1
                className="text-[1.5em] tracking-[2px] font-poppins font-medium text-white"
                variants={textVariants}
              >
                Software Developer & DevOps Enthusiast
              </motion.h1>
              <motion.div
                variants={textVariants}
                className="flex items-center gap-x-8 mt-10"
              >
                <motion.button
                  className="px-8 py-3 rounded-md bg-transparent border border-white btn btn-neutral hover:bg-[#2b3344] text-white hover:border-white hover:text-white"
                  variants={textVariants}
                >
                  Projects
                </motion.button>
                <motion.button
                  className="px-8 py-3 rounded-md bg-transparent border border-white btn btn-neutral hover:bg-[#2b3344] text-white hover:border-white hover:text-white"
                  variants={textVariants}
                >
                  Contact Me
                </motion.button>
              </motion.div>
              <motion.img
                variants={textVariants}
                animate="scrollButton"
                src="/scroll.png"
                alt=""
              />
            </motion.div>
          </div>
        </div>
        <div className="w-5/12 flex items-center justify-center">
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
