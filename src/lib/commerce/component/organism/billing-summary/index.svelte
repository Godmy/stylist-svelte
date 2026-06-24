<script lang="ts">
	import type { RecipeBillingSummary } from '$stylist/commerce/interface/recipe/billing-summary';
	import { PresetBillingSummary } from '$stylist/commerce/const/preset/billing-summary';
	import Icon from '$stylist/svg/component/atom/icon/index.svelte';
	import { createBillingSummaryState } from '$stylist/commerce/function/state/billing-summary/index.svelte';

	let props: RecipeBillingSummary = $props();
	const state = createBillingSummaryState(props);
</script>

<div class={state.containerClass}>
	<div class={state.headerClass}>
		<div class={state.headerRowClass}>
			<div>
				<div class={state.titleRowClass}>
					<Icon name={PresetBillingSummary.DollarSign} class={state.headerIconClass} />
					<h3 class={state.titleClass}>{props.title ?? 'Billing Summary'}</h3>
				</div>
				{#if props.subtitle}
					<p class={state.subtitleClass}>{props.subtitle}</p>
				{/if}
			</div>

			<div class={state.amountBlockClass}>
				<p class={state.totalAmountClass}>
					{state.formatCurrency(state.total, props.currency ?? 'USD')}
				</p>
				{#if props.showStatus !== false}
					<span class={state.getStatusBadgeClass(props.status)}>
						{state.getStatusText(props.status)}
					</span>
				{/if}
			</div>
		</div>
	</div>

	{#if props.showDetails !== false}
		<div class={state.summaryClass}>
			<div class={state.metricGridClass}>
				<div class={state.metricCardClass}>
					<div class={state.metricRowClass}>
						<div class={state.metricIconContainerClass}>
							<Icon name={PresetBillingSummary.DollarSign} class={state.metricIconClass} />
						</div>
						<div class={state.metricContentClass}>
							<p class={state.metricLabelClass}>Total Amount</p>
							<p class={state.metricValueClass}>
								{state.formatCurrency(state.total, props.currency ?? 'USD')}
							</p>
						</div>
					</div>
				</div>

				{#if props.showDueDate !== false && props.dueDate}
					<div class={state.metricCardClass}>
						<div class={state.metricRowClass}>
							<div class={state.getStatusMetricIconContainerClass(props.status)}>
								<Icon
									name={PresetBillingSummary.Calendar}
									class={state.getStatusMetricIconClass(props.status)}
								/>
							</div>
							<div class={state.metricContentClass}>
								<p class={state.metricLabelClass}>Due Date</p>
								<p class={state.getStatusMetricValueClass(props.status)}>
									{state.formatDate(props.dueDate)}
								</p>
							</div>
						</div>
					</div>
				{/if}

				{#if props.showStatus !== false}
					<div class={state.metricCardClass}>
						<div class={state.metricRowClass}>
							<div class={state.getStatusMetricIconContainerClass(props.status)}>
								{#if props.status === 'paid'}
									<Icon
										name={PresetBillingSummary.TrendingUp}
										class={state.getStatusMetricIconClass(props.status)}
									/>
								{:else if props.status === 'overdue'}
									<Icon
										name={PresetBillingSummary.TrendingDown}
										class={state.getStatusMetricIconClass(props.status)}
									/>
								{:else if props.status === 'cancelled'}
									<Icon
										name={PresetBillingSummary.Receipt}
										class={state.getStatusMetricIconClass(props.status)}
									/>
								{:else}
									<Icon
										name={PresetBillingSummary.Clock}
										class={state.getStatusMetricIconClass(props.status)}
									/>
								{/if}
							</div>
							<div class={state.metricContentClass}>
								<p class={state.metricLabelClass}>Status</p>
								<p class={state.getStatusMetricValueClass(props.status)}>
									{state.getStatusText(props.status)}
								</p>
							</div>
						</div>
					</div>
				{/if}
			</div>

			{#if (props.items ?? []).length > 0}
				<div class={state.itemsClass}>
					<h4 class={state.itemsTitleClass}>Billing Details</h4>
					<ul class={state.itemsListClass}>
						{#each props.items ?? [] as item}
							<li class={state.itemClass}>
								<div class={state.headerRowClass}>
									<div>
										<p class={state.itemDescriptionClass}>{item.description}</p>
										<p class={state.itemDateClass}>{state.formatDate(item.date)}</p>
									</div>
									<div class={state.amountBlockClass}>
										<p class={state.itemAmountClass}>
											{state.formatCurrency(item.amount, item.currency)}
										</p>
										<span class={state.getItemStatusBadgeClass(item.status)}>
											{state.getItemStatusText(item.status)}
										</span>
									</div>
								</div>
							</li>
						{/each}
					</ul>
				</div>
			{/if}
		</div>
	{/if}

	<div class={state.footerClass}>
		<div class={state.headerRowClass}>
			<div class={state.invoiceIdClass}>
				Invoice ID: <span class={state.invoiceIdValueClass}>{state.invoiceId}</span>
			</div>
			<div class={state.generatedDateClass}>
				Generated: {state.generatedDate}
			</div>
		</div>
	</div>
</div>

<style>
	.billing-summary {
		overflow: hidden;
		border: 1px solid var(--color-border-secondary);
		border-radius: 0.5rem;
		background-color: var(--color-background-primary);
		box-shadow:
			0 1px 3px 0 rgb(0 0 0 / 0.1),
			0 1px 2px -1px rgb(0 0 0 / 0.1);
	}

	.billing-summary__header,
	.billing-summary__footer {
		padding: 1rem 1.5rem;
	}

	.billing-summary__header {
		border-bottom: 1px solid var(--color-border-primary);
	}

	.billing-summary__footer {
		border-top: 1px solid var(--color-border-primary);
	}

	.billing-summary__row {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
	}

	.billing-summary__title-row,
	.billing-summary__metric-row {
		display: flex;
		align-items: center;
	}

	.billing-summary__header-icon {
		width: 1.5rem;
		height: 1.5rem;
		margin-right: 0.5rem;
		color: var(--color-text-tertiary);
	}

	.billing-summary__title {
		font-size: 1.125rem;
		line-height: 1.75rem;
		font-weight: 500;
		color: var(--color-text-primary);
	}

	.billing-summary__subtitle {
		margin-top: 0.25rem;
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: var(--color-text-secondary);
	}

	.billing-summary__amount-block {
		text-align: right;
	}

	.billing-summary__total-amount {
		font-size: 1.5rem;
		line-height: 2rem;
		font-weight: 600;
		color: var(--color-text-primary);
	}

	.billing-summary__status-badge,
	.billing-summary__item-status-badge {
		display: inline-flex;
		align-items: center;
		border-radius: 9999px;
		padding: 0.125rem 0.625rem;
		font-size: 0.75rem;
		line-height: 1rem;
		font-weight: 500;
	}

	.billing-summary__status-badge--pending,
	.billing-summary__item-status-badge--pending {
		color: var(--color-warning-800);
		background-color: var(--color-warning-100);
	}

	.billing-summary__status-badge--paid,
	.billing-summary__item-status-badge--paid {
		color: var(--color-success-800);
		background-color: var(--color-success-100);
	}

	.billing-summary__status-badge--overdue,
	.billing-summary__item-status-badge--failed {
		color: var(--color-error-800);
		background-color: var(--color-error-100);
	}

	.billing-summary__status-badge--cancelled {
		color: var(--color-text-tertiary);
		background-color: var(--color-neutral-100);
	}

	.billing-summary__item-status-badge--refunded {
		color: var(--color-info-800);
		background-color: var(--color-info-100);
	}

	.billing-summary__summary {
		padding: 1.5rem;
	}

	.billing-summary__metric-grid {
		display: grid;
		grid-template-columns: 1fr;
		gap: 1.5rem;
	}

	@media (min-width: 768px) {
		.billing-summary__metric-grid {
			grid-template-columns: repeat(3, minmax(0, 1fr));
		}
	}

	.billing-summary__metric-card {
		border: 1px solid var(--color-border-primary);
		border-radius: 0.5rem;
		padding: 1rem;
	}

	.billing-summary__metric-icon-container {
		border-radius: 0.375rem;
		background-color: var(--color-primary-100);
		padding: 0.5rem;
	}

	.billing-summary__metric-icon-container--paid {
		background-color: var(--color-success-100);
	}

	.billing-summary__metric-icon-container--overdue {
		background-color: var(--color-error-100);
	}

	.billing-summary__metric-icon-container--cancelled {
		background-color: var(--color-neutral-100);
	}

	.billing-summary__metric-icon {
		width: 1.25rem;
		height: 1.25rem;
		color: var(--color-primary-600);
	}

	.billing-summary__metric-icon--paid,
	.billing-summary__metric-value--paid {
		color: var(--color-success-600);
	}

	.billing-summary__metric-icon--overdue,
	.billing-summary__metric-value--overdue {
		color: var(--color-error-600);
	}

	.billing-summary__metric-icon--cancelled,
	.billing-summary__metric-value--cancelled {
		color: var(--color-text-tertiary);
	}

	.billing-summary__metric-content {
		margin-left: 1rem;
	}

	.billing-summary__metric-label {
		font-size: 0.875rem;
		line-height: 1.25rem;
		font-weight: 500;
		color: var(--color-text-secondary);
	}

	.billing-summary__metric-value {
		font-size: 1.125rem;
		line-height: 1.75rem;
		font-weight: 600;
		color: var(--color-text-primary);
	}

	.billing-summary__items {
		margin-top: 2rem;
	}

	.billing-summary__items-title {
		margin-bottom: 1rem;
		font-size: 0.875rem;
		line-height: 1.25rem;
		font-weight: 500;
		color: var(--color-text-primary);
	}

	.billing-summary__items-list {
		border: 1px solid var(--color-border-primary);
		border-radius: 0.5rem;
	}

	.billing-summary__item {
		padding: 1rem;
	}

	.billing-summary__item + .billing-summary__item {
		border-top: 1px solid var(--color-border-primary);
	}

	.billing-summary__item-description,
	.billing-summary__item-amount {
		font-size: 0.875rem;
		line-height: 1.25rem;
		font-weight: 500;
		color: var(--color-text-primary);
	}

	.billing-summary__item-date {
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: var(--color-text-secondary);
	}

	.billing-summary__invoice-id {
		font-size: 0.75rem;
		line-height: 1rem;
		color: var(--color-text-secondary);
	}

	.billing-summary__invoice-id-value {
		font-family: ui-monospace, monospace;
	}

	.billing-summary__generated-date {
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: var(--color-text-secondary);
	}
</style>
