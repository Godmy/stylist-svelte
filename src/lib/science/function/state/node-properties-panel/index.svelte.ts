import type { NodePropertiesPanelRecipe as NodePropertiesPanelProps } from '$stylist/information/interface/recipe/node-properties-panel';

export function createNodePropertiesPanelState(props: NodePropertiesPanelProps) {
	const title = $derived(props.title ?? 'Properties');
	const visible = $derived(props.visible ?? true);

	return {
		get title() {
			return title;
		},
		get visible() {
			return visible;
		}
	};
}
