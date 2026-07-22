<script lang="ts">
	import BaseIcon from '$stylist/svg/component/atom/icon/index.svelte';
	const BarChart3 = 'bar-chart-3';
	const TrendingUp = 'trending-up';
	const TrendingDown = 'trending-down';
	const AlertTriangle = 'alert-triangle';
	const CheckCircle = 'check-circle';
	const XCircle = 'x-circle';
	const Users = 'users';
	const Activity = 'activity';

	import type { TestResultsViewerProps } from '$stylist/marketing/type/struct/test-results-viewer/testresultsviewer-props';
	import createTestResultsViewerState from '$stylist/marketing/function/state/test-results-viewer/index.svelte';

	let props: TestResultsViewerProps = $props();
	const state = createTestResultsViewerState(props);
</script>

<div class={state.containerClasses} {...state.restProps}>
	<div class={state.headerClasses}>
		<div class="trv-row">
			<BaseIcon
				name={BarChart3}
				style="margin-right:0.5rem;width:1.5rem;height:1.5rem;color:var(--color-text-secondary)"
			/>
			<h3 class="trv-title">{state.title}</h3>
		</div>
		<p class="trv-subtitle">{state.description}</p>
	</div>

	<div class={`trv-body ${state.resultsClassName}`}>
		<!-- Test Overview -->
		<div class="trv-overview-grid">
			<div class="trv-stat-card">
				<div class="trv-row">
					<div class="trv-icon-box trv-icon-box--primary">
						<BaseIcon
							name={Activity}
							style="width:1.25rem;height:1.25rem;color:var(--color-primary-600)"
						/>
					</div>
					<div class="trv-stat-content">
						<p class="trv-stat-label">Test Status</p>
						<p
							class={`trv-stat-value ${
								state.testOverview.status === 'completed'
									? 'trv-text--success'
									: state.testOverview.status === 'running'
										? 'trv-text--primary'
										: 'trv-text--warning'
							}`}
						>
							{state.testOverview.status.charAt(0).toUpperCase() +
								state.testOverview.status.slice(1)}
						</p>
					</div>
				</div>
			</div>

			<div class="trv-stat-card">
				<div class="trv-row">
					<div class="trv-icon-box trv-icon-box--primary">
						<BaseIcon
							name={Users}
							style="width:1.25rem;height:1.25rem;color:var(--color-primary-600)"
						/>
					</div>
					<div class="trv-stat-content">
						<p class="trv-stat-label">Total Visitors</p>
						<p class="trv-stat-value trv-text--primary-value">
							{state.totalVisitors.toLocaleString()}
						</p>
					</div>
				</div>
			</div>

			<div class="trv-stat-card">
				<div class="trv-row">
					<div class="trv-icon-box trv-icon-box--success">
						<BaseIcon
							name={CheckCircle}
							style="width:1.25rem;height:1.25rem;color:var(--color-success-600)"
						/>
					</div>
					<div class="trv-stat-content">
						<p class="trv-stat-label">Total Conversions</p>
						<p class="trv-stat-value trv-text--primary-value">
							{state.totalConversions.toLocaleString()}
						</p>
					</div>
				</div>
			</div>

			<div class="trv-stat-card">
				<div class="trv-row">
					<div class="trv-icon-box trv-icon-box--secondary">
						<BaseIcon
							name={TrendingUp}
							style="width:1.25rem;height:1.25rem;color:var(--color-secondary-600)"
						/>
					</div>
					<div class="trv-stat-content">
						<p class="trv-stat-label">Overall CR</p>
						<p class="trv-stat-value trv-text--primary-value">
							{state.overallConversionRate.toFixed(2)}%
						</p>
					</div>
				</div>
			</div>
		</div>

		<!-- Variants Detail -->
		<div class="trv-section">
			<h4 class="trv-section-title">Variant Performance</h4>
			<div class="trv-variants-grid">
				{#each state.testResults as result}
					<div
						class={`trv-variant-card ${
							result.status === 'winning'
								? 'trv-variant-card--winning'
								: result.status === 'losing'
									? 'trv-variant-card--losing'
									: 'trv-variant-card--neutral'
						}`}
					>
						<div
							class={`trv-variant-header ${
								result.status === 'winning'
									? 'trv-text--success'
									: result.status === 'losing'
										? 'trv-text--danger'
										: 'trv-text--primary-value'
							}`}
						>
							<h5 class="trv-variant-name">{result.variantName}</h5>
							<span
								class={`trv-badge ${
									result.status === 'winning'
										? 'trv-badge--winning'
										: result.status === 'losing'
											? 'trv-badge--losing'
											: 'trv-badge--neutral'
								}`}
							>
								{result.status.charAt(0).toUpperCase() + result.status.slice(1)}
							</span>
						</div>

						<div class="trv-metric-list">
							<div class="trv-metric-row">
								<span class="trv-metric-label">Visitors</span>
								<span class="trv-metric-value">{result.visitors.toLocaleString()}</span>
							</div>

							<div class="trv-metric-row">
								<span class="trv-metric-label">Conversions</span>
								<span class="trv-metric-value">{result.conversions.toLocaleString()}</span>
							</div>

							<div class="trv-metric-row">
								<span class="trv-metric-label">Conversion Rate</span>
								<span class="trv-metric-value">{result.conversionRate.toFixed(2)}%</span>
							</div>

							{#if result.improvement !== 0}
								<div class="trv-metric-row">
									<span class="trv-metric-label">Improvement</span>
									<span
										class={`trv-metric-value trv-metric-value--colored ${
											result.improvement > 0 ? 'trv-text--success' : 'trv-text--danger'
										}`}
									>
										{result.improvement > 0 ? '+' : ''}{result.improvement.toFixed(2)}%
									</span>
								</div>
							{/if}

							{#if state.showStatisticalSignificance}
								<div class="trv-metric-row">
									<span class="trv-metric-label">Significance</span>
									<span
										class={`trv-metric-value trv-metric-value--colored ${
											result.statisticalSignificance >= 95
												? 'trv-text--success'
												: result.statisticalSignificance >= 90
													? 'trv-text--warning'
													: 'trv-text--danger'
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
			<div class={`trv-chart-box ${state.chartClassName}`}>
				<h4 class="trv-section-title">Performance Visualization</h4>

				<!-- Conversion Rate Chart -->
				<div class="trv-chart-cr">
					<h5 class="trv-chart-subtitle">Conversion Rates by Variant</h5>
					<div class="trv-bar-chart">
						{#each state.testResults as result}
							<div class="trv-bar-col">
								<div
									class="trv-bar"
									style={`height: ${result.conversionRate * 2}px; min-height: var(--spacing-1);`}
									title={`${result.variantName}: ${result.conversionRate.toFixed(2)}%`}
								></div>
								<span class="trv-bar-name">{result.variantName}</span>
								<span class="trv-bar-pct">{result.conversionRate.toFixed(2)}%</span>
							</div>
						{/each}
					</div>
				</div>

				<!-- Statistical Significance Chart -->
				{#if state.showStatisticalSignificance}
					<div>
						<h5 class="trv-chart-subtitle">Statistical Significance</h5>
						<div class="trv-sig-list">
							{#each state.testResults as result}
								<div>
									<div class="trv-sig-row">
										<span>{result.variantName}</span>
										<span>{result.statisticalSignificance.toFixed(1)}%</span>
									</div>
									<div class="trv-sig-track">
										<div
											class={`trv-sig-fill ${
												result.statisticalSignificance >= 95
													? 'trv-sig-fill--high'
													: result.statisticalSignificance >= 90
														? 'trv-sig-fill--mid'
														: 'trv-sig-fill--low'
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
			<div class="trv-recommendation">
				<div class="trv-rec-row">
					<div class="trv-rec-icon">
						<BaseIcon
							name={CheckCircle}
							style="width:1.25rem;height:1.25rem;color:var(--color-primary-400)"
						/>
					</div>
					<div class="trv-rec-content">
						<h4 class="trv-rec-title">Recommendation</h4>
						<div class="trv-rec-body">
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

	<div class={`trv-footer ${state.footerClassName}`}>
		<div class="trv-footer-row">
			<div>Test Results Analysis</div>
			<div>
				{#if state.testOverview.confidence >= 95}
					<span class="trv-confidence trv-text--success">
						<BaseIcon name={CheckCircle} style="margin-right:0.25rem;width:1rem;height:1rem" />
						Results are statistically significant ({state.testOverview.confidence.toFixed(1)}%
						confidence)
					</span>
				{:else}
					<span class="trv-confidence trv-text--warning">
						<BaseIcon name={AlertTriangle} style="margin-right:0.25rem;width:1rem;height:1rem" />
						Low confidence ({state.testOverview.confidence.toFixed(1)}% confidence)
					</span>
				{/if}
			</div>
		</div>
	</div>
</div>

<style>
	.trv-container {
		border-radius: 0.5rem;
		border: 1px solid var(--color-border-primary);
		background-color: var(--color-background-primary);
		box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
		overflow: hidden;
	}
	.trv-header {
		border-bottom: 1px solid var(--color-border-primary);
		padding: 1.25rem 1.5rem;
	}
	.trv-row {
		display: flex;
		align-items: center;
	}

	.trv-title {
		font-size: 1.125rem;
		font-weight: 500;
		color: var(--color-text-primary);
	}
	.trv-subtitle {
		margin-top: 0.25rem;
		font-size: 0.875rem;
		color: var(--color-text-secondary);
	}
	.trv-body {
		padding: 1.5rem;
	}

	.trv-overview-grid {
		margin-bottom: 2rem;
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 1.5rem;
	}

	.trv-stat-card {
		border-radius: 0.5rem;
		border: 1px solid;
		padding: 1rem;
	}

	.trv-icon-box {
		border-radius: 0.375rem;
		padding: 0.5rem;
	}

	.trv-icon-box--primary {
		background-color: var(--color-primary-100);
	}
	.trv-icon-box--success {
		background-color: var(--color-success-100);
	}
	.trv-icon-box--secondary {
		background-color: var(--color-secondary-100);
	}

	.trv-stat-content {
		margin-left: 1rem;
	}
	.trv-stat-label {
		font-size: 0.875rem;
		font-weight: 500;
		color: var(--color-text-secondary);
	}
	.trv-stat-value {
		font-size: 1.25rem;
		font-weight: 600;
	}

	.trv-text--primary-value {
		color: var(--color-text-primary);
	}
	.trv-text--success {
		color: var(--color-success-600);
	}
	.trv-text--danger {
		color: var(--color-danger-600);
	}
	.trv-text--warning {
		color: #ca8a04;
	}
	.trv-text--primary {
		color: var(--color-primary-600);
	}

	.trv-section {
		margin-bottom: 2rem;
	}
	.trv-section-title {
		font-size: 0.875rem;
		font-weight: 500;
		color: var(--color-text-primary);
		margin-bottom: 1rem;
	}

	.trv-variants-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 1.5rem;
	}

	.trv-variant-card {
		border-radius: 0.5rem;
		border: 1px solid;
		padding: 1.25rem;
	}

	.trv-variant-card--winning {
		border-color: var(--color-success-500);
		box-shadow: 0 0 0 2px #bbf7d0;
	}

	.trv-variant-card--losing {
		border-color: var(--color-danger-500);
	}
	.trv-variant-card--neutral {
		border-color: var(--color-border-primary);
	}

	.trv-variant-header {
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
	}

	.trv-variant-name {
		font-size: 1.125rem;
		font-weight: 500;
	}

	.trv-badge {
		display: inline-flex;
		align-items: center;
		border-radius: 9999px;
		padding: 0.125rem 0.625rem;
		font-size: 0.75rem;
		font-weight: 500;
	}

	.trv-badge--winning {
		background-color: var(--color-success-100);
		color: var(--color-success-800);
	}
	.trv-badge--losing {
		background-color: var(--color-danger-100);
		color: var(--color-danger-800);
	}
	.trv-badge--neutral {
		background-color: var(--color-background-secondary);
		color: var(--color-text-primary);
	}

	.trv-metric-list {
		margin-top: 1rem;
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}

	.trv-metric-row {
		display: flex;
		justify-content: space-between;
	}
	.trv-metric-label {
		font-size: 0.875rem;
		color: var(--color-text-secondary);
	}
	.trv-metric-value {
		font-size: 0.875rem;
		font-weight: 500;
		color: var(--color-text-primary);
	}
	.trv-metric-value--colored {
		color: inherit;
	}

	.trv-chart-box {
		margin-bottom: 2rem;
		border-radius: 0.5rem;
		border: 1px solid;
		padding: 1rem;
	}

	.trv-chart-cr {
		margin-bottom: 1.5rem;
	}
	.trv-chart-subtitle {
		margin-bottom: 0.5rem;
		font-size: 0.875rem;
		font-weight: 500;
		color: var(--color-text-primary);
	}

	.trv-bar-chart {
		display: flex;
		height: 8rem;
		align-items: flex-end;
		gap: 0.5rem;
	}

	.trv-bar-col {
		display: flex;
		flex: 1;
		flex-direction: column;
		align-items: center;
	}

	.trv-bar {
		width: 100%;
		border-radius: 0.25rem 0.25rem 0 0;
		background-color: var(--color-primary-500);
		transition: background-color 0.15s;
	}

	.trv-bar:hover {
		background-color: var(--color-primary-600);
	}

	.trv-bar-name {
		margin-top: 0.5rem;
		font-size: 0.75rem;
		color: var(--color-text-secondary);
	}

	.trv-bar-pct {
		font-size: 0.75rem;
		color: var(--color-text-primary);
	}

	.trv-sig-list {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.trv-sig-row {
		margin-bottom: 0.25rem;
		display: flex;
		justify-content: space-between;
		font-size: 0.875rem;
	}

	.trv-sig-track {
		height: 0.625rem;
		width: 100%;
		border-radius: 9999px;
		background-color: var(--color-background-tertiary);
	}

	.trv-sig-fill {
		height: 0.625rem;
		border-radius: 9999px;
	}

	.trv-sig-fill--high {
		background-color: var(--color-success-500);
	}
	.trv-sig-fill--mid {
		background-color: #eab308;
	}
	.trv-sig-fill--low {
		background-color: var(--color-danger-500);
	}

	.trv-recommendation {
		border-radius: 0.5rem;
		border: 1px solid;
		background-color: var(--color-primary-50);
		padding: 1rem;
	}

	.trv-rec-row {
		display: flex;
		align-items: flex-start;
	}
	.trv-rec-icon {
		flex-shrink: 0;
	}
	.trv-rec-content {
		margin-left: 0.75rem;
	}
	.trv-rec-title {
		font-size: 0.875rem;
		font-weight: 500;
		color: var(--color-primary-800);
	}
	.trv-rec-body {
		margin-top: 0.5rem;
		font-size: 0.875rem;
		color: var(--color-primary-700);
	}

	.trv-footer {
		border-top: 1px solid;
		padding: 1rem 1.5rem;
	}

	.trv-footer-row {
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-size: 0.75rem;
		color: var(--color-text-secondary);
	}

	.trv-confidence {
		display: inline-flex;
		align-items: center;
	}
</style>
