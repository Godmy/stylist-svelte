import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { TokenTrajectory } from '$stylist/architecture/type/enum/trajectory';
import type { ScienceHTMLAttributes } from '$stylist/science/type/struct';
import type { ChildrenHtmlAttributes } from '$stylist/science/interface/slot';
import type { Snippet } from 'svelte';

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
