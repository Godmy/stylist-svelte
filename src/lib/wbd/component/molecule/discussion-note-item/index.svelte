<script lang="ts">
	import createDiscussionNoteItemState from '$stylist/wbd/function/state/discussion-note-item/index.svelte';
	import type { RecipeDiscussionNoteItem } from '$stylist/wbd/interface/recipe/discussion-note-item';

	let props: RecipeDiscussionNoteItem = $props();
	const state = createDiscussionNoteItemState(props);
</script>

<div class="wbd-discussion-note {state.className}">
	<div class="wbd-discussion-note__meta">
		<span class="wbd-discussion-note__author">{state.note.authorLabel}</span>
		<span class="wbd-discussion-note__time">{state.note.timestamp}</span>
	</div>
	<p class="wbd-discussion-note__message">{state.note.message}</p>
</div>

<style>
	.wbd-discussion-note {
		padding: 0.5rem 0;
		border-bottom: 1px solid var(--color-border-primary, #e2e8f0);
	}
	.wbd-discussion-note__meta {
		display: flex;
		gap: 0.5rem;
		align-items: baseline;
		margin-bottom: 0.25rem;
	}
	.wbd-discussion-note__author {
		font-size: 0.75rem;
		font-weight: 600;
		color: var(--color-text-primary, #0f172a);
	}
	.wbd-discussion-note__time {
		font-size: 0.6875rem;
		color: var(--color-text-tertiary, #64748b);
	}
	.wbd-discussion-note__message {
		margin: 0;
		font-size: 0.875rem;
		color: var(--color-text-secondary, #475569);
	}
</style>
