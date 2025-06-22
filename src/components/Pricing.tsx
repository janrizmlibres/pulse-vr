import PriceCard from "./shared/PriceCard";
import TitleBlock from "./shared/TitleBlock";

const Pricing = () => {
  return (
    <section className="bg-shade-4 py-24">
      <TitleBlock
        heading="Find the perfect plan for your VR journey"
        subheading="PulseVR Plans"
      />

      <div className="container-content grid grid-cols-3 rounded-xl bg-mono-3 px-24 py-16">
        <PriceCard
          tier="Starter"
          price="$14.99"
          features={["150 Games", "Basic Support"]}
        />
        <PriceCard
          tier="Core"
          price="$24.99"
          features={["350 Games", "50% Off Rentals", "Priority Support"]}
        />
        <PriceCard
          tier="Elite"
          price="$44.99"
          features={["All 500+", "100% Off Rentals", "24/7 Support"]}
          isHighlighted
        />
      </div>
    </section>
  );
};

export default Pricing;
