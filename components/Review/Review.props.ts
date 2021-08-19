import { DetailedHTMLProps, HTMLAttributes } from "react";
import { ReviewModel } from "../../interfaces/product.interfaces";

export interface IReviewProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  review: ReviewModel;
}
