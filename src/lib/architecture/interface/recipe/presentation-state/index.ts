import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { PresentationMode } from '$stylist/architecture/type/alias/presentation-mode/index';
import type { {
		 id: string;
		title: string;
		targetX: number;
		targetY: number;
		targetZoom: number;
		duration?: number;
	} } from '$stylist/architecture/interface/slot/presentation-frame/index';

export interface PresentationState extends ComputeIntersectAll<[]> {
	mode: PresentationMode;
	currentFrameIndex: number;
	frames: {
		 id: string;
		title: string;
		targetX: number;
		targetY: number;
		targetZoom: number;
		duration?: number;
	}[];
	isPlaying: boolean;
}

