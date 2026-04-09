import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';

export class KbdStyleManager {
	static getKbdClasses(className = ''): string {
		return mergeClassNames('kbd', 'px-1.5 py-0.5 text-xs font-mono rounded bg-[var(--color-neutral-100)] border border-[var(--color-neutral-200)]', className);
	}
}

