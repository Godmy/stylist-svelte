<script lang="ts">
	import type { PageHeaderStateProps } from '$stylist/management/interface/recipe/page-header';
	import createPageHeaderState from './state.svelte';
	import Link from '$stylist/typography/component/atom/link/index.svelte';

	let props: PageHeaderStateProps = $props();
	const state = createPageHeaderState(props);
</script>

<div class="page-header" role="banner">
	<div class="_c1 container">
		<div class="page-header__actions-container">
			<div class="page-header__content">
				{#if state.breadcrumbs && state.breadcrumbs.length > 0}
					<div class="page-header__breadcrumbs-container">
						<nav class="page-header__breadcrumbs-list" aria-label="Breadcrumb">
							{#each state.breadcrumbs as breadcrumb, index}
								{#if breadcrumb.href}
									<Link
										href={breadcrumb.href}
										class="page-header__breadcrumb-item"
										data-TODO="was state.BreadcrumbItemClasses(...) — add data-attr"
										aria-current={index === state.breadcrumbs.length - 1 ? 'page' : undefined}
									>
										{breadcrumb.label}
									</Link>
								{:else}
									<span
										class="page-header__breadcrumb-item"
										data-TODO="was state.BreadcrumbItemClasses(...) — add data-attr"
										aria-current={index === state.breadcrumbs.length - 1 ? 'page' : undefined}
									>
										{breadcrumb.label}
									</span>
								{/if}

								{#if index < state.breadcrumbs.length - 1}
									<span
										class="page-header__breadcrumb-separator"
										data-TODO="was state.BreadcrumbSeparatorClasses(...) — add data-attr"
										aria-hidden="true">/</span
									>
								{/if}
							{/each}
						</nav>
					</div>
				{/if}

				<h1 class="page-header__title" aria-label={state.title}>{state.title}</h1>

				{#if state.description}
					<p class="page-header__description" aria-label={state.description}>{state.description}</p>
				{/if}
			</div>

			{#if state.actions}
				<div class="_c2">
					{@render state.actions()}
				</div>
			{/if}
		</div>
	</div>
</div>

<style>
	._c1 {
		margin-left: auto;
		margin-right: auto;
		padding-left: 1rem;
		padding-right: 1rem;
		padding-top: 1.5rem;
		padding-bottom: 1.5rem;
	}
	._c2 {
		margin-left: 1rem;
		flex-shrink: 0;
	}

	.page-header {
		border-bottom-width: 1px;
		border-style: solid;
		border-color: var(--color-border-primary);
		background-color: var(--color-background-primary);
	}

	.page-header__breadcrumbs-container {
		margin-bottom: 0.5rem;
	}

	.page-header__breadcrumbs-list {
		display: flex;
		align-items: center;
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: var(--color-text-tertiary);
	}

	.page-header__breadcrumb-item {
		font-weight: 500;
		color: var(--color-text-primary);
		transition-property: color, background-color, border-color;
		transition-duration: 150ms;
	}
	.page-header__breadcrumb-item:hover {
		color: var(--color-text-primary);
	}

	.page-header__breadcrumb-separator {
		margin-left: 0.5rem;
		margin-right: 0.5rem;
		color: var(--color-text-tertiary);
	}

	.page-header__title {
		margin-bottom: 0.25rem;
		font-size: 1.5rem;
		line-height: 2rem;
		font-weight: 700;
		color: var(--color-text-primary);
	}

	.page-header__description {
		color: var(--color-text-secondary);
	}

	.page-header__actions-container {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
	}

	.page-header__content {
		flex: 1 1 0%;
	}
</style>
