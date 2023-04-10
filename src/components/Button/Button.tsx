import classNames from "classnames";
import styles from "./Button.module.scss";

export type ButtonVariantType = "contained" | "outlined" | "shallow";
export type ButtonColorType = "primary" | "secondary" | "accent";

export interface IButton extends React.HTMLProps<HTMLButtonElement> {
  className?: string;
  color?: ButtonColorType;
  variant?: ButtonVariantType;
  children?: React.ReactNode;
}

export const Button: React.FC<IButton> = ({
  children,
  className,
  color = "primary",
  variant = "contained",
  ...rest
}) => (
  <button
    {...rest}
    className={classNames(
      styles.button,
      styles[variant],
      styles[color],
      className
    )}
    type="button"
  >
    {children}
  </button>
);
