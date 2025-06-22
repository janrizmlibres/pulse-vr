interface Props {
  heading: string;
  subheading: string;
}

const TitleBlock = ({ heading, subheading }: Props) => {
  return (
    <div className="container-content">
      <p className="mb-4 subheading">{subheading}</p>
      <h2 className="mb-16 heading-secondary">{heading}</h2>
    </div>
  );
};

export default TitleBlock;
