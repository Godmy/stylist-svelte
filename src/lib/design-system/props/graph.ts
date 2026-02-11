import type { Snippet } from 'svelte';

import type { CommonSize } from '../tokens/variants';
import type { GraphEdgeType } from './common';

export type GraphNodeSize = CommonSize;

export type GraphNodeType = string;

export interface GraphEdgeProps {
	fromNodeId: string;
	toNodeId: string;
	directed?: boolean;
	type?: GraphEdgeType;
	style?: Record<string, string>;
}

export interface GraphNodeProps {
	id: string;
	x: number;
	y: number;
	label?: string;
	type?: GraphNodeType;
	color?: string;
	size?: GraphNodeSize;
	children?: Snippet;
}
