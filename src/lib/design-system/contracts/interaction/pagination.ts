import type { InteractionHTMLAttributes } from '$stylist/design-system/html/attributes/interaction';
import type { ComponentSize } from '$stylist/design-system/tokens/architecture/component-size';
import type { SidebarVariant } from '$stylist/design-system/tokens/interaction/variants';

export interface PaginationProps extends InteractionHTMLAttributes<HTMLDivElement> {
	currentPage: number;
	totalPages: number;
	showFirstLast?: boolean;
	showPrevNext?: boolean;
	showDots?: boolean;
	maxVisible?: number;
	variant?: SidebarVariant;
	size?: ComponentSize;
	disabled?: boolean;
	class?: string;
	buttonClass?: string;
	activeButtonClass?: string;
	disabledButtonClass?: string;
	onPageChange?: (page: number) => void;
}
