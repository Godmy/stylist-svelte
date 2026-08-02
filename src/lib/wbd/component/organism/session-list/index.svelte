<script lang="ts">
	import createWbdSessionListState from '$stylist/wbd/function/state/session-list/index.svelte';
	import type { RecipeWbdSessionList } from '$stylist/wbd/interface/recipe/session-list';

	let props: RecipeWbdSessionList = $props();
	const state = createWbdSessionListState(props);
</script>

<section class="wbd-session-list {state.className}">
	<div class="wbd-session-list__header">
		<div>
			<h2>Sessions</h2>
			<p>{state.activeCount} active, {state.completedCount} completed</p>
		</div>
		<button type="button" onclick={state.createSession}>New session</button>
	</div>

	<div class="wbd-session-list__items">
		{#each state.sessions as session (session.id)}
			<button
				type="button"
				class="wbd-session-list__item"
				class:wbd-session-list__item--selected={session.id === state.selectedSessionId}
				onclick={() => state.selectSession(session.id)}
			>
				<span class="wbd-session-list__title">{session.title}</span>
				<span class="wbd-session-list__meta">
					Round {session.currentRound}/{session.maxRounds} · {session.expertCount ?? 0} experts ·
					{session.questionCount ?? 0} questions
				</span>
				<span class="wbd-session-list__status">{session.status}</span>
			</button>
		{/each}
	</div>
</section>

<style>
	.wbd-session-list {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}
	.wbd-session-list__header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
	}
	.wbd-session-list__header h2,
	.wbd-session-list__header p {
		margin: 0;
	}
	.wbd-session-list__header h2 {
		font-size: 1rem;
		color: var(--color-text-primary, #0f172a);
	}
	.wbd-session-list__header p,
	.wbd-session-list__meta {
		font-size: 0.75rem;
		color: var(--color-text-tertiary, #64748b);
	}
	.wbd-session-list__header button {
		padding: 0.5rem 0.75rem;
		border: 1px solid var(--color-border-primary, #cbd5e1);
		border-radius: 0.375rem;
		background: var(--color-background-primary, #fff);
		font-size: 0.8125rem;
		font-weight: 600;
		color: var(--color-text-primary, #0f172a);
		cursor: pointer;
	}
	.wbd-session-list__items {
		display: grid;
		gap: 0.5rem;
	}
	.wbd-session-list__item {
		display: grid;
		grid-template-columns: 1fr auto;
		gap: 0.25rem 0.75rem;
		width: 100%;
		padding: 0.75rem;
		border: 1px solid var(--color-border-primary, #e2e8f0);
		border-radius: 0.5rem;
		background: var(--color-background-primary, #fff);
		text-align: left;
		cursor: pointer;
	}
	.wbd-session-list__item--selected {
		border-color: var(--color-primary-500, #3b82f6);
	}
	.wbd-session-list__title {
		min-width: 0;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		font-size: 0.875rem;
		font-weight: 600;
		color: var(--color-text-primary, #0f172a);
	}
	.wbd-session-list__status {
		grid-row: span 2;
		align-self: center;
		padding: 0.25rem 0.5rem;
		border-radius: 999px;
		background: var(--color-background-secondary, #f1f5f9);
		font-size: 0.6875rem;
		font-weight: 600;
		color: var(--color-text-secondary, #475569);
	}
</style>
