<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { BarChart3, Frown, Meh, Smile, Loader2, AlertCircle } from 'lucide-svelte';
  import { SentimentAnalysisStyleManager } from './styles';
  import type { SentimentResult, SentimentAnalysisProps } from './types';

  let {
    text = '',
    result,
    onAnalyze,
    status = 'idle',
    errorMessage = '',
    class: className = '',
    headerClass = '',
    contentClass = '',
    inputClass = '',
    resultClass = '',
    footerClass = '',
    ...restProps
  }: SentimentAnalysisProps = $props();

  let inputText = $state(text);

  function analyzeSentiment() {
    if (onAnalyze && inputText.trim()) {
      onAnalyze(inputText);
    }
  }

  // Get appropriate icon based on sentiment
  function getSentimentIcon(score: number) {
    if (score < -0.5) return Frown;
    if (score < 0) return Meh;
    if (score <= 0.5) return Meh;
    return Smile;
  }

  // Generate CSS classes using the style manager
  const containerClass = $derived(SentimentAnalysisStyleManager.getContainerClass(className));
  const headerClassComputed = $derived(SentimentAnalysisStyleManager.getHeaderClass(headerClass));
  const titleClass = $derived(SentimentAnalysisStyleManager.getTitleClass());
  const contentClassComputed = $derived(SentimentAnalysisStyleManager.getContentClass(contentClass));
  const inputLabelClass = $derived(SentimentAnalysisStyleManager.getInputLabelClass());
  const inputAreaClass = $derived(SentimentAnalysisStyleManager.getInputAreaClass(inputClass));
  const analyzeButtonClass = $derived(SentimentAnalysisStyleManager.getAnalyzeButtonClass(status === 'analyzing', !inputText.trim()));
  const loadingSpinnerClass = $derived(SentimentAnalysisStyleManager.getLoadingSpinnerClass());
  const errorMessageContainerClass = $derived(SentimentAnalysisStyleManager.getErrorMessageContainerClass());
  const errorIconClass = $derived(SentimentAnalysisStyleManager.getErrorIconClass());
  const errorMessageClass = $derived(SentimentAnalysisStyleManager.getErrorMessageClass());
  const resultSectionClass = $derived(SentimentAnalysisStyleManager.getResultSectionClass(resultClass));
  const sentimentIconContainerClass = $derived(SentimentAnalysisStyleManager.getSentimentIconContainerClass());
  const sentimentIconClass = $derived(SentimentAnalysisStyleManager.getSentimentIconClass(result?.score || 0));
  const sentimentLabelClass = $derived(SentimentAnalysisStyleManager.getSentimentLabelClass());
  const sentimentScoreClass = $derived(SentimentAnalysisStyleManager.getSentimentScoreClass(result?.score || 0));
  const confidenceLabelClass = $derived(SentimentAnalysisStyleManager.getConfidenceLabelClass());
  const breakdownHeaderClass = $derived(SentimentAnalysisStyleManager.getBreakdownHeaderClass());
  const breakdownBarClass = $derived(SentimentAnalysisStyleManager.getBreakdownBarClass());
  const negativeSegmentClass = $derived(SentimentAnalysisStyleManager.getNegativeSegmentClass());
  const neutralSegmentClass = $derived(SentimentAnalysisStyleManager.getNeutralSegmentClass());
  const positiveSegmentClass = $derived(SentimentAnalysisStyleManager.getPositiveSegmentClass());
  const sentimentScaleContainerClass = $derived(SentimentAnalysisStyleManager.getSentimentScaleContainerClass());
  const gradientScaleClass = $derived(SentimentAnalysisStyleManager.getGradientScaleClass());
  const scoreIndicatorClass = $derived(SentimentAnalysisStyleManager.getScoreIndicatorClass(result?.score || 0));
  const scaleLabelsClass = $derived(SentimentAnalysisStyleManager.getScaleLabelsClass());
  const footerClassComputed = $derived(SentimentAnalysisStyleManager.getFooterClass(footerClass));
</script>
<div class={containerClass} {...restProps}>
  <!-- Header -->
  <div class={headerClassComputed}>
    <BarChart3 class="h-5 w-5 text-[--color-primary-500] mr-[--spacing-sm]" />
    <h3 class={titleClass}>Sentiment Analysis</h3>
  </div>

  <!-- Content -->
  <div class={contentClassComputed}>
    <div class="mb-[--spacing-md]">
      <label for="sentiment-input" class={inputLabelClass}>
        Enter text to analyze
      </label>
      <textarea
        id="sentiment-input"
        class={inputAreaClass}
        bind:value={inputText}
        placeholder="Enter text to analyze for sentiment..."
      ></textarea>
    </div>

    <button
      type="button"
      class={analyzeButtonClass}
      onclick={analyzeSentiment}
      disabled={status === 'analyzing' || !inputText.trim()}
    >
      {#if status === 'analyzing'}
        <Loader2 class={loadingSpinnerClass} />
        Analyzing...
      {:else}
        Analyze Sentiment
      {/if}
    </button>

    {#if status === 'error' && errorMessage}
      <div class={errorMessageContainerClass}>
        <AlertCircle class={errorIconClass} />
        <span class={errorMessageClass}>{errorMessage}</span>
      </div>
    {/if}

    {#if status === 'completed' && result}
      <div class={resultSectionClass}>
        <div class={sentimentIconContainerClass}>
          {#if result}
            {@const SentimentIcon = getSentimentIcon(result.score)}
            <SentimentIcon class={SentimentAnalysisStyleManager.getSentimentIconClass(result.score)} />
          {/if}
        </div>

        <div class="text-center mb-[--spacing-md]">
          <h4 class={sentimentLabelClass}>{result.label}</h4>
          <p class={SentimentAnalysisStyleManager.getSentimentScoreClass(result.score)}>
            {Math.round(result.score * 100)}%
          </p>
          <p class={confidenceLabelClass}>
            Confidence: {Math.round(result.confidence * 100)}%
          </p>
        </div>

        <div class="mt-[--spacing-md]">
          <div class={breakdownHeaderClass}>
            <span>Negative</span>
            <span>Neutral</span>
            <span>Positive</span>
          </div>
          <div class={breakdownBarClass}>
            <div
              class={negativeSegmentClass}
              style={`width: ${result.breakdown ? result.breakdown.negative * 100 : 0}%`}
            ></div>
            <div
              class={neutralSegmentClass}
              style={`width: ${result.breakdown ? result.breakdown.neutral * 100 : 0}%`}
            ></div>
            <div
              class={positiveSegmentClass}
              style={`width: ${result.breakdown ? result.breakdown.positive * 100 : 0}%`}
            ></div>
          </div>
        </div>

        <div class={sentimentScaleContainerClass}>
          <div class="flex items-center justify-center">
            <div class={gradientScaleClass}>
              <div
                class={SentimentAnalysisStyleManager.getScoreIndicatorClass(result.score)}
                style={`left: ${((result.score + 1) / 2) * 100}%`}
              ></div>
            </div>
          </div>
          <div class={scaleLabelsClass}>
            <span>Negative</span>
            <span>Neutral</span>
            <span>Positive</span>
          </div>
        </div>
      </div>
    {/if}
  </div>

  <!-- Footer -->
  <div class={footerClassComputed}>
    Sentiment analysis powered by AI. Results are estimates and may not reflect the true sentiment.
  </div>
</div>
