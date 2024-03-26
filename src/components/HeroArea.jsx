import { motion } from "framer-motion";
import profileImage from "../../public/images/profile.png";
import heroAreaCss from "../styles/heroArea.module.css";

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

  const sliderTextVariants = {
    initial: {
      x: 0,
    },
    animate: {
      x: "-220%",
      transition: {
        repeat: Infinity,
        duration: 20,
        repeatType: "mirror",
      },
    },
  };

  return (
    <div className="w-full h-[100vh] lg:bg-[url(/images/hero.png)] bg:transparent relative bg-cover bg-center bg-no-repeat border-b-[1.9em] border-[#232427] overflow-hidden">
      <div className="w-full h-full absolute top-0 left-0 bg-[#181E29] bg-opacity-70 flex justify-between items-center px-16">
        <div className="w-7/12 flex items-center justify-center ml-8">
          <div className="flex pb-24">
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
                className="text-[1.5em] tracking-[2px] font-poppins font-medium"
                variants={textVariants}
              >
                Software Developer & DevOps Enthusiast
              </motion.h1>
              <motion.div
                variants={textVariants}
                className="absolute flex items-center gap-x-8 mt-8"
              >
                <motion.button
                  className="px-8 py-3 rounded-md bg-transparent border border-white btn btn-neutral hover:bg-[#2b3344] hover:border-white hover:text-white"
                  variants={textVariants}
                >
                  Projects
                </motion.button>
                <motion.button
                  className="px-8 py-3 rounded-md bg-transparent border border-white btn btn-neutral hover:bg-[#2b3344] hover:border-white hover:text-white"
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
          <motion.div
            className="absolute pointer-events-none text-[40vh] -bottom-[120px] whitespace-nowrap text-[#ffffff09] w-full font-bold"
            variants={sliderTextVariants}
            initial="initial"
            animate="animate"
          >
            Frontend Backend Enthusiast Influencer
          </motion.div>
        </div>
        <div
          className={`w-4/12 absolute right-16 bottom-0 ${heroAreaCss.hidden}`}
        >
          <img
            src={profileImage}
            alt="Jiad-Profile-Img"
            className="h-[626px] w-[402px] object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroArea;
