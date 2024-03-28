/* eslint-disable react/no-children-prop */
import { GradientBorderButton } from "./ui/GradientBorderButton";
import { TextEffect } from "./ui/TextEffect";

const Motto = () => {
  return (
    <div className="h-[100svh] bg-[#21262F] w-full dark:bg-blac dark:bg-grid-white/[0.4] bg-grid-black/[0.4] relative flex flex-col items-center justify-center">
      <div className="absolute bg-[#21262F] pointer-events-none inset-0 flex flex-col items-center justify-center dark:bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <p className="text-4xl font-cute-font sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-r from-[#FF52D8] to-[#00CBBF] py-8">
        How about building something together?
      </p>
      <div className="w-8/12">
        <TextEffect words="With a passion for innovation and a commitment to excellence, I specialize in crafting bespoke software solutions tailored to your unique needs. From simple web components to single-page web apps, I bring creativity and expertise to every project, ensuring that each line of code contributes to your success story. Let's embark on a journey of creativity and functionality. Together, we'll build digital experiences that captivate audiences and drive results." />
      </div>
      <div className="pt-16">
        <GradientBorderButton
          containerClassName="rounded-full"
          href="https://facebook.com/"
          target="_blank"
        >
          <span>Contact Me</span>
        </GradientBorderButton>
      </div>
    </div>
  );
};

export default Motto;
