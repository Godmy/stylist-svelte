import type { TokenTrajectory } from '$stylist/architecture/type/enum/trajectory';

export interface SlotLitegraphConnection {
	id: string;
	fromNodeId?: string;
	toNodeId?: string;
	fromPort?: string;
	toPort?: string;
	startX?: number;
	startY?: number;
	endX?: number;
	endY?: number;
	type?: TokenTrajectory;
	color?: string;
	active?: boolean;
	onclick?: () => void;
}
