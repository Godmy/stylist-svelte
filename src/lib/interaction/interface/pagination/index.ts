import type { InteractionHTMLAttributes } from '$stylist/interaction/type/attribute/interaction';
import type { TokenSize } from '$stylist/architecture/type/token/size';
import type { TokenArchitecture } from '$stylist/architecture/type/token/architecture';

export interface PaginationProps extends InteractionHTMLAttributes<HTMLDivElement> {
	currentPage: number;
	totalPages: number;
	showFirstLast?: boolean;
	showPrevNext?: boolean;
	showDots?: boolean;
	maxVisible?: number;
	variant?: TokenArchitecture;
	size?: TokenSize;
	disabled?: boolean;
	class?: string;
	buttonClass?: string;
	activeButtonClass?: string;
	disabledButtonClass?: string;
	onPageChange?: (page: number) => void;
}

