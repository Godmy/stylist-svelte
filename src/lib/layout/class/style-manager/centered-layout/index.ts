import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';

export type CenteredLayoutAxis = 'both' | 'horizontal' | 'vertical';

export class CenteredLayoutStyleManager {
	static getHostClass(
		axis: CenteredLayoutAxis,
		fillHeight: boolean,
		fillWidth: boolean,
		className?: string
	): string {
		const horizontal = axis === 'both' || axis === 'horizontal';
		const vertical = axis === 'both' || axis === 'vertical';

		return mergeClassNames(
			'flex',
			horizontal && vertical && 'items-center justify-center',
			horizontal && !vertical && 'justify-center',
			!horizontal && vertical && 'items-center',
			fillHeight && 'h-full',
			fillWidth && 'w-full',
			className
		);
	}

	static getInnerClass(maxWidth?: string): string {
		return mergeClassNames('w-full', maxWidth ? `max-w-[${maxWidth}]` : '');
	}
}
