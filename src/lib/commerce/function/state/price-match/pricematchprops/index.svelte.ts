export type PriceMatchProps = {
	targetPrice?: number;
	competitorPrices?: Array<{ name: string; price: number; url?: string }>;
	currency?: string;
	productName?: string;
	onFindLower?: () => void;
	class?: string;
}
