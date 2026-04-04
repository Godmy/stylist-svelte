import { cn } from '$stylist/layout/function/script/merge-class-names';

export class InlineCodeStyleManager {
	static getInlineCodeClasses(className = ''): string {
		return cn('inline-code', 'px-1 py-0.5 text-sm font-mono rounded bg-[var(--color-neutral-100)] text-[var(--color-danger-500)]', className);
	}
}

