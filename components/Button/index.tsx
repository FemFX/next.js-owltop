import { IButtonProps } from "./Button.props";
import styles from "./Button.module.scss";
import cn from "classnames";
import ArrowIcon from "./arrow.svg";

const Button: React.FC<IButtonProps> = ({
  children,
  arrow = "none",
  appearence = "primary",
  className,
  ...props
}: IButtonProps): JSX.Element => {
  return (
    <button
      className={cn(styles.button, className, {
        [styles.primary]: appearence === "primary",
        [styles.ghost]: appearence === "ghost",
      })}
      {...props}
    >
      {children}
      {arrow !== "none" && (
        <span
          className={cn(styles.arrow, {
            [styles.down]: arrow === "down",
            [styles.right]: arrow === "right",
          })}
        >
          <ArrowIcon />
        </span>
      )}
    </button>
  );
};

export default Button;
