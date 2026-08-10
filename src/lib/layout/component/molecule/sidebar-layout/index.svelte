<script lang="ts">
	import createSidebarLayoutState from './state.svelte';
	import type { SidebarLayoutProps } from '$stylist/layout/interface/recipe/sidebar-layout';

	let props: SidebarLayoutProps = $props();
	const state = createSidebarLayoutState(props);

	const GAP: Record<string, string> = {
		none: '0',
		sm: '0.5rem',
		md: '1rem',
		lg: '1.5rem',
		xl: '2rem'
	};
	const SIDEBAR_WIDTH: Record<string, string> = {
		xs: '12rem',
		sm: '14rem',
		md: '16rem',
		lg: '18rem',
		xl: '20rem'
	};

	const gap = $derived(GAP[state.gap] ?? '1rem');
	const sidebarWidth = $derived(
		state.collapsed ? '3rem' : (SIDEBAR_WIDTH[state.sidebarWidth] ?? '16rem')
	);
</script>

<div
	class={[
		'layout-sidebar',
		state.fillHeight && 'layout-sidebar--fill',
		state.responsive && 'layout-sidebar--responsive',
		props.class
	]
		.filter(Boolean)
		.join(' ')}
	style:--gap={gap}
	style:--sidebar-width={sidebarWidth}
	{...state.restProps}
>
	{#if state.side === 'left'}
		<aside
			class={['layout-sidebar__aside', state.collapsed && 'layout-sidebar__aside--collapsed']
				.filter(Boolean)
				.join(' ')}
			aria-label={state.sidebarLabel}
		>
			{@render props.sidebar()}
		</aside>
		<div
			class={['layout-sidebar__content', state.fillHeight && 'layout-sidebar__content--scroll']
				.filter(Boolean)
				.join(' ')}
		>
			{#if props.children}{@render props.children()}{/if}
		</div>
	{:else}
		<div
			class={['layout-sidebar__content', state.fillHeight && 'layout-sidebar__content--scroll']
				.filter(Boolean)
				.join(' ')}
		>
			{#if props.children}{@render props.children()}{/if}
		</div>
		<aside
			class={['layout-sidebar__aside', state.collapsed && 'layout-sidebar__aside--collapsed']
				.filter(Boolean)
				.join(' ')}
			aria-label={state.sidebarLabel}
		>
			{@render props.sidebar()}
		</aside>
	{/if}
</div>

<style>
	.layout-sidebar {
		display: flex;
		flex-direction: row;
		gap: var(--gap, 1rem);
	}

	.layout-sidebar--fill {
		height: 100%;
	}

	.layout-sidebar__aside {
		flex-shrink: 0;
		width: var(--sidebar-width, 16rem);
		transition: width 200ms ease;
	}

	.layout-sidebar__aside--collapsed {
		width: 3rem;
	}

	.layout-sidebar__content {
		flex: 1;
		min-width: 0;
	}

	.layout-sidebar__content--scroll {
		overflow: auto;
	}

	.layout-sidebar--responsive {
		flex-direction: column;
	}

	@media (min-width: 1024px) {
		.layout-sidebar--responsive {
			flex-direction: row;
		}

		.layout-sidebar--responsive .layout-sidebar__aside {
			width: var(--sidebar-width, 16rem);
		}
	}
</style>
