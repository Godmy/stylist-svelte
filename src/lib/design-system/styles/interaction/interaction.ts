import { INTERACTIVE_BASE_CLASS, INTERACTIVE_VARIANTS, VARIANT_CLASSES } from '../../classes/interaction';
import { cn } from '../../utils/cn/index';

export class InteractionStyleManager {
	static getInteractiveBaseClasses(className = ''): string {
		return cn(INTERACTIVE_BASE_CLASS, className);
	}

	static getVariantClasses(
		variant: keyof typeof VARIANT_CLASSES = 'default',
		className = ''
	): string {
		return cn(VARIANT_CLASSES[variant], className);
	}

	static getInteractiveClasses(options: {
		variant?: keyof typeof VARIANT_CLASSES;
		className?: string;
	} = {}): string {
		return cn(
			INTERACTIVE_BASE_CLASS,
			VARIANT_CLASSES[options.variant ?? 'default'],
			options.className ?? ''
		);
	}

	static getInteractiveVariants(): readonly (keyof typeof VARIANT_CLASSES)[] {
		return INTERACTIVE_VARIANTS;
	}
}
