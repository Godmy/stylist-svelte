<script lang="ts">
	import createParticipantRosterListState from '$stylist/wbd/function/state/participant-roster-list/index.svelte';
	import type { RecipeParticipantRosterList } from '$stylist/wbd/interface/recipe/participant-roster-list';
	import EstimatorBadge from '$stylist/wbd/component/atom/estimator-badge/index.svelte';

	let props: RecipeParticipantRosterList = $props();
	const state = createParticipantRosterListState(props);
</script>

<div class="wbd-roster {state.className}">
	<div class="wbd-roster__header">
		<span>Participants</span>
		<span class="wbd-roster__count">{state.submittedCount}/{state.totalCount} submitted</span>
	</div>
	<div class="wbd-roster__list">
		{#each state.participants as participant (participant.id)}
			<div class="wbd-roster__item" class:wbd-roster__item--pending={!participant.hasSubmitted}>
				<EstimatorBadge {participant} />
			</div>
		{/each}
	</div>
</div>

<style>
	.wbd-roster__header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 0.5rem;
		font-size: 0.75rem;
		font-weight: 600;
		color: var(--color-text-secondary, #475569);
	}
	.wbd-roster__count {
		font-weight: 400;
		color: var(--color-text-tertiary, #64748b);
	}
	.wbd-roster__list {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
	}
	.wbd-roster__item--pending {
		opacity: 0.5;
	}
</style>
