import { CheckIcon } from "@phosphor-icons/react";

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
            <p className="leading-6">per user</p>
            <p className="leading-6">per month</p>
          </div>
        </div>
      </header>

      <Button
        label="Get started"
        type="gradient"
        className="mb-6 w-full justify-center rounded-xl"
      />

      <ul>
        {features.map((feature, index) => (
          <li
            key={index}
            className="flex items-center gap-4 border-b-1 border-b-mono-2 py-4 text-lg"
          >
            <CheckIcon size={22} className="text-primary" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PriceCard;
