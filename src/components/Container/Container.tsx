import styles from "./Container.module.scss";

export interface IContainer {
  className?: string;
  children?: React.ReactNode;
  grid?: "grid1440" | "grid1366" | "grid1024";
}

export const Container: React.FC<IContainer> = ({
  children,
  className,
  grid = "grid1440",
  ...rest
}) => (
  <div className={`${styles[grid]} ${className}`} {...rest}>
    {children}
  </div>
);
