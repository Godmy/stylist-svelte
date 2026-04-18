import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';
import { LABEL_SIZE_CLASSES } from '$stylist/typography/const/map/label-size-classes';
import { LABEL_DEFAULTS } from '$stylist/typography/const/record/label-defaults';
import { DEFAULT_LABEL_DISABLED } from '$stylist/typography/const/value/default-label-disabled';





export class LabelStyleManager {
	static root(classes: string): string {
		return classes.trim();
	}

	static requiredIndicator(classes: string): string {
		return classes.trim();
	}

	static getLabelClasses(
		size: keyof typeof LABEL_SIZE_CLASSES = LABEL_DEFAULTS.size,
		disabled = DEFAULT_LABEL_DISABLED,
		className = ''
	): string {
		return mergeClassNames('font-medium', LABEL_SIZE_CLASSES[size], disabled ? 'text-[--color-text-tertiary] cursor-not-allowed' : 'text-[--color-text-primary]', className);
	}
}



