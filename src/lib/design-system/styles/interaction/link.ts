import type { ComponentSize } from '../../tokens/architecture/component-size';
import type { InlineCodeVariant } from '../../tokens/information/inline-code-variants';
import type { LinkVariant } from '../../tokens/interaction/link-variants';

export const INLINE_CODE_CLASSES: Record<InlineCodeVariant, string> = {
	default: 'bg-[--color-background-secondary] text-[--color-text-primary]',
	subtle: 'bg-[--color-background-tertiary] text-[--color-text-secondary]'
};

export const LINK_VARIANT_CLASSES: Record<LinkVariant, string> = {
	default: 'text-[var(--color-text-primary)]',
	primary: 'text-[var(--color-primary-600)]',
	secondary: 'text-[var(--color-secondary-600)]',
	success: 'text-[var(--color-success-600)]',
	warning: 'text-[var(--color-warning-600)]',
	danger: 'text-[var(--color-danger-600)]',
	info: 'text-[var(--color-info-600)]',
	solid: 'text-[var(--color-primary-500)]',
	outline: 'text-[var(--color-text-primary)]',
	ghost: 'text-[var(--color-text-primary)]',
	link: 'text-[var(--color-primary-600)]',
	subtle: 'text-[var(--color-text-primary)]',
	neutral: 'text-[var(--color-neutral-600)]',
	gray: 'text-[var(--color-neutral-600)]',
	muted: 'text-[var(--color-text-tertiary)]',
	dark: 'text-[var(--color-text-inverse)]',
	light: 'text-[var(--color-text-primary)]'
};

export const LINK_SIZE_CLASSES: Record<ComponentSize, string> = {
	xs: 'text-xs',
	sm: 'text-sm',
	md: 'text-base',
	lg: 'text-lg',
	xl: 'text-xl',
	'2xl': 'text-2xl'
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

	static getInlineCodeClasses(
		variant: InlineCodeVariant = 'default',
		className = ''
	): string {
		return this.join(['font-mono px-1.5 py-0.5 rounded', INLINE_CODE_CLASSES[variant], className]);
	}

	static getKbdClasses(className = ''): string {
		return this.join(['inline-flex items-center rounded border border-[--color-border-secondary] bg-[--color-background-secondary] px-1.5 py-0.5 text-xs font-medium text-[--color-text-primary]', className]);
	}

	static getLinkClasses(
		variant: LinkVariant = 'default',
		size: ComponentSize = 'md',
		disabled = false,
		underline = true,
		className = ''
	): string {
		const variantClass = LINK_VARIANT_CLASSES[variant];
		const sizeClass = LINK_SIZE_CLASSES[size];
		return this.join([
			variantClass,
			sizeClass,
			disabled ? 'opacity-50 pointer-events-none' : '',
			!disabled ? 'hover:opacity-80' : '',
			underline ? 'underline underline-offset-2' : '',
			className
		]);
	}
}
