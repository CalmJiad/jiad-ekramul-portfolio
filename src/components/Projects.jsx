import { Element } from "react-scroll";
import { HeroParallax } from "./ui/HeroParallax";

const Projects = () => {
  const productsArr = [
    {
      title: "Eucaps",
      link: "https://eucaps.com/",
      thumbnail: "https://i.ibb.co/TLm9rvc/eucaps.png",
    },
    {
      title: "Neovotech",
      link: "https://www.neovotech.com/",
      thumbnail: "https://i.ibb.co/MpQdX50/neovotech.png",
    },
    {
      title: "Padelmates",
      link: "https://padelmates.se/",
      thumbnail: "https://i.ibb.co/bsf1Js1/padelmates.png",
    },
    {
      title: "Eucaps",
      link: "https://eucaps.com/",
      thumbnail: "https://i.ibb.co/n6snmvT/eucaps2.jpg",
    },
    {
      title: "Neovotech",
      link: "https://www.neovotech.com/",
      thumbnail: "https://i.ibb.co/MpQdX50/neovotech.png",
    },
    {
      title: "Trip Tale",
      link: "https://trip-tale.web.app/",
      thumbnail: "https://i.ibb.co/7yFNTyz/triptale.png",
    },

    {
      title: "Codeaxes",
      link: "https://codeaxes.com/",
      thumbnail: "https://i.ibb.co/MPm7fKh/codeaxes.png",
    },
    {
      title: "Eucaps",
      link: "https://eucaps.com/",
      thumbnail: "https://i.ibb.co/TLm9rvc/eucaps.png",
    },
    {
      title: "Trip Tale",
      link: "https://trip-tale.web.app/",
      thumbnail: "https://i.ibb.co/7yFNTyz/triptale.png",
    },
    {
      title: "Padelmates",
      link: "https://padelmates.se/",
      thumbnail: "https://i.ibb.co/bsf1Js1/padelmates.png",
    },
  ];

  return (
    <Element id="projects" name="projects">
      <div>
        <HeroParallax products={productsArr} />
      </div>
    </Element>
  );
};

export default Projects;
