import { ObjectManagerIconPicker } from '$stylist/information/class/object-manager/icon-picker';
import type { RecipeThemeIconPicker } from '$stylist/information/interface/recipe/icon-picker';
import type { ThemeIconItem } from '$stylist/information/interface/slot/icon-picker';

export function createIconPickerState(props: RecipeThemeIconPicker) {
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
	const rootClass = $derived(['icon-picker', hostClass].filter(Boolean).join(' '));
	const resolvedHeaderClass = $derived(
		['icon-picker__header', headerClass].filter(Boolean).join(' ')
	);
	const titleClass = 'icon-picker__title';
	const searchContainerClass = 'icon-picker__search-container';
	const searchIconClass = 'icon-picker__search-icon';
	const searchInputClass = 'icon-picker__search-input';
	const gridClass = $derived(
		['icon-picker__grid', itemClass ? `icon-picker__grid--custom` : ''].filter(Boolean).join(' ')
	);
	const iconContainerClass = 'icon-picker__icon-container';
	const iconNameClass = 'icon-picker__icon-name';

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
		const selected = props.selectedIcon === icon.name;
		return ['icon-picker__item', selected ? 'icon-picker__item--selected' : '', itemClass]
			.filter(Boolean)
			.join(' ');
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
