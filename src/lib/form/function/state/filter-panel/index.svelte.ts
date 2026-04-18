import type { FilterPanelProps, FilterPanelLayout } from '$stylist/form/type/struct/filter-panel';
import type { SlotFilterPanelState } from '$stylist/form/interface/slot/filter-panel-state';

export function createFilterPanelState(props: FilterPanelProps): SlotFilterPanelState {
	let objectsVisible = $state(props.showObjects ?? true);
	let interfacesVisible = $state(props.showInterfaces ?? true);
	let unionsVisible = $state(props.showUnions ?? true);
	let enumsVisible = $state(props.showEnums ?? true);
	let scalarsVisible = $state(props.showScalars ?? true);
	let inputsVisible = $state(props.showInputs ?? true);
	let currentLayout = $state(props.layout ?? 'force-directed' as FilterPanelLayout);

	const rootClass = $derived('filter-panel');
	const filterSectionClass = $derived('filter-section');
	const filterHeaderClass = $derived('filter-header');
	const filterOptionsClass = $derived('filter-options');
	const filterItemClass = $derived('filter-item');
	const layoutControlsClass = $derived('layout-controls');

	return {
		get objectsVisible() { return objectsVisible; },
		set objectsVisible(v: boolean) { objectsVisible = v; },
		get interfacesVisible() { return interfacesVisible; },
		set interfacesVisible(v: boolean) { interfacesVisible = v; },
		get unionsVisible() { return unionsVisible; },
		set unionsVisible(v: boolean) { unionsVisible = v; },
		get enumsVisible() { return enumsVisible; },
		set enumsVisible(v: boolean) { enumsVisible = v; },
		get scalarsVisible() { return scalarsVisible; },
		set scalarsVisible(v: boolean) { scalarsVisible = v; },
		get inputsVisible() { return inputsVisible; },
		set inputsVisible(v: boolean) { inputsVisible = v; },
		get currentLayout() { return currentLayout; },
		set currentLayout(v: FilterPanelLayout) { currentLayout = v; },
		get rootClass() { return rootClass; },
		get filterSectionClass() { return filterSectionClass; },
		get filterHeaderClass() { return filterHeaderClass; },
		get filterOptionsClass() { return filterOptionsClass; },
		get filterItemClass() { return filterItemClass; },
		get layoutControlsClass() { return layoutControlsClass; }
	};
}

export default createFilterPanelState;
