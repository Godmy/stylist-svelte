<script lang="ts">
	import { Icon as BaseIcon } from '$stylist';
	import type { RecipePredictionResult as PredictionResultContract } from '$stylist/science/interface/recipe/prediction-result';
	import { createPredictionResultState } from '$stylist/science/function/state/prediction-result';

	let props: PredictionResultContract = $props();
	const state = createPredictionResultState(props);
</script>

<div class={`c-prediction-result ${state.containerClass}`} {...state.restProps}>
	<div class={state.headerClass}>
		<div class="flex items-center">
			{#if state.status === 'loading'}
				<BaseIcon name="loader-2" class={state.statusIconClass} />
			{:else if state.status === 'error'}
				<BaseIcon name="alert-circle" class={state.statusIconClass} />
			{:else if state.status === 'warning'}
				<BaseIcon name="alert-circle" class={state.statusIconClass} />
			{:else}
				<BaseIcon name="bar-chart-3" class={state.statusIconClass} />
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
				<BaseIcon name="loader-2" class="h-8 w-8 text-[--color-primary-500] animate-spin" />
				<p class="mt-2 text-sm text-[--color-text-secondary]">Analyzing data...</p>
			</div>
		{:else if state.status === 'error'}
			<div class={state.centeredDisplayClass}>
				<BaseIcon name="alert-circle" class="h-8 w-8 text-[--color-danger-500]" />
				<p class="mt-2 text-sm text-[--color-text-secondary]">Prediction failed</p>
				{#if state.onRetry}
					<button type="button" class={state.retryButtonClass} onclick={state.onRetry}>Retry</button>
				{/if}
			</div>
		{:else}
			<div class="space-y-[--spacing-md]">
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
						<div class="flex items-center justify-between mb-[--spacing-xs]">
							<p class={state.confidenceLabelClass}>Confidence</p>
							<p class={state.confidencePercentageClass}>{Math.round(state.confidence * 100)}%</p>
						</div>
						<div class={state.confidenceBarContainerClass}>
							<div class={state.confidenceBarFillClass} style={`width: ${state.confidence * 100}%`}></div>
						</div>
					</div>
				{/if}

				{#if state.predictions.length > 0}
					<div class="mt-[--spacing-md]">
						<h4 class={state.breakdownHeaderClass}>Prediction Breakdown</h4>
						<div class={state.predictionItemClass}>
							{#each state.predictions as prediction}
								<div>
									<div class="flex justify-between text-sm mb-[--spacing-xs]">
										<span class={state.predictionItemLabelClass}>{prediction.label}</span>
										<span class={state.predictionItemValueClass}>{prediction.confidence !== undefined ? `${Math.round(prediction.confidence * 100)}%` : prediction.value}</span>
									</div>
									{#if state.showChart && state.maxValue > 0}
										<div class={state.chartBarContainerClass}>
											<div class={state.chartBarFillClass} style={`width: ${((prediction.confidence !== undefined ? prediction.confidence : prediction.value) / state.maxValue) * 100}%`}></div>
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
			<div class="flex items-center">
				{#if state.predictedValue > state.actualValue}
					<BaseIcon name="trending-up" class={state.trendUpClass} />
					<span class={state.trendUpDescriptionClass}>Prediction was {Math.abs(Math.round(((state.predictedValue - state.actualValue) / state.actualValue) * 100))}% higher than actual</span>
				{:else if state.predictedValue < state.actualValue}
					<BaseIcon name="trending-down" class={state.trendDownClass} />
					<span class={state.trendDownDescriptionClass}>Prediction was {Math.abs(Math.round(((state.predictedValue - state.actualValue) / state.actualValue) * 100))}% lower than actual</span>
				{:else}
					<span class="text-sm text-[--color-text-secondary]">Prediction matches actual value</span>
				{/if}
			</div>
		</div>
	{/if}
</div>
