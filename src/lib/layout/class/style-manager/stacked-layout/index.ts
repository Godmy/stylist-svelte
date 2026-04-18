import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';
import type { StackedLayoutDirection } from '$stylist/layout/type/enum/stacked-layout-direction';
import type { StackedLayoutGap } from '$stylist/layout/type/enum/stacked-layout-gap';
import type { StackedLayoutAlignItems } from '$stylist/layout/type/enum/stacked-layout-align-items';
import type { StackedLayoutJustifyContent } from '$stylist/layout/type/enum/stacked-layout-justify-content';

export class StackedLayoutStyleManager {
	static getDirectionClass(direction: StackedLayoutDirection): string {
		return direction === 'horizontal' ? 'flex-row' : 'flex-col';
	}

	static getGapClass(gap: StackedLayoutGap): string {
		return {
			none: 'gap-0',
			sm: 'gap-2',
			md: 'gap-4',
			lg: 'gap-6',
			xl: 'gap-8'
		}[gap];
	}

	static getAlignItemsClass(alignItems: StackedLayoutAlignItems): string {
		return {
			start: 'items-start',
			center: 'items-center',
			end: 'items-end',
			stretch: 'items-stretch'
		}[alignItems];
	}

	static getJustifyContentClass(justifyContent: StackedLayoutJustifyContent): string {
		return {
			start: 'justify-start',
			center: 'justify-center',
			end: 'justify-end',
			between: 'justify-between',
			around: 'justify-around',
			evenly: 'justify-evenly'
		}[justifyContent];
	}

	static getHostClass(
		direction: StackedLayoutDirection,
		gap: StackedLayoutGap,
		alignItems: StackedLayoutAlignItems,
		justifyContent: StackedLayoutJustifyContent,
		className?: string
	): string {
		return mergeClassNames(
			'flex',
			this.getDirectionClass(direction),
			this.getGapClass(gap),
			this.getAlignItemsClass(alignItems),
			this.getJustifyContentClass(justifyContent),
			className
		);
	}
}
