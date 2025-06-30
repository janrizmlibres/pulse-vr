import { UserCircleIcon } from "@phosphor-icons/react";

import { cn } from "../../utils";

interface Props {
  label: string;
  iconName?: string;
  type?: "plain" | "plain-inverted" | "gradient";
  className?: string;
  href?: string;
}

const getIcon = (icon: string) => {
  switch (icon) {
    case "UserCircle":
      return <UserCircleIcon size={26} weight="fill" />;
    default:
      return <span>Invalid icon string</span>;
  }
};

const Button = ({ label, iconName, type, className, href }: Props) => {
  const styles = cn(
    "inline-flex cursor-pointer items-center gap-2 rounded-full border-3 border-solid border-primary",
    `text-lg font-semibold uppercase transition-all duration-300 hover:bg-shade-1 active:bg-shade-1 ${className}`,
    iconName ? "px-3 py-2" : "px-4 py-3",
    type === "gradient" &&
      "bg-btn-gradient transition-[--stop-color] duration-300 hover:[--stop-color:var(--color-shade-1)]",
    type === "plain" &&
      [
        "bg-mono-4 hover:border-shade-1 hover:bg-mono-1 hover:text-mono-4",
        "active:border-shade-1 active:bg-mono-1 active:text-mono-4",
      ].join(" "),
    type === "plain-inverted" &&
      [
        "bg-mono-1 text-mono-4 hover:border-shade-1 hover:bg-mono-4 hover:text-mono-1",
        "active:border-shade-1 active:bg-mono-4 active:text-mono-1",
      ].join(" ")
  );

  const content = (
    <>
      {iconName && getIcon(iconName)}
      <span>{label}</span>
    </>
  );

  if (href) {
    return (
      <a href={href} className={styles}>
        {content}
      </a>
    );
  }

  return <button className={styles}>{content}</button>;
};

export default Button;
