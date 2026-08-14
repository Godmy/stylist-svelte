import { ClassNamesManager } from '$stylist/layout/class/object-manager/class-names';
import { OutlierConstellationManager } from '$stylist/chart/class/manager/outlier-constellation';
import type { RecipeOutlierConstellation } from '$stylist/chart/interface/recipe/outlier-constellation';

export default function createOutlierConstellationState(props: RecipeOutlierConstellation) {
	const className = $derived(ClassNamesManager.merge('outlier-constellation', props.class));
	const layout = $derived.by(() => OutlierConstellationManager.createLayout(props.points, { width: props.width, height: props.height }));
	return { get className() { return className; }, get layout() { return layout; } };
}
