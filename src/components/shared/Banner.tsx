interface Props {
  heading: string;
  subheading: string;
  description: string;
  className?: string;
}

const Banner = ({ heading, subheading, description, className }: Props) => {
  return (
    <div className={`mb-16 flex items-center justify-between ${className}`}>
      <div className="basis-1/2">
        <p className="mb-4 subheading">{heading}</p>
        <h2 className="heading-secondary">{subheading}</h2>
      </div>

      <p className="basis-3/10 body-text">{description}</p>
    </div>
  );
};

export default Banner;
