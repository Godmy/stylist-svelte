export interface ProductCardCompactProps {
	title?: string;
	price?: number;
	currency?: string;
	image?: string;
	rating?: number;
	badge?: string;
	class?: string;
}

export function createProductCardCompactState(props: ProductCardCompactProps) {
	return { props };
}

export default createProductCardCompactState;
