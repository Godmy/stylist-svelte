import type { Idef0FunctionBoxRecipe as Idef0FunctionBoxProps } from '$stylist/science/interface/recipe/idef0-function-box';

export function createIdef0FunctionBoxState(props: Idef0FunctionBoxProps) {
	const x = $derived(props.x ?? 0);
	const y = $derived(props.y ?? 0);
	const width = $derived(props.width ?? 320);
	const height = $derived(props.height ?? 200);

	return {
		get x() {
			return x;
		},
		get y() {
			return y;
		},
		get width() {
			return width;
		},
		get height() {
			return height;
		}
	};
}

export default createIdef0FunctionBoxState;
