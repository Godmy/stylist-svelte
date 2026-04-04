import { cn } from '$stylist/layout/function/script/merge-class-names';

export type PopoverPosition = 'top' | 'bottom' | 'left' | 'right';

export class PopoverStyleManager {
	static getPositionClass(position: PopoverPosition): string {
		return {
			top: 'bottom-full left-0 mb-2',
			bottom: 'top-full left-0 mt-2',
			left: 'right-full top-0 mr-2',
			right: 'left-full top-0 ml-2'
		}[position];
	}

	static getRootClass(className?: string): string {
		return cn('relative inline-block', className);
	}

	static getPopoverClass(position: PopoverPosition, className?: string): string {
		return cn(
			'absolute z-[var(--z-index-docked)] bg-[var(--color-background-primary)] border border-[var(--color-border-primary)] rounded-lg shadow-lg p-4 min-w-[200px]',
			this.getPositionClass(position),
			className
		);
	}

	static getTitleClass(): string {
		return 'font-semibold mb-2';
	}

	static getContentClass(): string {
		return '';
	}

	static getTriggerClass(): string {
		return '';
	}
}

