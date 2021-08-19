import { useState } from "react";
import { IReviewFormProps } from "./ReviewForm.props";
import styles from "./ReviewForm.module.scss";
import cn from "classnames";
import { Button, Input, Rating, Textarea } from "..";
import CloseIcon from "./close.svg";
import { useForm, Controller } from "react-hook-form";
import { IReviewForm, IReviewSentResponse } from "./ReviewForm.interface";
import axios from "axios";

const Review = ({
  isOpened,
  productId,
  ...props
}: IReviewFormProps): JSX.Element => {
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [error, setError] = useState<string>();
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IReviewForm>();
  const onSubmit = async (formData: IReviewForm) => {
    try {
      const { data } = await axios.post<IReviewSentResponse>(
        process.env.NEXT_PUBLIC_DOMAIN + "/api/review/create-demo",
        { ...formData, productId }
      );
      if (data.message) {
        setIsSuccess(true);
        reset();
      } else {
        setError("Что-то пошло не так");
      }
    } catch (err) {
      setError("Что-то пошло не так");
    }
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={cn(styles.reviewForm)}
      {...props}
    >
      <Input
        {...register("name", {
          required: {
            value: true,
            message: "Заполните имя",
          },
        })}
        placeholder="Имя"
        error={errors.name}
      />
      <Input
        {...register("title", {
          required: {
            value: true,
            message: "Заполните заголовок",
          },
        })}
        placeholder="Заголовок отзыва"
        error={errors.title}
      />
      <div className={styles.rating}>
        <span>Оценка:</span>
        <Controller
          control={control}
          name="rating"
          rules={{
            required: {
              value: true,
              message: "Заполните рейтинг",
            },
          }}
          render={({ field }) => (
            <Rating
              isEditable
              setRating={field.onChange}
              ref={field.ref}
              rating={field.value}
              error={errors.rating}
            />
          )}
        />
      </div>
      <Textarea
        {...register("description", {
          required: {
            value: true,
            message: "Заполните заголовок",
          },
        })}
        placeholder="Текст отзыва"
        className={styles.description}
        error={errors.description}
        aria-label="Текст отзыва"
      />
      <div className={styles.submit}>
        <Button appearence="primary">Отправить</Button>
        <span className={styles.info}>
          * Перед публикацией отзыв пройдет предварительную модерацию и проверку
        </span>
      </div>
      {isSuccess && (
        <div className={cn(styles.success, styles.panel)}>
          <div className={styles.successTitle}>Ваш отзыв отправлен</div>
          <div>Спасибо, ваш отзыв будет опубликован после проверки.</div>
          <button className={styles.close}>
            <CloseIcon onClick={() => setIsSuccess(false)} />
          </button>
        </div>
      )}
      {error && (
        <div className={cn(styles.error, styles.panel)}>
          {error}
          <button className={styles.close}>
            <CloseIcon onClick={() => setError(undefined)} />
          </button>
        </div>
      )}
    </form>
  );
};
export default Review;
