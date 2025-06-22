import { cn } from "../../utils";

interface Props {
  imageSrc: string;
  altText: string;
  title: string;
  description: string;
  isMain?: boolean;
}

const ImagePanel = ({
  imageSrc,
  altText,
  title,
  description,
  isMain = false,
}: Props) => {
  return (
    <figure
      className={cn(
        "relative overflow-hidden rounded-xl shadow-panel",
        isMain && "row-span-2"
      )}
    >
      <img
        src={imageSrc}
        alt={altText}
        className="h-full w-full transition-all duration-300 hover:scale-105"
      />
      <div className="pointer-events-none absolute inset-0 flex flex-col justify-end bg-panel p-6">
        <div className="w-4/5">
          <h3 className="mb-2 heading-tertiary-sm">{title}</h3>
          <p className="body-text">{description}</p>
        </div>
      </div>
    </figure>
  );
};

export default ImagePanel;
