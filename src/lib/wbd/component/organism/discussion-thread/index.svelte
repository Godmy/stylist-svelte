<script lang="ts">
	import createDiscussionThreadState from '$stylist/wbd/function/state/discussion-thread/index.svelte';
	import type { RecipeDiscussionThread } from '$stylist/wbd/interface/recipe/discussion-thread';
	import DiscussionNoteItem from '$stylist/wbd/component/molecule/discussion-note-item/index.svelte';

	let props: RecipeDiscussionThread = $props();
	const state = createDiscussionThreadState(props);
</script>

<div class="wbd-discussion-thread {state.className}">
	<div class="wbd-discussion-thread__list">
		{#each state.notes as note (note.id)}
			<DiscussionNoteItem {note} />
		{/each}
	</div>
	<div class="wbd-discussion-thread__composer">
		<textarea bind:value={state.draft} placeholder="Add a note explaining your estimate..." rows="2"
		></textarea>
		<button type="button" disabled={!state.canSubmit} onclick={state.submit}>Post</button>
	</div>
</div>

<style>
	.wbd-discussion-thread {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}
	.wbd-discussion-thread__list {
		display: flex;
		flex-direction: column;
	}
	.wbd-discussion-thread__composer {
		display: flex;
		gap: 0.5rem;
		align-items: flex-start;
	}
	.wbd-discussion-thread__composer textarea {
		flex: 1 1 0%;
		resize: vertical;
		padding: 0.5rem;
		border: 1px solid var(--color-border-primary, #cbd5e1);
		border-radius: 0.375rem;
		font-size: 0.875rem;
		font-family: inherit;
	}
	.wbd-discussion-thread__composer button {
		padding: 0.5rem 1rem;
		border: none;
		border-radius: 0.375rem;
		background: var(--color-primary-500, #3b82f6);
		color: var(--color-text-inverse, #fff);
		font-size: 0.875rem;
		font-weight: 500;
		cursor: pointer;
	}
	.wbd-discussion-thread__composer button:disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}
</style>
