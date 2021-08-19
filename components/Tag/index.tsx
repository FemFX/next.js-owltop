import { ITagProps } from "./Tag.props";
import styles from "./Tag.module.scss";
import cn from "classnames";

const Tag: React.FC<ITagProps> = ({
  children,
  color = "ghost",
  href,
  size = "m",
  ...props
}: ITagProps): JSX.Element => {
  return (
    <div
      className={cn(styles.tag, {
        [styles.m]: size === "m",
        [styles.s]: size === "s",
        [styles.ghost]: color === "ghost",
        [styles.red]: color === "red",
        [styles.grey]: color === "grey",
        [styles.green]: color === "green",
        [styles.primary]: color === "primary",
      })}
      {...props}
    >
      {href ? <a href={href}>{{ children }}</a> : <>{children}</>}
    </div>
  );
};

export default Tag;
