import type { RecipeProcessStep } from '$stylist/management/interface/recipe/process-step';

export function createProcessStepState(props: RecipeProcessStep) {
	const number = $derived(props.number);
	const title = $derived(props.title);
	const description = $derived(props.description);
	const agent = $derived(props.agent);
	const icon = $derived(props.icon);
	const active = $derived(props.active ?? false);
	const className = $derived(props.class ?? '');

	const hostClass = $derived(className == null ? undefined : String(className));
	const classes = $derived(hostClass);

	return {
		get number() {
			return number;
		},
		get title() {
			return title;
		},
		get description() {
			return description;
		},
		get agent() {
			return agent;
		},
		get icon() {
			return icon;
		},
		get active() {
			return active;
		},
		get classes() {
			return classes;
		}
	};
}
