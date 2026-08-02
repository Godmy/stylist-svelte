import type { RecipeWbdExpertSessionBriefing } from '$stylist/wbd/interface/recipe/expert-session-briefing';

export function createWbdExpertSessionBriefingState(props: RecipeWbdExpertSessionBriefing) {
	const className = $derived(props.class ?? '');

	return {
		get props() {
			return props;
		},
		get className() {
			return className;
		}
	};
}

export default createWbdExpertSessionBriefingState;
