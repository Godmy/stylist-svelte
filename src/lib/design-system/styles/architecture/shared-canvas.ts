import { cn } from '../../utils/cn/index';

export class SharedCanvasStyleManager {
	static getContainerClass(variant: string, size: string, className?: string): string {
		const sizeClasses =
			{
				sm: 'text-sm',
				md: 'text-base',
				lg: 'text-lg'
			}[size as 'sm' | 'md' | 'lg'] || 'text-base';
		return cn(
			'c-shared-canvas border border-[--color-border-primary] rounded-lg overflow-hidden bg-[--color-background-primary]',
			sizeClasses,
			className
		);
	}

	static getToolbarClass(className?: string): string {
		return cn('flex items-center gap-2 p-3 border-b border-[--color-border-primary] bg-[--color-background-primary]', className);
	}

	static getCanvasClass(className?: string): string {
		return cn('relative w-full h-[500px] bg-[--color-background-primary]', className);
	}

	static getUserPanelClass(): string {
		return 'flex items-center gap-2 p-2 border-t border-[--color-border-primary]';
	}

	static getUserItemClass(): string {
		return 'flex items-center gap-1 px-2 py-1 rounded hover:bg-[--color-background-hover]';
	}

	static getToolButtonClass(isActive: boolean): string {
		const activeClasses = isActive
			? 'bg-[--color-primary-500] text-[--color-text-inverse]'
			: 'hover:bg-[--color-background-hover]';
		return cn('p-2 rounded transition-colors', activeClasses);
	}

	static getActionButtonClass(): string {
		return 'px-3 py-1.5 text-sm rounded-md bg-[--color-primary-500] text-[--color-text-inverse] hover:bg-[--color-primary-600] transition-colors';
	}

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



