import { ProductDemoStyleManager } from '$stylist/commerce/class/style-manager/product-demo';
import type { Snippet } from 'svelte';

export interface ProductDemoProps {
	title?: string;
	description?: string;
	demoContent: Snippet;
	features?: string[];
	onDemo?: () => void;
	class?: string;
}

export function createProductDemoState(props: ProductDemoProps) {
	const containerClass = $derived(ProductDemoStyleManager.getContainerClass(props.class ?? ''));

	return {
		get containerClass() { return containerClass; }
	};
}

export default createProductDemoState;
