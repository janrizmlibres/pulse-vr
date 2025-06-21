import { UserCircleIcon } from "@phosphor-icons/react";

import { cn } from "../../utils";

interface Props {
  label: string;
  iconName?: string;
  type?: "plain" | "gradient";
  className?: string;
  isLink?: boolean;
}

const getIcon = (icon: string) => {
  switch (icon) {
    case "UserCircle":
      return <UserCircleIcon size={26} weight="fill" />;
    default:
      return <span>Invalid icon string</span>;
  }
};

const Button = ({
  label,
  iconName,
  type,
  className,
  isLink = false,
}: Props) => {
  const styles = cn(
    `inline-flex cursor-pointer items-center gap-2 rounded-full border-3 border-solid border-primary ${className}`,
    "text-lg font-semibold uppercase transition-all duration-300 hover:bg-shade-1 active:bg-shade-1",
    iconName ? "px-3 py-2" : "p-4",
    type === "gradient" && "bg-btn-gradient",
    type === "plain" &&
      [
        "bg-mono-3 hover:border-shade-1 hover:bg-mono-1 hover:text-mono-3 active:border-shade-1",
        "active:bg-mono-1 active:text-mono-3",
      ].join("\\s")
  );

  const content = (
    <>
      {iconName && getIcon(iconName)}
      <span>{label}</span>
    </>
  );

  if (isLink) {
    return (
      <a href="#" className={styles}>
        {content}
      </a>
    );
  }

  return <button className={styles}>{content}</button>;
};

export default Button;
