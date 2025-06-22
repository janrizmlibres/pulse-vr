interface Props {
  heading: string;
  subheading: string;
  description: string;
  children: React.ReactNode;
}

const AsidePanel = ({ heading, subheading, description, children }: Props) => {
  return (
    <div className="container-content grid grid-cols-2 gap-x-12">
      <div>
        <p className="mb-4 subheading">{subheading}</p>
        <h2 className="mb-8 heading-secondary">{heading}</h2>
        <p className="body-text">{description}</p>
      </div>

      {children}
    </div>
  );
};

export default AsidePanel;
