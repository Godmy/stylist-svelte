import type {
	AspectRatioProps,
	ContainerMaxWidth,
	ContainerProps,
	DividerProps,
	GridLayoutProps,
	HorizontalLayoutProps,
	SpacerProps
} from '$stylist/design-system/props';
import {
	getAspectRatioClasses,
	getContainerClasses,
	getDividerLineClass,
	getDividerLineFlexClass,
	getGridLayoutContainerClass,
	getGridLayoutItemClass,
	getGridLayoutStyle,
	getHorizontalLayoutClasses,
	getSpacerClasses,
	getSpacerSize
} from '$stylist/design-system/classes/layout';

type DividerOrientation = 'horizontal' | 'vertical';
type DividerAlign = 'start' | 'center' | 'end';
type SpacerAxis = 'horizontal' | 'vertical';

// Inline default values and simplify functions
export function createAspectRatioState(props: AspectRatioProps) {
	const ratio = $derived(props.ratio ?? 1);
	const classes = $derived(getAspectRatioClasses(props.class ?? ''));

	return {
		ratio,
		classes
	};
}

export function createContainerState(props: ContainerProps) {
	const maxWidth = $derived((props.maxWidth ?? 'full') as ContainerMaxWidth);
	const classes = $derived(getContainerClasses(maxWidth, props.class ?? ''));

	return {
		maxWidth,
		classes
	};
}

export function createDividerState(props: DividerProps) {
	const orientation = $derived((props.orientation ?? 'horizontal') as DividerOrientation);
	const align = $derived((props.align ?? 'center') as DividerAlign);
	const dashed = $derived(props.dashed ?? false);
	const baseLineClass = $derived(getDividerLineClass(dashed));
	const leftLineFlex = $derived(getDividerLineFlexClass(align, 'left'));
	const rightLineFlex = $derived(getDividerLineFlexClass(align, 'right'));
	const isHorizontal = $derived(orientation === 'horizontal');

	return {
		orientation,
		align,
		dashed,
		baseLineClass,
		leftLineFlex,
		rightLineFlex,
		isHorizontal
	};
}

export function createGridLayoutState(props: GridLayoutProps) {
	const columns = $derived(props.columns ?? 'repeat(auto-fit, minmax(250px, 1fr))');
	const gap = $derived(props.gap ?? '1rem');
	const containerClass = $derived(getGridLayoutContainerClass(props.class ?? ''));
	const containerStyle = $derived(getGridLayoutStyle(columns, gap));
	const itemClass = $derived(props.itemClass ?? '');

	return {
		columns,
		gap,
		containerClass,
		containerStyle,
		itemClass
	};
}

export function createHorizontalLayoutState(props: HorizontalLayoutProps) {
	const gap = $derived(props.gap ?? 'md');
	const alignItems = $derived(props.alignItems ?? 'center');
	const justifyContent = $derived(props.justifyContent ?? 'start');
	const wrap = $derived(props.wrap ?? true);
	const classes = $derived(
		getHorizontalLayoutClasses(gap, alignItems, justifyContent, wrap, props.class ?? '')
	);

	return {
		gap,
		alignItems,
		justifyContent,
		wrap,
		classes
	};
}

export function createSpacerState(props: SpacerProps) {
	const axis = $derived((props.axis ?? 'vertical') as SpacerAxis);
	const sizeValue = $derived(getSpacerSize(props.size));
	const classes = $derived(getSpacerClasses(axis, props.class ?? ''));

	return {
		axis,
		sizeValue,
		classes
	};
}

