import { ClassNamesManager } from '$stylist/layout/class/object-manager/class-names';
import { ExpertAgreementRadarManager } from '$stylist/chart/class/manager/expert-agreement-radar';
import type { RecipeExpertAgreementRadar } from '$stylist/chart/interface/recipe/expert-agreement-radar';

export default function createExpertAgreementRadarState(props: RecipeExpertAgreementRadar) {
	const className = $derived(ClassNamesManager.merge('expert-agreement-radar', props.class));
	const layout = $derived.by(() => ExpertAgreementRadarManager.createLayout(props.axes, { width: props.width, height: props.height, maxValue: props.maxValue }));
	return { get className() { return className; }, get layout() { return layout; } };
}
