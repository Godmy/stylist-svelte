<script lang="ts">
	import BaseIcon from '$stylist/svg/component/atom/icon/index.svelte';
	import type { RecipePredictionResult as PredictionResultContract } from '$stylist/science/interface/recipe/prediction-result';
	import createPredictionResultState from '$stylist/science/function/state/prediction-result/index.svelte';

	let props: PredictionResultContract = $props();
	const state = createPredictionResultState(props);
</script>

<div class={state.containerClass} {...state.restProps}>
	<div class={state.headerClass}>
		<div class="prediction-result__header-title">
			{#if state.status === 'loading'}
				<BaseIcon name="loader-2" style={state.statusIconStyle} />
			{:else if state.status === 'error'}
				<BaseIcon name="alert-circle" style={state.statusIconStyle} />
			{:else if state.status === 'warning'}
				<BaseIcon name="alert-circle" style={state.statusIconStyle} />
			{:else}
				<BaseIcon name="bar-chart-3" style={state.statusIconStyle} />
			{/if}
			<h3 class={state.titleClass}>{state.title}</h3>
		</div>
		{#if state.modelUsed}
			<span class={state.modelTagClass}>{state.modelUsed}</span>
		{/if}
	</div>

	<div class={state.contentClass}>
		{#if state.description}
			<p class={state.descriptionClass}>{state.description}</p>
		{/if}

		{#if state.status === 'loading'}
			<div class={state.centeredDisplayClass}>
				<BaseIcon
					name="loader-2"
					style="width: 2rem; height: 2rem; color: var(--color-primary-500); animation: spin 1s linear infinite;"
				/>
				<p class="prediction-result__centered-text">Analyzing data...</p>
			</div>
		{:else if state.status === 'error'}
			<div class={state.centeredDisplayClass}>
				<BaseIcon
					name="alert-circle"
					style="width: 2rem; height: 2rem; color: var(--color-danger-500);"
				/>
				<p class="prediction-result__centered-text">Prediction failed</p>
				{#if state.onRetry}
					<button type="button" class={state.retryButtonClass} onclick={state.onRetry}>Retry</button
					>
				{/if}
			</div>
		{:else}
			<div class="prediction-result__body">
				<div class={state.predictionSummaryGridClass}>
					{#if state.predictedValue !== undefined}
						<div class={state.getPredictionBoxClass(true)}>
							<p class={state.predictionLabelClass}>Predicted</p>
							<p class={state.predictionValueClass}>{state.predictedValue}</p>
						</div>
					{/if}
					{#if state.actualValue !== undefined}
						<div class={state.getPredictionBoxClass(false)}>
							<p class={state.predictionLabelClass}>Actual</p>
							<p class={state.predictionValueClass}>{state.actualValue}</p>
						</div>
					{/if}
				</div>

				{#if state.confidence !== undefined}
					<div class={state.confidenceSectionClass}>
						<div class="prediction-result__confidence-row">
							<p class={state.confidenceLabelClass}>Confidence</p>
							<p class={state.confidencePercentageClass}>{Math.round(state.confidence * 100)}%</p>
						</div>
						<div class={state.confidenceBarContainerClass}>
							<div
								class={state.confidenceBarFillClass}
								style={`width: ${state.confidence * 100}%`}
							></div>
						</div>
					</div>
				{/if}

				{#if state.predictions.length > 0}
					<div class="prediction-result__breakdown">
						<h4 class={state.breakdownHeaderClass}>Prediction Breakdown</h4>
						<div class={state.predictionItemClass}>
							{#each state.predictions as prediction}
								<div>
									<div class="prediction-result__item-row">
										<span class={state.predictionItemLabelClass}>{prediction.label}</span>
										<span class={state.predictionItemValueClass}
											>{prediction.confidence !== undefined
												? `${Math.round(prediction.confidence * 100)}%`
												: prediction.value}</span
										>
									</div>
									{#if state.showChart && state.maxValue > 0}
										<div class={state.chartBarContainerClass}>
											<div
												class={state.chartBarFillClass}
												style={`width: ${((prediction.confidence !== undefined ? prediction.confidence : prediction.value) / state.maxValue) * 100}%`}
											></div>
										</div>
									{/if}
								</div>
							{/each}
						</div>
					</div>
				{/if}
			</div>
		{/if}
	</div>

	{#if state.status === 'success' && state.predictedValue !== undefined && state.actualValue !== undefined}
		<div class={state.footerClass}>
			<div class="prediction-result__trend">
				{#if state.predictedValue > state.actualValue}
					<BaseIcon name="trending-up" style={state.trendUpStyle} />
					<span class={state.trendUpDescriptionClass}
						>Prediction was {Math.abs(
							Math.round(((state.predictedValue - state.actualValue) / state.actualValue) * 100)
						)}% higher than actual</span
					>
				{:else if state.predictedValue < state.actualValue}
					<BaseIcon name="trending-down" style={state.trendDownStyle} />
					<span class={state.trendDownDescriptionClass}
						>Prediction was {Math.abs(
							Math.round(((state.predictedValue - state.actualValue) / state.actualValue) * 100)
						)}% lower than actual</span
					>
				{:else}
					<span class="prediction-result__trend--neutral">Prediction matches actual value</span>
				{/if}
			</div>
		</div>
	{/if}
</div>

<style>
	:global(.prediction-result) {
		border-radius: 0.5rem;
		border: 1px solid var(--color-border-primary);
		background-color: var(--color-background-primary);
		overflow: hidden;
	}

	:global(.prediction-result__header) {
		display: flex;
		align-items: center;
		justify-content: space-between;
		border-bottom: 1px solid var(--color-border-primary);
		padding: 0.75rem 1rem;
	}

	:global(.prediction-result__header-title) {
		display: flex;
		align-items: center;
	}

	:global(.prediction-result__title) {
		font-size: 0.875rem;
		font-weight: var(--font-weight-semibold, 600);
		color: var(--color-text-primary);
		margin-left: var(--spacing-sm);
	}

	:global(.prediction-result__model-tag) {
		border-radius: 0.25rem;
		background-color: var(--color-background-secondary);
		padding: 0.125rem 0.5rem;
		font-size: 0.75rem;
		color: var(--color-text-secondary);
	}

	:global(.prediction-result__content) {
		padding: 1rem;
	}

	:global(.prediction-result__description) {
		font-size: 0.875rem;
		color: var(--color-text-secondary);
		margin-bottom: var(--spacing-md);
	}

	:global(.prediction-result__centered) {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: var(--spacing-lg) 0;
	}

	:global(.prediction-result__centered-text) {
		margin-top: var(--spacing-xs);
		font-size: 0.875rem;
		color: var(--color-text-secondary);
	}

	:global(.prediction-result__retry-btn) {
		margin-top: var(--spacing-sm);
		font-size: 0.875rem;
		color: var(--color-primary-500);
		background: none;
		border: none;
		cursor: pointer;
	}

	:global(.prediction-result__retry-btn:hover) {
		text-decoration: underline;
	}

	:global(.prediction-result__body) {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-md);
	}

	:global(.prediction-result__summary-grid) {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: var(--spacing-sm);
	}

	:global(.prediction-result__box) {
		border-radius: 0.375rem;
		padding: 0.75rem;
	}

	:global(.prediction-result__box--predicted) {
		background-color: var(--color-primary-50);
		border: 1px solid var(--color-primary-200);
	}

	:global(.prediction-result__box--actual) {
		background-color: var(--color-background-secondary);
		border: 1px solid var(--color-border-primary);
	}

	:global(.prediction-result__prediction-label) {
		font-size: 0.75rem;
		color: var(--color-text-secondary);
		margin-bottom: 0.25rem;
	}

	:global(.prediction-result__prediction-value) {
		font-size: 1.25rem;
		font-weight: var(--font-weight-semibold, 600);
		color: var(--color-text-primary);
	}

	:global(.prediction-result__confidence) {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-xs);
	}

	:global(.prediction-result__confidence-row) {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: var(--spacing-xs);
	}

	:global(.prediction-result__confidence-label) {
		font-size: 0.875rem;
		color: var(--color-text-secondary);
	}

	:global(.prediction-result__confidence-percent) {
		font-size: 0.875rem;
		font-weight: var(--font-weight-semibold, 600);
		color: var(--color-text-primary);
	}

	:global(.prediction-result__confidence-bar) {
		height: 0.5rem;
		width: 100%;
		border-radius: 9999px;
		background-color: var(--color-background-secondary);
		overflow: hidden;
	}

	:global(.prediction-result__confidence-fill) {
		height: 100%;
		border-radius: 9999px;
		background-color: var(--color-primary-500);
		transition: width 0.3s ease;
	}

	:global(.prediction-result__breakdown) {
		margin-top: var(--spacing-md);
	}

	:global(.prediction-result__breakdown-header) {
		font-size: 0.875rem;
		font-weight: var(--font-weight-semibold, 600);
		color: var(--color-text-primary);
		margin-bottom: var(--spacing-sm);
	}

	:global(.prediction-result__items) {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-sm);
	}

	:global(.prediction-result__item-row) {
		display: flex;
		justify-content: space-between;
		font-size: 0.875rem;
		margin-bottom: var(--spacing-xs);
	}

	:global(.prediction-result__item-label) {
		color: var(--color-text-secondary);
	}

	:global(.prediction-result__item-value) {
		font-weight: var(--font-weight-semibold, 600);
		color: var(--color-text-primary);
	}

	:global(.prediction-result__chart-bar) {
		height: 0.375rem;
		width: 100%;
		border-radius: 9999px;
		background-color: var(--color-background-secondary);
		overflow: hidden;
	}

	:global(.prediction-result__chart-fill) {
		height: 100%;
		border-radius: 9999px;
		background-color: var(--color-primary-400);
	}

	:global(.prediction-result__footer) {
		border-top: 1px solid var(--color-border-primary);
		padding: 0.75rem 1rem;
	}

	:global(.prediction-result__trend) {
		display: flex;
		align-items: center;
		gap: var(--spacing-xs);
		font-size: 0.875rem;
	}

	:global(.prediction-result__trend--up) {
		color: var(--color-success-500);
	}

	:global(.prediction-result__trend--down) {
		color: var(--color-danger-500);
	}

	:global(.prediction-result__trend--neutral) {
		color: var(--color-text-secondary);
	}

	@keyframes spin {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}
</style>
