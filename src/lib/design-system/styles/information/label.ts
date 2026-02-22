import {
	BASE_LABEL_CLASSES,
	LABEL_DISABLED_CLASSES,
	LABEL_ENABLED_CLASSES,
	LABEL_SIZE_CLASSES
} from '../../classes/information/label';
import { cn } from '../../utils/cn/index';

export const LABEL_DEFAULTS = {
	size: 'md' as keyof typeof LABEL_SIZE_CLASSES
};

export const DEFAULT_LABEL_DISABLED = false;
export const DEFAULT_LABEL_REQUIRED = false;

export class LabelStyleManager {
	static getLabelClasses(
		size: keyof typeof LABEL_SIZE_CLASSES = LABEL_DEFAULTS.size,
		disabled = DEFAULT_LABEL_DISABLED,
		className = ''
	): string {
		return cn(BASE_LABEL_CLASSES, LABEL_SIZE_CLASSES[size], disabled ? LABEL_DISABLED_CLASSES : LABEL_ENABLED_CLASSES, className);
	}
}
