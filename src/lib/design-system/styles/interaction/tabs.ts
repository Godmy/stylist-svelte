import { cn } from '../../utils/cn/index';
import {
	DISABLED_CLASSES,
	TAB_ACTIVE_CLASSES,
	TAB_BASE_CLASSES,
	TAB_INACTIVE_CLASSES,
	TAB_LIST_BASE_CLASSES,
	TAB_LIST_LAYOUT_CLASSES,
	TAB_SIZE_CLASSES,
	TAB_VARIANT_CLASSES
} from '../../classes/interaction/tabs';

export class TabsStyleManager {
	static getTabClasses(options: {
		variant?: string;
		size?: string;
		selected?: boolean;
		disabled?: boolean;
		className?: string;
	}): string {
		const variant = options.variant ?? 'primary';
		const size = options.size ?? 'md';
		const sizeClass = TAB_SIZE_CLASSES[size as keyof typeof TAB_SIZE_CLASSES] ?? TAB_SIZE_CLASSES.md;
		const variantClass =
			TAB_VARIANT_CLASSES[variant as keyof typeof TAB_VARIANT_CLASSES] ?? TAB_VARIANT_CLASSES.primary;
		return cn(
			TAB_BASE_CLASSES,
			sizeClass,
			variantClass,
			options.selected ? TAB_ACTIVE_CLASSES : TAB_INACTIVE_CLASSES,
			options.disabled ? DISABLED_CLASSES : '',
			options.className ?? ''
		);
	}

	static getTabListClasses(vertical = false, className = ''): string {
		return cn(TAB_LIST_BASE_CLASSES, vertical ? TAB_LIST_LAYOUT_CLASSES : '', className);
	}
}
