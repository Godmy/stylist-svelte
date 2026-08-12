import type { RecipeSideBySideLayout } from '$stylist/navigation/interface/recipe/side-by-side-layout';

export class SideBySideLayoutManager {
	private static readonly ALIGN_CLASSES: Record<string, string> = {
		start: 'items-start',
		center: 'items-center',
		end: 'items-end',
		stretch: 'items-stretch'
	};

	private static readonly GAP_CLASSES: Record<string, string> = {
		none: 'gap-0',
		sm: 'gap-2',
		md: 'gap-4',
		lg: 'gap-6',
		xl: 'gap-8'
	};

	private static readonly JUSTIFY_CLASSES: Record<string, string> = {
		start: 'justify-start',
		center: 'justify-center',
		end: 'justify-end',
		between: 'justify-between',
		around: 'justify-around',
		evenly: 'justify-evenly'
	};

	private static readonly SECTION_WIDTH_MOBILE: Record<string, string> = {
		'1/4': 'w-1/4',
		'1/3': 'w-1/3',
		'2/5': 'w-2/5',
		'1/2': 'w-1/2',
		'3/5': 'w-3/5',
		'2/3': 'w-2/3',
		'3/4': 'w-3/4',
		full: 'w-full'
	};

	private static readonly SECTION_WIDTH_RESPONSIVE: Record<string, string> = {
		'1/4': 'md:w-1/4',
		'1/3': 'md:w-1/3',
		'2/5': 'md:w-2/5',
		'1/2': 'md:w-1/2',
		'3/5': 'md:w-3/5',
		'2/3': 'md:w-2/3',
		'3/4': 'md:w-3/4',
		full: 'md:w-full'
	};

	static getLayoutClasses(props: RecipeSideBySideLayout): string {
		const gapClass = SideBySideLayoutManager.GAP_CLASSES[props.gap ?? 'md'];
		const alignItemsClass = SideBySideLayoutManager.ALIGN_CLASSES[props.alignItems ?? 'stretch'];
		const justifyContentClass =
			SideBySideLayoutManager.JUSTIFY_CLASSES[props.justifyContent ?? 'start'];
		const responsiveClass = (props.responsive ?? true) ? 'flex-col md:flex-row' : 'flex-row';

		return `flex ${responsiveClass} ${alignItemsClass} ${justifyContentClass} ${gapClass} ${props.class ?? ''}`;
	}

	static getSectionWidthClass(size: string, responsive: boolean): string {
		const map = responsive
			? SideBySideLayoutManager.SECTION_WIDTH_RESPONSIVE
			: SideBySideLayoutManager.SECTION_WIDTH_MOBILE;

		return map[size] ?? (responsive ? 'md:w-1/2' : 'w-1/2');
	}
}
