import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';

export class ViewportStyleManager {
	static getViewportClass(isDragging = false, extraClass = ''): string {
		return mergeClassNames('viewport', isDragging && 'dragging', extraClass);
	}
}

