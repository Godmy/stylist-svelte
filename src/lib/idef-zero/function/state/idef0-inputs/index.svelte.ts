import type { RecipeIdef0Io } from '$stylist/idef-zero/interface/recipe/idef0-io';

export function createIdef0InputsState(props: RecipeIdef0Io) {
	const startX = $derived(props.startX ?? 32);
	const positions = $derived.by(() => {
		if (props.ports.length === 0) return [];
		const top = props.boxY ?? 0;
		const step = props.boxHeight / (props.ports.length + 1);
		return props.ports.map((port, index) => ({ port, y: top + step * (index + 1) }));
	});

	return {
		get startX() {
			return startX;
		},
		get positions() {
			return positions;
		}
	};
}

export default createIdef0InputsState;
