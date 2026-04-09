import type { SideBySideLayoutProps } from '$stylist/navigation/type/struct/side-by-side-layout-props';

export const SIDE_BY_SIDE_GAP_CLASSES: Record<string, string> = {
	none: 'gap-0',
	sm: 'gap-2',
	md: 'gap-4',
	lg: 'gap-6',
	xl: 'gap-8'
};

export const SIDE_BY_SIDE_ALIGN_CLASSES: Record<string, string> = {
	start: 'items-start',
	center: 'items-center',
	end: 'items-end',
	stretch: 'items-stretch'
};

export const SIDE_BY_SIDE_JUSTIFY_CLASSES: Record<string, string> = {
	start: 'justify-start',
	center: 'justify-center',
	end: 'justify-end',
	between: 'justify-between',
	around: 'justify-around',
	evenly: 'justify-evenly'
};

export const SIDE_BY_SIDE_SECTION_WIDTH_MOBILE: Record<string, string> = {
	'1/4': 'w-1/4',
	'1/3': 'w-1/3',
	'2/5': 'w-2/5',
	'1/2': 'w-1/2',
	'3/5': 'w-3/5',
	'2/3': 'w-2/3',
	'3/4': 'w-3/4',
	full: 'w-full'
};

export const SIDE_BY_SIDE_SECTION_WIDTH_RESPONSIVE: Record<string, string> = {
	'1/4': 'md:w-1/4',
	'1/3': 'md:w-1/3',
	'2/5': 'md:w-2/5',
	'1/2': 'md:w-1/2',
	'3/5': 'md:w-3/5',
	'2/3': 'md:w-2/3',
	'3/4': 'md:w-3/4',
	full: 'md:w-full'
};

export function getSideBySideLayoutClasses(props: SideBySideLayoutProps) {
	const gapClass = SIDE_BY_SIDE_GAP_CLASSES[props.gap ?? 'md'];
	const alignItemsClass = SIDE_BY_SIDE_ALIGN_CLASSES[props.alignItems ?? 'stretch'];
	const justifyContentClass = SIDE_BY_SIDE_JUSTIFY_CLASSES[props.justifyContent ?? 'start'];
	const responsiveClass = props.responsive ?? true ? 'flex-col md:flex-row' : 'flex-row';

	return `flex ${responsiveClass} ${alignItemsClass} ${justifyContentClass} ${gapClass} ${props.class ?? ''}`;
}

export function getSideBySideSectionWidthClass(size: string, responsive: boolean): string {
	const map = responsive ? SIDE_BY_SIDE_SECTION_WIDTH_RESPONSIVE : SIDE_BY_SIDE_SECTION_WIDTH_MOBILE;
	return map[size] ?? (responsive ? 'md:w-1/2' : 'w-1/2');
}
