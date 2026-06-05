import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';
import type { FocusableStyleManagerOptions } from '$stylist/interaction/interface/slot/focusable-style-manager-options';

export class FocusableStyleManager {
	static getClasses(options: FocusableStyleManagerOptions = {}): string {
		const {
			focusEffect = true,
			isFocused = false,
			disabled = false,
			class: className = ''
		} = options;

		if (disabled) {
			return mergeClassNames('c-focusable', 'c-focusable--disabled', className);
		}

		return mergeClassNames(
			'c-focusable',
			focusEffect && 'c-focusable--focus-ring',
			isFocused && 'c-focusable--focused',
			className
		);
	}
}
