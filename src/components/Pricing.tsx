import PriceCard from "./shared/PriceCard";
import TitleBlock from "./shared/TitleBlock";

const Pricing = () => {
  return (
    <section className="bg-mono-3 py-24">
      <TitleBlock
        id="pricing"
        heading="Find the perfect plan for your VR journey"
        subheading="PulseVR Plans"
      />

      <div className="container-content">
        <div className="grid gap-y-8 rounded-xl bg-mono-4 p-4 sm:p-6 md:grid-cols-3 lg:px-16 lg:py-12">
          <PriceCard
            tier="Starter"
            price="$14.99"
            features={["150 Games", "Basic Support"]}
          />
          <PriceCard
            tier="Core"
            price="$24.99"
            features={["350 Games", "50% Off Rentals", "Priority Support"]}
            isHighlighted
          />
          <PriceCard
            tier="Elite"
            price="$44.99"
            features={["All 500+", "100% Off Rentals", "24/7 Support"]}
          />
        </div>
      </div>
    </section>
  );
};

export default Pricing;
