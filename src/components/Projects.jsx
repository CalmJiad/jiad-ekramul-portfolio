import { HeroParallax } from "./ui/HeroParallax";

const Projects = () => {
  const productsArr = [
    {
      title: "Eucaps",
      link: "https://eucaps.com/",
      thumbnail: "eucaps",
    },
    {
      title: "Neovotech",
      link: "https://www.neovotech.com/",
      thumbnail: "neovotech",
    },
    {
      title: "Padelmates",
      link: "https://eucaps.com/",
      thumbnail: "padelmates",
    },
    {
      title: "Codeaxes",
      link: "https://codeaxes.com/",
      thumbnail: "codeaxes",
    },
    {
      title: "Falcons Eye",
      link: "https://falcons-eye.web.app/",
      thumbnail: "falcons",
    },
    {
      title: "Neovotech",
      link: "https://www.neovotech.com/",
      thumbnail: "neovotech",
    },
    {
      title: "Trip Tale",
      link: "https://trip-tale.web.app/",
      thumbnail: "triptale",
    },
    {
      title: "Picture List",
      link: "https://picturelist.vercel.app/",
      thumbnail: "picturelist",
    },
    {
      title: "Codeaxes",
      link: "https://codeaxes.com/",
      thumbnail: "codeaxes",
    },
    {
      title: "Eucaps",
      link: "https://eucaps.com/",
      thumbnail: "eucaps",
    },
    {
      title: "Trip Tale",
      link: "https://trip-tale.web.app/",
      thumbnail: "triptale",
    },
    {
      title: "Padelmates",
      link: "https://eucaps.com/",
      thumbnail: "padelmates",
    },
  ];

  return (
    <div>
      <HeroParallax products={productsArr} />
    </div>
  );
};

export default Projects;
