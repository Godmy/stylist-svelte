import type { HtmlAttributesBase } from '$stylist/design-system/contracts/information/common';
import type { GraphPortDirection } from '$stylist/design-system/tokens/information/graph-port';

export interface Idef0Port {
	id: string;
	label: string;
	description?: string;
	color?: string;
}

export interface Idef0PortPosition {
	port: Idef0Port;
	y: number;
}

export interface Idef0BlackBoxModel {
	id: string;
	title: string;
	subtitle?: string;
	inputs: Idef0Port[];
	outputs: Idef0Port[];
}

export interface Idef0FunctionBoxProps extends HtmlAttributesBase<SVGGElement> {
	title: string;
	subtitle?: string;
	x?: number;
	y?: number;
	width?: number;
	height?: number;
}

export interface Idef0PortLabelProps extends HtmlAttributesBase<SVGTextElement> {
	text: string;
	x: number;
	y: number;
	anchor?: 'start' | 'middle' | 'end';
	color?: string;
}

export interface Idef0ConnectorProps extends HtmlAttributesBase<SVGGElement> {
	label: string;
	direction: GraphPortDirection;
	x1: number;
	y1: number;
	x2: number;
	y2: number;
	color?: string;
	showArrow?: boolean;
}

export interface Idef0InputsProps extends HtmlAttributesBase<SVGGElement> {
	ports: Idef0Port[];
	boxX: number;
	boxY: number;
	boxHeight: number;
	startX?: number;
}

export interface Idef0OutputsProps extends HtmlAttributesBase<SVGGElement> {
	ports: Idef0Port[];
	boxX: number;
	boxWidth: number;
	boxY: number;
	boxHeight: number;
	endX?: number;
}

export interface Idef0BlackBoxProps extends HtmlAttributesBase<SVGGElement> {
	title: string;
	subtitle?: string;
	inputs: Idef0Port[];
	outputs: Idef0Port[];
	width?: number;
	height?: number;
	boxWidth?: number;
	boxHeight?: number;
}

export interface Idef0DiagramProps extends HtmlAttributesBase<HTMLDivElement> {
	title?: string;
	model: Idef0BlackBoxModel;
	width?: number;
	height?: number;
}




