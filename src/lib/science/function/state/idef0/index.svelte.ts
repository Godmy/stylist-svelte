import type { Idef0DiagramRecipe as Idef0DiagramProps } from '$stylist/science/interface/recipe/idef0-diagram';
import { Idef0StyleManager } from '$stylist/science/class/style-manager/idef0';

export function createIdef0DiagramState(props: Idef0DiagramProps) {
	const containerClasses = $derived(
		Idef0StyleManager.getDiagramContainerClasses(
			typeof props.class === 'string' ? props.class : undefined
		)
	);
	const svgClasses = $derived(Idef0StyleManager.getDiagramSvgClasses());
	const width = $derived(props.width ?? 960);
	const height = $derived(props.height ?? 460);

	return {
		get containerClasses() { return containerClasses; },
		get svgClasses() { return svgClasses; },
		get width() { return width; },
		get height() { return height; }
	};
}

export default createIdef0DiagramState;
