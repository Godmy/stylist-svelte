<script lang="ts">
	import type { DashboardLayoutProps } from '$stylist/management/interface/recipe/dashboard-layout';
	import Icon from '$stylist/media/component/atom/icon/index.svelte';
	import Button from '$stylist/control/component/atom/button/index.svelte';
	import createDashboardLayoutState from '$stylist/management/function/state/dashboard-layout/index.svelte';

	let props: DashboardLayoutProps = $props();
	const state = createDashboardLayoutState(props);
</script>

<div
	class={`c-dashboard-layout flex h-screen bg-[--color-background-secondary] ${props.class ?? ''}`}
	{...state.restProps}
>
	<!-- Sidebar -->
	{#if props.sidebar}
		<aside
			class={`hidden md:block ${state.sidebarWidthClass} flex flex-col bg-[--color-background-primary] shadow-md transition-all duration-[var(--duration-300)] ease-in-out ${props.sidebarClass ?? ''}`}
		>
			{#if state.collapsibleSidebar && state.showSidebarToggle}
				<div class="flex justify-end p-4">
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
			<div class="flex-1 overflow-y-auto py-4">
				{@render props.sidebar()}
			</div>
		</aside>
	{/if}

	<!-- Mobile sidebar toggle button -->
	{#if state.showSidebarToggle && props.sidebar}
		<div class="fixed top-4 left-4 z-[var(--z-index-modal)] md:hidden">
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
			class="bg-opacity-[var(--opacity-50)] fixed inset-0 z-[var(--z-index-overlay)] bg-[--color-overlay-primary] md:hidden"
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
		<aside
			class="fixed inset-y-0 left-0 z-[var(--z-index-modal)] w-64 bg-[--color-background-primary] shadow-lg md:hidden"
		>
			<div class="flex justify-end p-4">
				<Button variant="ghost" size="sm" onclick={state.toggleSidebar} aria-label="Close menu">
					<Icon name="x" size="md" />
				</Button>
			</div>
			<div class="flex-1 overflow-y-auto py-4">
				{@render props.sidebar()}
			</div>
		</aside>
	{/if}

	<!-- Main content -->
	<div class="flex flex-1 flex-col overflow-hidden">
		<!-- Header -->
		{#if props.header}
			<header
				class={`z-[var(--z-index-docked)] bg-[--color-background-primary] shadow-sm ${props.headerClass ?? ''}`}
			>
				<div class="flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
					{@render props.header()}
				</div>
			</header>
		{/if}

		<!-- Content area -->
		<main class={`flex-1 overflow-y-auto ${props.contentClass ?? ''} ${state.variantClasses}`}>
			{#if props.children}{@render props.children()}{/if}
		</main>

		<!-- Footer -->
		{#if props.footer}
			<footer class={`border-t bg-[--color-background-primary] ${props.footerClass ?? ''}`}>
				<div class="px-4 py-3 sm:px-6 lg:px-8">
					{@render props.footer()}
				</div>
			</footer>
		{/if}
	</div>
</div>
