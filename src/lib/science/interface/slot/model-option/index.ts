import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { TokenTrajectory } from '$stylist/architecture/type/enum/trajectory';
import type { ScienceHTMLAttributes } from '$stylist/science/type/struct';
import type { ChildrenHtmlAttributes } from '$stylist/science/interface/slot';
import type { Snippet } from 'svelte';

// ==================== ModelSelector ====================
export interface SlotModelOption {
	id: string;
	name: string;
	description?: string;
	version?: string;
	capabilities?: string[];
	provider?: string;
	tags?: string[];
}
