import { cn } from '$stylist/layout/function/script/merge-class-names';
import type { TokenAlignment } from '$stylist/layout/type/enum/alignment';
import type { TokenJustification } from '$stylist/layout/type/enum/justification';
import type { TokenSize } from '$stylist/layout/type/enum/size';

export class VerticalLayoutStyleManager {
	static getHostClass(
		gap: TokenSize,
		alignItems: TokenAlignment | 'stretch' | 'baseline',
		justifyContent: TokenJustification,
		fillHeight: boolean,
		className = ''
	): string {
		return cn(
			'flex flex-col',
			fillHeight && 'h-full',
			{
				xs: 'gap-1',
				sm: 'gap-2',
				md: 'gap-4',
				lg: 'gap-6',
				xl: 'gap-8'
			}[gap as 'xs' | 'sm' | 'md' | 'lg' | 'xl'],
			{
				top: 'items-start',
				'top-center': 'items-start',
				'top-start': 'items-start',
				'top-end': 'items-start',
				bottom: 'items-end',
				'bottom-center': 'items-end',
				'bottom-start': 'items-end',
				'bottom-end': 'items-end',
				left: 'items-center',
				'left-center': 'items-center',
				'left-start': 'items-start',
				'left-end': 'items-end',
				right: 'items-center',
				'right-center': 'items-center',
				'right-start': 'items-start',
				'right-end': 'items-end',
				center: 'items-center',
				stretch: 'items-stretch',
				baseline: 'items-baseline',
				justify: 'items-center'
			}[alignItems],
			{
				stretch: 'justify-stretch',
				baseline: 'justify-start',
				between: 'justify-between',
				around: 'justify-around',
				evenly: 'justify-evenly',
				justify: 'justify-center'
			}[justifyContent],
			className
		);
	}

	static resolveVerticalLayout(props: {
		gap?: TokenSize;
		alignItems?: TokenAlignment | 'stretch' | 'baseline';
		justifyContent?: TokenJustification;
		fillHeight?: boolean;
		class?: string;
	}) {
		return {
			classes: VerticalLayoutStyleManager.getHostClass(
				props.gap ?? 'md',
				props.alignItems ?? 'stretch',
				props.justifyContent ?? 'justify',
				props.fillHeight ?? false,
				cn(props.class)
			)
		};
	}
}

