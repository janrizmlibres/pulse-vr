import TitleBlock from "./shared/TitleBlock";
import VideoPanel from "./shared/VideoPanel";

const Spotlight = () => {
  return (
    <section className="bg-shade-3 py-24">
      <TitleBlock
        heading="Explore epic worlds waiting for you"
        subheading="Featured VR Titles"
        className="text-center"
      />

      <div className="container-content">
        <VideoPanel />
      </div>
    </section>
  );
};

export default Spotlight;
