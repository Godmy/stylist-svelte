<script lang="ts">
  import { AlertCircle, BarChart3, Frown, Loader2, Meh, Smile } from 'lucide-svelte';
  import { SentimentAnalysisStyleManager } from '$lib/design-system/styles/information/sentiment-analysis';
  import type { SentimentAnalysisProps } from '$lib/design-system/props/information/sentiment-analysis';

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
    if (onAnalyze && inputText.trim()) onAnalyze(inputText);
  }

  function getSentimentIcon(score: number) {
    if (score < -0.5) return Frown;
    if (score <= 0.5) return Meh;
    return Smile;
  }

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
  const sentimentLabelClass = $derived(SentimentAnalysisStyleManager.getSentimentLabelClass());
  const confidenceLabelClass = $derived(SentimentAnalysisStyleManager.getConfidenceLabelClass());
  const breakdownHeaderClass = $derived(SentimentAnalysisStyleManager.getBreakdownHeaderClass());
  const breakdownBarClass = $derived(SentimentAnalysisStyleManager.getBreakdownBarClass());
  const negativeSegmentClass = $derived(SentimentAnalysisStyleManager.getNegativeSegmentClass());
  const neutralSegmentClass = $derived(SentimentAnalysisStyleManager.getNeutralSegmentClass());
  const positiveSegmentClass = $derived(SentimentAnalysisStyleManager.getPositiveSegmentClass());
  const sentimentScaleContainerClass = $derived(SentimentAnalysisStyleManager.getSentimentScaleContainerClass());
  const gradientScaleClass = $derived(SentimentAnalysisStyleManager.getGradientScaleClass());
  const scaleLabelsClass = $derived(SentimentAnalysisStyleManager.getScaleLabelsClass());
  const footerClassComputed = $derived(SentimentAnalysisStyleManager.getFooterClass(footerClass));
</script>

<div class={`c-sentiment-analysis ${containerClass}`} {...restProps}>
  <div class={headerClassComputed}>
    <BarChart3 class="h-5 w-5 text-[--color-primary-500] mr-[--spacing-sm]" />
    <h3 class={titleClass}>Sentiment Analysis</h3>
  </div>

  <div class={contentClassComputed}>
    <div class="mb-[--spacing-md]">
      <label for="sentiment-input" class={inputLabelClass}>Enter text to analyze</label>
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
        <Loader2 class={loadingSpinnerClass} />Analyzing...
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
          {#if result.score < -0.5}
            <Frown class={SentimentAnalysisStyleManager.getSentimentIconClass(result.score)} />
          {:else if result.score <= 0.5}
            <Meh class={SentimentAnalysisStyleManager.getSentimentIconClass(result.score)} />
          {:else}
            <Smile class={SentimentAnalysisStyleManager.getSentimentIconClass(result.score)} />
          {/if}
        </div>

        <div class="text-center mb-[--spacing-md]">
          <h4 class={sentimentLabelClass}>{result.label}</h4>
          <p class={SentimentAnalysisStyleManager.getSentimentScoreClass(result.score)}>{Math.round(result.score * 100)}%</p>
          <p class={confidenceLabelClass}>Confidence: {Math.round(result.confidence * 100)}%</p>
        </div>

        <div class="mt-[--spacing-md]">
          <div class={breakdownHeaderClass}>
            <span>Negative</span>
            <span>Neutral</span>
            <span>Positive</span>
          </div>
          <div class={breakdownBarClass}>
            <div class={negativeSegmentClass} style={`width: ${result.breakdown ? result.breakdown.negative * 100 : 0}%`}></div>
            <div class={neutralSegmentClass} style={`width: ${result.breakdown ? result.breakdown.neutral * 100 : 0}%`}></div>
            <div class={positiveSegmentClass} style={`width: ${result.breakdown ? result.breakdown.positive * 100 : 0}%`}></div>
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

  <div class={footerClassComputed}>
    Sentiment analysis powered by AI. Results are estimates and may not reflect the true sentiment.
  </div>
</div>
