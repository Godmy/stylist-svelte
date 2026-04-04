import { cn } from '$stylist/layout/function/script/merge-class-names';

export class MinimapStyleManager {
	static getHostClass(extraClass = ''): string {
		return cn('minimap', extraClass);
	}

	static getCanvasClass(): string {
		return 'minimap__canvas';
	}

	static getNodeClass(): string {
		return 'minimap__node';
	}

	static getViewportClass(): string {
		return 'minimap__viewport';
	}

	static getControlsClass(): string {
		return 'minimap__controls';
	}
}

