import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { PresentationMode } from '$stylist/architecture/type/alias/presentation-mode/index';
import type { PresentationFrame } from '$stylist/architecture/interface/slot/presentation-frame/index';

export interface PresentationState extends ComputeIntersectAll<[]> {
	mode: PresentationMode;
	currentFrameIndex: number;
	frames: PresentationFrame[];
	isPlaying: boolean;
}

