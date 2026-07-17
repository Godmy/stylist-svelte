
import type { SlotProductOption } from '$stylist/product/interface/slot/product-option';

export interface SlotProductSorting {
	class?: string;
	options?: SlotProductOption[];
	value?: string;
	oninput?: (event: Event) => void;
	onchange?: (event: Event) => void;
}
