<script lang="ts">
	import Icon from '$stylist/svg/component/atom/icon/index.svelte';
	import createWbdAdminSidebarState from '$stylist/wbd/function/state/admin-sidebar/index.svelte';
	import type { RecipeWbdAdminSidebar } from '$stylist/wbd/interface/recipe/admin-sidebar';

	let props: RecipeWbdAdminSidebar = $props();
	const state = createWbdAdminSidebarState(props);
</script>

<aside class="wbd-admin-sidebar {state.className}">
	{#if props.logo}
		<div class="wbd-admin-sidebar__brand">
			{@render props.logo()}
		</div>
	{/if}

	<nav class="wbd-admin-sidebar__nav" aria-label="Primary">
		<ul>
			{#each state.items as item (item.id)}
				<li>
					<a
						href={item.href}
						class="wbd-admin-sidebar__item"
						class:wbd-admin-sidebar__item--active={item.active}
						aria-current={item.active ? 'page' : undefined}
					>
						<Icon name={item.iconName} size="sm" />
						<span>{item.label}</span>
					</a>
				</li>
			{/each}
		</ul>
	</nav>

	{#if props.footer}
		<div class="wbd-admin-sidebar__footer">
			{@render props.footer()}
		</div>
	{/if}
</aside>

<style>
	.wbd-admin-sidebar {
		display: flex;
		flex-direction: column;
		width: 15rem;
		flex-shrink: 0;
		height: 100vh;
		position: sticky;
		top: 0;
		border-right: 1px solid var(--color-border-primary, #e2e8f0);
		background: var(--color-background-secondary, #f8fafc);
		box-sizing: border-box;
	}
	.wbd-admin-sidebar__brand {
		display: flex;
		align-items: center;
		padding: 1.25rem 1.25rem 0.75rem;
	}
	.wbd-admin-sidebar__nav {
		flex: 1 1 0%;
		overflow-y: auto;
		padding: 0.5rem;
	}
	.wbd-admin-sidebar__nav ul {
		list-style: none;
		margin: 0;
		padding: 0;
		display: flex;
		flex-direction: column;
		gap: 0.125rem;
	}
	.wbd-admin-sidebar__item {
		display: flex;
		align-items: center;
		gap: 0.625rem;
		padding: 0.5rem 0.75rem;
		border-radius: 0.5rem;
		color: var(--color-text-secondary, #475569);
		text-decoration: none;
		font-size: 0.8125rem;
		font-weight: 600;
	}
	.wbd-admin-sidebar__item:hover {
		background: var(--color-background-hover, var(--color-background-tertiary, #e2e8f0));
	}
	.wbd-admin-sidebar__item--active {
		background: var(--color-primary-container, var(--color-primary-50, #dbeafe));
		color: var(--color-on-primary-container, var(--color-primary-700, #1d4ed8));
	}
	.wbd-admin-sidebar__footer {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		padding: 0.75rem 1rem;
		border-top: 1px solid var(--color-border-primary, #e2e8f0);
		font-size: 0.75rem;
		color: var(--color-text-secondary, #475569);
	}
</style>
