<script lang="ts">
	import BaseIcon from '$stylist/svg/component/atom/icon/index.svelte';
	import createStatusDashboardState from '$stylist/management/function/state/status-dashboard/index.svelte';
	import type { RecipeStatusDashboard } from '$stylist/management/interface/recipe/status-dashboard';

	let props: RecipeStatusDashboard = $props();
	const state = createStatusDashboardState(props);
</script>

<div class={state.containerClass} {...state.restProps}>
	{#if state.title || state.subtitle}
		<div class={state.headerClassComputed}>
			{#if state.title}
				<h2 class={state.titleClass}>{state.title}</h2>
			{/if}
			{#if state.subtitle}
				<p class={state.subtitleClass}>{state.subtitle}</p>
			{/if}
		</div>
	{/if}

	<div class={state.itemsGridClass}>
		{#each state.items as item}
			{@const statusInfo = state.resolveStatusPresentation(item.status)}
			<div class={state.itemCardClass + ' ' + statusInfo.border}>
				<div class={state.itemContentClass}>
					<div class={state.statusIconWrapperClass + ' ' + statusInfo.bg}>
						<BaseIcon
							name={statusInfo.icon}
							class={state.statusIconClass + ' ' + statusInfo.color}
						/>
					</div>
					<div class="_c1">
						<div class={state.itemHeaderClass}>
							<h3 class={state.itemTitleClass}>{item.title}</h3>
							{#if item.value}
								<span class={state.itemValueClass}>{item.value}</span>
							{/if}
						</div>
						{#if item.description}
							<p class={state.itemDescriptionClass}>{item.description}</p>
						{/if}
					</div>
					{#if item.actions}
						<div class={state.itemActionsClass}>
							{@render item.actions()}
						</div>
					{/if}
				</div>

				{#if item.footer}
					<div class={state.itemFooterClass}>
						{@render item.footer()}
					</div>
				{/if}
			</div>
		{/each}
	</div>
</div>

<style>
	._c1 {
		margin-left: 0.75rem;
		flex: 1 1 0%;
	}

	.status-dashboard > * + * {
		margin-top: 1rem;
	}

	.status-dashboard__header > * + * {
		margin-top: 0.25rem;
	}

	.status-dashboard__title {
		font-size: 1.125rem;
		line-height: 1.75rem;
		font-weight: 600;
		color: var(--color-text-primary);
	}

	.status-dashboard__subtitle {
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: var(--color-text-secondary);
	}

	.status-dashboard__items-grid {
		display: grid;
		grid-template-columns: repeat(1, minmax(0, 1fr));
		gap: 1rem;
	}
	@media (min-width: 768px) {
		.status-dashboard__items-grid {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}
	@media (min-width: 1280px) {
		.status-dashboard__items-grid {
			grid-template-columns: repeat(4, minmax(0, 1fr));
		}
	}

	.status-dashboard__item-card {
		border-radius: 0.5rem;
		border-width: 1px;
		border-style: solid;
		background-color: var(--color-background-primary);
		padding: 1rem;
		box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
	}

	.status-dashboard__item-content {
		display: flex;
		align-items: flex-start;
	}

	.status-dashboard__item-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 0.5rem;
	}

	.status-dashboard__item-title {
		font-size: 0.875rem;
		line-height: 1.25rem;
		font-weight: 500;
		color: var(--color-text-primary);
	}

	.status-dashboard__item-value {
		font-size: 0.875rem;
		line-height: 1.25rem;
		font-weight: 600;
		color: var(--color-text-primary);
	}

	.status-dashboard__item-description {
		margin-top: 0.25rem;
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: var(--color-text-secondary);
	}

	.status-dashboard__item-footer {
		margin-top: 0.75rem;
		border-top-width: 1px;
		border-style: solid;
		border-color: var(--color-border-primary);
		padding-top: 0.75rem;
	}

	.status-dashboard__item-actions {
		margin-left: 0.75rem;
		display: flex;
		flex-shrink: 0;
		align-items: center;
		gap: 0.5rem;
	}

	.status-dashboard__status-icon-wrapper {
		display: flex;
		height: 2.5rem;
		width: 2.5rem;
		align-items: center;
		justify-content: center;
		border-radius: 9999px;
	}

	.status-dashboard__status-icon {
		height: 1.25rem;
		width: 1.25rem;
	}
</style>
