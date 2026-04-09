<script lang="ts">
	import type { PageHeaderStateProps } from '$stylist/management/function/state/page-header';
	import { PageHeaderStyleManager } from '$stylist/management/class/style-manager/page-header';
	import { createPageHeaderState } from '$stylist/management/function/state/page-header';
	import Link from '$stylist/typography/svelte/atom/inline/link/index.svelte';

	let props: PageHeaderStateProps = $props();
	const state = createPageHeaderState(props);
</script>

<div class={state.containerClasses} role="banner">
	<div class="container mx-auto px-4 py-6">
		<div class={state.actionsContainerClasses}>
			<div class={state.contentClasses}>
				{#if state.breadcrumbs && state.breadcrumbs.length > 0}
					<div class={state.breadcrumbsContainerClasses}>
						<nav class={state.breadcrumbsListClasses} aria-label="Breadcrumb">
							{#each state.breadcrumbs as breadcrumb, index}
								{#if breadcrumb.href}
									<Link
										href={breadcrumb.href}
										class={state.getBreadcrumbItemClasses(index === state.breadcrumbs.length - 1)}
										aria-current={index === state.breadcrumbs.length - 1 ? 'page' : undefined}
									>
										{breadcrumb.label}
									</Link>
								{:else}
									<span
										class={state.getBreadcrumbItemClasses(index === state.breadcrumbs.length - 1)}
										aria-current={index === state.breadcrumbs.length - 1 ? 'page' : undefined}
									>
										{breadcrumb.label}
									</span>
								{/if}

								{#if index < state.breadcrumbs.length - 1}
									<span class={state.getBreadcrumbSeparatorClasses()} aria-hidden="true">/</span>
								{/if}
							{/each}
						</nav>
					</div>
				{/if}

				<h1 class={state.titleClasses} aria-label={state.title}>{state.title}</h1>

				{#if state.description}
					<p class={state.descriptionClasses} aria-label={state.description}>{state.description}</p>
				{/if}
			</div>

			{#if state.actions}
				<div class="ml-4 flex-shrink-0">
					{@render state.actions()}
				</div>
			{/if}
		</div>
	</div>
</div>
