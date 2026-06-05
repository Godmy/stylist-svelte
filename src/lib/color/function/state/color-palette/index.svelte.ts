import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';
import { ObjectManagerColorPalette } from '$stylist/color/class/object-manager/color-palette';
import type { ThemeColorPaletteRecipe } from '$stylist/color/interface/recipe/color-palette';
import type { ThemeColorPaletteItem } from '$stylist/color/interface/slot/color-palette-item';

export function createColorPaletteState(props: ThemeColorPaletteRecipe) {
	const colors = $derived(ObjectManagerColorPalette.resolveColors(props));
	const title = $derived(ObjectManagerColorPalette.resolveTitle(props));
	const showLabels = $derived(ObjectManagerColorPalette.resolveShowLabels(props));
	const showValues = $derived(ObjectManagerColorPalette.resolveShowValues(props));
	const columns = $derived(ObjectManagerColorPalette.resolveColumns(props));

	const containerClasses = $derived(mergeClassNames('c-color-palette', props.class));
	const headerClasses = $derived(mergeClassNames('c-color-palette__header', props.headerClass));
	const gridClasses = $derived('c-color-palette__grid');
	const gridStyle = $derived(`--palette-cols: ${columns}`);
	const itemClasses = $derived(mergeClassNames('c-color-palette__item', props.itemClass));
	const colorSwatchClasses = $derived('c-color-palette__swatch');
	const labelClasses = $derived('c-color-palette__label');
	const valueClasses = $derived('c-color-palette__value');

	const restProps = $derived.by(() => {
		const {
			class: _class,
			headerClass: _headerClass,
			itemClass: _itemClass,
			colors: _colors,
			title: _title,
			showLabels: _showLabels,
			showValues: _showValues,
			columns: _columns,
			onValueInput: _onValueInput,
			onValueChange: _onValueChange,
			...rest
		} = props;
		return rest;
	});

	function handleColorClick(color: ThemeColorPaletteItem) {
		props.onValueInput?.(color);
		props.onValueChange?.(color);
	}

	return {
		get colors() {
			return colors;
		},
		get title() {
			return title;
		},
		get showLabels() {
			return showLabels;
		},
		get showValues() {
			return showValues;
		},
		get columns() {
			return columns;
		},
		get containerClasses() {
			return containerClasses;
		},
		get headerClasses() {
			return headerClasses;
		},
		get gridClasses() {
			return gridClasses;
		},
		get gridStyle() {
			return gridStyle;
		},
		get itemClasses() {
			return itemClasses;
		},
		get colorSwatchClasses() {
			return colorSwatchClasses;
		},
		get labelClasses() {
			return labelClasses;
		},
		get valueClasses() {
			return valueClasses;
		},
		get restProps() {
			return restProps;
		},
		handleColorClick
	};
}

export default createColorPaletteState;
