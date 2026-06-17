import type { ContractLitegraphNodeProperty } from '$stylist/graph/interface/contract/litegraph-node-property';
import type { ContractLitegraphPort } from '$stylist/graph/interface/contract/litegraph-port';

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
