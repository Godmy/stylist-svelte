import type { RecipeWbdInviteEmailPreview } from '$stylist/wbd/interface/recipe/invite-email-preview';

export function createWbdInviteEmailPreviewState(props: RecipeWbdInviteEmailPreview) {
	const className = $derived(props.class ?? '');

	return {
		get props() {
			return props;
		},
		get className() {
			return className;
		},
		sendPreview() {
			props.onSendPreview?.();
		}
	};
}

export default createWbdInviteEmailPreviewState;
