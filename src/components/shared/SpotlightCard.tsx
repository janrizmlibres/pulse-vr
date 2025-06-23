interface Props {
  imageSrc: string;
  altText: string;
  title: string;
  description: string;
}

const SpotlightCard = ({ imageSrc, altText, title, description }: Props) => {
  return (
    <figure className="space-y-4 rounded-xl border-2 border-solid border-shade-2 bg-mono-4 p-8">
      <div className="overflow-hidden rounded-xl">
        <img src={imageSrc} alt={altText} className="object-cover" />
      </div>
      <h3 className="heading-tertiary">{title}</h3>
      <figcaption className="body-text">{description}</figcaption>
    </figure>
  );
};

export default SpotlightCard;
