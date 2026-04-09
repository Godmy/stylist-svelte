import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';
import type { ProductSortOption } from '$stylist/commerce/type/struct/product-sort-option';

export type ProductSortProps = InteractionHTMLAttributes<HTMLDivElement> & {
	options?: ProductSortOption[];
	selectedOption?: string;
	onValueChange?: (option: string) => void;
	class?: string;
};
