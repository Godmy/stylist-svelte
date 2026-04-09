/**
 * Base StyleManager for all card components
 */

import { StyleManagerBase } from '$stylist/architecture/class/style-manager/base/index';
import { InteractionStyleManager } from '$stylist/interaction/class/style-manager/interaction';
import type { TokenSize } from '$stylist/layout/type/enum/size';
import type { TokenAppearance } from '$stylist/interaction/type/record/appearance';
import { CARD_SIZE_CLASSES } from '$stylist/commerce/const/record/card-size-classes';
import { PROGRESS_VARIANT_CLASSES } from '$stylist/commerce/const/record/progress-variant-classes';

export class CardStyleManager {
	static getBaseClasses(): string {
		return `${StyleManagerBase.classes.card} bg-[--color-background-primary] overflow-hidden rounded-lg`;
	}

	static getContainerClasses(className?: string, size: TokenSize = 'md'): string {
		const sizeClass = CARD_SIZE_CLASSES[size] || CARD_SIZE_CLASSES.md;
		return `${this.getBaseClasses()} ${sizeClass} ${className || ''}`.trim();
	}

	static getVariantClasses(variant: TokenAppearance = 'primary'): string {
		const variantMap: Partial<Record<TokenAppearance, string>> = {
			...InteractionStyleManager.getVariantClassMap(),
			outline: 'bg-transparent border-2',
			ghost: 'bg-transparent border-none shadow-none',
			elevated: 'shadow-lg',
			flat: 'shadow-none border'
		};

		return (
			variantMap[variant] || InteractionStyleManager.getVariantClassMap().primary
		);
	}

	static getHeaderClasses(className?: string): string {
		return `${'border-b border-[--color-border-secondary] p-[--spacing-md]'} ${className || ''}`.trim();
	}

	static getTitleClasses(className?: string): string {
		return `${this.getTitleBaseClasses()} ${className || ''}`.trim();
	}

	static getTitleBaseClasses(): string {
		return 'text-lg font-semibold text-[--color-text-primary]';
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
		return this.getIconContainerBaseClasses();
	}

	static getIconContainerBaseClasses(): string {
		return 'flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center';
	}

	static getIconClasses(size: 'sm' | 'md' | 'lg' = 'md'): string {
		return { sm: 'w-4 h-4', md: 'w-6 h-6', lg: 'w-8 h-8' }[size];
	}

	static getTextContentClasses(): string {
		return this.getTextContentBaseClasses();
	}

	static getTextContentBaseClasses(): string {
		return 'flex-1 min-w-0';
	}

	static getDescriptionClasses(className?: string): string {
		return `${this.getDescriptionBaseClasses()} ${className || ''}`.trim();
	}

	static getDescriptionBaseClasses(): string {
		return 'text-sm text-[--color-text-secondary] mt-2';
	}

	static getTruncateClasses(): string {
		return this.getTruncateBaseClasses();
	}

	static getTruncateBaseClasses(): string {
		return 'truncate';
	}

	static getActionsClasses(className?: string): string {
		return `${this.getActionsBaseClasses()} ${className || ''}`.trim();
	}

	static getActionsBaseClasses(): string {
		return 'flex items-center gap-2 mt-[--spacing-md]';
	}

	static getActionButtonClasses(variant: 'primary' | 'secondary' | 'ghost' | 'outline' = 'primary', className?: string): string {
		const variantClass = {
			primary: 'bg-[--color-primary-500] text-[--color-text-inverse] hover:bg-[--color-primary-600]',
			secondary: 'bg-[--color-background-secondary] text-[--color-text-primary] hover:bg-[--color-border-secondary]',
			ghost: 'bg-transparent text-[--color-text-primary] hover:bg-[--color-background-secondary]',
			outline: 'border border-[--color-border-primary] text-[--color-text-primary] hover:bg-[--color-background-secondary]'
		}[variant];
		return `${'px-4 py-2 rounded-md font-medium transition-colors duration-[var(--duration-150)]'} ${variantClass} ${className || ''}`.trim();
	}

	static getProgressContainerClasses(): string {
		return this.getProgressContainerBaseClasses();
	}

	static getProgressContainerBaseClasses(): string {
		return 'w-full h-2 bg-[--color-border-secondary] rounded-full overflow-hidden mt-3';
	}

	static getProgressFillClasses(variant: TokenAppearance = 'info', className?: string): string {
		const variantClass = this.getProgressVariantClass(variant);
		return `${this.getProgressFillBaseClasses()} ${variantClass} ${className || ''}`.trim();
	}

	static getProgressFillBaseClasses(): string {
		return 'h-full transition-all duration-[var(--duration-500)] ease-out';
	}

	static getProgressVariantClass(variant: TokenAppearance = 'info'): string {
		return PROGRESS_VARIANT_CLASSES[variant] || PROGRESS_VARIANT_CLASSES.info || 'bg-[var(--color-primary-500)]';
	}
}

export default CardStyleManager;

