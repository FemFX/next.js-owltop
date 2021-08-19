import {
  useState,
  useEffect,
  KeyboardEvent,
  forwardRef,
  ForwardedRef,
} from "react";
import { IRatingProps } from "./Rating.props";
import styles from "./Rating.module.scss";
import StarIcon from "./star.svg";
import cn from "classnames";

const Rating: React.FC<IRatingProps> = forwardRef(
  (
    { error, rating, setRating, isEditable = false, ...props }: IRatingProps,
    ref: ForwardedRef<HTMLDivElement>
  ): JSX.Element => {
    const [ratingArray, setRatingArray] = useState<JSX.Element[]>(
      new Array(5).fill(<></>)
    );
    useEffect(() => {
      costructRating(rating);
    }, [rating]);
    const costructRating = (currentRating: number): void => {
      const updatedArray: JSX.Element[] = ratingArray.map(
        (r: JSX.Element, i: number) => {
          return (
            <StarIcon
              className={cn(styles.star, {
                [styles.filled]: i < currentRating,
                [styles.editable]: isEditable,
              })}
              onMouseEnter={() => changeDisplay(i + 1)}
              onMouseLeave={() => changeDisplay(rating)}
              onClick={() => onClick(i + 1)}
              tabIndex={isEditable ? 0 : -1}
              onKeyDown={(e: KeyboardEvent<SVGElement>) =>
                isEditable && handleSpace(i + 1, e)
              }
            />
          );
        }
      );
      setRatingArray(updatedArray);
    };
    const changeDisplay = (i: number) => {
      if (!isEditable) {
        return;
      }
      costructRating(i);
    };
    const onClick = (i: number) => {
      if (!isEditable || !setRating) {
        return;
      }
      setRating(i);
    };
    const handleSpace = (i: number, e: KeyboardEvent<SVGElement>) => {
      if (e.code !== "Space" || setRating) {
        return;
      }
      setRating(i);
    };
    return (
      <div
        {...props}
        ref={ref}
        className={cn(styles.raingWrapper, {
          [styles.error]: error,
        })}
      >
        {ratingArray.map((r, i) => (
          <span key={i}>{r}</span>
        ))}
        {error && <span className={styles.errorMessage}>{error.message}</span>}
      </div>
    );
  }
);

export default Rating;
