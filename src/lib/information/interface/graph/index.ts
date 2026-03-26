import type { Snippet } from 'svelte';
import type { TokenSize } from '$stylist/architecture/type/token/size';
import type { TokenTrajectory as GraphEdgeType } from '$stylist/architecture/type/token/trajectory';
import type { HtmlAttributesBase } from '$stylist/information/type/attribute/common';

export interface GraphEdgeProps extends Omit<HtmlAttributesBase<HTMLDivElement>, 'style'> {
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
	type?: string;
	color?: string;
	size?: TokenSize;
	selected?: boolean;
	interactive?: boolean;
	children?: Snippet;
}


