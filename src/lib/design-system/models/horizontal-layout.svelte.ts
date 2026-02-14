import type {
	AspectRatioProps,
	ContainerMaxWidth,
	ContainerProps,
	DividerProps,
	GridLayoutProps,
	HorizontalLayoutProps,
	SpacerProps
} from '$stylist/design-system/props';
import { LayoutStyleManager } from '$stylist/design-system/styles/layout';

type DividerOrientation = 'horizontal' | 'vertical';
type DividerAlign = 'start' | 'center' | 'end';
type SpacerAxis = 'horizontal' | 'vertical';

// Inline default values and simplify functions
function createAspectRatioState(props: AspectRatioProps) {
	const ratio = $derived(props.ratio ?? 1);
	const classes = $derived(LayoutStyleManager.getAspectRatioClasses(props.class ?? ''));

	return {
		ratio,
		classes
	};
}
function createContainerState(props: ContainerProps) {
	const maxWidth = $derived((props.maxWidth ?? 'full') as ContainerMaxWidth);
	const classes = $derived(LayoutStyleManager.getContainerClasses(maxWidth, props.class ?? ''));

	return {
		maxWidth,
		classes
	};
}
function createDividerState(props: DividerProps) {
	const orientation = $derived((props.orientation ?? 'horizontal') as DividerOrientation);
	const align = $derived((props.align ?? 'center') as DividerAlign);
	const dashed = $derived(props.dashed ?? false);
	const baseLineClass = $derived(LayoutStyleManager.getDividerLineClass(dashed));
	const leftLineFlex = $derived(LayoutStyleManager.getDividerLineFlexClass(align, 'left'));
	const rightLineFlex = $derived(LayoutStyleManager.getDividerLineFlexClass(align, 'right'));
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
function createGridLayoutState(props: GridLayoutProps) {
	const columns = $derived(props.columns ?? 'repeat(auto-fit, minmax(250px, 1fr))');
	const gap = $derived(props.gap ?? '1rem');
	const containerClass = $derived(LayoutStyleManager.getGridLayoutContainerClass(props.class ?? ''));
	const containerStyle = $derived(LayoutStyleManager.getGridLayoutStyle(columns, gap));
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
		LayoutStyleManager.getHorizontalLayoutClasses(gap, alignItems, justifyContent, wrap, props.class ?? '')
	);

	return {
		gap,
		alignItems,
		justifyContent,
		wrap,
		classes
	};
}
function createSpacerState(props: SpacerProps) {
	const axis = $derived((props.axis ?? 'vertical') as SpacerAxis);
	const sizeValue = $derived(LayoutStyleManager.getSpacerSize(props.size));
	const classes = $derived(LayoutStyleManager.getSpacerClasses(axis, props.class ?? ''));

	return {
		axis,
		sizeValue,
		classes
	};
}

export default createHorizontalLayoutState;



