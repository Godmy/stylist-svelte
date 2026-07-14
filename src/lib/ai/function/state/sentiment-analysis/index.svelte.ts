import type { RecipeSentimentAnalysis as SentimentAnalysisContract } from '$stylist/ai/interface/recipe/sentiment-analysis';

export function createSentimentAnalysisState(props: SentimentAnalysisContract) {
	let inputText = $state(props.text ?? '');

	const result = $derived(props.result);
	const status = $derived(props.status ?? 'idle');
	const errorMessage = $derived(props.errorMessage ?? '');
	const restProps = $derived.by(() => {
		const {
			text: _text,
			result: _result,
			onAnalyze: _onAnalyze,
			status: _status,
			errorMessage: _errorMessage,
			class: _class,
			headerClass: _headerClass,
			contentClass: _contentClass,
			inputClass: _inputClass,
			resultClass: _resultClass,
			footerClass: _footerClass,
			children: _children,
			...rest
		} = props;

		return rest;
	});

	function analyzeSentiment() {
		if (inputText.trim()) {
			props.onAnalyze?.(inputText);
		}
	}

	const containerClass = $derived(
		props.class ? `sentiment-analysis ${props.class}` : 'sentiment-analysis'
	);
	const headerClass = $derived(
		props.headerClass
			? `sentiment-analysis__header ${props.headerClass}`
			: 'sentiment-analysis__header'
	);
	const contentClass = $derived(
		props.contentClass
			? `sentiment-analysis__content ${props.contentClass}`
			: 'sentiment-analysis__content'
	);
	const inputAreaClass = $derived(
		props.inputClass
			? `sentiment-analysis__input-area ${props.inputClass}`
			: 'sentiment-analysis__input-area'
	);
	const analyzeButtonClass = $derived(
		status === 'analyzing' || !inputText.trim()
			? 'sentiment-analysis__analyze-btn sentiment-analysis__analyze-btn--disabled'
			: 'sentiment-analysis__analyze-btn'
	);
	const resultSectionClass = $derived(
		props.resultClass
			? `sentiment-analysis__result ${props.resultClass}`
			: 'sentiment-analysis__result'
	);
	const footerClass = $derived(
		props.footerClass
			? `sentiment-analysis__footer ${props.footerClass}`
			: 'sentiment-analysis__footer'
	);

	function getSentimentIconStyle(score: number): string {
		const base = 'width: 3rem; height: 3rem;';
		if (score < -0.3) return `${base} color: var(--color-danger-500);`;
		if (score < 0.3) return `${base} color: var(--color-warning-500);`;
		return `${base} color: var(--color-success-500);`;
	}

	function getSentimentScoreClass(score: number): string {
		if (score < -0.3) return 'sentiment-analysis__score sentiment-analysis__score--negative';
		if (score < 0.3) return 'sentiment-analysis__score sentiment-analysis__score--neutral';
		return 'sentiment-analysis__score sentiment-analysis__score--positive';
	}

	function getScoreIndicatorClass(score: number): string {
		if (score < -0.3)
			return 'sentiment-analysis__indicator sentiment-analysis__indicator--negative';
		if (score < 0.3) return 'sentiment-analysis__indicator sentiment-analysis__indicator--neutral';
		return 'sentiment-analysis__indicator sentiment-analysis__indicator--positive';
	}

	return {
		get inputText() {
			return inputText;
		},
		set inputText(value: string) {
			inputText = value;
		},
		get result() {
			return result;
		},
		get status() {
			return status;
		},
		get errorMessage() {
			return errorMessage;
		},
		get restProps() {
			return restProps;
		},
		get containerClass() {
			return containerClass;
		},
		get headerClass() {
			return headerClass;
		},
		get titleClass() {
			return 'sentiment-analysis__title';
		},
		get contentClass() {
			return contentClass;
		},
		get inputLabelClass() {
			return 'sentiment-analysis__input-label';
		},
		get inputAreaClass() {
			return inputAreaClass;
		},
		get analyzeButtonClass() {
			return analyzeButtonClass;
		},
		get loadingSpinnerStyle() {
			return 'width: 1rem; height: 1rem; margin-right: var(--spacing-sm); animation: spin 1s linear infinite;';
		},
		get errorMessageContainerClass() {
			return 'sentiment-analysis__error';
		},
		get errorIconStyle() {
			return 'width: 1.25rem; height: 1.25rem; color: var(--color-danger-500); margin-right: var(--spacing-sm);';
		},
		get errorMessageClass() {
			return 'sentiment-analysis__error-msg';
		},
		get resultSectionClass() {
			return resultSectionClass;
		},
		get sentimentIconContainerClass() {
			return 'sentiment-analysis__icon-container';
		},
		get sentimentLabelClass() {
			return 'sentiment-analysis__sentiment-label';
		},
		get confidenceLabelClass() {
			return 'sentiment-analysis__confidence-label';
		},
		get breakdownHeaderClass() {
			return 'sentiment-analysis__breakdown-header';
		},
		get breakdownBarClass() {
			return 'sentiment-analysis__breakdown-bar';
		},
		get negativeSegmentClass() {
			return 'sentiment-analysis__segment sentiment-analysis__segment--negative';
		},
		get neutralSegmentClass() {
			return 'sentiment-analysis__segment sentiment-analysis__segment--neutral';
		},
		get positiveSegmentClass() {
			return 'sentiment-analysis__segment sentiment-analysis__segment--positive';
		},
		get sentimentScaleContainerClass() {
			return 'sentiment-analysis__scale';
		},
		get gradientScaleClass() {
			return 'sentiment-analysis__scale-gradient';
		},
		get scaleLabelsClass() {
			return 'sentiment-analysis__scale-labels';
		},
		get footerClass() {
			return footerClass;
		},
		getSentimentIconStyle,
		getSentimentScoreClass,
		getScoreIndicatorClass,
		analyzeSentiment
	};
}

export default createSentimentAnalysisState;
