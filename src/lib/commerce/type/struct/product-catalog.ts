import type { HTMLAttributes } from 'svelte/elements';

export interface CatalogProduct {
	id: string;
	title: string;
	price: number;
	currency: string;
	image: string;
	rating: number;
	badge?: string;
}

export type Layout = 'grid' | 'list';

export interface Props extends Omit<HTMLAttributes<HTMLDivElement>, 'class'> {
	products: CatalogProduct[];
	layout?: Layout;
	class?: string;
}
