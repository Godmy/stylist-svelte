export type ProductComparisonProps = {
	products: Array<{
		id: string;
		name: string;
		price: number;
		currency: string;
		image: string;
		rating: number;
	}>;
	features: string[];
	class?: string;
}
