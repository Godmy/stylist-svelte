import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { PresentationMode } from '$stylist/architecture/type/struct/presentation-mode/index';
import type { PresentationFrame } from '$stylist/architecture/interface/slot/presentation-frame/index';

export interface PresentationState extends StructIntersectAll<[]> {
	mode: PresentationMode;
	currentFrameIndex: number;
	frames: PresentationFrame[];
	isPlaying: boolean;
}
