import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { TokenTrajectory } from '$stylist/architecture/type/enum/trajectory';
import type { ScienceHTMLAttributes } from '$stylist/science/type/struct';
import type { ChildrenHtmlAttributes } from '$stylist/science/interface/slot';
import type { Snippet } from 'svelte';
import type { ContractPromptVariable } from '$stylist/science/interface/contract/prompt-variable';

export interface ContractPromptTemplate {
	id: string;
	name: string;
	description: string;
	content: string;
	variables: ContractPromptVariable[];
	tags?: string[];
}
