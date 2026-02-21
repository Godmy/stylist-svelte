<script lang="ts">
  import { AlertCircle, BarChart3, Loader2, TrendingDown, TrendingUp } from 'lucide-svelte';
  import { PredictionResultStyleManager } from '$stylist/design-system/styles/information/prediction-result';
  import type { PredictionResultProps } from '$stylist/design-system/props/information/prediction-result';

  let {
    title = 'Prediction Result',
    description,
    predictions = [],
    actualValue,
    predictedValue,
    modelUsed,
    confidence,
    status = 'success',
    onRetry,
    showChart = true,
    class: className = '',
    headerClass = '',
    contentClass = '',
    footerClass = '',
    ...restProps
  }: PredictionResultProps = $props();

  const maxValue = $derived(
    Math.max(
      ...predictions.map((p) => (p.confidence !== undefined ? p.confidence : p.value)),
      actualValue || 0,
      predictedValue || 0
    )
  );

  const containerClass = $derived(PredictionResultStyleManager.getContainerClass(className));
  const headerClassComputed = $derived(PredictionResultStyleManager.getHeaderClass(headerClass));
  const titleClass = $derived(PredictionResultStyleManager.getTitleClass());
  const modelTagClass = $derived(PredictionResultStyleManager.getModelTagClass());
  const contentClassComputed = $derived(PredictionResultStyleManager.getContentClass(contentClass));
  const descriptionClass = $derived(PredictionResultStyleManager.getDescriptionClass());
  const centeredDisplayClass = $derived(PredictionResultStyleManager.getCenteredDisplayClass());
  const retryButtonClass = $derived(PredictionResultStyleManager.getRetryButtonClass());
  const predictionSummaryGridClass = $derived(PredictionResultStyleManager.getPredictionSummaryGridClass());
  const confidenceSectionClass = $derived(PredictionResultStyleManager.getConfidenceSectionClass());
  const confidenceLabelClass = $derived(PredictionResultStyleManager.getConfidenceLabelClass());
  const confidencePercentageClass = $derived(PredictionResultStyleManager.getConfidencePercentageClass());
  const confidenceBarContainerClass = $derived(PredictionResultStyleManager.getConfidenceBarContainerClass());
  const confidenceBarFillClass = $derived(PredictionResultStyleManager.getConfidenceBarFillClass());
  const breakdownHeaderClass = $derived(PredictionResultStyleManager.getBreakdownHeaderClass());
  const predictionItemClass = $derived(PredictionResultStyleManager.getPredictionItemClass());
  const predictionItemLabelClass = $derived(PredictionResultStyleManager.getPredictionItemLabelClass());
  const predictionItemValueClass = $derived(PredictionResultStyleManager.getPredictionItemValueClass());
  const chartBarContainerClass = $derived(PredictionResultStyleManager.getChartBarContainerClass());
  const chartBarFillClass = $derived(PredictionResultStyleManager.getChartBarFillClass());
  const footerClassComputed = $derived(PredictionResultStyleManager.getFooterClass(footerClass));
  const predictionLabelClass = $derived(PredictionResultStyleManager.getPredictionLabelClass());
  const predictionValueClass = $derived(PredictionResultStyleManager.getPredictionValueClass());
</script>

<div class={`c-prediction-result ${containerClass}`} {...restProps}>
  <div class={headerClassComputed}>
    <div class="flex items-center">
      {#if status === 'loading'}
        <Loader2 class={PredictionResultStyleManager.getStatusIconClass('loading')} />
      {:else if status === 'error'}
        <AlertCircle class={PredictionResultStyleManager.getStatusIconClass('error')} />
      {:else if status === 'warning'}
        <AlertCircle class={PredictionResultStyleManager.getStatusIconClass('warning')} />
      {:else}
        <BarChart3 class={PredictionResultStyleManager.getStatusIconClass('success')} />
      {/if}
      <h3 class={titleClass}>{title}</h3>
    </div>
    {#if modelUsed}
      <span class={modelTagClass}>{modelUsed}</span>
    {/if}
  </div>

  <div class={contentClassComputed}>
    {#if description}
      <p class={descriptionClass}>{description}</p>
    {/if}

    {#if status === 'loading'}
      <div class={centeredDisplayClass}>
        <Loader2 class="h-8 w-8 text-[--color-primary-500] animate-spin" />
        <p class="mt-2 text-sm text-[--color-text-secondary]">Analyzing data...</p>
      </div>
    {:else if status === 'error'}
      <div class={centeredDisplayClass}>
        <AlertCircle class="h-8 w-8 text-[--color-danger-500]" />
        <p class="mt-2 text-sm text-[--color-text-secondary]">Prediction failed</p>
        {#if onRetry}
          <button type="button" class={retryButtonClass} onclick={onRetry}>
            Retry
          </button>
        {/if}
      </div>
    {:else}
      <div class="space-y-[--spacing-md]">
        <div class={predictionSummaryGridClass}>
          {#if predictedValue !== undefined}
            <div class={PredictionResultStyleManager.getPredictionBoxClass(true)}>
              <p class={predictionLabelClass}>Predicted</p>
              <p class={predictionValueClass}>{predictedValue}</p>
            </div>
          {/if}
          {#if actualValue !== undefined}
            <div class={PredictionResultStyleManager.getPredictionBoxClass(false)}>
              <p class={predictionLabelClass}>Actual</p>
              <p class={predictionValueClass}>{actualValue}</p>
            </div>
          {/if}
        </div>

        {#if confidence !== undefined}
          <div class={confidenceSectionClass}>
            <div class="flex items-center justify-between mb-[--spacing-xs]">
              <p class={confidenceLabelClass}>Confidence</p>
              <p class={confidencePercentageClass}>{Math.round(confidence * 100)}%</p>
            </div>
            <div class={confidenceBarContainerClass}>
              <div class={confidenceBarFillClass} style={`width: ${confidence * 100}%`}></div>
            </div>
          </div>
        {/if}

        {#if predictions.length > 0}
          <div class="mt-[--spacing-md]">
            <h4 class={breakdownHeaderClass}>Prediction Breakdown</h4>
            <div class={predictionItemClass}>
              {#each predictions as prediction}
                <div>
                  <div class="flex justify-between text-sm mb-[--spacing-xs]">
                    <span class={predictionItemLabelClass}>{prediction.label}</span>
                    <span class={predictionItemValueClass}>
                      {prediction.confidence !== undefined ? `${Math.round(prediction.confidence * 100)}%` : prediction.value}
                    </span>
                  </div>
                  {#if showChart && maxValue > 0}
                    <div class={chartBarContainerClass}>
                      <div
                        class={chartBarFillClass}
                        style={`width: ${((prediction.confidence !== undefined ? prediction.confidence : prediction.value) / maxValue) * 100}%`}
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

  {#if status === 'success' && predictedValue !== undefined && actualValue !== undefined}
    <div class={footerClassComputed}>
      <div class="flex items-center">
        {#if predictedValue > actualValue}
          <TrendingUp class={PredictionResultStyleManager.getTrendIndicatorClass(true)} />
          <span class={PredictionResultStyleManager.getTrendDescriptionClass(true)}>
            Prediction was {Math.abs(Math.round(((predictedValue - actualValue) / actualValue) * 100))}% higher than actual
          </span>
        {:else if predictedValue < actualValue}
          <TrendingDown class={PredictionResultStyleManager.getTrendIndicatorClass(false)} />
          <span class={PredictionResultStyleManager.getTrendDescriptionClass(false)}>
            Prediction was {Math.abs(Math.round(((predictedValue - actualValue) / actualValue) * 100))}% lower than actual
          </span>
        {:else}
          <span class="text-sm text-[--color-text-secondary]">Prediction matches actual value</span>
        {/if}
      </div>
    </div>
  {/if}
</div>

