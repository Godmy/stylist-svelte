<script lang="ts">
	import type { SlotBillingSummary as IBillingSummaryProps } from '$stylist/commerce/interface/slot/billing-summary';
	import { Icon as BaseIcon } from '$stylist';
	import { createBillingSummaryState } from '$stylist/commerce/function/state/billing-summary';

	const DollarSign = 'dollar-sign';
	const Calendar = 'calendar';
	const Clock = 'clock';
	const Receipt = 'receipt';
	const TrendingUp = 'trending-up';
	const TrendingDown = 'trending-down';

	let props: IBillingSummaryProps = $props();
	const state = createBillingSummaryState(props);
</script>

<div class={state.containerClasses}>
	<div class={state.headerClasses}>
		<div class="flex items-center justify-between">
			<div>
				<div class="flex items-center">
					<BaseIcon name={DollarSign} class="h-6 w-6 text-[--color-text-tertiary] mr-2" />
					<h3 class={state.titleClasses}>{props.title ?? 'Billing Summary'}</h3>
				</div>
				{#if props.subtitle}
					<p class={state.subtitleClasses}>{props.subtitle}</p>
				{/if}
			</div>

			<div class="text-right">
				<p class={state.totalAmountClasses}>
					{state.formatCurrency(state.total, props.currency ?? 'USD')}
				</p>
				{#if props.showStatus !== false}
					<span class={state.getStatusBadgeClasses(props.status)}>
						{state.getStatusText(props.status)}
					</span>
				{/if}
			</div>
		</div>
	</div>

	{#if props.showDetails !== false}
		<div class={state.summaryClasses}>
			<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
				<!-- Total amount -->
				<div class={state.metricCardClasses}>
					<div class="flex items-center">
						<div class={state.metricIconContainerClasses}>
							<BaseIcon name={DollarSign} class="h-5 w-5 text-[--color-primary-600]" />
						</div>
						<div class="ml-4">
							<p class="text-sm font-medium text-[--color-text-secondary]">Total Amount</p>
							<p class="text-xl font-semibold text-[--color-text-primary]">
								{state.formatCurrency(state.total, props.currency ?? 'USD')}
							</p>
						</div>
					</div>
				</div>

				<!-- Due date -->
				{#if props.showDueDate !== false && props.dueDate}
					<div class={state.metricCardClasses}>
						<div class="flex items-center">
							<div class={state.getMetricIconContainerClassesWithStatus(props.status)}>
								<BaseIcon name={Calendar} class={state.getCalendarIconClasses(props.status)} />
							</div>
							<div class="ml-4">
								<p class="text-sm font-medium text-[--color-text-secondary]">Due Date</p>
								<p class={state.getDueDateTextClasses(props.status)}>
									{state.formatDate(props.dueDate)}
								</p>
							</div>
						</div>
					</div>
				{/if}

				<!-- Status -->
				{#if props.showStatus !== false}
					<div class={state.metricCardClasses}>
						<div class="flex items-center">
							<div class={state.getMetricIconContainerClassesWithStatus(props.status)}>
								{#if props.status === 'paid'}
									<BaseIcon name={TrendingUp} class="h-5 w-5 text-[--color-success-600]" />
								{:else if props.status === 'overdue'}
									<BaseIcon name={TrendingDown} class="h-5 w-5 text-[--color-error-600]" />
								{:else if props.status === 'cancelled'}
									<BaseIcon name={Receipt} class="h-5 w-5 text-[--color-text-tertiary]" />
								{:else}
									<BaseIcon name={Clock} class="h-5 w-5 text-[--color-warning-600]" />
								{/if}
							</div>
							<div class="ml-4">
								<p class="text-sm font-medium text-[--color-text-secondary]">Status</p>
								<p class={state.getMetricTextClasses(props.status)}>
									{state.getStatusText(props.status)}
								</p>
							</div>
						</div>
					</div>
				{/if}
			</div>

			<!-- Billing items -->
			{#if (props.items ?? []).length > 0}
				<div class="mt-8">
					<h4 class="text-sm font-medium text-[--color-text-primary] mb-4">Billing Details</h4>
					<div class={state.itemsListContainerClasses}>
						<ul class="divide-y divide-[--color-border-divider]">
							{#each props.items ?? [] as item}
								<li class={state.itemsListItemClasses}>
									<div class="flex items-center justify-between">
										<div>
											<p class={state.itemDescriptionClasses}>{item.description}</p>
											<p class={state.itemDateClasses}>{state.formatDate(item.date)}</p>
										</div>
										<div class="text-right">
											<p class={state.itemAmountClasses}>
												{state.formatCurrency(item.amount, item.currency)}
											</p>
											<span class={state.getItemStatusBadgeClasses(item.status)}>
												{item.status.charAt(0).toUpperCase() + item.status.slice(1)}
											</span>
										</div>
									</div>
								</li>
							{/each}
						</ul>
					</div>
				</div>
			{/if}
		</div>
	{/if}

	<div class={state.footerClasses}>
		<div class="flex items-center justify-between">
			<div class={state.invoiceIdClasses}>
				Invoice ID: <span class={state.invoiceIdFontClass}>#INV-{Math.floor(Math.random() * 900000) + 100000}</span>
			</div>
			<div class={state.generatedDateClasses}>
				Generated: {new Date().toLocaleDateString()}
			</div>
		</div>
	</div>
</div>
