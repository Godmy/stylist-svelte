export type ProductRecommendationProps = {
	products: Array<{
		id: string;
		title: string;
		price: number;
		currency: string;
		image: string;
		rating: number;
	}>;
	title?: string;
	onProductClick?: (id: string) => void;
	class?: string;
}
