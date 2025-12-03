import { PaginatedResponse, Review, ReviewSummary } from "@/types";

export const fetchReviews = async (productId: number): Promise<PaginatedResponse<Review>> => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/${productId}/reviews`, {
        headers: {
            'Content-Type': 'application/json'
        }
    })

    if (!response.ok) {
        throw new Error("Failed to fetch data reviews")
    }

    return response.json();
}

export const fetchReviewSummary = async (productId: number): Promise<ReviewSummary> => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/${productId}/reviews/summary`, {
        headers: {
            'Content-Type': 'application/json'
        }
    })

    if (!response.ok) {
        throw new Error("Failed to fetch data reviews summary")
    }

    return response.json();
}