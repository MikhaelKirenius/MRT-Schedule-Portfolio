import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from 'react-query';
import {postReview} from "@/app/services/reviews";

// Zod schema for form validation
const reviewSchema = z.object({
  rating: z.number().min(1, 'Rating must be at least 1').max(5, 'Rating must be at most 5'),
  comment: z.string().min(5, 'Comment must be at least 5 characters long'),
});

// Type for the form values
type ReviewFormValues = z.infer<typeof reviewSchema>;

const AddReviewForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<ReviewFormValues>({
	resolver: zodResolver(reviewSchema),
  });

  const { mutate } = useMutation(postReview, {
	onSuccess: () => {
	  alert('Review submitted successfully!');
	  
	},
	onError: (error) => {
	  console.error('Error submitting review:', error);
	  alert('Failed to submit review.');
	},
  });

  const onSubmit: SubmitHandler<ReviewFormValues> = (data) => {
	mutate(data);
  };

  return (
	<form onSubmit={handleSubmit(onSubmit)}>
	  <div>
		<label htmlFor="rating">Rating</label>
		<input id="rating" type="number" {...register('rating', { valueAsNumber: true })} />
		{errors.rating && <p>{errors.rating.message}</p>}
	  </div>
	  <div>
		<label htmlFor="comment">Comment</label>
		<textarea id="comment" {...register('comment')} />
		{errors.comment && <p>{errors.comment.message}</p>}
	  </div>
	  <button type="submit">Submit Review</button>
	</form>
  );
};

export default AddReviewForm;