import type { SlotBurnDownPoint } from '$stylist/portfolio/interface/slot/burn-down-point';
export interface SlotBurnDownData {
	sprintStart: Date;
	sprintEnd: Date;
	points: SlotBurnDownPoint[];
}
