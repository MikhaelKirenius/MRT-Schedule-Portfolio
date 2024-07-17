import { useQuery } from 'react-query';
import { getAllReviews,postReview } from '@/app/services/reviews';
import { ReviewsResponse,reviewPost } from '@/app/models/reviewsModel';
import { useMutation } from 'react-query';

export const useReviews = () => {
    return useQuery<ReviewsResponse, Error>('reviews', getAllReviews);
};

export const usePostReview = () => {
    return useMutation((reviewData: reviewPost) => postReview(reviewData), {
      onSuccess: () => {
        console.log('Review posted successfully');
      },
      onError: (error) => {
        console.error('Error posting review:', error);
      },
    });
  };    