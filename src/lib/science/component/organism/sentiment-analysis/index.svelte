<script lang="ts">
	import { Icon as BaseIcon } from '$stylist/media';
	import type { RecipeSentimentAnalysis as SentimentAnalysisContract } from '$stylist/science/interface/recipe/sentiment-analysis';
	import { createSentimentAnalysisState } from '$stylist/science/function/state/sentiment-analysis';

	let props: SentimentAnalysisContract = $props();
	const state = createSentimentAnalysisState(props);
</script>

<div class={`c-sentiment-analysis ${state.containerClass}`} {...state.restProps}>
	<div class={state.headerClass}>
		<BaseIcon name="bar-chart-3" class="h-5 w-5 text-[--color-primary-500] mr-[--spacing-sm]" />
		<h3 class={state.titleClass}>Sentiment Analysis</h3>
	</div>

	<div class={state.contentClass}>
		<div class="mb-[--spacing-md]">
			<label for="sentiment-input" class={state.inputLabelClass}>Enter text to analyze</label>
			<textarea id="sentiment-input" class={state.inputAreaClass} bind:value={state.inputText} placeholder="Enter text to analyze for sentiment..."></textarea>
		</div>

		<button type="button" class={state.analyzeButtonClass} onclick={state.analyzeSentiment} disabled={state.status === 'analyzing' || !state.inputText.trim()}>
			{#if state.status === 'analyzing'}
				<BaseIcon name="loader-2" class={state.loadingSpinnerClass} />Analyzing...
			{:else}
				Analyze Sentiment
			{/if}
		</button>

		{#if state.status === 'error' && state.errorMessage}
			<div class={state.errorMessageContainerClass}>
				<BaseIcon name="alert-circle" class={state.errorIconClass} />
				<span class={state.errorMessageClass}>{state.errorMessage}</span>
			</div>
		{/if}

		{#if state.status === 'success' && state.result}
			<div class={state.resultSectionClass}>
				<div class={state.sentimentIconContainerClass}>
					{#if state.result.score < -0.5}
						<BaseIcon name="frown" class={state.getSentimentIconClass(state.result.score)} />
					{:else if state.result.score <= 0.5}
						<BaseIcon name="meh" class={state.getSentimentIconClass(state.result.score)} />
					{:else}
						<BaseIcon name="smile" class={state.getSentimentIconClass(state.result.score)} />
					{/if}
				</div>

				<div class="text-center mb-[--spacing-md]">
					<h4 class={state.sentimentLabelClass}>{state.result.label}</h4>
					<p class={state.getSentimentScoreClass(state.result.score)}>{Math.round(state.result.score * 100)}%</p>
					<p class={state.confidenceLabelClass}>Confidence: {Math.round(state.result.confidence * 100)}%</p>
				</div>

				<div class="mt-[--spacing-md]">
					<div class={state.breakdownHeaderClass}>
						<span>Negative</span>
						<span>Neutral</span>
						<span>Positive</span>
					</div>
					<div class={state.breakdownBarClass}>
						<div class={state.negativeSegmentClass} style={`width: ${state.result.breakdown ? state.result.breakdown.negative * 100 : 0}%`}></div>
						<div class={state.neutralSegmentClass} style={`width: ${state.result.breakdown ? state.result.breakdown.neutral * 100 : 0}%`}></div>
						<div class={state.positiveSegmentClass} style={`width: ${state.result.breakdown ? state.result.breakdown.positive * 100 : 0}%`}></div>
					</div>
				</div>

				<div class={state.sentimentScaleContainerClass}>
					<div class="flex items-center justify-center">
						<div class={state.gradientScaleClass}>
							<div class={state.getScoreIndicatorClass(state.result.score)} style={`left: ${((state.result.score + 1) / 2) * 100}%`}></div>
						</div>
					</div>
					<div class={state.scaleLabelsClass}>
						<span>Negative</span>
						<span>Neutral</span>
						<span>Positive</span>
					</div>
				</div>
			</div>
		{/if}
	</div>

	<div class={state.footerClass}>Sentiment analysis powered by AI. Results are estimates and may not reflect the true sentiment.</div>
</div>
