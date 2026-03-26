export type CanvasObject = {
	id: string;
	type: 'rectangle' | 'circle' | 'text' | 'path';
	x: number;
	y: number;
	width?: number;
	height?: number;
	radius?: number;
	text?: string;
	points?: { x: number; y: number }[];
	color: string;
	userId?: string;
};

export type CanvasUser = {
	id: string;
	name: string;
	color: string;
	cursorPosition?: { x: number; y: number };
};
