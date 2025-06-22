import SpotlightCard from "./shared/SpotlightCard";
import TitleBlock from "./shared/TitleBlock";
import VideoPanel from "./shared/VideoPanel";
import asgardImg from "../assets/images/spotlight/asgard.jpg";
import astrobot from "../assets/images/spotlight/astro-bot.jpg";
import beatSaber from "../assets/images/spotlight/beat-saber.jpg";
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

      <div className="container-content mb-12 space-y-8">
        <VideoPanel
          webmSrc={memoreumWebm}
          mp4Src={memoreumMp4}
          imageSrc={memoreumImg}
          altText="Memoreum game front cover art"
          title="Memoreum"
          description="Experience a thrilling sci-fi horror adventure in a dystopian future"
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

      <div className="container-content grid grid-cols-2 gap-8">
        <SpotlightCard
          imageSrc={astrobot}
          altText="Astro Bot Rescue Mission game front cover art"
          title="Astro Bot Rescue Mission"
          description="Join Astro Bot on a mission to rescue his friends in this charming platformer"
        />

        <SpotlightCard
          imageSrc={beatSaber}
          altText="Beat Saber game front cover art"
          title="Beat Saber"
          description="Slice through beats in this rhythm-based VR game that will get you moving"
        />
      </div>
    </section>
  );
};

export default Spotlight;
