import { ITextAreaProps } from "./Textarea.props";
import styles from "./Textarea.module.scss";
import cn from "classnames";
import { ForwardedRef, forwardRef } from "react";

const Textarea = forwardRef(
  (
    { error, className, ...props }: ITextAreaProps,
    ref: ForwardedRef<HTMLTextAreaElement>
  ): JSX.Element => {
    return (
      <div className={cn(styles.textareaWrapper, className)}>
        <textarea
          className={cn(styles.textarea, {
            [styles.error]: error,
          })}
          ref={ref}
          {...props}
        />
        {error && (
          <span role="alert" className={styles.errorMessage}>
            {error.message}
          </span>
        )}
      </div>
    );
  }
);
export default Textarea;
