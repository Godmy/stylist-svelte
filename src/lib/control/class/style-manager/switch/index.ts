import type { TokenSize } from '$stylist/layout/type/enum/size';
import { SWITCH_SIZE_CLASSES } from '$stylist/control/const/record/switch-size-classes';
import { SWITCH_THUMB_SIZE_CLASSES } from '$stylist/control/const/record/switch-thumb-size-classes';
import { SWITCH_THUMB_TRANSLATE_CLASSES } from '$stylist/control/const/record/switch-thumb-translate-classes';

export class SwitchStyleManager {
	private static join(classes: Array<string | false | null | undefined>): string {
		return classes.filter(Boolean).join(' ').trim();
	}

	static getSwitchSizeClass(size: TokenSize = 'md'): string {
		return SWITCH_SIZE_CLASSES[size] ?? SWITCH_SIZE_CLASSES.md;
	}

	static getSwitchThumbClasses(checked = false, size: TokenSize = 'md'): string {
		return this.join([
			'pointer-events-none block rounded-full bg-[var(--color-background-primary)] shadow-lg ring-0 transition-transform',
			this.getSwitchThumbSizeClass(size),
			checked ? SWITCH_THUMB_TRANSLATE_CLASSES[size] ?? SWITCH_THUMB_TRANSLATE_CLASSES.md : 'translate-x-0.5'
		]);
	}

	static getSwitchThumbSizeClass(size: TokenSize = 'md'): string {
		return SWITCH_THUMB_SIZE_CLASSES[size] ?? SWITCH_THUMB_SIZE_CLASSES.md;
	}

	static getSwitchClasses(
		checked = false,
		disabled = false,
		size: TokenSize = 'md',
		className?: string
	): string {
		return this.join([
			'peer inline-flex shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary-500)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-background-primary)]',
			this.getSwitchSizeClass(size),
			checked ? 'bg-[var(--color-primary-600)]' : 'bg-[var(--color-border-primary)]',
			disabled ? 'opacity-[var(--opacity-50)] cursor-not-allowed' : '',
			className
		]);
	}

	static getSwitchInputClasses(): string {
		return 'sr-only';
	}

	static getSwitchContainerClasses(className?: string): string {
		return this.join([
			'inline-flex items-center',
			className
		]);
	}

	static getSwitchLabelClasses(disabled = false, className?: string): string {
		return this.join([
			'text-sm text-[var(--color-text-primary)] ml-2',
			disabled ? 'opacity-[var(--opacity-50)] cursor-not-allowed' : '',
			className
		]);
	}
}
