<script lang="ts">
	import createWbdUserManagementTableState from '$stylist/wbd/function/state/user-management-table/index.svelte';
	import type { RecipeWbdUserManagementTable } from '$stylist/wbd/interface/recipe/user-management-table';

	let props: RecipeWbdUserManagementTable = $props();
	const state = createWbdUserManagementTableState(props);
</script>

<div class="wbd-user-table {state.className}">
	{#each state.users as user (user.id)}
		<div class="wbd-user-table__row" class:wbd-user-table__row--selected={user.id === state.selectedUserId}>
			<button type="button" onclick={() => state.selectUser(user.id)}>
				<strong>{user.name}</strong>
				<span>{user.email}</span>
			</button>
			<span>{user.company ?? '-'}</span>
			<select value={user.role} onchange={(event) => state.updateRole(user.id, event.currentTarget.value as typeof user.role)}>
				<option value="coordinator">coordinator</option>
				<option value="expert">expert</option>
				<option value="admin">admin</option>
			</select>
		</div>
	{/each}
</div>

<style>
	.wbd-user-table {
		display: grid;
		gap: 0.5rem;
	}
	.wbd-user-table__row {
		display: grid;
		grid-template-columns: minmax(0, 1fr) 10rem 10rem;
		gap: 0.75rem;
		align-items: center;
		padding: 0.625rem;
		border: 1px solid var(--color-border-primary, #e2e8f0);
		border-radius: 0.5rem;
	}
	.wbd-user-table__row--selected {
		border-color: var(--color-primary-500, #3b82f6);
	}
	.wbd-user-table button {
		display: flex;
		flex-direction: column;
		min-width: 0;
		border: 0;
		background: transparent;
		text-align: left;
		cursor: pointer;
	}
	.wbd-user-table strong,
	.wbd-user-table span {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.wbd-user-table strong {
		font-size: 0.8125rem;
		color: var(--color-text-primary, #0f172a);
	}
	.wbd-user-table span {
		font-size: 0.75rem;
		color: var(--color-text-tertiary, #64748b);
	}
	.wbd-user-table select {
		width: 100%;
		padding: 0.5rem;
		border: 1px solid var(--color-border-primary, #cbd5e1);
		border-radius: 0.375rem;
		background: var(--color-background-primary, #fff);
		font: inherit;
	}
	@media (max-width: 760px) {
		.wbd-user-table__row {
			grid-template-columns: 1fr;
		}
	}
</style>
