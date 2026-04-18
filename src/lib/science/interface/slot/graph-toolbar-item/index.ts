import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { TokenTrajectory } from '$stylist/architecture/type/enum/trajectory';
import type { ScienceHTMLAttributes } from '$stylist/science/type/struct';
import type { ChildrenHtmlAttributes } from '$stylist/science/interface/slot';
import type { Snippet } from 'svelte';

export interface SlotGraphToolbarItem {
	id: string;
	type: 'button' | 'select' | 'input' | 'separator';
	label?: string;
	tooltip?: string;
	icon?: string;
	active?: boolean;
	disabled?: boolean;
	value?: unknown;
	options?: string[];
	onclick?: () => void;
}
