export function createToolbarState() {
	const isLegendVisible = $state(false);
	const isSearchVisible = $state(false);

	function handleToggleLegend() {
		isLegendVisible = !isLegendVisible;
	}

	function handleToggleSearch() {
		isSearchVisible = !isSearchVisible;
	}

	return {
		get isLegendVisible() {
			return isLegendVisible;
		},
		get isSearchVisible() {
			return isSearchVisible;
		},
		handleToggleLegend,
		handleToggleSearch
	};
}

export default createToolbarState;
