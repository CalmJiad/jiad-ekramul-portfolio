/* eslint-disable react/prop-types */
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

const items = [
  {
    id: 1,
    title: "Functional programming in JavaScript",
    description:
      "The functional programming paradigm is a way of writing code that revolves around functions as the primary building blocks of computation. In this...",
    image: "https://i.ibb.co/kxK6KPz/functionaljs.png",
    link: "https://hellojiad.hashnode.dev/functional-programming-in-javascript",
  },
  {
    id: 1,
    title: "Confusing increment operators",
    description:
      "Increment operators, which alter numbers and data in our code, are a vital feature of every programming language. It is one of the most commonly used...",
    image: "https://i.ibb.co/rZ8qxMy/post-increment.jpg",
    link: "https://hellojiad.hashnode.dev/confusing-post-increment-and-pre-increment-operators-in-javascript",
  },
  {
    id: 1,
    title: "Understanding Refs in Vue.js",
    description:
      "Vue.js is a popular JavaScript framework for building user interfaces. One of its many powerful features is the ability to reference elements in the...",
    image: "https://i.ibb.co/cyyZQPL/vuejs.jpg",
    link: "https://hellojiad.hashnode.dev/refs-in-vuejs-understanding-and-using-the-power-of-references-in-your-components",
  },
];

const SingleItem = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-300%"]);

  return (
    <section className="h-[calc(100svh-80px)] snap-start pt-24 ">
      <div className="flex items-center justify-center w-[75%] h-full mx-auto">
        <div className="max-w-[1366px] h-full m-auto flex md:flex-row flex-col gap-12 items-center justify-center overflow-hidden">
          <div ref={ref} className="lg:h-[50%] md:h-[40%] h-[30%] w-full">
            <img
              className="object-cover w-full h-full"
              src={item.image}
              alt=""
            />
          </div>
          <motion.div
            style={{ y }}
            className="flex flex-col gap-3 font-cute-font text-pretty"
          >
            <h2 className="lg:text-[2.55rem] md:text-[1.6rem] text-[1.35rem] md:text-left text-center text-white">
              {item.title}
            </h2>
            <p className="lg:text-[1.4rem] md:text-[1.2rem] text-[0.9rem] md:text-left text-center">
              {item.description}
            </p>
            <button className="rounded-md bg-transparent border border-white btn btn-neutral hover:bg-[#2b3344] text-white hover:border-white hover:text-white w-[100%] cursor-pointer text-xl">
              <a href={item.link} target="_blank">
                Read more
              </a>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const BlogShowcase = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <div
      className="h-full snap-y snap-mandatory relative scroll-smooth bg-[#0b1221] z-20"
      ref={ref}
    >
      <div className="bg-[#0b1221] sticky top-0 left-0 pb-16 pt-20 text-center text-orange-400 text-3xl z-10">
        <h1 className="pb-4 font-cute-font lg:text-7xl text-5xl">
          Recent Articles
        </h1>
        <motion.div
          style={{ scaleX }}
          className="md:h-2 h-1 bg-white"
        ></motion.div>
      </div>
      {items.map((item) => (
        <SingleItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default BlogShowcase;
