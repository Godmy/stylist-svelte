import { ClassNamesManager } from '$stylist/layout/class/object-manager/class-names';
import { RiskImpactMapManager } from '$stylist/chart/class/manager/risk-impact-map';
import type { RecipeRiskImpactMap } from '$stylist/chart/interface/recipe/risk-impact-map';

export default function createRiskImpactMapState(props: RecipeRiskImpactMap) {
	const className = $derived(ClassNamesManager.merge('risk-impact-map', props.class));
	const layout = $derived.by(() => RiskImpactMapManager.createLayout(props.risks, { width: props.width, height: props.height }));
	return { get className() { return className; }, get layout() { return layout; } };
}
