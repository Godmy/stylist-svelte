import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';

export class DrawingSurfaceStyleManager {
	static getCanvasClass(extraClass = ''): string {
		return mergeClassNames('drawing-surface__canvas', extraClass);
	}

	static getContainerClass(extraClass = ''): string {
		return mergeClassNames('drawing-surface', extraClass);
	}
}

