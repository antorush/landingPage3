interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary";
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  className,
  type = "button",
  variant = "primary",
  disabled = false,
}) => {
  const primaryStyles = `flex cursor-pointer justify-center items-center rounded-[8px] bg-transparent py-3 px-7 btnText transition-colors duration-300 delay-75 ease-in-out hover:bg-secondary`;
  const secondaryStyles = `flex cursor-pointer justify-center items-center rounded-[8px] bg-transparent py-4 px-[30px] btnTextSecondary transition-colors duration-300 border-2 border-white delay-75 ease-in-out hover:border-secondary`;
  return (
    <button
      className={`${variant === "primary" ? primaryStyles : secondaryStyles}`}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
