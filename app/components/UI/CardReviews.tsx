import React from "react";
import { Review } from "@/app/models/reviewsModel";

interface CardReviewsProps {
  review: Review;
}

const CardReviews: React.FC<CardReviewsProps> = ({ review }) => {
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <div className="card-body">
        <div className="avatar">
          <div className="w-24 rounded-full">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>
        <h2 className="card-title">{review.comment}</h2>
        <p className="text-sm text-gray-500"> Rating : {review.rating}</p>
      </div>
    </div>
  );
};

export default CardReviews;