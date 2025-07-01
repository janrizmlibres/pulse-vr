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
      <video className="w-full" autoPlay loop muted playsInline>
        <source src={webmSrc} type="video/webm" />
        <source src={mp4Src} type="video/mp4" />
        Your browser doesn't support HTML video.
      </video>

      <div className="inset-0 -mt-12 flex flex-col justify-end bg-spotlight p-4 sm:p-12 sm:max-lg:-mt-24 lg:absolute lg:pr-24">
        <div className="grid grid-cols-1 items-center gap-x-16 gap-y-2 lg:grid-cols-[45fr_55fr]">
          <img
            className="w-full rounded-xl border-2 border-solid border-shade-3 max-lg:max-w-xs"
            src={imageSrc}
            alt={altText}
          />
          <div className="max-sm:p-2">
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
