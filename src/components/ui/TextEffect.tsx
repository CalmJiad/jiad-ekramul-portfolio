"use client";
import { motion, stagger, useAnimate } from "framer-motion";
import { useEffect } from "react";
import { cn } from "../../utils/cn";

export const TextEffect = ({
  words,
  className,
}: {
  words: string;
  className?: string;
}) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");
  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
      },
      {
        duration: 15,
        delay: stagger(0.2),
      }
    );
  }, [scope.current]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span key={word + idx} className="opacity-0 font-medium">
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-medium", className)}>
      <div className="mt-4">
        <div className="font-cute-font text-3xl leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
