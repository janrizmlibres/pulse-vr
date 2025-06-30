interface Props {
  imageSrc: string;
  altText: string;
  title: string;
  description: string;
}

const FeatureCard = ({ imageSrc, altText, title, description }: Props) => {
  return (
    <div className="relative">
      <span className="absolute inset-0 z-0 mt-16 rounded-xl shadow-card"></span>
      <div className="relative z-1 flex h-full flex-col px-6 pb-6 lg:px-8 lg:pb-8">
        <img
          src={imageSrc}
          alt={altText}
          className="mx-auto mb-auto w-full max-w-2xs"
        />
        <h3 className="mb-4 heading-tertiary">{title}</h3>
        <p className="body-text">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
