import type { RecipeDiscussionThread } from '$stylist/wbd/interface/recipe/discussion-thread';

export function createDiscussionThreadState(props: RecipeDiscussionThread) {
	let draft = $state('');
	const className = $derived(props.class ?? '');
	const canSubmit = $derived(draft.trim().length > 0);

	function submit(): void {
		if (!canSubmit) return;
		props.onAddNote?.(draft.trim());
		draft = '';
	}

	return {
		get notes() {
			return props.notes;
		},
		get draft() {
			return draft;
		},
		set draft(value: string) {
			draft = value;
		},
		get canSubmit() {
			return canSubmit;
		},
		get className() {
			return className;
		},
		submit
	};
}

export default createDiscussionThreadState;
