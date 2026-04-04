import { cn } from '$stylist/layout/function/script/merge-class-names';

export class DrawingSurfaceStyleManager {
	static getCanvasClass(extraClass = ''): string {
		return cn('drawing-surface__canvas', extraClass);
	}

	static getContainerClass(extraClass = ''): string {
		return cn('drawing-surface', extraClass);
	}
}

