import type { Snippet } from 'svelte';

import type { CommonSize } from '../tokens/variants';
import type { GraphEdgeType } from './common';
import type { HtmlAttributesBase } from './common';

export type GraphNodeSize = CommonSize;

export type GraphNodeType = string;

type GraphEdgeHtmlProps = Omit<HtmlAttributesBase<HTMLDivElement>, 'style'>;

export interface GraphEdgeProps extends GraphEdgeHtmlProps {
	fromNodeId: string;
	toNodeId: string;
	directed?: boolean;
	type?: GraphEdgeType;
	style?: Record<string, string>;
}

export interface GraphNodeProps extends HtmlAttributesBase<HTMLDivElement> {
	id: string;
	x: number;
	y: number;
	label?: string;
	type?: GraphNodeType;
	color?: string;
	size?: GraphNodeSize;
	children?: Snippet;
}
