import { cn } from '$stylist/layout/function/script/merge-class-names';
import type { TokenAlignment } from '$stylist/layout/type/enum/alignment';
import type { TokenJustification } from '$stylist/layout/type/enum/justification';

export type StackedLayoutDirection = 'vertical' | 'horizontal';
export type StackedLayoutGap = 'none' | 'sm' | 'md' | 'lg' | 'xl';
export type StackedLayoutAlignItems = 'start' | 'center' | 'end' | 'stretch';
export type StackedLayoutJustifyContent = 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';

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
		return cn(
			'flex',
			this.getDirectionClass(direction),
			this.getGapClass(gap),
			this.getAlignItemsClass(alignItems),
			this.getJustifyContentClass(justifyContent),
			className
		);
	}
}

