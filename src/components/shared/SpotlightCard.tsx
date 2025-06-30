import Button from "./Button";

interface Props {
  imageSrc: string;
  altText: string;
  title: string;
  description: string;
}

const SpotlightCard = ({ imageSrc, altText, title, description }: Props) => {
  return (
    <figure className="space-y-4 rounded-xl border-2 border-solid border-shade-3 bg-mono-4 p-4 pb-6 sm:p-8">
      <div className="overflow-hidden rounded-xl">
        <img src={imageSrc} alt={altText} className="object-cover" />
      </div>
      <h3 className="heading-tertiary max-sm:px-2">{title}</h3>
      <figcaption className="body-text max-sm:px-2">{description}</figcaption>
      <p className="mb-6 font-semibold tracking-wider max-sm:px-2">
        Available Now
      </p>
      <Button
        label="Buy Now"
        type="gradient"
        href="#pricing"
        className="rounded-xl max-sm:mx-2"
      />
    </figure>
  );
};

export default SpotlightCard;
