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
    <div
      className={cn("rounded-xl p-6 lg:p-10", isHighlighted && "bg-shade-3")}
    >
      <header className="mb-6">
        <h3 className="mb-6 heading-tertiary">{tier}</h3>
        <div className="flex items-center gap-4 lg:gap-8">
          <p className="text-2xl font-bold lg:text-3xl">{price}</p>
          <div className="body-text-break-lg">
            <p className="leading-6">per user</p>
            <p className="leading-6">per month</p>
          </div>
        </div>
      </header>

      <Button
        label="Start free trial"
        type="gradient"
        className="mb-6 w-full justify-center rounded-xl max-lg:text-sm"
      />

      <ul>
        {features.map((feature, index) => (
          <li
            key={index}
            className="flex items-center gap-4 border-b-1 border-b-mono-2 py-4 text-lg"
          >
            <CheckIcon size={22} className="text-primary" />
            <span className="max-lg:text-base">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PriceCard;
