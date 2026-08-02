import type { RecipeWbdSessionExpertInvitePanel } from '$stylist/wbd/interface/recipe/session-expert-invite-panel';

export function createWbdSessionExpertInvitePanelState(props: RecipeWbdSessionExpertInvitePanel) {
	const className = $derived(props.class ?? '');
	const invitedCount = $derived(props.experts.filter((expert) => expert.status === 'invited').length);
	const joinedCount = $derived(props.experts.filter((expert) => expert.status === 'joined').length);

	return {
		get experts() {
			return props.experts;
		},
		get invitedCount() {
			return invitedCount;
		},
		get joinedCount() {
			return joinedCount;
		},
		get className() {
			return className;
		},
		inviteExpert(email: string) {
			props.onInviteExpert?.(email);
		},
		removeExpert(expertId: string) {
			props.onRemoveExpert?.(expertId);
		},
		resendInvite(expertId: string) {
			props.onResendInvite?.(expertId);
		}
	};
}

export default createWbdSessionExpertInvitePanelState;
