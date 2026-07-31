import type { RecipeDiscussionNoteItem } from '$stylist/wbd/interface/recipe/discussion-note-item';

export function createDiscussionNoteItemState(props: RecipeDiscussionNoteItem) {
	const className = $derived(props.class ?? '');

	return {
		get note() {
			return props.note;
		},
		get className() {
			return className;
		}
	};
}

export default createDiscussionNoteItemState;
