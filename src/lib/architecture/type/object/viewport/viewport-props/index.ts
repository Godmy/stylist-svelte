import type { LayoutHTMLAttributes } from '$stylist/layout/interface/behavior/layout-html-attributes';

export type ViewportProps = LayoutHTMLAttributes<HTMLDivElement> & {
	class?: string;
	camera: {
		x: number;
		y: number;
		zoom: number;
	};
	interactive?: boolean;
	showGrid?: boolean;
	worldWidth?: number;
	worldHeight?: number;
};
