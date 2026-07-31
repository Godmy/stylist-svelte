<script lang="ts">
	import createSessionHeaderState from '$stylist/wbd/function/state/session-header/index.svelte';
	import type { RecipeSessionHeader } from '$stylist/wbd/interface/recipe/session-header';
	import RoundStatusBadge from '$stylist/wbd/component/atom/round-status-badge/index.svelte';

	let props: RecipeSessionHeader = $props();
	const state = createSessionHeaderState(props);
</script>

<header class="wbd-session-header {state.className}">
	<h2 class="wbd-session-header__title">{state.title}</h2>
	<ol class="wbd-session-header__steps">
		{#each state.rounds as round, index (round.id)}
			<li
				class="wbd-session-header__step"
				class:wbd-session-header__step--active={round.id === state.currentRoundId}
				class:wbd-session-header__step--done={index < state.currentRoundIndex}
			>
				<span class="wbd-session-header__step-index">{index + 1}</span>
				<RoundStatusBadge status={round.status} />
			</li>
		{/each}
	</ol>
</header>

<style>
	.wbd-session-header {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
		padding-bottom: 1rem;
		border-bottom: 1px solid var(--color-border-primary, #e2e8f0);
	}
	.wbd-session-header__title {
		margin: 0;
		font-size: 1.25rem;
		font-weight: 700;
		color: var(--color-text-primary, #0f172a);
	}
	.wbd-session-header__steps {
		display: flex;
		flex-wrap: wrap;
		gap: 0.75rem;
		list-style: none;
		margin: 0;
		padding: 0;
	}
	.wbd-session-header__step {
		display: flex;
		align-items: center;
		gap: 0.375rem;
		opacity: 0.6;
	}
	.wbd-session-header__step--active,
	.wbd-session-header__step--done {
		opacity: 1;
	}
	.wbd-session-header__step-index {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 1.25rem;
		height: 1.25rem;
		border-radius: 9999px;
		background: var(--color-background-secondary, #f1f5f9);
		font-size: 0.6875rem;
		font-weight: 600;
		color: var(--color-text-secondary, #475569);
	}
</style>
