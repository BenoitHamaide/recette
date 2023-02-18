
import TitlePancake from "../TitlePancake/TitlePancake"
import SubtitlePancake from "../SubtitlePancake/SubtitlePancake";
import Navigation from "../Navigation";

const HeaderPancake = () => {

  return (
    <div className="HeaderPancake">
      <Navigation />
      <TitlePancake />
      <SubtitlePancake />
    </div>
  );
};

export default HeaderPancake;

