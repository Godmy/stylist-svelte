import type { HTMLAttributes } from 'svelte/elements';
import type { CatalogProduct } from '../catalog-product';
import type { Layout } from '../layout';

export type ProductCatalogProps = Omit<HTMLAttributes<HTMLDivElement>, 'class'> & {
	products: CatalogProduct[];
	layout?: Layout;
	class?: string;
};
