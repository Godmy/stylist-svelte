<script lang="ts">
	import type { SidebarStateProps } from '$stylist/navigation/function/state/sidebar';
	import { Icon } from '$stylist';
	import { createSidebarState } from '$stylist/navigation/function/state/sidebar';

	let props: SidebarStateProps = $props();
	const state = createSidebarState(props);
</script>

<div class={state.hostClass} {...state.restProps}>
	<!-- Mobile menu button -->
	{#if state.collapsible && state.isMobile}
		<button
			type="button"
			class={state.mobileButtonClass}
			onclick={state.toggleSidebar}
			aria-label={state.isSidebarOpen ? "Close sidebar" : "Open sidebar"}
		>
			{#if state.isSidebarOpen}
				<Icon name="x" size="lg" />
			{:else}
				<Icon name="menu" size="lg" />
			{/if}
		</button>
	{/if}

	<!-- Sidebar overlay for mobile -->
	{#if state.isMobile && state.isSidebarOpen}
		<div
			class={state.overlayClass}
			onclick={state.toggleSidebar}
			onkeydown={(e) => {
				if (e.key === 'Enter' || e.key === ' ') {
					e.preventDefault();
					state.toggleSidebar();
				}
			}}
			role="button"
			tabindex="0"
			aria-label="Close sidebar"
		></div>
	{/if}

	<!-- Sidebar -->
	<aside
		class={state.sidebarClass}
		style={state.sidebarStyle}
		aria-label="Sidebar navigation"
	>
		<div class={state.sidebarContainerClass}>
			<!-- Header with logo and title -->
			<div class={state.headerClass}>
				{#if props.logo}
					<div class={state.logoWrapperClass}>
						{@render props.logo()}
					</div>
				{/if}
				{#if state.title && state.isSidebarOpen}
					<h1 class={state.titleClassComputed}>{state.title}</h1>
				{/if}
			</div>

			<!-- Navigation items -->
			<nav class={state.navClassComputed}>
				<ul class={state.navListClass}>
					{#each state.items as item (item.id)}
						<li>
							<a
								href={item.href || '#'}
								class={state.getNavItemClass(item)}
								onclick={(e) => {
									e.preventDefault();
									state.handleClick(item);
								}}
								aria-current={item.active ? 'page' : undefined}
								aria-disabled={item.disabled}
							>
								{#if item.icon && state.isSidebarOpen}
									<span class={state.navItemIconWrapperClass}>
										<item.icon class="h-5 w-5" />
									</span>
								{/if}
								{#if state.isSidebarOpen}
									<span class={state.navItemLabelClass}>{item.label}</span>
									{#if item.badge}
										<span class={state.navItemBadgeClass}>
											{item.badge}
										</span>
									{/if}
								{/if}
							</a>
						</li>
					{/each}
				</ul>
			</nav>

			<!-- Footer -->
			{#if props.footer}
				<div class={state.footerClassComputed}>
					{@render props.footer()}
				</div>
			{/if}
		</div>
	</aside>

	<!-- Content area (placeholder) -->
	<div class={state.contentAreaClass}>
		<!-- Actual content would go here -->
	</div>
</div>
