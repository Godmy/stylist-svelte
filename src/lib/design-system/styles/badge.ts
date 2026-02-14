import {
	BADGE_DEFAULTS,
	BADGE_GROUP_CONTAINER_CLASSES,
	BADGE_GROUP_OVERFLOW_CLASSES,
	BADGE_SIZE_CLASSES,
	BADGE_VARIANT_CLASSES,
	BASE_BADGE_CLASSES,
	BASE_CODE_BLOCK_CLASSES,
	CODE_BLOCK_DEFAULTS,
	CODE_BLOCK_SIZE_CLASSES,
	CODE_BLOCK_VARIANT_CLASSES
} from '../classes/badge';
import { cn } from '../utils/cn';

export class BadgeStyleManager {
	static getBadgeClasses(
		variant: keyof typeof BADGE_VARIANT_CLASSES = BADGE_DEFAULTS.variant,
		size: keyof typeof BADGE_SIZE_CLASSES = BADGE_DEFAULTS.size,
		className = ''
	): string {
		return cn(BASE_BADGE_CLASSES, BADGE_VARIANT_CLASSES[variant], BADGE_SIZE_CLASSES[size], className);
	}

	static getBadgeGroupContainerClasses(className = ''): string {
		return cn(BADGE_GROUP_CONTAINER_CLASSES, className);
	}

	static getBadgeGroupOverflowClasses(className = ''): string {
		return cn(BADGE_GROUP_OVERFLOW_CLASSES, className);
	}

	static getCodeBlockClasses(
		variant: keyof typeof CODE_BLOCK_VARIANT_CLASSES = CODE_BLOCK_DEFAULTS.variant,
		size: keyof typeof CODE_BLOCK_SIZE_CLASSES = CODE_BLOCK_DEFAULTS.size,
		className = ''
	): string {
		return cn(
			BASE_CODE_BLOCK_CLASSES,
			CODE_BLOCK_VARIANT_CLASSES[variant],
			CODE_BLOCK_SIZE_CLASSES[size],
			className
		);
	}
}
