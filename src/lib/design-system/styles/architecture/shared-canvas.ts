import {
	SHARED_CANVAS_CONTAINER_BASE_CLASSES,
	SHARED_CANVAS_SIZE_CLASSES,
	SHARED_CANVAS_TOOLBAR_CLASSES,
	SHARED_CANVAS_CANVAS_CLASSES,
	SHARED_CANVAS_USER_PANEL_CLASSES,
	SHARED_CANVAS_USER_ITEM_CLASSES,
	SHARED_CANVAS_TOOL_BUTTON_BASE_CLASSES,
	SHARED_CANVAS_TOOL_BUTTON_ACTIVE_CLASSES,
	SHARED_CANVAS_TOOL_BUTTON_INACTIVE_CLASSES,
	SHARED_CANVAS_ACTION_BUTTON_CLASSES,
	DEFAULT_SHARED_CANVAS_SIZE
} from '../../classes/architecture/shared-canvas';
import { cn } from '../../utils/cn/index';

export interface SharedCanvasStyleManagerInterface {
	getContainerClass: (variant: string, size: string, className?: string) => string;
	getToolbarClass: (className?: string) => string;
	getCanvasClass: (className?: string) => string;
	getUserPanelClass: () => string;
	getUserItemClass: () => string;
	getToolButtonClass: (isActive: boolean) => string;
	getActionButtonClass: () => string;
}

export class SharedCanvasStyleManager implements SharedCanvasStyleManagerInterface {
	static getContainerClass(variant: string, size: string, className?: string): string {
		const sizeClasses = SHARED_CANVAS_SIZE_CLASSES[size as keyof typeof SHARED_CANVAS_SIZE_CLASSES] || SHARED_CANVAS_SIZE_CLASSES[DEFAULT_SHARED_CANVAS_SIZE];
		return cn(SHARED_CANVAS_CONTAINER_BASE_CLASSES, sizeClasses, className);
	}

	static getToolbarClass(className?: string): string {
		return cn(SHARED_CANVAS_TOOLBAR_CLASSES, className);
	}

	static getCanvasClass(className?: string): string {
		return cn(SHARED_CANVAS_CANVAS_CLASSES, className);
	}

	static getUserPanelClass(): string {
		return SHARED_CANVAS_USER_PANEL_CLASSES;
	}

	static getUserItemClass(): string {
		return SHARED_CANVAS_USER_ITEM_CLASSES;
	}

	static getToolButtonClass(isActive: boolean): string {
		const activeClasses = isActive ? SHARED_CANVAS_TOOL_BUTTON_ACTIVE_CLASSES : SHARED_CANVAS_TOOL_BUTTON_INACTIVE_CLASSES;
		return cn(SHARED_CANVAS_TOOL_BUTTON_BASE_CLASSES, activeClasses);
	}

	static getActionButtonClass(): string {
		return SHARED_CANVAS_ACTION_BUTTON_CLASSES;
	}

	// Instance methods for interface implementation
	getContainerClass(variant: string, size: string, className?: string): string {
		return SharedCanvasStyleManager.getContainerClass(variant, size, className);
	}

	getToolbarClass(className?: string): string {
		return SharedCanvasStyleManager.getToolbarClass(className);
	}

	getCanvasClass(className?: string): string {
		return SharedCanvasStyleManager.getCanvasClass(className);
	}

	getUserPanelClass(): string {
		return SharedCanvasStyleManager.getUserPanelClass();
	}

	getUserItemClass(): string {
		return SharedCanvasStyleManager.getUserItemClass();
	}

	getToolButtonClass(isActive: boolean): string {
		return SharedCanvasStyleManager.getToolButtonClass(isActive);
	}

	getActionButtonClass(): string {
		return SharedCanvasStyleManager.getActionButtonClass();
	}
}