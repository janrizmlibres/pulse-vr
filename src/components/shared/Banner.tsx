interface Props {
  heading: string;
  subheading: string;
  description: string;
}

const Banner = ({ heading, subheading, description }: Props) => {
  return (
    <div className="container-content mb-16 flex justify-between gap-4 max-sm:flex-col sm:items-center">
      <div className="basis-1/2">
        <p className="mb-4 subheading">{heading}</p>
        <h2 className="heading-secondary">{subheading}</h2>
      </div>

      <p className="basis-3/10 body-text">{description}</p>
    </div>
  );
};

export default Banner;
