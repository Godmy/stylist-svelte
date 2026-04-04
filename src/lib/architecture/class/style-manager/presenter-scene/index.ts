import { cn } from '$stylist/layout/function/script/merge-class-names';

export class PresenterSceneStyleManager {
	static getSectionClass(extraClass: string = ''): string {
		return cn('presenter-scene', extraClass);
	}

	static getHeaderClass(): string {
		return 'presenter-scene__header';
	}

	static getTitleClass(): string {
		return 'presenter-scene__title';
	}

	static getSubtitleClass(): string {
		return 'presenter-scene__subtitle';
	}

	static getControlsClass(): string {
		return 'presenter-scene__controls';
	}

	static getControlClass(): string {
		return 'presenter-scene__control';
	}

	static getViewportClass(isDragging = false): string {
		return cn('presenter-scene__viewport', isDragging && 'dragging');
	}

	static getGridClass(): string {
		return 'presenter-scene__grid';
	}

	static getLinksClass(): string {
		return 'presenter-scene__links';
	}

	static getInspectorClass(): string {
		return 'presenter-scene__inspector';
	}

	static getBadgeClass(): string {
		return 'presenter-scene__badge';
	}

	static getInspectorLineClass(): string {
		return 'presenter-scene__inspector-line';
	}

	static getDescriptionClass(): string {
		return 'presenter-scene__description';
	}
}

