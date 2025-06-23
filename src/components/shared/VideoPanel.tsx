import Button from "./Button";

interface Props {
  webmSrc: string;
  mp4Src: string;
  imageSrc: string;
  altText: string;
  title: string;
  description: string;
}

const VideoPanel = ({
  webmSrc,
  mp4Src,
  imageSrc,
  altText,
  title,
  description,
}: Props) => {
  return (
    <div className="relative overflow-hidden rounded-xl border-2 border-solid border-shade-3">
      <video className="w-full" autoPlay loop>
        <source src={webmSrc} type="video/webm" />
        <source src={mp4Src} type="video/mp4" />
        Your browser doesn't support HTML video.
      </video>

      <div className="absolute inset-0 flex flex-col justify-end bg-spotlight p-12 pr-24">
        <div className="grid grid-cols-[45fr_55fr] items-center gap-16">
          <img
            className="w-full rounded-xl border-2 border-solid border-shade-3"
            src={imageSrc}
            alt={altText}
          />
          <div>
            <h3 className="mb-4 heading-tertiary">{title}</h3>
            <p className="mb-2 body-text">{description}</p>
            <p className="mb-4 font-semibold tracking-wider">Available Now</p>
            <Button
              label="Learn More"
              type="plain-inverted"
              className="rounded-xl border-shade-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPanel;
