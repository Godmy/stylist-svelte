import type { InteractionHTMLAttributes } from '$stylist/design-system/html/attributes/interaction';
import type { TokenSize } from '$stylist/design-system/tokens/architecture/size';
import type { TokenArchitecture } from '$stylist/design-system/tokens/architecture/architecture';

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

