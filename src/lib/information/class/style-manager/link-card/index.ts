import type { TokenAppearance as LinkCardVariant } from '$stylist/information/type/token/appearance';
import { cn } from '$stylist/information/function/cn/index';
import { CardStyleManager } from '$stylist/information/class/style-manager/card';

const LINK_CARD_VARIANT_CLASSES: Partial<Record<LinkCardVariant, string>> = {
	default:
		'bg-[--color-background-primary] border-[--color-border-primary] hover:border-[--color-border-secondary] hover:shadow-sm',
	primary:
		'bg-[--color-primary-50] border-[--color-primary-200] hover:border-[--color-primary-300]',
	secondary:
		'bg-[--color-background-secondary] border-[--color-border-primary] hover:border-[--color-border-secondary] hover:shadow-sm',
	success:
		'bg-[--color-success-50] border-[--color-success-200] hover:border-[--color-success-300]',
	warning:
		'bg-[--color-warning-50] border-[--color-warning-200] hover:border-[--color-warning-300]',
	danger: 'bg-[--color-danger-50] border-[--color-danger-200] hover:border-[--color-danger-300]',
	error: 'bg-[--color-danger-50] border-[--color-danger-200] hover:border-[--color-danger-300]',
	info:
		'bg-[--color-info-50] border-[--color-info-200] hover:border-[--color-info-300]',
	solid:
		'bg-[--color-primary-500] border-[--color-primary-500] text-[--color-text-inverse]',
	outline:
		'bg-transparent border-[--color-border-primary] hover:border-[--color-text-tertiary] hover:shadow-sm',
	ghost:
		'bg-transparent border-transparent hover:bg-[--color-background-hover]',
	link:
		'bg-transparent border-transparent underline hover:no-underline',
	subtle:
		'bg-[--color-neutral-50] border-[--color-border-secondary]',
	neutral:
		'bg-[--color-neutral-100] border-[--color-neutral-200]',
	gray:
		'bg-[--color-neutral-100] border-[--color-neutral-200]',
	dark:
		'bg-[--color-neutral-800] border-[--color-neutral-700] text-[--color-text-inverse]',
	light:
		'bg-[--color-neutral-50] border-[--color-neutral-200]',
	elevated:
		'bg-[--color-background-primary] border-[--color-border-secondary] shadow-md hover:shadow-lg',
	flat:
		'bg-[--color-background-secondary] border-transparent'
};





export class LinkCardStyleManager {
	static getContainerClasses(variant: LinkCardVariant = 'default'): string {
		return cn(
			'link-card group block p-6 transition-all duration-[var(--duration-200)]',
			CardStyleManager.getBaseClasses(),
			LINK_CARD_VARIANT_CLASSES[variant] ?? LINK_CARD_VARIANT_CLASSES.default
		);
	}

	static getContentClasses(): string {
		return 'flex items-start';
	}

	static getIconContainerClasses(): string {
		return 'mr-4 mt-0.5 flex-shrink-0';
	}

	static getIconClasses(): string {
		return 'h-6 w-6 text-[var(--color-text-tertiary)] transition-colors duration-[var(--duration-200)] group-hover:text-[var(--color-text-secondary)]';
	}

	static getTextContainerClasses(): string {
		return 'min-w-0 flex-1';
	}

	static getTitleClasses(): string {
		return 'text-lg font-semibold text-[var(--color-text-primary)] transition-colors duration-[var(--duration-200)] group-hover:text-[var(--color-primary-600)]';
	}

	static getDescriptionClasses(): string {
		return 'mt-1 text-sm text-[var(--color-text-secondary)]';
	}

	static getArrowClasses(): string {
		return 'ml-2 flex-shrink-0 text-[var(--color-text-tertiary)] transition-colors duration-[var(--duration-200)] group-hover:text-[var(--color-primary-600)]';
	}
}







