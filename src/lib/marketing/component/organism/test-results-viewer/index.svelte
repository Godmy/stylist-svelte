<script lang="ts">
	import { Icon as BaseIcon } from '$stylist/media';
	const BarChart3 = 'bar-chart-3';
	const TrendingUp = 'trending-up';
	const TrendingDown = 'trending-down';
	const AlertTriangle = 'alert-triangle';
	const CheckCircle = 'check-circle';
	const XCircle = 'x-circle';
	const Users = 'users';
	const Activity = 'activity';

	import type { TestResultsViewerProps } from '$stylist/marketing/type/struct/test-results-viewer';
	import { createTestResultsViewerState } from '$stylist/marketing/function/state/test-results-viewer';

	let props: TestResultsViewerProps = $props();
	const state = createTestResultsViewerState(props);
</script>

<div class={state.containerClasses} {...state.restProps}>
	<div class={state.headerClasses}>
		<div class="flex items-center">
			<BaseIcon name={BarChart3} class="mr-2 h-6 w-6 text-[var(--color-text-secondary)]" />
			<h3 class="text-lg font-medium text-[var(--color-text-primary)]">{state.title}</h3>
		</div>
		<p class="mt-1 text-sm text-[var(--color-text-secondary)]">{state.description}</p>
	</div>

	<div class={`p-6 ${state.resultsClassName}`}>
		<!-- Test Overview -->
		<div class="mb-8 grid grid-cols-1 gap-6 md:grid-cols-4">
			<div class="rounded-lg border p-4">
				<div class="flex items-center">
					<div class="rounded-md bg-[var(--color-primary-100)] p-2">
						<BaseIcon name={Activity} class="h-5 w-5 text-[var(--color-primary-600)]" />
					</div>
					<div class="ml-4">
						<p class="text-sm font-medium text-[var(--color-text-secondary)]">Test Status</p>
						<p
							class={`text-xl font-semibold ${
								state.testOverview.status === 'completed'
									? 'text-[var(--color-success-600)]'
									: state.testOverview.status === 'running'
										? 'text-[var(--color-primary-600)]'
										: 'text-yellow-600'
							}`}
						>
							{state.testOverview.status.charAt(0).toUpperCase() +
								state.testOverview.status.slice(1)}
						</p>
					</div>
				</div>
			</div>

			<div class="rounded-lg border p-4">
				<div class="flex items-center">
					<div class="rounded-md bg-[var(--color-primary-100)] p-2">
						<BaseIcon name={Users} class="h-5 w-5 text-[var(--color-primary-600)]" />
					</div>
					<div class="ml-4">
						<p class="text-sm font-medium text-[var(--color-text-secondary)]">Total Visitors</p>
						<p class="text-xl font-semibold text-[var(--color-text-primary)]">
							{state.totalVisitors.toLocaleString()}
						</p>
					</div>
				</div>
			</div>

			<div class="rounded-lg border p-4">
				<div class="flex items-center">
					<div class="rounded-md bg-[var(--color-success-100)] p-2">
						<BaseIcon name={CheckCircle} class="h-5 w-5 text-[var(--color-success-600)]" />
					</div>
					<div class="ml-4">
						<p class="text-sm font-medium text-[var(--color-text-secondary)]">Total Conversions</p>
						<p class="text-xl font-semibold text-[var(--color-text-primary)]">
							{state.totalConversions.toLocaleString()}
						</p>
					</div>
				</div>
			</div>

			<div class="rounded-lg border p-4">
				<div class="flex items-center">
					<div class="rounded-md bg-[var(--color-secondary-100)] p-2">
						<BaseIcon name={TrendingUp} class="h-5 w-5 text-[var(--color-secondary-600)]" />
					</div>
					<div class="ml-4">
						<p class="text-sm font-medium text-[var(--color-text-secondary)]">Overall CR</p>
						<p class="text-xl font-semibold text-[var(--color-text-primary)]">
							{state.overallConversionRate.toFixed(2)}%
						</p>
					</div>
				</div>
			</div>
		</div>

		<!-- Variants Detail -->
		<div class="mb-8">
			<h4 class="text-md mb-4 font-medium text-[var(--color-text-primary)]">Variant Performance</h4>
			<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
				{#each state.testResults as result}
					<div
						class={`rounded-lg border p-5 ${
							result.status === 'winning'
								? 'border-[var(--color-success-500)] ring-2 ring-green-200'
								: result.status === 'losing'
									? 'border-[var(--color-danger-500)]'
									: 'border-[var(--color-border-primary)]'
						}`}
					>
						<div
							class={`flex items-start justify-between ${
								result.status === 'winning'
									? 'text-[var(--color-success-700)]'
									: result.status === 'losing'
										? 'text-[var(--color-danger-700)]'
										: 'text-[var(--color-text-primary)]'
							}`}
						>
							<h5 class="text-lg font-medium">{result.variantName}</h5>
							<span
								class={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
									result.status === 'winning'
										? 'bg-[var(--color-success-100)] text-[var(--color-success-800)]'
										: result.status === 'losing'
											? 'bg-[var(--color-danger-100)] text-[var(--color-danger-800)]'
											: 'bg-[var(--color-background-secondary)] text-[var(--color-text-primary)]'
								}`}
							>
								{result.status.charAt(0).toUpperCase() + result.status.slice(1)}
							</span>
						</div>

						<div class="mt-4 space-y-3">
							<div class="flex justify-between">
								<span class="text-sm text-[var(--color-text-secondary)]">Visitors</span>
								<span class="text-sm font-medium text-[var(--color-text-primary)]"
									>{result.visitors.toLocaleString()}</span
								>
							</div>

							<div class="flex justify-between">
								<span class="text-sm text-[var(--color-text-secondary)]">Conversions</span>
								<span class="text-sm font-medium text-[var(--color-text-primary)]"
									>{result.conversions.toLocaleString()}</span
								>
							</div>

							<div class="flex justify-between">
								<span class="text-sm text-[var(--color-text-secondary)]">Conversion Rate</span>
								<span class="text-sm font-medium text-[var(--color-text-primary)]"
									>{result.conversionRate.toFixed(2)}%</span
								>
							</div>

							{#if result.improvement !== 0}
								<div class="flex justify-between">
									<span class="text-sm text-[var(--color-text-secondary)]">Improvement</span>
									<span
										class={`text-sm font-medium ${
											result.improvement > 0
												? 'text-[var(--color-success-600)]'
												: 'text-[var(--color-danger-600)]'
										}`}
									>
										{result.improvement > 0 ? '+' : ''}{result.improvement.toFixed(2)}%
									</span>
								</div>
							{/if}

							{#if state.showStatisticalSignificance}
								<div class="flex justify-between">
									<span class="text-sm text-[var(--color-text-secondary)]">Significance</span>
									<span
										class={`text-sm font-medium ${
											result.statisticalSignificance >= 95
												? 'text-[var(--color-success-600)]'
												: result.statisticalSignificance >= 90
													? 'text-yellow-600'
													: 'text-[var(--color-danger-600)]'
										}`}
									>
										{result.statisticalSignificance.toFixed(1)}%
									</span>
								</div>
							{/if}
						</div>
					</div>
				{/each}
			</div>
		</div>

		<!-- Charts -->
		{#if state.showCharts}
			<div class={`mb-8 rounded-lg border p-4 ${state.chartClassName}`}>
				<h4 class="text-md mb-4 font-medium text-[var(--color-text-primary)]">
					Performance Visualization
				</h4>

				<!-- Conversion Rate Chart -->
				<div class="mb-6">
					<h5 class="mb-2 text-sm font-medium text-[var(--color-text-primary)]">
						Conversion Rates by Variant
					</h5>
					<div class="flex h-32 items-end space-x-2">
						{#each state.testResults as result}
							<div class="flex flex-1 flex-col items-center">
								<div
									class="w-full rounded-t bg-[var(--color-primary-500)] transition-colors hover:bg-[var(--color-primary-600)]"
									style={`height: ${result.conversionRate * 2}px; min-height: var(--spacing-1);`}
									title={`${result.variantName}: ${result.conversionRate.toFixed(2)}%`}
								></div>
								<span class="mt-2 text-xs text-[var(--color-text-secondary)]"
									>{result.variantName}</span
								>
								<span class="text-xs text-[var(--color-text-primary)]"
									>{result.conversionRate.toFixed(2)}%</span
								>
							</div>
						{/each}
					</div>
				</div>

				<!-- Statistical Significance Chart -->
				{#if state.showStatisticalSignificance}
					<div>
						<h5 class="mb-2 text-sm font-medium text-[var(--color-text-primary)]">
							Statistical Significance
						</h5>
						<div class="space-y-4">
							{#each state.testResults as result}
								<div>
									<div class="mb-1 flex justify-between text-sm">
										<span>{result.variantName}</span>
										<span>{result.statisticalSignificance.toFixed(1)}%</span>
									</div>
									<div class="h-2.5 w-full rounded-full bg-[var(--color-background-tertiary)]">
										<div
											class={`h-2.5 rounded-full ${
												result.statisticalSignificance >= 95
													? 'bg-[var(--color-success-500)]'
													: result.statisticalSignificance >= 90
														? 'bg-yellow-500'
														: 'bg-[var(--color-danger-500)]'
											}`}
											style={`width: ${result.statisticalSignificance}%`}
										></div>
									</div>
								</div>
							{/each}
						</div>
					</div>
				{/if}
			</div>
		{/if}

		<!-- Recommendation -->
		{#if state.bestVariant}
			<div class="rounded-lg border bg-[var(--color-primary-50)] p-4">
				<div class="flex items-start">
					<div class="flex-shrink-0">
						<BaseIcon name={CheckCircle} class="h-5 w-5 text-[var(--color-primary-400)]" />
					</div>
					<div class="ml-3">
						<h4 class="text-sm font-medium text-[var(--color-primary-800)]">Recommendation</h4>
						<div class="mt-2 text-sm text-[var(--color-primary-700)]">
							<p>
								{state.bestVariant.variantName} is the winning variant with a conversion rate of
								{state.bestVariant.conversionRate.toFixed(2)}%. {state.bestVariant.improvement > 0
									? `It performs ` +
										state.bestVariant.improvement.toFixed(2) +
										`% better than the baseline.`
									: `Consider further testing as performance is similar to baseline.`}
							</p>
						</div>
					</div>
				</div>
			</div>
		{/if}
	</div>

	<div class={`border-t px-6 py-4 ${state.footerClassName}`}>
		<div class="flex items-center justify-between text-xs text-[var(--color-text-secondary)]">
			<div>Test Results Analysis</div>
			<div>
				{#if state.testOverview.confidence >= 95}
					<span class="inline-flex items-center text-[var(--color-success-600)]">
						<BaseIcon name={CheckCircle} class="mr-1 h-4 w-4" />
						Results are statistically significant ({state.testOverview.confidence.toFixed(1)}%
						confidence)
					</span>
				{:else}
					<span class="inline-flex items-center text-yellow-600">
						<BaseIcon name={AlertTriangle} class="mr-1 h-4 w-4" />
						Low confidence ({state.testOverview.confidence.toFixed(1)}% confidence)
					</span>
				{/if}
			</div>
		</div>
	</div>
</div>
