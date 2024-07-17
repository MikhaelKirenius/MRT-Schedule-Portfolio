export interface Review {
    id: string;
    userid: string;
    rating: number;
    comment: string;
    createdAt: string;
    }

export interface ReviewsResponse{
    data: Review[];
}

export interface reviewPost {
    rating: number;
    comment: string;
}