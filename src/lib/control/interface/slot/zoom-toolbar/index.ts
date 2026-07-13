import type { SlotInteraction } from '$stylist/interaction/interface/slot/interaction';
import type { HTMLAttributes } from 'svelte/elements';

export interface SlotZoomToolbar
	extends Omit<HTMLAttributes<HTMLDivElement>, 'class'>,
		SlotInteraction {
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
