<script lang="ts">
	import BaseIcon from '$stylist/svg/component/atom/icon/index.svelte';
	import type { RecipeSentimentAnalysis as SentimentAnalysisContract } from '$stylist/ai/interface/recipe/sentiment-analysis';
	import createSentimentAnalysisState from '$stylist/ai/function/state/sentiment-analysis/index.svelte';

	let props: SentimentAnalysisContract = $props();
	const state = createSentimentAnalysisState(props);
</script>

<div class={state.containerClass} {...state.restProps}>
	<div class={state.headerClass}>
		<BaseIcon
			name="bar-chart-3"
			style="width: 1.25rem; height: 1.25rem; margin-right: var(--spacing-sm); color: var(--color-primary-500);"
		/>
		<h3 class={state.titleClass}>Sentiment Analysis</h3>
	</div>

	<div class={state.contentClass}>
		<div class="sentiment-analysis__input-group">
			<label for="sentiment-input" class={state.inputLabelClass}>Enter text to analyze</label>
			<textarea
				id="sentiment-input"
				class={state.inputAreaClass}
				bind:value={state.inputText}
				placeholder="Enter text to analyze for sentiment..."
			></textarea>
		</div>

		<button
			type="button"
			class={state.analyzeButtonClass}
			onclick={state.analyzeSentiment}
			disabled={state.status === 'analyzing' || !state.inputText.trim()}
		>
			{#if state.status === 'analyzing'}
				<BaseIcon name="loader-2" style={state.loadingSpinnerStyle} />Analyzing...
			{:else}
				Analyze Sentiment
			{/if}
		</button>

		{#if state.status === 'error' && state.errorMessage}
			<div class={state.errorMessageContainerClass}>
				<BaseIcon name="alert-circle" style={state.errorIconStyle} />
				<span class={state.errorMessageClass}>{state.errorMessage}</span>
			</div>
		{/if}

		{#if state.status === 'success' && state.result}
			<div class={state.resultSectionClass}>
				<div class={state.sentimentIconContainerClass}>
					{#if state.result.score < -0.5}
						<BaseIcon name="frown" style={state.getSentimentIconStyle(state.result.score)} />
					{:else if state.result.score <= 0.5}
						<BaseIcon name="meh" style={state.getSentimentIconStyle(state.result.score)} />
					{:else}
						<BaseIcon name="smile" style={state.getSentimentIconStyle(state.result.score)} />
					{/if}
				</div>

				<div class="sentiment-analysis__score-display">
					<h4 class={state.sentimentLabelClass}>{state.result.label}</h4>
					<p class={state.getSentimentScoreClass(state.result.score)}>
						{Math.round(state.result.score * 100)}%
					</p>
					<p class={state.confidenceLabelClass}>
						Confidence: {Math.round(state.result.confidence * 100)}%
					</p>
				</div>

				<div class="sentiment-analysis__breakdown">
					<div class={state.breakdownHeaderClass}>
						<span>Negative</span>
						<span>Neutral</span>
						<span>Positive</span>
					</div>
					<div class={state.breakdownBarClass}>
						<div
							class={state.negativeSegmentClass}
							style={`width: ${state.result.breakdown ? state.result.breakdown.negative * 100 : 0}%`}
						></div>
						<div
							class={state.neutralSegmentClass}
							style={`width: ${state.result.breakdown ? state.result.breakdown.neutral * 100 : 0}%`}
						></div>
						<div
							class={state.positiveSegmentClass}
							style={`width: ${state.result.breakdown ? state.result.breakdown.positive * 100 : 0}%`}
						></div>
					</div>
				</div>

				<div class={state.sentimentScaleContainerClass}>
					<div class="sentiment-analysis__scale-track-wrapper">
						<div class={state.gradientScaleClass}>
							<div
								class={state.getScoreIndicatorClass(state.result.score)}
								style={`left: ${((state.result.score + 1) / 2) * 100}%`}
							></div>
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

	<div class={state.footerClass}>
		Sentiment analysis powered by AI. Results are estimates and may not reflect the true sentiment.
	</div>
</div>

<style>
	:global(.sentiment-analysis) {
		background-color: var(--color-background-primary);
		border-radius: 0.5rem;
		box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
		border: 1px solid var(--color-border-primary);
		overflow: hidden;
	}

	:global(.sentiment-analysis__header) {
		border-bottom: 1px solid var(--color-border-primary);
		padding: var(--spacing-md);
		display: flex;
		align-items: center;
	}

	:global(.sentiment-analysis__title) {
		font-size: 1.125rem;
		font-weight: var(--font-weight-medium, 500);
		color: var(--color-text-primary);
	}

	:global(.sentiment-analysis__content) {
		padding: var(--spacing-md);
	}

	:global(.sentiment-analysis__input-group) {
		margin-bottom: var(--spacing-md);
	}

	:global(.sentiment-analysis__input-label) {
		display: block;
		font-size: 0.875rem;
		font-weight: var(--font-weight-medium, 500);
		color: var(--color-text-secondary);
		margin-bottom: var(--spacing-xs);
	}

	:global(.sentiment-analysis__input-area) {
		width: 100%;
		height: 8rem;
		padding: var(--spacing-md);
		border: 1px solid var(--color-border-primary);
		border-radius: 0.375rem;
		box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.05);
		resize: vertical;
		background-color: var(--color-background-primary);
		color: var(--color-text-primary);
	}

	:global(.sentiment-analysis__input-area:focus) {
		outline: none;
		border-color: var(--color-primary-500);
		box-shadow: 0 0 0 2px var(--color-primary-100);
	}

	:global(.sentiment-analysis__analyze-btn) {
		width: 100%;
		display: inline-flex;
		justify-content: center;
		align-items: center;
		padding: var(--spacing-sm) var(--spacing-md);
		border: 1px solid transparent;
		font-size: 0.875rem;
		font-weight: var(--font-weight-medium, 500);
		border-radius: 0.375rem;
		box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
		color: var(--color-text-inverse);
		background-color: var(--color-primary-600);
		cursor: pointer;
		transition: background-color 0.15s ease;
	}

	:global(.sentiment-analysis__analyze-btn:hover:not(:disabled)) {
		background-color: var(--color-primary-700);
	}

	:global(.sentiment-analysis__analyze-btn--disabled),
	:global(.sentiment-analysis__analyze-btn:disabled) {
		background-color: var(--color-primary-400);
		cursor: not-allowed;
	}

	:global(.sentiment-analysis__error) {
		margin-top: var(--spacing-md);
		padding: var(--spacing-md);
		background-color: var(--color-danger-50);
		border-radius: 0.375rem;
		display: flex;
		align-items: center;
	}

	:global(.sentiment-analysis__error-msg) {
		font-size: 0.875rem;
		color: var(--color-danger-700);
	}

	:global(.sentiment-analysis__result) {
		margin-top: var(--spacing-lg);
		padding: var(--spacing-lg);
		border: 1px solid var(--color-border-primary);
		border-radius: 0.5rem;
	}

	:global(.sentiment-analysis__icon-container) {
		display: flex;
		align-items: center;
		justify-content: center;
		margin-bottom: var(--spacing-md);
	}

	:global(.sentiment-analysis__score-display) {
		text-align: center;
		margin-bottom: var(--spacing-md);
	}

	:global(.sentiment-analysis__sentiment-label) {
		font-size: 1.125rem;
		font-weight: var(--font-weight-semibold, 600);
		color: var(--color-text-primary);
		text-transform: capitalize;
	}

	:global(.sentiment-analysis__score) {
		font-size: 1.875rem;
		font-weight: 700;
	}

	:global(.sentiment-analysis__score--negative) {
		color: var(--color-danger-500);
	}

	:global(.sentiment-analysis__score--neutral) {
		color: var(--color-warning-500);
	}

	:global(.sentiment-analysis__score--positive) {
		color: var(--color-success-500);
	}

	:global(.sentiment-analysis__confidence-label) {
		font-size: 0.875rem;
		color: var(--color-text-secondary);
		margin-top: var(--spacing-xs);
	}

	:global(.sentiment-analysis__breakdown) {
		margin-top: var(--spacing-md);
	}

	:global(.sentiment-analysis__breakdown-header) {
		display: flex;
		justify-content: space-between;
		font-size: 0.875rem;
		color: var(--color-text-secondary);
		margin-bottom: var(--spacing-xs);
	}

	:global(.sentiment-analysis__breakdown-bar) {
		width: 100%;
		height: 0.5rem;
		background-color: var(--color-background-tertiary);
		border-radius: 9999px;
		overflow: hidden;
		display: flex;
	}

	:global(.sentiment-analysis__segment) {
		height: 100%;
	}

	:global(.sentiment-analysis__segment--negative) {
		background-color: var(--color-danger-500);
	}

	:global(.sentiment-analysis__segment--neutral) {
		background-color: var(--color-warning-500);
	}

	:global(.sentiment-analysis__segment--positive) {
		background-color: var(--color-success-500);
	}

	:global(.sentiment-analysis__scale) {
		margin-top: var(--spacing-md);
	}

	:global(.sentiment-analysis__scale-track-wrapper) {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	:global(.sentiment-analysis__scale-gradient) {
		width: 100%;
		height: 1rem;
		background-image: linear-gradient(
			to right,
			var(--color-danger-500),
			var(--color-warning-500),
			var(--color-success-500)
		);
		border-radius: 9999px;
		position: relative;
	}

	:global(.sentiment-analysis__indicator) {
		position: absolute;
		top: 50%;
		transform: translate(-50%, -50%);
		width: 0.5rem;
		height: 0.5rem;
		border-radius: 9999px;
	}

	:global(.sentiment-analysis__indicator--negative) {
		background-color: var(--color-danger-500);
	}

	:global(.sentiment-analysis__indicator--neutral) {
		background-color: var(--color-warning-500);
	}

	:global(.sentiment-analysis__indicator--positive) {
		background-color: var(--color-success-500);
	}

	:global(.sentiment-analysis__scale-labels) {
		display: flex;
		justify-content: space-between;
		font-size: 0.75rem;
		color: var(--color-text-secondary);
		margin-top: var(--spacing-xs);
	}

	:global(.sentiment-analysis__footer) {
		border-top: 1px solid var(--color-border-primary);
		padding: var(--spacing-md);
		font-size: 0.75rem;
		color: var(--color-text-secondary);
	}
</style>
