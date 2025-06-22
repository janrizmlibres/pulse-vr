import TitleBlock from "./shared/TitleBlock";
import VideoPanel from "./shared/VideoPanel";
import asgardImg from "../assets/images/spotlight/asgard.jpg";
import memoreumImg from "../assets/images/spotlight/memoreum.jpg";
import asgardMp4 from "../assets/videos/asgard.mp4";
import asgardWebm from "../assets/videos/asgard.webm";
import memoreumMp4 from "../assets/videos/memoreum.mp4";
import memoreumWebm from "../assets/videos/memoreum.webm";

const Spotlight = () => {
  return (
    <section className="bg-shade-3 py-24">
      <TitleBlock
        heading="Explore epic worlds waiting for you"
        subheading="Featured VR Titles"
        className="text-center"
      />

      <div className="container-content space-y-12">
        <VideoPanel
          webmSrc={memoreumWebm}
          mp4Src={memoreumMp4}
          imageSrc={memoreumImg}
          altText="Memoreum game front cover art"
          title="Memoreum"
          description="Battle across the galaxy in this multiplayer space shooter"
        />
        <VideoPanel
          webmSrc={asgardWebm}
          mp4Src={asgardMp4}
          imageSrc={asgardImg}
          altText="Asgard game front cover art"
          title="Asgard's Wrath 2"
          description="Embark on a journey through Norse mythology in this epic adventure"
        />
      </div>
    </section>
  );
};

export default Spotlight;
