interface Props {
  heading: string;
  subheading: string;
  description: string;
  children: React.ReactNode;
}

const AsidePanel = ({ heading, subheading, description, children }: Props) => {
  return (
    <div className="container-content grid grid-cols-1 gap-x-12 md:grid-cols-3 lg:grid-cols-2">
      <div>
        <p className="mb-4 subheading">{subheading}</p>
        <h2 className="mb-8 heading-secondary-break-lg">{heading}</h2>
        <p className="body-text">{description}</p>
      </div>

      <div className="max-lg:col-span-2 max-md:mt-8">{children}</div>
    </div>
  );
};

export default AsidePanel;
