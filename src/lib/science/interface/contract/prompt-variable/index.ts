import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { TokenTrajectory } from '$stylist/architecture/type/enum/trajectory';
import type { ScienceHTMLAttributes } from '$stylist/science/type/struct';
import type { ChildrenHtmlAttributes } from '$stylist/science/interface/slot';
import type { Snippet } from 'svelte';
import type { PromptVariableType } from '$stylist/science/type/struct/prompt-variable-type';

export interface ContractPromptVariable {
	id: string;
	name: string;
	description: string;
	type: PromptVariableType;
	required?: boolean;
	defaultValue?: string | number | boolean;
	options?: Array<{ value: string; label: string }>;
}
