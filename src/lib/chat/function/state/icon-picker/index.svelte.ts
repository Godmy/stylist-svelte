import type { TokenColumn } from '$stylist/layout/type/alias/column';
import type { RecipeIconPicker } from '$stylist/chat/interface/recipe/icon-picker';
import type { ThemeIconItem } from '$stylist/chat/interface/slot/icon-picker';

function filterIcons(icons: ThemeIconItem[], searchQuery: string): ThemeIconItem[] {
	const normalizedQuery = searchQuery.trim().toLowerCase();

	if (!normalizedQuery) {
		return icons;
	}

	return icons.filter((icon) => {
		if (icon.name.toLowerCase().includes(normalizedQuery)) {
			return true;
		}

		return (
			icon.keywords?.some((keyword) => keyword.toLowerCase().includes(normalizedQuery)) ?? false
		);
	});
}

export function createIconPickerState(props: RecipeIconPicker) {
	const icons = $derived(props.icons ?? []);
	const title = $derived(props.title ?? 'Icon Picker');
	const searchPlaceholder = $derived(props.searchPlaceholder ?? 'Search icons...');
	const columns = $derived(Math.max(2, Math.min(props.columns ?? 6, 8)) as TokenColumn);
	const hostClass = $derived(props.class ?? '');
	const itemClass = $derived(props.itemClass ?? '');
	const headerClass = $derived(props.headerClass ?? '');
	const showSearch = $derived(props.showSearch ?? true);

	let searchQuery = $state('');

	const filteredIcons = $derived(filterIcons(icons, searchQuery));
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
		titleClass,
		searchContainerClass,
		searchIconClass,
		searchInputClass,
		get gridClass() {
			return gridClass;
		},
		iconContainerClass,
		iconNameClass,
		get restProps() {
			return restProps;
		},
		setSearchQuery,
		itemClassName,
		selectIcon
	};
}

export default createIconPickerState;
