import { IAdvantagesProps } from "./Advantages.props";
import styles from "./Advantages.module.scss";
import CheckIcon from "./check.svg";

const Advantages = ({ advantages }: IAdvantagesProps): JSX.Element => {
  return (
    <>
      {advantages.map((a) => (
        <div key={a._id} className={styles.advantage}>
          <CheckIcon />
          <div className={styles.title}>{a.title}</div>
          <hr className={styles.vline} />
          <div className={styles.description}>{a.description}</div>
        </div>
      ))}
    </>
  );
};
export default Advantages;
