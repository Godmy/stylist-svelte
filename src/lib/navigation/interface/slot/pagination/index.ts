import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';
import type { TokenSize } from '$stylist/layout/type/enum/size';
import type { TierContent } from '$stylist/architecture/type/enum/tier';

export interface SlotPagination extends InteractionHTMLAttributes<HTMLDivElement> {
	currentPage: number;
	totalPages: number;
	showFirstLast?: boolean;
	showPrevNext?: boolean;
	showDots?: boolean;
	maxVisible?: number;
	variant?: TierContent;
	size?: TokenSize;
	disabled?: boolean;
	class?: string;
	buttonClass?: string;
	activeButtonClass?: string;
	disabledButtonClass?: string;
	onPageChange?: (page: number) => void;
}
