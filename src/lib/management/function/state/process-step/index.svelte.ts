import { ProcessStepStyleManager } from '$stylist/management/class/style-manager/process-step';
import type { ProcessStepStateProps } from '$stylist/management/interface/recipe/process-step';

export function createProcessStepState(props: ProcessStepStateProps) {
	const number = $derived(props.number);
	const title = $derived(props.title);
	const description = $derived(props.description);
	const agent = $derived(props.agent);
	const icon = $derived(props.icon);
	const active = $derived(props.active ?? false);
	const className = $derived(props.class ?? '');

	const hostClass = $derived(className == null ? undefined : String(className));

	const classes = $derived(ProcessStepStyleManager.getBaseClasses(active, hostClass));
	const numberContainerClasses = $derived(ProcessStepStyleManager.getNumberContainerClasses(active));
	const contentContainerClasses = $derived(ProcessStepStyleManager.getContentContainerClasses());
	const titleClasses = $derived(ProcessStepStyleManager.getTitleClasses(active));
	const agentBadgeClasses = $derived(ProcessStepStyleManager.getAgentBadgeClasses());
	const descriptionClasses = $derived(ProcessStepStyleManager.getDescriptionClasses());

	return {
		get number() { return number; },
		get title() { return title; },
		get description() { return description; },
		get agent() { return agent; },
		get icon() { return icon; },
		get active() { return active; },
		get classes() { return classes; },
		get numberContainerClasses() { return numberContainerClasses; },
		get contentContainerClasses() { return contentContainerClasses; },
		get titleClasses() { return titleClasses; },
		get agentBadgeClasses() { return agentBadgeClasses; },
		get descriptionClasses() { return descriptionClasses; }
	};
}

export default createProcessStepState;
