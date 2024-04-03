/* eslint-disable react/no-children-prop */
import { GradientBorderButton } from "./ui/GradientBorderButton";
import { TextEffect } from "./ui/TextEffect";

const Motto = () => {
  return (
    <div className="h-[100svh] bg-[#21262F] w-full dark:bg-blac dark:bg-grid-white/[0.4] bg-grid-black/[0.4] relative flex flex-col items-center justify-center">
      <div className="absolute bg-[#21262F] pointer-events-none inset-0 dark:bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="flex flex-col lg:gap-y-7 gap-y-5 items-center justify-center">
        <p className="font-cute-font lg:text-7xl md:text-[3.1rem] text-[1.6rem] font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-r from-[#FF52D8] to-[#00CBBF] pt-8">
          How about building something together?
        </p>
        <div className="w-[70%] text-center text-pretty mx-auto">
          <TextEffect words="With a passion for innovation and a commitment to excellence, I specialize in crafting bespoke software solutions tailored to your unique needs. From simple web components to single-page web apps, I bring creativity and expertise to every project, ensuring that each line of code contributes to your success story. Let's embark on a journey of creativity and functionality. Together, we'll build digital experiences that captivate audiences and drive results." />
        </div>
        <div className="my-6">
          <GradientBorderButton
            containerClassName="rounded-full"
            href="https://facebook.com/"
            target="_blank"
          >
            <span>Contact Me</span>
          </GradientBorderButton>
        </div>
      </div>
    </div>
  );
};

export default Motto;
