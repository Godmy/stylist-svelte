import { ObjectManagerColorPalette } from '$stylist/color/class/object-manager/color-palette';
import { StyleManagerColorPalette } from '$stylist/color/class/style-manager/color-palette';
import type { ThemeColorPaletteRecipe } from '$stylist/color/interface/recipe/color-palette';
import type { ThemeColorPaletteItem } from '$stylist/color/interface/slot/color-palette-item';

export function createColorPaletteState(props: ThemeColorPaletteRecipe) {
	const colors = $derived(ObjectManagerColorPalette.resolveColors(props));
	const title = $derived(ObjectManagerColorPalette.resolveTitle(props));
	const showLabels = $derived(ObjectManagerColorPalette.resolveShowLabels(props));
	const showValues = $derived(ObjectManagerColorPalette.resolveShowValues(props));
	const columns = $derived(ObjectManagerColorPalette.resolveColumns(props));

	const containerClasses = $derived(StyleManagerColorPalette.container(props.class));
	const headerClasses = $derived(StyleManagerColorPalette.header(props.headerClass));
	const gridClasses = $derived(StyleManagerColorPalette.grid(columns));
	const itemClasses = $derived(StyleManagerColorPalette.item(props.itemClass));
	const colorSwatchClasses = $derived(StyleManagerColorPalette.colorSwatch());
	const labelClasses = $derived(StyleManagerColorPalette.label());
	const valueClasses = $derived(StyleManagerColorPalette.value());
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
