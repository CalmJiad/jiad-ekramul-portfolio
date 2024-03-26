import profileImage from "../../public/images/profile.png";
import heroAreaCss from "../styles/heroArea.module.css";

const HeroArea = () => {
  return (
    <div className="w-full h-[734.5px] lg:bg-[url(/images/hero.png)] bg:transparent relative bg-cover bg-center bg-no-repeat border-b-[1.9em] border-[#232427]">
      <div className="w-full h-full absolute top-0 left-0 bg-[#181E29] bg-opacity-70 flex justify-around items-center px-16">
        <div className="w-8/12 flex items-center justify-center"></div>
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
