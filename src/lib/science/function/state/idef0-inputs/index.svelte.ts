import type { Idef0InputsRecipe as Idef0InputsProps } from '$stylist/science/interface/recipe/idef0-inputs';
import type { Idef0Port } from '$stylist/science/type/struct/idef-zero/idef0port';

function calculatePortPositions(ports: Idef0Port[], top: number, height: number) {
	if (ports.length === 0) return [];
	const step = height / (ports.length + 1);
	return ports.map((port, index) => ({ port, y: top + step * (index + 1) }));
}

export function createIdef0InputsState(props: Idef0InputsProps) {
	const positions = $derived(calculatePortPositions(props.ports, props.boxY, props.boxHeight));

	return {
		get positions() { return positions; }
	};
}

export default createIdef0InputsState;
