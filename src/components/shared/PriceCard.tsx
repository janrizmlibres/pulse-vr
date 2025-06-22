import Button from "./Button";
import { cn } from "../../utils";

interface Props {
  tier: string;
  price: string;
  features: string[];
  isHighlighted?: boolean;
}

const PriceCard = ({ tier, price, features, isHighlighted }: Props) => {
  return (
    <div className={cn("rounded-xl p-10", isHighlighted && "bg-shade-3")}>
      <header className="mb-6">
        <h3 className="mb-6 heading-tertiary">{tier}</h3>
        <div className="flex items-center gap-8">
          <p className="text-3xl font-bold">{price}</p>
          <div className="body-text">
            <p>per user</p>
            <p>per month</p>
          </div>
        </div>
      </header>

      <Button label="Sign Up" className="mb-6 w-full" />

      <ul>
        {features.map((feature, index) => (
          <li key={index} className="border-b-1 border-b-mono-2">
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PriceCard;
