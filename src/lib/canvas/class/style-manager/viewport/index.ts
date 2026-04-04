import { cn } from '$stylist/layout/function/script/merge-class-names';

export class ViewportStyleManager {
	static getViewportClass(isDragging = false, extraClass = ''): string {
		return cn('viewport', isDragging && 'dragging', extraClass);
	}
}

