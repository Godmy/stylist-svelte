import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';

export interface SlotZoomToolbar
	extends Omit<InteractionHTMLAttributes<HTMLDivElement>, 'class'> {
	zoomLevel?: number;
	minZoom?: number;
	maxZoom?: number;
	step?: number;
	class?: string;
	buttonClass?: string;
	onZoomChange?: (zoomLevel: number) => void;
	showReset?: boolean;
	showPercentage?: boolean;
}
