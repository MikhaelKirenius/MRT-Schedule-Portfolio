import React from "react";
import CardReviews from "./UI/CardReviews";
import { Review } from "../models/reviewsModel";

interface ReviewListProps {
    reviews: Review[];
}

const ReviewList = ({ reviews }: ReviewListProps) => {
  return (
    <div className="carousel carousel-end rounded-box">
      {reviews.map((review: any) => (
        <div className="carousel-item" key={review.id}>
          <CardReviews key={review.id} review={review} />
        </div>
      ))}
    </div>
  );
}

export default ReviewList;