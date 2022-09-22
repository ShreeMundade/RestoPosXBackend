import { Review as TReview } from "../api/review/Review";

export const REVIEW_TITLE_FIELD = "content";

export const ReviewTitle = (record: TReview): string => {
  return record.content || record.id;
};
