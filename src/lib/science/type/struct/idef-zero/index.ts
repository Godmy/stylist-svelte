import type { Idef0DiagramRecipe } from '$stylist/science/interface/recipe/idef0-diagram';

export type Idef0Port = {
	id: string;
	label?: string;
	color?: string;
};

export type Idef0BlackBoxProps = {
	title?: string;
	subtitle?: string;
	inputs: Idef0Port[];
	outputs: Idef0Port[];
	width?: number;
	height?: number;
};

export type Idef0InputsProps = {
	ports: Idef0Port[];
	boxX: number;
	boxY?: number;
	boxHeight: number;
	startX?: number;
};

export type Idef0OutputsProps = {
	ports: Idef0Port[];
	boxX: number;
	boxWidth: number;
	boxY?: number;
	boxHeight: number;
	endX: number;
};

export type Idef0Model = {
	title: string;
	subtitle?: string;
	inputs: Idef0Port[];
	outputs: Idef0Port[];
};

export type Idef0DiagramProps = Idef0DiagramRecipe & {
	model: Idef0Model;
};
