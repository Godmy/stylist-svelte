import type { StoreLocatorStore, StoreLocatorProps } from '$stylist/geo/type/struct/store-locator';
import type { StoreLocatorStateProps } from '$stylist/geo/interface/recipe/store-locator';

export function createStoreLocatorState(props: StoreLocatorStateProps) {
	const stores = $derived(props.stores ?? []);
	const showSearch = $derived(props.showSearch ?? true);
	const showFilters = $derived(props.showFilters ?? true);
	const showDistance = $derived(props.showDistance ?? true);
	const showRating = $derived(props.showRating ?? true);
	const showHours = $derived(props.showHours ?? true);
	const showServices = $derived(props.showServices ?? true);
	const enablePickupFilter = $derived(props.enablePickupFilter ?? true);
	const enableServiceFilter = $derived(props.enableServiceFilter ?? true);
	const maxStores = $derived(props.maxStores ?? 10);
	const radius = $derived(props.radius ?? 50);
	const showMap = $derived(props.showMap ?? true);

	let searchTerm = $state('');
	let showPickupOnly = $state(false);
	let selectedService: string | null = $state(null);

	const filteredStores = $derived.by(() => {
		let result = [...stores];
		if (searchTerm) {
			const query = searchTerm.toLowerCase();
			result = result.filter(store =>
				store.name.toLowerCase().includes(query) ||
				store.address.toLowerCase().includes(query) ||
				store.city.toLowerCase().includes(query) ||
				store.state.toLowerCase().includes(query)
			);
		}
		if (showPickupOnly) {
			result = result.filter(store => store.pickupAvailable);
		}
		if (selectedService) {
			result = result.filter(store => store.services?.includes(selectedService as string));
		}
		return result.slice(0, maxStores);
	});

	const availableServices = $derived.by(() => {
		const services = new Set<string>();
		for (const store of stores) {
			if (store.services) {
				for (const service of store.services) {
					services.add(service);
				}
			}
		}
		return Array.from(services);
	});

	function handleSearchInput(e: Event): void {
		const target = e.target as HTMLInputElement;
		searchTerm = target.value;
	}

	function handlePickupFilterChange(e: Event): void {
		const target = e.target as HTMLInputElement;
		showPickupOnly = target.checked;
	}

	function handleServiceFilterChange(service: string): void {
		selectedService = selectedService === service ? null : service;
	}

	function handleStoreSelect(store: StoreLocatorStore): void {
		props.onStoreSelect?.(store);
	}

	function handleGetDirections(store: StoreLocatorStore): void {
		props.onGetDirections?.(store);
	}

	function handleCallStore(store: StoreLocatorStore): void {
		props.onCallStore?.(store);
	}

	function formatDistance(distance: number): string {
		if (distance < 1) {
			return `${Math.round(distance * 1000)} m`;
		}
		return `${distance.toFixed(1)} km`;
	}

	const restProps = $derived.by(() => {
		const {
			class: _class,
			stores: _stores,
			showSearch: _showSearch,
			showFilters: _showFilters,
			showDistance: _showDistance,
			showRating: _showRating,
			showHours: _showHours,
			showServices: _showServices,
			enablePickupFilter: _enablePickupFilter,
			enableServiceFilter: _enableServiceFilter,
			maxStores: _maxStores,
			radius: _radius,
			showMap: _showMap,
			onStoreSelect: _onStoreSelect,
			onGetDirections: _onGetDirections,
			onCallStore: _onCallStore,
			headerClass: _headerClass,
			searchClass: _searchClass,
			storeClass: _storeClass,
			mapClass: _mapClass,
			filterClass: _filterClass,
			...rest
		} = props;
		return rest;
	});

	return {
		get stores() { return stores; },
		get showSearch() { return showSearch; },
		get showFilters() { return showFilters; },
		get showDistance() { return showDistance; },
		get showRating() { return showRating; },
		get showHours() { return showHours; },
		get showServices() { return showServices; },
		get enablePickupFilter() { return enablePickupFilter; },
		get enableServiceFilter() { return enableServiceFilter; },
		get maxStores() { return maxStores; },
		get radius() { return radius; },
		get showMap() { return showMap; },
		get searchTerm() { return searchTerm; },
		get showPickupOnly() { return showPickupOnly; },
		get selectedService() { return selectedService; },
		get filteredStores() { return filteredStores; },
		get availableServices() { return availableServices; },
		get restProps() { return restProps; },
		handleSearchInput,
		handlePickupFilterChange,
		handleServiceFilterChange,
		handleStoreSelect,
		handleGetDirections,
		handleCallStore,
		formatDistance,
		set searchTerm(value: string) { searchTerm = value; },
		set showPickupOnly(value: boolean) { showPickupOnly = value; },
		set selectedService(value: string | null) { selectedService = value; },
		set radius(value: number) { /* radius is $derived from props, use local setter if needed */ }
	};
}

export default createStoreLocatorState;
