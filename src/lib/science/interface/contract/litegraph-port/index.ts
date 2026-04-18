import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { TokenTrajectory } from '$stylist/architecture/type/enum/trajectory';
import type { ScienceHTMLAttributes } from '$stylist/science/type/struct';
import type { ChildrenHtmlAttributes } from '$stylist/science/interface/slot';
import type { Snippet } from 'svelte';

export interface ContractLitegraphPort {
	id: string;
	name: string;
	type: string;
	direction: 'input' | 'output';
	label?: string;
	dataType?: string;
}
