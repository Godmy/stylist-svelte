import type { ArchitectureHTMLAttributes } from '$stylist/architecture/type/struct/item';

export type QuoteRequestProps = ArchitectureHTMLAttributes<HTMLDivElement> & {
	productIds?: string[];
	quantity?: number;
};
