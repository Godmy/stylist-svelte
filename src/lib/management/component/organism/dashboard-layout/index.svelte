<script lang="ts">
	import type { DashboardLayoutProps } from '$stylist/management/interface/recipe/dashboard-layout';

	import Icon from '$stylist/svg/component/atom/icon/index.svelte';

	import Button from '$stylist/button/component/atom/button/index.svelte';

	import createDashboardLayoutState from '$stylist/management/function/state/dashboard-layout/index.svelte';

	let props: DashboardLayoutProps = $props();

	const state = createDashboardLayoutState(props);
</script>

<div class={`c-dashboard-layout ${props.class ?? ''} _c1`} {...state.restProps}>
	<!-- Sidebar -->

	{#if props.sidebar}
		<aside class={`${state.sidebarWidthClass} ${props.sidebarClass ?? ''} _c2`}>
			{#if state.collapsibleSidebar && state.showSidebarToggle}
				<div class="_c1">
					<Button
						variant="ghost"
						size="sm"
						onclick={state.toggleSidebar}
						aria-label={state.isSidebarOpen ? 'Collapse sidebar' : 'Expand sidebar'}
					>
						{#if state.isSidebarOpen}
							<Icon name="x" size="sm" />
						{:else}
							<Icon name="menu" size="sm" />
						{/if}
					</Button>
				</div>
			{/if}

			<div class="_c2">
				{@render props.sidebar()}
			</div>
		</aside>
	{/if}

	<!-- Mobile sidebar toggle button -->

	{#if state.showSidebarToggle && props.sidebar}
		<div class="_c3">
			<Button
				variant="secondary"
				onclick={state.toggleSidebar}
				aria-label={state.isSidebarOpen ? 'Close menu' : 'Open menu'}
			>
				<Icon name="menu" size="md" />
			</Button>
		</div>
	{/if}

	<!-- Mobile sidebar overlay -->

	{#if props.sidebar && state.isSidebarOpen}
		<div
			class="_c4"
			onclick={state.toggleSidebar}
			role="button"
			tabindex={0}
			onkeydown={(e: KeyboardEvent) => {
				if (e.key === 'Enter' || e.key === ' ') {
					e.preventDefault();

					state.toggleSidebar();
				}
			}}
		></div>
	{/if}

	<!-- Mobile sidebar -->

	{#if props.sidebar && state.isSidebarOpen}
		<aside class="_c5">
			<div class="_c1">
				<Button variant="ghost" size="sm" onclick={state.toggleSidebar} aria-label="Close menu">
					<Icon name="x" size="md" />
				</Button>
			</div>

			<div class="_c2">
				{@render props.sidebar()}
			</div>
		</aside>
	{/if}

	<!-- Main content -->

	<div class="_c6">
		<!-- Header -->

		{#if props.header}
			<header class={`${props.headerClass ?? ''} _c3`}>
				<div class="_c7">
					{@render props.header()}
				</div>
			</header>
		{/if}

		<!-- Content area -->

		<main class={`${props.contentClass ?? ''} TODO-variantClasses _c4`}>
			{#if props.children}{@render props.children()}{/if}
		</main>

		<!-- Footer -->

		{#if props.footer}
			<footer class={`${props.footerClass ?? ''} _c5`}>
				<div class="_c8">
					{@render props.footer()}
				</div>
			</footer>
		{/if}
	</div>
</div>

<style>
	._c1 {
		display: flex;

		justify-content: flex-end;

		padding: 1rem;
	}

	._c2 {
		flex: 1 1 0%;

		overflow-y: auto;

		padding-top: 1rem;

		padding-bottom: 1rem;
	}

	._c3 {
		position: fixed;

		top: 1rem;

		left: 1rem;
	}

	@media (min-width: 768px) {
		._c3 {
			display: none;
		}
	}

	._c4 {
		position: fixed;

		inset: 0;

		background-color: var(--color-overlay-primary);
	}

	@media (min-width: 768px) {
		._c4 {
			display: none;
		}
	}

	._c5 {
		position: fixed;

		left: 0;

		width: 16rem;

		background-color: var(--color-background-primary);

		box-shadow:
			0 10px 15px -3px rgb(0 0 0 / 0.1),
			0 4px 6px -4px rgb(0 0 0 / 0.1);
	}

	@media (min-width: 768px) {
		._c5 {
			display: none;
		}
	}

	._c6 {
		display: flex;

		flex: 1 1 0%;

		flex-direction: column;

		overflow: hidden;
	}

	._c7 {
		display: flex;

		height: 4rem;

		align-items: center;

		justify-content: space-between;

		padding-left: 1rem;

		padding-right: 1rem;
	}

	@media (min-width: 640px) {
		._c7 {
			padding-left: 1.5rem;

			padding-right: 1.5rem;
		}
	}

	@media (min-width: 1024px) {
		._c7 {
			padding-left: 2rem;

			padding-right: 2rem;
		}
	}

	._c8 {
		padding-left: 1rem;

		padding-right: 1rem;

		padding-top: 0.75rem;

		padding-bottom: 0.75rem;
	}

	@media (min-width: 640px) {
		._c8 {
			padding-left: 1.5rem;

			padding-right: 1.5rem;
		}
	}

	@media (min-width: 1024px) {
		._c8 {
			padding-left: 2rem;

			padding-right: 2rem;
		}
	}

	.dashboard-layout__wrapper {
		display: flex;

		height: 100vh;

		background-color: var(--color-background-secondary);
	}

	.dashboard-layout__sidebar {
		display: flex;

		background-color: var(--color-background-primary);

		border-right-width: 1px;

		border-style: solid;

		border-color: var(--color-border-primary);

		box-shadow:
			0 4px 6px -1px rgb(0 0 0 / 0.1),
			0 2px 4px -2px rgb(0 0 0 / 0.1);

		flex-direction: column;

		transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
	}

	@media (min-width: 768px) {
		.dashboard-layout__sidebar {
			display: block;
		}
	}

	.dashboard-layout__sidebar-content {
		flex: 1 1 0%;

		overflow-y: auto;

		padding-top: 1rem;

		padding-bottom: 1rem;
	}

	.dashboard-layout__sidebar-toggle {
		padding: 1rem;

		display: flex;

		justify-content: flex-end;
	}

	.dashboard-layout__main-content {
		flex: 1 1 0%;

		display: flex;

		flex-direction: column;

		overflow: hidden;
	}

	.dashboard-layout__header {
		background-color: var(--color-background-primary);

		box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);

		border-bottom-width: 1px;

		border-style: solid;

		border-color: var(--color-border-primary);
	}

	.dashboard-layout__content {
		flex: 1 1 0%;

		overflow-y: auto;
	}

	.dashboard-layout__footer {
		background-color: var(--color-background-primary);

		border-top-width: 1px;

		border-style: solid;

		border-color: var(--color-border-primary);

		padding-top: 0.75rem;

		padding-bottom: 0.75rem;

		padding-left: 1rem;

		padding-right: 1rem;
	}

	.dashboard-layout__mobile-toggle {
		position: fixed;

		top: 1rem;

		left: 1rem;
	}

	@media (min-width: 768px) {
		.dashboard-layout__mobile-toggle {
			display: none;
		}
	}

	.dashboard-layout__mobile-overlay {
		position: fixed;

		inset: 0;

		background-color: var(--color-overlay-backdrop);
	}

	@media (min-width: 768px) {
		.dashboard-layout__mobile-overlay {
			display: none;
		}
	}

	.dashboard-layout__mobile-sidebar {
		position: fixed;

		top: 0;

		left: 0;

		height: 100%;

		background-color: var(--color-background-primary);

		border-right-width: 1px;

		border-style: solid;

		border-color: var(--color-border-primary);

		box-shadow:
			0 10px 15px -3px rgb(0 0 0 / 0.1),
			0 4px 6px -4px rgb(0 0 0 / 0.1);
	}

	@media (min-width: 768px) {
		.dashboard-layout__mobile-sidebar {
			display: none;
		}
	}

	._c1 {
		display: flex;

		height: 100vh;

		background-color: var(--color-background-secondary);
	}

	._c2 {
		display: flex;

		flex-direction: column;

		background-color: var(--color-background-primary);

		box-shadow:
			0 4px 6px -1px rgb(0 0 0 / 0.1),
			0 2px 4px -2px rgb(0 0 0 / 0.1);

		transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);

		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
	}

	@media (min-width: 768px) {
		._c2 {
			display: block;
		}
	}

	._c3 {
		background-color: var(--color-background-primary);

		box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
	}

	._c4 {
		flex: 1 1 0%;

		overflow-y: auto;
	}

	._c5 {
		border-top-width: 1px;

		border-style: solid;

		background-color: var(--color-background-primary);
	}

	._c3 {
		z-index: var(--z-index-modal);
	}

	._c4 {
		--tw-bg-opacity: var(--opacity-50);
		z-index: var(--z-index-overlay);
	}

	._c5 {
		top: 0;
		bottom: 0;
		z-index: var(--z-index-modal);
	}

	._c2 {
		transition-duration: var(--duration-300);
	}

	._c3 {
		z-index: var(--z-index-docked);
	}
</style>
