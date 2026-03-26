import type { TokenSize } from '$stylist/architecture/type/token/size';
import type { TokenAppearance } from '$stylist/information/type/token/appearance';

const LINK_VARIANT_CLASSES: Record<TokenAppearance, string> = {
	default: 'text-[var(--color-text-primary)]',
	primary: 'text-[var(--color-primary-600)]',
	secondary: 'text-[var(--color-secondary-600)]',
	success: 'text-[var(--color-success-600)]',
	warning: 'text-[var(--color-warning-600)]',
	danger: 'text-[var(--color-danger-600)]',
	error: 'text-[var(--color-danger-600)]',
	info: 'text-[var(--color-info-600)]',
	solid: 'text-[var(--color-primary-500)]',
	outline: 'text-[var(--color-text-primary)]',
	ghost: 'text-[var(--color-text-primary)]',
	link: 'text-[var(--color-primary-600)]',
	subtle: 'text-[var(--color-text-primary)]',
	neutral: 'text-[var(--color-neutral-600)]',
	gray: 'text-[var(--color-neutral-600)]',
	dark: 'text-[var(--color-text-inverse)]',
	light: 'text-[var(--color-text-primary)]',
	elevated: 'text-[var(--color-text-primary)]',
	flat: 'text-[var(--color-text-primary)]'
};

const LINK_SIZE_CLASSES: Record<TokenSize, string> = {
	xs: 'text-xs',
	sm: 'text-sm',
	md: 'text-base',
	lg: 'text-lg',
	xl: 'text-xl',
	'2xl': 'text-2xl',
	'1/4': 'text-xs',
	'1/3': 'text-sm',
	'2/5': 'text-sm',
	'1/2': 'text-base',
	'3/5': 'text-base',
	'2/3': 'text-lg',
	'3/4': 'text-xl',
	full: 'text-2xl'
};





export class LinkStyleManager {
	private static join(classes: Array<string | false | null | undefined>): string {
		return classes.filter(Boolean).join(' ').trim();
	}

	static getAbbrClasses(className = ''): string {
		return this.join(['underline decoration-dotted cursor-help', className]);
	}

	static getDefinitionDescriptionClasses(className = ''): string {
		return this.join(['text-sm text-[var(--color-text-secondary)]', className]);
	}

	static getDefinitionTermClasses(className = ''): string {
		return this.join(['font-medium text-[var(--color-text-primary)]', className]);
	}

	static getEmClasses(className = ''): string {
		return this.join(['italic', className]);
	}

	static getHighlightClasses(className = ''): string {
		return this.join(['bg-[--color-warning-200] text-[--color-text-primary]', className]);
	}

	static getInlineCodeClasses(className = ''): string {
		return this.join([
			'font-mono px-1.5 py-0.5 rounded bg-[--color-background-secondary] text-[--color-text-primary]',
			className
		]);
	}

	static getKbdClasses(className = ''): string {
		return this.join(['inline-flex items-center rounded border border-[--color-border-secondary] bg-[--color-background-secondary] px-1.5 py-0.5 text-xs font-medium text-[--color-text-primary]', className]);
	}

	static getLinkClasses(
		variant: TokenAppearance = 'default',
		size: TokenSize = 'md',
		disabled = false,
		underline = true,
		className = ''
	): string {
		const variantClass = LINK_VARIANT_CLASSES[variant];
		const sizeClass = LINK_SIZE_CLASSES[size];
		return this.join([
			variantClass,
			sizeClass,
			disabled ? 'opacity-[var(--opacity-50)] pointer-events-none' : '',
			!disabled ? 'hover:opacity-[var(--opacity-80)]' : '',
			underline ? 'underline underline-offset-2' : '',
			className
		]);
	}
}






