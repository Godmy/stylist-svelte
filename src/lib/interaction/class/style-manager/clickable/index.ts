import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';
import type { ClickableStyleManagerOptions } from '$stylist/interaction/interface/slot/clickable-style-manager-options';

export class ClickableStyleManager {
	static getClasses(options: ClickableStyleManagerOptions = {}): string {
		const {
			variant = 'default',
			disabled = false,
			pressEffect = true,
			hoverEffect = true,
			class: className = ''
		} = options;

		if (disabled) {
			return mergeClassNames('c-clickable', 'c-clickable--disabled', className);
		}

		return mergeClassNames(
			'c-clickable',
			variant !== 'default' && `c-clickable--${variant}`,
			pressEffect && 'c-clickable--press',
			hoverEffect && 'c-clickable--hover',
			className
		);
	}
}
