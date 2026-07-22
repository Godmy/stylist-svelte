import type { HTMLAttributes } from 'svelte/elements';

export interface SlotZoomToolbar
	extends Omit<HTMLAttributes<HTMLDivElement>, 'class'> {
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
