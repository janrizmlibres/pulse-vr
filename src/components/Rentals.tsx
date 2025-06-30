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
      />

      <div className="container-content grid grid-cols-1 grid-rows-3 gap-8 md:grid-cols-2 lg:grid-rows-2">
        <ImagePanel
          imageSrc={kits}
          altText="VR Kits"
          title="All-Inclusive Kits"
          description="Get controllers, sensors, and everything you need to jump in"
          className="sm:max-md:max-h-72 md:row-span-2"
        />
        <ImagePanel
          imageSrc={gear}
          altText="Oculus, Valve, and HP VR headsets"
          title="Top Gear"
          description="Rent premium VR headsets like Oculus Quest 2, Valve Index, or HP Reverb G2"
          className="sm:max-md:max-h-72 md:max-lg:row-span-2"
        />
        <ImagePanel
          imageSrc={terms}
          altText="VR headsets on a table"
          title="Flexible Terms"
          description="Rent by the week, month, or longer—whatever suits your vibe"
          className="sm:max-lg:max-h-72 md:max-lg:col-span-2 md:max-lg:row-start-1"
        />
      </div>
    </section>
  );
};

export default Rentals;
