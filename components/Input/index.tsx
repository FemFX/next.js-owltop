import { IInputProps } from "./Input.props";
import styles from "./Input.module.scss";
import cn from "classnames";
import { ForwardedRef, forwardRef } from "react";

const Input = forwardRef(
  (
    { error, className, ...props }: IInputProps,
    ref: ForwardedRef<HTMLInputElement>
  ): JSX.Element => {
    return (
      <div className={styles.inputWrapper}>
        <input
          type="text"
          className={cn(className, styles.input, {
            [styles.error]: error,
          })}
          ref={ref}
          {...props}
        />
        {error && <span className={styles.errorMessage}>{error.message}</span>}
      </div>
    );
  }
);
export default Input;
