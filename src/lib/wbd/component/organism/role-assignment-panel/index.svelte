<script lang="ts">
	import createWbdRoleAssignmentPanelState from '$stylist/wbd/function/state/role-assignment-panel/index.svelte';
	import type { RecipeWbdRoleAssignmentPanel } from '$stylist/wbd/interface/recipe/role-assignment-panel';

	let props: RecipeWbdRoleAssignmentPanel = $props();
	const state = createWbdRoleAssignmentPanelState(props);
</script>

<section class="wbd-role-panel {state.className}">
	<header>
		<strong>{state.user.name}</strong>
		<span>{state.user.email}</span>
	</header>
	<div>
		{#each state.roles as role}
			<button type="button" class:wbd-role-panel__active={role === state.user.role} onclick={() => state.assignRole(role)}>
				{role}
			</button>
		{/each}
	</div>
</section>

<style>
	.wbd-role-panel {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}
	.wbd-role-panel header {
		display: flex;
		flex-direction: column;
		gap: 0.125rem;
	}
	.wbd-role-panel strong {
		font-size: 0.875rem;
		color: var(--color-text-primary, #0f172a);
	}
	.wbd-role-panel span {
		font-size: 0.75rem;
		color: var(--color-text-tertiary, #64748b);
	}
	.wbd-role-panel div {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
	}
	.wbd-role-panel button {
		padding: 0.5rem 0.75rem;
		border: 1px solid var(--color-border-primary, #cbd5e1);
		border-radius: 0.375rem;
		background: var(--color-background-primary, #fff);
		font-size: 0.8125rem;
		font-weight: 700;
		color: var(--color-text-primary, #0f172a);
		cursor: pointer;
	}
	.wbd-role-panel__active {
		border-color: var(--color-primary-500, #3b82f6) !important;
		background: var(--color-primary-50, #eff6ff) !important;
		color: var(--color-primary-700, #1d4ed8) !important;
	}
</style>
