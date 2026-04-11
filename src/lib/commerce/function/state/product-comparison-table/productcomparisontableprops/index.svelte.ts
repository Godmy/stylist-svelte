export type ProductComparisonTableProps = {
	products: Array<{
		id: string;
		name: string;
		price: number;
		currency: string;
		image: string;
		rating: number;
	}>;
	specifications: Array<{ name: string; values: string[] }>;
	class?: string;
}
