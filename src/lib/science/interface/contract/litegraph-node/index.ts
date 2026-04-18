import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { TokenTrajectory } from '$stylist/architecture/type/enum/trajectory';
import type { ScienceHTMLAttributes } from '$stylist/science/type/struct';
import type { ChildrenHtmlAttributes } from '$stylist/science/interface/slot';
import type { Snippet } from 'svelte';
import type { ContractLitegraphNodeProperty } from '$stylist/science/interface/contract/litegraph-node-property';
import type { ContractLitegraphPort } from '$stylist/science/interface/contract/litegraph-port';

export interface ContractLitegraphNode {
	id: string;
	title: string;
	type: string;
	position?: { x: number; y: number };
	x?: number;
	y?: number;
	width?: number;
	height?: number;
	properties?: ContractLitegraphNodeProperty[];
	inputs?: ContractLitegraphPort[];
	outputs?: ContractLitegraphPort[];
	selected?: boolean;
	color?: string;
}
