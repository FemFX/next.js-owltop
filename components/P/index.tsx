import { IParagraphProps } from "./P.props";
import styles from "./P.module.scss";
import cn from "classnames";

const Paragraph = ({
  size = "m",
  children,
  className,
  ...props
}: IParagraphProps): JSX.Element => {
  return (
    <div
      className={cn(styles.p, className, {
        [styles.s]: size == "s",
        [styles.m]: size == "m",
        [styles.l]: size == "l",
      })}
      {...props}
    >
      {children}
    </div>
  );
};
export default Paragraph;
