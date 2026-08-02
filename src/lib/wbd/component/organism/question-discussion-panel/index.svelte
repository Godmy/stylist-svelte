<script lang="ts">
	import createWbdQuestionDiscussionPanelState from '$stylist/wbd/function/state/question-discussion-panel/index.svelte';
	import type { RecipeWbdQuestionDiscussionPanel } from '$stylist/wbd/interface/recipe/question-discussion-panel';
	import DiscussionMessageComposer from '$stylist/wbd/component/molecule/discussion-message-composer/index.svelte';
	import DiscussionMessageThread from '$stylist/wbd/component/molecule/discussion-message-thread/index.svelte';
	import DiscussionRoundFilter from '$stylist/wbd/component/molecule/discussion-round-filter/index.svelte';
	import Heading from '$stylist/typography/component/atom/heading/index.svelte';
	import Text from '$stylist/typography/component/atom/text/index.svelte';

	let props: RecipeWbdQuestionDiscussionPanel = $props();
	const state = createWbdQuestionDiscussionPanelState(props);
</script>

<section class="wbd-question-discussion {state.className}">
	<header>
		<div>
			<Text class="wbd-question-discussion__category" text={state.question.category ?? 'General'} />
			<Heading level={2} class="wbd-question-discussion__title" text={state.question.text} />
		</div>
		<DiscussionRoundFilter
			rounds={state.rounds}
			selectedRound={state.selectedRound}
			onSelectRound={state.selectRound}
		/>
	</header>
	<DiscussionMessageThread messages={state.messages} />
	<DiscussionMessageComposer onSubmitMessage={state.submitMessage} />
</section>

<style>
	.wbd-question-discussion {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}
	.wbd-question-discussion header {
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
		gap: 1rem;
	}
	.wbd-question-discussion__category {
		font-size: 0.75rem;
		font-weight: 700;
		color: var(--color-text-tertiary, #64748b);
	}
	.wbd-question-discussion__title {
		margin: 0.25rem 0 0;
		font-size: 1rem;
		color: var(--color-text-primary, #0f172a);
	}
	@media (max-width: 640px) {
		.wbd-question-discussion header {
			flex-direction: column;
		}
	}
</style>
