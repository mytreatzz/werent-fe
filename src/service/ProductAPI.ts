import { Product } from "@/types";

export const fetchProduct = async (productId: number): Promise<Product> => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/${productId}`, {
        headers: {
            'Content-Type': 'application/json'
        }
    })

    if (!response.ok) {
        throw new Error("Failed to fetch data product")
    }

    return response.json();
}