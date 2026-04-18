import type { Idef0BlackBoxRecipe as Idef0BlackBoxProps } from '$stylist/science/interface/recipe/idef0-black-box';

export function createIdef0BlackBoxState(props: Idef0BlackBoxProps) {
	const width = $derived(props.width ?? 920);
	const height = $derived(props.height ?? 420);
	const boxWidth = $derived(props.boxWidth ?? 320);
	const boxHeight = $derived(props.boxHeight ?? 220);
	const boxX = $derived((width - boxWidth) / 2);
	const boxY = $derived((height - boxHeight) / 2);

	return {
		get width() { return width; },
		get height() { return height; },
		get boxWidth() { return boxWidth; },
		get boxHeight() { return boxHeight; },
		get boxX() { return boxX; },
		get boxY() { return boxY; }
	};
}

export default createIdef0BlackBoxState;
