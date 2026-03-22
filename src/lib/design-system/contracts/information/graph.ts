import type { Snippet } from 'svelte';

import type { TokenSize } from '$stylist/design-system/tokens/architecture/size';
import type { TokenTrajectory as GraphEdgeType } from '$stylist/design-system/tokens/architecture/trajectory';
import type { HtmlAttributesBase } from '$stylist/design-system/contracts/information/common';

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


