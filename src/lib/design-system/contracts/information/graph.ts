import type { Snippet } from 'svelte';

import type { ComponentSize } from '$stylist/design-system/tokens/architecture/component-size';
import type { GraphEdgeType } from './common';
import type { HtmlAttributesBase } from './common';


export type GraphNodeType = string;

type GraphEdgeHtmlProps = Omit<HtmlAttributesBase<HTMLDivElement>, 'style'>;

export interface GraphEdgeProps extends GraphEdgeHtmlProps {
	fromNodeId: string;
	toNodeId: string;
	directed?: boolean;
	type?: GraphEdgeType;
	label?: string;
	active?: boolean;
	style?: Record<string, string>;
}

export interface GraphNodeProps extends HtmlAttributesBase<HTMLDivElement> {
	id: string;
	x: number;
	y: number;
	label?: string;
	type?: GraphNodeType;
	color?: string;
	size?: ComponentSize;
	selected?: boolean;
	interactive?: boolean;
	children?: Snippet;
}

