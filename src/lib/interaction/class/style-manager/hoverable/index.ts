import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';
import type { HoverableStyleManagerOptions } from '$stylist/interaction/interface/slot/hoverable-style-manager-options';

export class HoverableStyleManager {
	static getClasses(options: HoverableStyleManagerOptions = {}): string {
		const {
			hoverEffect = true,
			isHovered = false,
			disabled = false,
			class: className = ''
		} = options;

		if (disabled) {
			return mergeClassNames('c-hoverable', 'c-hoverable--disabled', className);
		}

		return mergeClassNames(
			'c-hoverable',
			hoverEffect && 'c-hoverable--hover-effect',
			isHovered && 'c-hoverable--hovered',
			className
		);
	}
}
