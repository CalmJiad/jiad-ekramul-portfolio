import emailjs from "@emailjs/browser";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const Contact = () => {
  const ref = useRef();
  const formref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });
  //   const [error, setError] = useState(false);
  //   const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_mt32l3x", "template_0y92x8o", formref.current, {
        publicKey: "DinS6aMYg-2lGPFs3",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          //   setSuccess(true);
        },
        (error) => {
          console.log("FAILED...", error.text);
          //   setError(true);
        }
      );
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="initial"
      whileInView="animate"
      className="min-h-[100svh] max-w-[1366px] m-auto flex lg:flex-row flex-col items-center justify-center lg:space-x-32 space-x-0 overflow-hidden"
    >
      <motion.div
        variants={variants}
        className="space-y-8 font-cute-font text-2xl xl:mr-10 mr-0 lg:ml-0 ml:10 lg:mb-0 mb-8 pt-8"
      >
        <motion.h1
          variants={variants}
          className="xl:text-5xl lg:text-4xl md:text-8xl text-5xl"
        >
          Let&apos;s have a chat
        </motion.h1>
        <motion.div variants={variants} className="item">
          <h2 className="text-3xl font-medium flex items-center m-auto gap-x-2">
            <FontAwesomeIcon width={"19px"} icon={faEnvelope} />
            <div>Email</div>
          </h2>
          <span>ekramuljiad.dev@gmail.com</span>
        </motion.div>
        <motion.div variants={variants} className="item">
          <h2 className="text-3xl font-medium flex items-center m-auto gap-x-2">
            <FontAwesomeIcon width={"17px"} icon={faLocationDot} />
            <div>Address</div>
          </h2>
          <span>Duisburg, 47053, Germany</span>
        </motion.div>
        <div className="item">
          <h2 className="text-3xl font-medium flex items-center m-auto gap-x-2">
            <FontAwesomeIcon width={"17px"} icon={faPhone} />
            <div>Phone</div>
          </h2>
          <span>+4915759781853</span>
        </div>
        <div className="item">
          <h2 className="text-sm font-medium flex items-center m-auto gap-x-2">
            #Copyright © 2024 - All Rights Reserved By Ekramul Jiad
          </h2>
          <h2 className="text-sm font-medium flex items-center m-auto gap-x-2">
            #Designed & Developed By Ekramul Jiad
          </h2>
        </div>
      </motion.div>
      <div className="xl:w-[570px] lg:w-[400px] md:w-[500px] w-[90%] font-cute-font text-xl lg:pb-0 pb-8 pt-8">
        <motion.div
          style={{ stroke: "#8D80FA" }}
          className="absolute pointer-events-none m-auto"
          initial={{ opacity: 1 }}
          whileInView={{ opacity: 0 }}
          transition={{ delay: 3, duration: 1 }}
        >
          <svg
            className="lg:w-[400px] lg:h-[400px] md:w-[350px] md:h-[350px] w-[250px] h-[250px] xl:mt-10 lg:mt-0 mt-20 xl:ml-16 lg:ml-0 md:ml-20 3xs:ml-16 2xs:ml-16 ml-4"
            viewBox="0 0 32.666 32.666"
          >
            <motion.path
              strokeWidth={0.2}
              fill="none"
              initial={{ pathLength: 0 }}
              animate={isInView && { pathLength: 1 }}
              transition={{ duration: 3 }}
              d="M28.189,16.504h-1.666c0-5.437-4.422-9.858-9.856-9.858l-0.001-1.664C23.021,4.979,28.189,10.149,28.189,16.504z
            M16.666,7.856L16.665,9.52c3.853,0,6.983,3.133,6.981,6.983l1.666-0.001C25.312,11.735,21.436,7.856,16.666,7.856z M16.333,0
            C7.326,0,0,7.326,0,16.334c0,9.006,7.326,16.332,16.333,16.332c0.557,0,1.007-0.45,1.007-1.006c0-0.559-0.45-1.01-1.007-1.01
            c-7.896,0-14.318-6.424-14.318-14.316c0-7.896,6.422-14.319,14.318-14.319c7.896,0,14.317,6.424,14.317,14.319
            c0,3.299-1.756,6.568-4.269,7.954c-0.913,0.502-1.903,0.751-2.959,0.761c0.634-0.377,1.183-0.887,1.591-1.529
            c0.08-0.121,0.186-0.228,0.238-0.359c0.328-0.789,0.357-1.684,0.555-2.518c0.243-1.064-4.658-3.143-5.084-1.814
            c-0.154,0.492-0.39,2.048-0.699,2.458c-0.275,0.366-0.953,0.192-1.377-0.168c-1.117-0.952-2.364-2.351-3.458-3.457l0.002-0.001
            c-0.028-0.029-0.062-0.061-0.092-0.092c-0.031-0.029-0.062-0.062-0.093-0.092v0.002c-1.106-1.096-2.506-2.34-3.457-3.459
            c-0.36-0.424-0.534-1.102-0.168-1.377c0.41-0.311,1.966-0.543,2.458-0.699c1.326-0.424-0.75-5.328-1.816-5.084
            c-0.832,0.195-1.727,0.227-2.516,0.553c-0.134,0.057-0.238,0.16-0.359,0.24c-2.799,1.774-3.16,6.082-0.428,9.292
            c1.041,1.228,2.127,2.416,3.245,3.576l-0.006,0.004c0.031,0.031,0.063,0.06,0.095,0.09c0.03,0.031,0.059,0.062,0.088,0.095
            l0.006-0.006c1.16,1.118,2.535,2.765,4.769,4.255c4.703,3.141,8.312,2.264,10.438,1.098c3.67-2.021,5.312-6.338,5.312-9.719
            C32.666,7.326,25.339,0,16.333,0z"
            />
          </svg>
        </motion.div>
        <motion.form
          onSubmit={sendEmail}
          ref={formref}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 4, duration: 1 }}
          className="flex flex-col gap-y-4"
        >
          <input
            className="p-4 bg-transparent border border-[#A6ADBB] rounded-md"
            type="text"
            required
            placeholder="Name"
            name="name"
          />
          <input
            className="p-4 bg-transparent border border-[#A6ADBB] rounded-md"
            type="email"
            required
            placeholder="Email"
            name="email"
          />
          <textarea
            className="p-4 bg-transparent border border-[#A6ADBB] rounded-md"
            rows={8}
            required
            placeholder="Message"
            name="message"
          ></textarea>
          <button className="px-8 py-2 rounded-md bg-transparent border border-[#A6ADBB] btn btn-neutral hover:bg-[#2b3344] text-white hover:border-[#A6ADBB] hover:text-white w-[100%] cursor-pointer">
            Submit
          </button>
        </motion.form>
      </div>
    </motion.div>
  );
};

export default Contact;
