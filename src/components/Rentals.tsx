import Banner from "./shared/Banner";
import ImagePanel from "./shared/ImagePanel";
import gear from "../assets/images/rentals/gear.png";
import kits from "../assets/images/rentals/kits.jpg";
import terms from "../assets/images/rentals/terms.jpg";

const Rentals = () => {
  return (
    <section className="bg-shade-4 py-24">
      <Banner
        heading="Premium VR Gear"
        subheading="Top-tier VR without the price tag"
        description="Rent premium VR headsets and full kits for a flexible, cost-effective way to experience top-tier virtual reality gaming."
        className="container-content"
      />

      <div className="container-content grid grid-cols-2 grid-rows-2 gap-8">
        <ImagePanel
          imageSrc={kits}
          altText="VR Kits"
          title="All-Inclusive Kits"
          description="Get controllers, sensors, and everything you need to jump in"
          isMain
        />
        <ImagePanel
          imageSrc={gear}
          altText="Oculus, Valve, and HP VR headsets"
          title="Top Gear"
          description="Rent premium VR headsets like Oculus Quest 2, Valve Index, or HP Reverb G2"
        />
        <ImagePanel
          imageSrc={terms}
          altText="VR headsets on a table"
          title="Flexible Terms"
          description="Rent by the week, month, or longer—whatever suits your vibe"
        />
      </div>
    </section>
  );
};

export default Rentals;
