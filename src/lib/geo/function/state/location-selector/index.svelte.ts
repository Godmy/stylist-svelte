import type { LocationSelectorLocation, LocationSelectorProps } from '$stylist/geo/type/struct/location-selector';

export interface LocationSelectorStateProps extends LocationSelectorProps {}

export function createLocationSelectorState(props: LocationSelectorStateProps) {
	const locations = $derived(props.locations ?? []);
	const currentView = $derived(props.currentView ?? 'list');
	const showSearch = $derived(props.showSearch ?? true);
	const showCategoryFilter = $derived(props.showCategoryFilter ?? true);
	const showMapToggle = $derived(props.showMapToggle ?? true);
	const showDistance = $derived(props.showDistance ?? true);
	const searchPlaceholder = $derived(props.searchPlaceholder ?? 'Search locations...');
	const defaultCategory = $derived(props.defaultCategory ?? 'all');
	const maxLocations = $derived(props.maxLocations ?? 10);
	const mapView = $derived(props.mapView ?? false);

	let searchQuery = $state('');
	let selectedCategory = $state(defaultCategory);
	let filteredLocations = $state<LocationSelectorLocation[]>([]);
	let categories = $state<string[]>([]);

	$effect(() => {
		let result: LocationSelectorLocation[] = [...locations];
		if (searchQuery) {
			const query = searchQuery.toLowerCase();
			result = result.filter(location =>
				location.name.toLowerCase().includes(query) ||
				(location.address && location.address.toLowerCase().includes(query)) ||
				(location.description && location.description.toLowerCase().includes(query)) ||
				(location.tags && location.tags.some(tag => tag.toLowerCase().includes(query)))
			);
		}
		if (selectedCategory !== 'all') {
			result = result.filter(location => location.category === selectedCategory);
		}
		filteredLocations = result.slice(0, maxLocations);
	});

	$effect(() => {
		const uniqueCategories: Set<string> = new Set<string>();
		locations.forEach(location => {
			if (location.category) {
				uniqueCategories.add(location.category);
			}
		});
		categories = ['all', ...Array.from(uniqueCategories)];
	});

	$effect(() => {
		selectedCategory = defaultCategory;
	});

	function handleSearchInput(e: Event): void {
		const target = e.target as HTMLInputElement;
		searchQuery = target.value;
		props.onSearch?.(searchQuery);
	}

	function handleCategoryChangeEvent(e: Event): void {
		const target = e.target as HTMLSelectElement;
		selectedCategory = target.value;
		props.onCategoryChange?.(selectedCategory);
	}

	function handleLocationSelect(location: LocationSelectorLocation): void {
		props.onLocationSelect?.(location);
	}

	function formatDistance(distance: number): string {
		if (distance < 1) {
			return `${Math.round(distance * 1000)}m`;
		}
		return `${distance.toFixed(1)}km`;
	}

	const restProps = $derived.by(() => {
		const {
			class: _class,
			locations: _locations,
			currentView: _currentView,
			showSearch: _showSearch,
			showCategoryFilter: _showCategoryFilter,
			showMapToggle: _showMapToggle,
			showDistance: _showDistance,
			searchPlaceholder: _searchPlaceholder,
			defaultCategory: _defaultCategory,
			maxLocations: _maxLocations,
			onLocationSelect: _onLocationSelect,
			onSearch: _onSearch,
			onCategoryChange: _onCategoryChange,
			itemClass: _itemClass,
			headerClass: _headerClass,
			searchClass: _searchClass,
			viewToggleClass: _viewToggleClass,
			mapView: _mapView,
			...rest
		} = props;
		return rest;
	});

	return {
		get locations() { return locations; },
		get currentView() { return currentView; },
		get showSearch() { return showSearch; },
		get showCategoryFilter() { return showCategoryFilter; },
		get showMapToggle() { return showMapToggle; },
		get showDistance() { return showDistance; },
		get searchPlaceholder() { return searchPlaceholder; },
		get defaultCategory() { return defaultCategory; },
		get maxLocations() { return maxLocations; },
		get mapView() { return mapView; },
		get searchQuery() { return searchQuery; },
		get selectedCategory() { return selectedCategory; },
		get filteredLocations() { return filteredLocations; },
		get categories() { return categories; },
		get restProps() { return restProps; },
		handleSearchInput,
		handleCategoryChangeEvent,
		handleLocationSelect,
		formatDistance,
		set searchQuery(value: string) { searchQuery = value; },
		set selectedCategory(value: string) { selectedCategory = value; },
		set currentView(value: 'list' | 'grid' | 'map') { /* local state for view toggle */ }
	};
}

export default createLocationSelectorState;
