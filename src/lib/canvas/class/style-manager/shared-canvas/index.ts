import { cn } from '$stylist/layout/function/script/merge-class-names';
import type { TokenSize } from '$stylist/layout/type/enum/size';

export class StyleManagerSharedCanvas {
	static getContainerClass(variant: string, size: TokenSize | undefined, className?: string): string {
		const sizeClasses =
			{
				sm: 'text-sm',
				md: 'text-base',
				lg: 'text-lg'
			}[size as 'sm' | 'md' | 'lg'] || 'text-base';

		return cn(
			'c-shared-canvas border border-[--color-border-primary] rounded-lg overflow-hidden bg-[--color-background-primary]',
			variant === 'minimal' ? 'shadow-none' : 'shadow-sm',
			sizeClasses,
			className
		);
	}

	static getToolbarClass(className?: string): string {
		return cn(
			'flex items-center gap-2 p-3 border-b border-[--color-border-primary] bg-[--color-background-primary]',
			className
		);
	}

	static getToolbarGroupClass(): string {
		return 'flex items-center gap-1';
	}

	static getToolbarDividerClass(): string {
		return 'h-5 border-l border-[--color-border-primary] mx-2';
	}

	static getColorLabelClass(): string {
		return 'flex items-center text-sm';
	}

	static getColorInputClass(): string {
		return 'ml-1 w-8 h-8 p-1 border border-[--color-border-primary] rounded cursor-pointer';
	}

	static getCanvasClass(className?: string): string {
		return cn('relative w-full h-[500px] bg-[--color-background-primary]', className);
	}

	static getWorkspaceClass(): string {
		return 'flex';
	}

	static getCanvasPaneClass(): string {
		return 'flex-1 relative';
	}

	static getRemoteCursorClass(): string {
		return 'absolute w-2 h-2 rounded-full';
	}

	static getUserPanelClass(): string {
		return 'w-56 shrink-0 border-l border-[--color-border-primary] p-3';
	}

	static getUserPanelTitleClass(): string {
		return 'text-sm font-medium text-[--color-text-secondary] mb-2';
	}

	static getUserListClass(): string {
		return 'space-y-2';
	}

	static getUserItemClass(): string {
		return 'flex items-center gap-1 px-2 py-1 rounded hover:bg-[--color-background-hover]';
	}

	static getUserSwatchClass(): string {
		return 'w-4 h-4 rounded-full mr-2';
	}

	static getUserNameClass(): string {
		return 'text-sm text-[--color-text-primary]';
	}

	static getCurrentUserClass(): string {
		return 'ml-1 text-xs text-[--color-text-tertiary]';
	}

	static getToolButtonClass(isActive: boolean): string {
		return cn(
			'p-2 rounded transition-colors',
			isActive
				? 'bg-[--color-primary-500] text-[--color-text-inverse]'
				: 'hover:bg-[--color-background-hover]'
		);
	}

	static getActionButtonClass(): string {
		return 'px-3 py-1.5 text-sm rounded-md bg-[--color-primary-500] text-[--color-text-inverse] hover:bg-[--color-primary-600] transition-colors disabled:opacity-50 disabled:cursor-not-allowed';
	}
}

