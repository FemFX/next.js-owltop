import { ISortProps, SortEnum } from "./Sort.props";
import styles from "./Sort.module.scss";
import SortIcon from "./sort.svg";
import cn from "classnames";

const Paragraph = ({
  sort,
  setSort,
  className,
  ...props
}: ISortProps): JSX.Element => {
  return (
    <div className={cn(styles.sort, className)} {...props}>
      <div className={styles.sortName} id="sort">Сортировка</div>
      <button
        onClick={() => setSort(SortEnum.Rating)}
        className={cn({
          [styles.active]: sort == SortEnum.Rating,
        })}
      >
        <SortIcon className={styles.sortIcon} />
        По рейтингу
      </button>
      <button
        onClick={() => setSort(SortEnum.Price)}
        className={cn({
          [styles.active]: sort == SortEnum.Price,
        })}
      >
        <SortIcon className={styles.sortIcon} />
        По Цене
      </button>
    </div>
  );
};
export default Paragraph;
