interface Props {
  image: string;
  altText: string;
}

const Card = ({ image, altText }: Props) => {
  return (
    <div>
      <div>
        <img src={image} alt={altText} />
      </div>
    </div>
  );
};

export default Card;
