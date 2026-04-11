export function createToolbarState() {
	let isLegendVisible = $state(false);
	let isSearchVisible = $state(false);

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
