import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';
import type { TokenSize } from '$stylist/layout/type/enum/size';

export class StyleManagerSharedCanvas {
	static getContainerClass(
		variant: string,
		_size: TokenSize | undefined,
		className?: string
	): string {
		return mergeClassNames(
			'c-shared-canvas',
			variant === 'minimal' && 'c-shared-canvas--minimal',
			className
		);
	}

	static getToolbarClass(className?: string): string {
		return mergeClassNames('c-shared-canvas__toolbar', className);
	}

	static getToolbarGroupClass(): string {
		return 'c-shared-canvas__toolbar-group';
	}

	static getToolbarDividerClass(): string {
		return 'c-shared-canvas__toolbar-divider';
	}

	static getColorLabelClass(): string {
		return 'c-shared-canvas__color-label';
	}

	static getColorInputClass(): string {
		return 'c-shared-canvas__color-input';
	}

	static getCanvasClass(className?: string): string {
		return mergeClassNames('c-shared-canvas__canvas', className);
	}

	static getWorkspaceClass(): string {
		return 'c-shared-canvas__workspace';
	}

	static getCanvasPaneClass(): string {
		return 'c-shared-canvas__pane';
	}

	static getRemoteCursorClass(): string {
		return 'c-shared-canvas__cursor';
	}

	static getUserPanelClass(): string {
		return 'c-shared-canvas__user-panel';
	}

	static getUserPanelTitleClass(): string {
		return 'c-shared-canvas__user-panel-title';
	}

	static getUserListClass(): string {
		return 'c-shared-canvas__user-list';
	}

	static getUserItemClass(): string {
		return 'c-shared-canvas__user-item';
	}

	static getUserSwatchClass(): string {
		return 'c-shared-canvas__user-swatch';
	}

	static getUserNameClass(): string {
		return 'c-shared-canvas__user-name';
	}

	static getCurrentUserClass(): string {
		return 'c-shared-canvas__current-user';
	}

	static getToolButtonClass(isActive: boolean): string {
		return mergeClassNames(
			'c-shared-canvas__tool-btn',
			isActive && 'c-shared-canvas__tool-btn--active'
		);
	}

	static getActionButtonClass(): string {
		return 'c-shared-canvas__action-btn';
	}
}
