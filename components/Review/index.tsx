import { IReviewProps } from "./Review.props";
import styles from "./Review.module.scss";
import cn from "classnames";
import UserIcon from "./user.svg";
import { Rating } from "..";
import { format } from "date-fns";
import { ru } from "date-fns/locale";

const Review = ({ review, className, ...props }: IReviewProps): JSX.Element => {
  const { name, title, description, createdAt, rating } = review;
  return (
    <div className={cn(styles.review, className)} {...props}>
      <UserIcon className={styles.user} />
      <div className={styles.title}>
        <span className={styles.name}>{name}:</span>&nbsp;&nbsp;
        <span>{title}</span>
      </div>
      <div className={styles.date}>
        {format(new Date(createdAt), "dd MMMM yyyy", { locale: ru })}
      </div>
      <div className={styles.rating}>
        <Rating rating={rating} />
      </div>
      <div className={styles.description}>{description}</div>
    </div>
  );
};
export default Review;
