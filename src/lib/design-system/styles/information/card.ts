/**
 * Base StyleManager for all card components
 */

import { BASE_CLASSES } from '../../runtime/foundation';
import { InteractionStyleManager } from '../interaction/interaction';
import type { CardSize, CardVariant, ProgressVariant } from '../../tokens/information/card';

const CARD_BASE_CLASSES = `${BASE_CLASSES.card} bg-[--color-background-primary] overflow-hidden rounded-lg`;

const CARD_SIZE_CLASSES = {
	sm: 'p-3',
	md: 'p-4',
	lg: 'p-6',
	xl: 'p-8'
} as const;

const CARD_VARIANT_CLASSES = {
	...InteractionStyleManager.getVariantClassMap(),
	outline: 'bg-transparent border-2',
	ghost: 'bg-transparent border-none shadow-none',
	elevated: 'shadow-lg',
	flat: 'shadow-none border'
} as const;

const CARD_TITLE_CLASSES = 'text-lg font-semibold text-[--color-text-primary]';
const CARD_ICON_CONTAINER_CLASSES = 'flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center';
const CARD_ICON_SIZE_CLASSES = { sm: 'w-4 h-4', md: 'w-6 h-6', lg: 'w-8 h-8' } as const;
const CARD_TEXT_CONTENT_CLASSES = 'flex-1 min-w-0';
const CARD_DESCRIPTION_CLASSES = 'text-sm text-[--color-text-secondary] mt-2';
const CARD_TRUNCATE_CLASSES = 'truncate';
const CARD_ACTIONS_CLASSES = 'flex items-center gap-2 mt-[--spacing-md]';
const CARD_ACTION_BUTTON_VARIANT_CLASSES = {
	primary: 'bg-[--color-primary-500] text-[--color-text-inverse] hover:bg-[--color-primary-600]',
	secondary: 'bg-[--color-background-secondary] text-[--color-text-primary] hover:bg-[--color-border-secondary]',
	ghost: 'bg-transparent text-[--color-text-primary] hover:bg-[--color-background-secondary]',
	outline: 'border border-[--color-border-primary] text-[--color-text-primary] hover:bg-[--color-background-secondary]'
} as const;
const CARD_PROGRESS_CONTAINER_CLASSES = 'w-full h-2 bg-[--color-border-secondary] rounded-full overflow-hidden mt-3';
const CARD_PROGRESS_FILL_CLASSES = 'h-full transition-all duration-[var(--duration-500)] ease-out';
const CARD_PROGRESS_VARIANT_CLASSES = {
	success: 'bg-[var(--color-success-500)]',
	warning: 'bg-yellow-500',
	danger: 'bg-[var(--color-danger-500)]',
	info: 'bg-[var(--color-primary-500)]',
	secondary: 'bg-[--color-secondary-500]',
	primary: 'bg-[--color-primary-500]'
} as const;

export class CardStyleManager {
	static getBaseClasses(): string {
		return CARD_BASE_CLASSES;
	}

	static getContainerClasses(className?: string, size: CardSize = 'md'): string {
		const sizeClass = CARD_SIZE_CLASSES[size] || CARD_SIZE_CLASSES.md;
		return `${CARD_BASE_CLASSES} ${sizeClass} ${className || ''}`.trim();
	}

	static getVariantClasses(variant: CardVariant = 'primary'): string {
		return CARD_VARIANT_CLASSES[variant] || CARD_VARIANT_CLASSES.primary;
	}

	static getHeaderClasses(className?: string): string {
		return `${'border-b border-[--color-border-secondary] p-[--spacing-md]'} ${className || ''}`.trim();
	}

	static getTitleClasses(className?: string): string {
		return `${CARD_TITLE_CLASSES} ${className || ''}`.trim();
	}

	static getTitleBaseClasses(): string {
		return CARD_TITLE_CLASSES;
	}

	static getSubtitleClasses(className?: string): string {
		return `${'text-sm text-[--color-text-secondary] mt-1'} ${className || ''}`.trim();
	}

	static getBodyClasses(className?: string): string {
		return `${'p-[--spacing-md]'} ${className || ''}`.trim();
	}

	static getFooterClasses(className?: string): string {
		return `${'border-t border-[--color-border-secondary] p-[--spacing-md] bg-[--color-background-secondary]'} ${className || ''}`.trim();
	}

	static getImageContainerClasses(): string {
		return 'relative w-full overflow-hidden';
	}

	static getImageClasses(className?: string): string {
		return `${'w-full h-auto object-cover'} ${className || ''}`.trim();
	}

	static getIconContainerClasses(): string {
		return CARD_ICON_CONTAINER_CLASSES;
	}

	static getIconContainerBaseClasses(): string {
		return CARD_ICON_CONTAINER_CLASSES;
	}

	static getIconClasses(size: keyof typeof CARD_ICON_SIZE_CLASSES = 'md'): string {
		return CARD_ICON_SIZE_CLASSES[size];
	}

	static getTextContentClasses(): string {
		return CARD_TEXT_CONTENT_CLASSES;
	}

	static getTextContentBaseClasses(): string {
		return CARD_TEXT_CONTENT_CLASSES;
	}

	static getDescriptionClasses(className?: string): string {
		return `${CARD_DESCRIPTION_CLASSES} ${className || ''}`.trim();
	}

	static getDescriptionBaseClasses(): string {
		return CARD_DESCRIPTION_CLASSES;
	}

	static getTruncateClasses(): string {
		return CARD_TRUNCATE_CLASSES;
	}

	static getTruncateBaseClasses(): string {
		return CARD_TRUNCATE_CLASSES;
	}

	static getActionsClasses(className?: string): string {
		return `${CARD_ACTIONS_CLASSES} ${className || ''}`.trim();
	}

	static getActionsBaseClasses(): string {
		return CARD_ACTIONS_CLASSES;
	}

	static getActionButtonClasses(variant: keyof typeof CARD_ACTION_BUTTON_VARIANT_CLASSES = 'primary', className?: string): string {
		const variantClass = CARD_ACTION_BUTTON_VARIANT_CLASSES[variant];
		return `${'px-4 py-2 rounded-md font-medium transition-colors duration-[var(--duration-150)]'} ${variantClass} ${className || ''}`.trim();
	}

	static getProgressContainerClasses(): string {
		return CARD_PROGRESS_CONTAINER_CLASSES;
	}

	static getProgressContainerBaseClasses(): string {
		return CARD_PROGRESS_CONTAINER_CLASSES;
	}

	static getProgressFillClasses(variant: ProgressVariant = 'info', className?: string): string {
		const variantClass = CARD_PROGRESS_VARIANT_CLASSES[variant] || CARD_PROGRESS_VARIANT_CLASSES.info;
		return `${CARD_PROGRESS_FILL_CLASSES} ${variantClass} ${className || ''}`.trim();
	}

	static getProgressFillBaseClasses(): string {
		return CARD_PROGRESS_FILL_CLASSES;
	}

	static getProgressVariantClass(variant: ProgressVariant = 'info'): string {
		return CARD_PROGRESS_VARIANT_CLASSES[variant] || CARD_PROGRESS_VARIANT_CLASSES.info;
	}
}

export default CardStyleManager;
