<script lang="ts">
	import type { DashboardScreen } from '$stylist/dashboard/type/alias/dashboard-screen';
	import type { DashboardNavigationItem } from '$stylist/dashboard/type/object/dashboard-navigation-item';
	import DashboardStatusPill from '$stylist/dashboard/component/atom/dashboard-status-pill/index.svelte';

	let {
		items = [],
		activeScreen,
		collapsed = false,
		statusByScreen,
		class: className = '',
		onSelect
	}: {
		items?: DashboardNavigationItem[];
		activeScreen: DashboardScreen;
		collapsed?: boolean;
		statusByScreen?: Partial<Record<DashboardScreen, DashboardNavigationItem['status']>>;
		class?: string;
		onSelect?: (screen: DashboardScreen) => void;
	} = $props();
</script>

<nav
	class="c-dashboard-sidebar {className}"
	class:c-dashboard-sidebar--collapsed={collapsed}
	aria-label="Dashboard sections"
>
	{#each items as item}
		{@const status = statusByScreen?.[item.id] ?? item.status}
		<button
			type="button"
			class="c-dashboard-sidebar__item"
			class:c-dashboard-sidebar__item--active={item.id === activeScreen}
			disabled={item.disabled}
			aria-current={item.id === activeScreen ? 'page' : undefined}
			onclick={() => onSelect?.(item.id)}
		>
			<span class="c-dashboard-sidebar__main">
				<span class="c-dashboard-sidebar__label">{item.label}</span>
				{#if !collapsed}
					<span class="c-dashboard-sidebar__description">{item.description}</span>
				{/if}
			</span>
			<DashboardStatusPill {status} label={status} compact />
		</button>
	{/each}
</nav>

<style>
	.c-dashboard-sidebar {
		box-sizing: border-box;
		display: grid;
		align-content: start;
		gap: 0.45rem;
		min-width: 14rem;
		padding: 0.55rem;
		border: 1px solid color-mix(in srgb, var(--color-border-primary) 88%, transparent);
		border-radius: 0.5rem;
		background: var(--color-background-primary);
	}

	.c-dashboard-sidebar--collapsed {
		min-width: 8.5rem;
	}

	.c-dashboard-sidebar__item {
		box-sizing: border-box;
		display: grid;
		grid-template-columns: minmax(0, 1fr) auto;
		gap: 0.65rem;
		align-items: center;
		min-height: 3.55rem;
		width: 100%;
		padding: 0.65rem;
		border: 1px solid transparent;
		border-radius: 0.45rem;
		background: transparent;
		color: var(--color-text-primary);
		font: inherit;
		text-align: left;
		cursor: pointer;
	}

	.c-dashboard-sidebar__item:hover {
		background: color-mix(in srgb, var(--color-background-secondary) 70%, transparent);
	}

	.c-dashboard-sidebar__item--active {
		border-color: color-mix(in srgb, var(--color-primary-500) 38%, var(--color-border-primary));
		background: color-mix(in srgb, var(--color-primary-500) 10%, var(--color-background-primary));
	}

	.c-dashboard-sidebar__item:disabled {
		cursor: not-allowed;
		opacity: 0.55;
	}

	.c-dashboard-sidebar__main {
		display: grid;
		gap: 0.25rem;
		min-width: 0;
	}

	.c-dashboard-sidebar__label,
	.c-dashboard-sidebar__description {
		min-width: 0;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.c-dashboard-sidebar__label {
		font-size: 0.84rem;
		font-weight: 750;
	}

	.c-dashboard-sidebar__description {
		font-size: 0.72rem;
		color: var(--color-text-secondary);
	}

	@media (max-width: 760px) {
		.c-dashboard-sidebar {
			display: flex;
			min-width: 0;
			overflow-x: auto;
		}

		.c-dashboard-sidebar__item {
			min-width: 12rem;
		}
	}
</style>
