import { IHTagProps } from "./HTag.props";
import styles from "./HTag.module.scss";

const HTag: React.FC<IHTagProps> = ({
  children,
  tag,
}: IHTagProps): JSX.Element => {
  switch (tag) {
    case "h1":
      return <h1 className={styles.h1}>{children}</h1>;
    case "h2":
      return <h2 className={styles.h2}>{children}</h2>;
    case "h3":
      return <h3 className={styles.h3}>{children}</h3>;
    default:
      return <>{children}</>;
  }
};

export default HTag;
