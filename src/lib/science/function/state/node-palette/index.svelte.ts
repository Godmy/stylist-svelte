import { NodePaletteStyleManager } from '$stylist/control/class/style-manager/node-palette';
import { ObjectManagerNodePalette } from '$stylist/science/class/object-manager/node-palette';
import type { NodePaletteItem, NodePaletteProps } from '$stylist/control/interface/component/node-palette/other';

export function createNodePaletteState(props: NodePaletteProps) {
	const filteredItems = $derived(
		ObjectManagerNodePalette.filterItems(
			props.items ?? [],
			props.selectedCategory ?? 'all',
			props.searchQuery ?? ''
		)
	);

	const groupedItems = $derived(
		ObjectManagerNodePalette.groupItems(props.items ?? [], props.viewMode ?? 'list')
	);

	const categories = $derived(ObjectManagerNodePalette.getCategories(props.categories));
	const rootClass = $derived(NodePaletteStyleManager.root(props.class ?? ''));
	const paletteStyle = $derived(
		`--palette-x: ${props.x ?? 0}px; --palette-y: ${props.y ?? 0}px; --palette-width: ${props.width ?? 320}px; --palette-height: ${props.height ?? 480}px;`
	);

	const handleSearch = (value: string) => {
		props.onSearch?.(value);
	};

	const handleNodeClick = (item: NodePaletteItem) => {
		props.onNodeSelect?.(item);
	};

	const handleClose = () => {
		props.onClose?.();
	};

	const handleViewModeToggle = () => {
		props.onViewModeChange?.(ObjectManagerNodePalette.toggleViewMode(props.viewMode ?? 'list'));
	};

	const handleCategorySelect = (category: string) => {
		props.onCategorySelect?.(category);
	};

	return {
		get filteredItems() {
			return filteredItems;
		},
		get groupedItems() {
			return groupedItems;
		},
		get categories() {
			return categories;
		},
		get rootClass() {
			return rootClass;
		},
		get paletteStyle() {
			return paletteStyle;
		},
		getCategoryLabel(category: string) {
			return ObjectManagerNodePalette.getCategoryLabel(category);
		},
		handleSearch,
		handleNodeClick,
		handleClose,
		handleViewModeToggle,
		handleCategorySelect
	};
}

export default createNodePaletteState;
