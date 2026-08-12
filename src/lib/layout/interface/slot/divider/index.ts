import type { TokenOrientation } from '$stylist/layout/type/alias/orientation';
export interface SlotDivider {
	dividerClass?: string;
	dividerOrientation?: TokenOrientation;
	dividerAlign?: string;
	dividerDashed?: boolean;
	dividerLabel?: string;
}
