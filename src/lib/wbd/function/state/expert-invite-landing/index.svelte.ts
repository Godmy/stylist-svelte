import type { RecipeWbdExpertInviteLanding } from '$stylist/wbd/interface/recipe/expert-invite-landing';

export function createWbdExpertInviteLandingState(props: RecipeWbdExpertInviteLanding) {
	const className = $derived(props.class ?? '');

	return {
		get sessionTitle() {
			return props.sessionTitle;
		},
		get expertEmail() {
			return props.expertEmail;
		},
		get alias() {
			return props.alias;
		},
		get expiresAt() {
			return props.expiresAt;
		},
		get className() {
			return className;
		},
		acceptInvite() {
			props.onAcceptInvite?.();
		},
		declineInvite() {
			props.onDeclineInvite?.();
		}
	};
}

export default createWbdExpertInviteLandingState;
