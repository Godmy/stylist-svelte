export interface ColorPaletteStyles {
	container: string;
	header: string;
	grid: string;
	item: string;
	colorSwatch: string;
	label: string;
	value: string;
	[key: string]: string;
}

export interface ColorPaletteStyleManagerInterface {
	getContainerClass: () => string;
	getHeaderClass: () => string;
	getGridClass: () => string;
	getItemClass: () => string;
	getColorSwatchClass: () => string;
	getLabelClass: () => string;
	getValueClass: () => string;
}
