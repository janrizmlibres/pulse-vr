import { UserCircleIcon } from "@phosphor-icons/react";

interface Props {
  label: string;
  iconName?: string;
  isLink?: boolean;
  className?: string;
}

const getIcon = (icon: string) => {
  switch (icon) {
    case "UserCircle":
      return <UserCircleIcon size={26} weight="fill" />;
    default:
      break;
  }
};

const Button = ({ label, iconName, isLink = false, className }: Props) => {
  const styles = `inline-flex cursor-pointer items-center gap-2 rounded-full border-3 border-solid border-primary p-4 text-lg font-semibold uppercase transition-all duration-300 hover:bg-shade-1 active:bg-shade-1 ${className}`;

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
