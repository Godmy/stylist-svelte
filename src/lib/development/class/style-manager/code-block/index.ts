import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';

export class CodeStyleManager {
	static getSurfaceBaseClasses(): string {
		return 'rounded-xl border border-[var(--color-border-primary)] bg-[var(--color-background-primary)] shadow-sm overflow-hidden';
	}

	static getContainerClass(className = ''): string {
		return mergeClassNames('c-code-block relative', this.getSurfaceBaseClasses(), className);
	}

	static getHeaderClass(className = ''): string {
		return mergeClassNames(this.getHeaderBaseClasses(), className);
	}

	static getHeaderBaseClasses(): string {
		return 'border-b border-[var(--color-border-primary)] bg-[var(--color-background-secondary)] px-4 py-2 text-sm font-medium text-[var(--color-text-primary)]';
	}

	static getLineNumbersContainerClass(className = ''): string {
		return mergeClassNames(this.getLineNumbersContainerBaseClasses(), className);
	}

	static getLineNumbersContainerBaseClasses(): string {
		return 'select-none border-r border-[var(--color-border-primary)] bg-[var(--color-background-secondary)] py-4 pl-2 pr-4 text-right font-mono text-sm text-[var(--color-text-tertiary)]';
	}

	static getLineNumberItemClass(isHighlighted: boolean): string {
		return mergeClassNames(isHighlighted ? this.getLineNumberHighlightClass() : '');
	}

	static getLineNumberHighlightClass(): string {
		return 'bg-[var(--color-warning-100)] text-[var(--color-text-primary)]';
	}

	static getContentContainerClass(className = ''): string {
		return mergeClassNames(this.getContentContainerBaseClasses(), className);
	}

	static getContentContainerBaseClasses(): string {
		return 'flex-1 overflow-auto';
	}

	static getPreClass(className = ''): string {
		return mergeClassNames(this.getPreBaseClasses(), className);
	}

	static getPreBaseClasses(): string {
		return 'overflow-auto p-4 text-sm';
	}

	static getCopyButtonContainerClass(): string {
		return 'absolute right-2 top-2';
	}

	static getIconClass(): string {
		return this.getIconBaseClasses();
	}

	static getIconBaseClasses(): string {
		return 'h-4 w-4';
	}

	static getMainContentClass(): string {
		return 'flex';
	}

	static getChangedContainerBaseClasses(): string {
		return 'bg-[var(--color-background-primary)]';
	}

	static getDiffLineBaseClasses(): string {
		return 'px-4 py-1';
	}

	static getDiffLineVariantClass(type: 'added' | 'removed' | 'unchanged'): string {
		return {
			added: 'border-l-4 border-[var(--color-success-500)] bg-[var(--color-success-50)] text-[var(--color-success-800)]',
			removed: 'border-l-4 border-[var(--color-danger-500)] bg-[var(--color-danger-50)] text-[var(--color-danger-800)]',
			unchanged: 'bg-[var(--color-background-primary)] text-[var(--color-text-secondary)]'
		}[type];
	}
}

export default CodeStyleManager;

