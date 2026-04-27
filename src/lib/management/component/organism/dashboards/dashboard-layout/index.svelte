<script lang="ts">
	import type { DashboardLayoutProps } from '$stylist/management/interface/recipe/dashboard-layout';
	import { Icon } from '$stylist';
	import { Button } from '$stylist';
	import { createDashboardLayoutState } from '$stylist/management/function/state/dashboard-layout';

	let props: DashboardLayoutProps = $props();
	const state = createDashboardLayoutState(props);
</script>

<div class={`c-dashboard-layout flex h-screen bg-[--color-background-secondary] ${props.class ?? ''}`} {...state.restProps}>
	<!-- Sidebar -->
	{#if props.sidebar}
		<aside
			class={`hidden md:block ${state.sidebarWidthClass} bg-[--color-background-primary] shadow-md flex flex-col transition-all duration-[var(--duration-300)] ease-in-out ${props.sidebarClass ?? ''}`}
		>
			{#if state.collapsibleSidebar && state.showSidebarToggle}
				<div class="p-4 flex justify-end">
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
		<div class="md:hidden fixed top-4 left-4 z-[var(--z-index-modal)]">
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
			class="fixed inset-0 z-[var(--z-index-overlay)] bg-[--color-overlay-primary] bg-opacity-[var(--opacity-50)] md:hidden"
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
			<div class="p-4 flex justify-end">
				<Button
					variant="ghost"
					size="sm"
					onclick={state.toggleSidebar}
					aria-label="Close menu"
				>
					<Icon name="x" size="md" />
				</Button>
			</div>
			<div class="flex-1 overflow-y-auto py-4">
				{@render props.sidebar()}
			</div>
		</aside>
	{/if}

	<!-- Main content -->
	<div class="flex-1 flex flex-col overflow-hidden">
		<!-- Header -->
		{#if props.header}
			<header class={`bg-[--color-background-primary] shadow-sm z-[var(--z-index-docked)] ${props.headerClass ?? ''}`}>
				<div class="px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
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
			<footer class={`bg-[--color-background-primary] border-t ${props.footerClass ?? ''}`}>
				<div class="px-4 py-3 sm:px-6 lg:px-8">
					{@render props.footer()}
				</div>
			</footer>
		{/if}
	</div>
</div>
