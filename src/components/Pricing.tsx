import TitleBlock from "./shared/TitleBlock";

const Pricing = () => {
  return (
    <section className="bg-shade-4 py-24">
      <TitleBlock
        heading="Find the perfect plan for your VR journey"
        subheading="PulseVR Plans"
      />

      <div className="container-content grid grid-cols-3">
        <div className="border-2 border-solid border-shade-4 p-8">
          <h4 className="heading-quaternary mb-4">Basic Plan</h4>
          <p className="body-text">Access to essential VR titles</p>
          <p className="body-text font-bold">$9.99/month</p>
        </div>

        <div className="border-2 border-solid border-shade-4 p-8">
          <h4 className="heading-quaternary mb-4">Standard Plan</h4>
          <p className="body-text">Access to all VR titles</p>
          <p className="body-text font-bold">$19.99/month</p>
        </div>

        <div className="border-2 border-solid border-shade-4 p-8">
          <h4 className="heading-quaternary mb-4">Premium Plan</h4>
          <p className="body-text">
            Access to all VR titles + exclusive content
          </p>
          <p className="body-text font-bold">$29.99/month</p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
