<script lang="ts">
	import createWbdDiscussionMessageComposerState from '$stylist/wbd/function/state/discussion-message-composer/index.svelte';
	import type { RecipeWbdDiscussionMessageComposer } from '$stylist/wbd/interface/recipe/discussion-message-composer';

	let props: RecipeWbdDiscussionMessageComposer = $props();
	const state = createWbdDiscussionMessageComposerState(props);
</script>

<form
	class="wbd-message-composer {state.className}"
	onsubmit={(event) => {
		event.preventDefault();
		state.submit();
	}}
>
	<textarea rows="3" placeholder={state.placeholder} bind:value={state.draft}></textarea>
	<button type="submit" disabled={!state.canSubmit}>Post</button>
</form>

<style>
	.wbd-message-composer {
		display: flex;
		gap: 0.5rem;
		align-items: flex-start;
	}
	.wbd-message-composer textarea {
		box-sizing: border-box;
		min-width: 0;
		flex: 1 1 0%;
		padding: 0.5rem;
		border: 1px solid var(--color-border-primary, #cbd5e1);
		border-radius: 0.375rem;
		background: var(--color-background-primary, #fff);
		resize: vertical;
		font: inherit;
		color: var(--color-text-primary, #0f172a);
	}
	.wbd-message-composer button {
		padding: 0.5rem 0.75rem;
		border: 1px solid var(--color-primary-500, #3b82f6);
		border-radius: 0.375rem;
		background: var(--color-primary-500, #3b82f6);
		font-size: 0.8125rem;
		font-weight: 700;
		color: var(--color-text-inverse, #fff);
		cursor: pointer;
	}
	.wbd-message-composer button:disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}
	@media (max-width: 560px) {
		.wbd-message-composer {
			flex-direction: column;
		}
		.wbd-message-composer button {
			align-self: flex-end;
		}
	}
</style>
