import {
	BASE_LABEL_CLASSES,
	LABEL_DISABLED_CLASSES,
	LABEL_ENABLED_CLASSES,
	LABEL_SIZE_CLASSES,
	REQUIRED_INDICATOR_CLASSES
} from '../../classes/information/label';
import { DEFAULT_LABEL_DISABLED, DEFAULT_LABEL_REQUIRED, LABEL_DEFAULTS } from '../../defaults/label';
import { cn } from '../../utils/cn/index';

export class LabelStyleManager {
	static getLabelClasses(
		size: keyof typeof LABEL_SIZE_CLASSES = LABEL_DEFAULTS.size,
		disabled = DEFAULT_LABEL_DISABLED,
		className = ''
	): string {
		return cn(
			BASE_LABEL_CLASSES,
			LABEL_SIZE_CLASSES[size],
			disabled ? LABEL_DISABLED_CLASSES : LABEL_ENABLED_CLASSES,
			DEFAULT_LABEL_REQUIRED && REQUIRED_INDICATOR_CLASSES,
			className
		);
	}
}
