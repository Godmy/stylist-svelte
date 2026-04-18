import { IconPickerStyleManager } from '$stylist/media/class/style-manager/icon-picker';
import { ObjectManagerIconPicker } from '$stylist/media/class/object-manager/icon-picker';
import type { ThemeIconPickerRecipe } from '$stylist/media/interface/recipe/icon-picker';
import type { ThemeIconItem } from '$stylist/media/interface/slot/icon-picker';

export function createIconPickerState(props: ThemeIconPickerRecipe) {
	const icons = $derived(ObjectManagerIconPicker.resolveIcons(props));
	const title = $derived(ObjectManagerIconPicker.resolveTitle(props));
	const searchPlaceholder = $derived(ObjectManagerIconPicker.resolveSearchPlaceholder(props));
	const columns = $derived(ObjectManagerIconPicker.resolveColumns(props));
	const hostClass = $derived(ObjectManagerIconPicker.resolveHostClass(props));
	const itemClass = $derived(ObjectManagerIconPicker.resolveItemClass(props));
	const headerClass = $derived(ObjectManagerIconPicker.resolveHeaderClass(props));
	const showSearch = $derived(ObjectManagerIconPicker.resolveShowSearch(props));

	let searchQuery = $state('');

	const filteredIcons = $derived(ObjectManagerIconPicker.filterIcons(icons, searchQuery));
	const rootClass = $derived(IconPickerStyleManager.getHostClasses(hostClass));
	const resolvedHeaderClass = $derived(IconPickerStyleManager.getHeaderClasses(headerClass));
	const titleClass = $derived(IconPickerStyleManager.getTitleClasses());
	const searchContainerClass = $derived(IconPickerStyleManager.getSearchContainerClasses());
	const searchIconClass = $derived(IconPickerStyleManager.getSearchIconClasses());
	const searchInputClass = $derived(IconPickerStyleManager.getSearchInputClasses());
	const gridClass = $derived(IconPickerStyleManager.getGridClasses(columns, itemClass));
	const iconContainerClass = $derived(IconPickerStyleManager.getIconContainerClasses());
	const iconNameClass = $derived(IconPickerStyleManager.getIconNameClasses());
	const restProps = $derived.by(() => {
		const {
			icons: _icons,
			title: _title,
			searchPlaceholder: _searchPlaceholder,
			selectedIcon: _selectedIcon,
			columns: _columns,
			class: _class,
			itemClass: _itemClass,
			headerClass: _headerClass,
			onIconSelect: _onIconSelect,
			showSearch: _showSearch,
			showCategories: _showCategories,
			...rest
		} = props;

		return rest;
	});

	function setSearchQuery(value: string): void {
		searchQuery = value;
	}

	function itemClassName(icon: ThemeIconItem): string {
		return IconPickerStyleManager.getItemClasses(itemClass, props.selectedIcon === icon.name);
	}

	function selectIcon(icon: ThemeIconItem): void {
		props.onIconSelect?.(icon);
	}

	return {
		get title() {
			return title;
		},
		get searchPlaceholder() {
			return searchPlaceholder;
		},
		get columns() {
			return columns;
		},
		get showSearch() {
			return showSearch;
		},
		get searchQuery() {
			return searchQuery;
		},
		get filteredIcons() {
			return filteredIcons;
		},
		get rootClass() {
			return rootClass;
		},
		get headerClass() {
			return resolvedHeaderClass;
		},
		get titleClass() {
			return titleClass;
		},
		get searchContainerClass() {
			return searchContainerClass;
		},
		get searchIconClass() {
			return searchIconClass;
		},
		get searchInputClass() {
			return searchInputClass;
		},
		get gridClass() {
			return gridClass;
		},
		get iconContainerClass() {
			return iconContainerClass;
		},
		get iconNameClass() {
			return iconNameClass;
		},
		get restProps() {
			return restProps;
		},
		setSearchQuery,
		itemClassName,
		selectIcon
	};
}

export default createIconPickerState;
