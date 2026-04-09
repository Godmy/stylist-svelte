import type { SentimentAnalysisContract } from '$stylist/science/interface/record/science';
import { SentimentAnalysisStyleManager } from '$stylist/science/class/style-manager/sentiment-analysis';

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

	const containerClass = $derived(SentimentAnalysisStyleManager.getContainerClass(props.class ?? ''));
	const headerClass = $derived(SentimentAnalysisStyleManager.getHeaderClass(props.headerClass ?? ''));
	const titleClass = $derived(SentimentAnalysisStyleManager.getTitleClass());
	const contentClass = $derived(SentimentAnalysisStyleManager.getContentClass(props.contentClass ?? ''));
	const inputLabelClass = $derived(SentimentAnalysisStyleManager.getInputLabelClass());
	const inputAreaClass = $derived(SentimentAnalysisStyleManager.getInputAreaClass(props.inputClass ?? ''));
	const analyzeButtonClass = $derived(
		SentimentAnalysisStyleManager.getAnalyzeButtonClass(status === 'analyzing', !inputText.trim())
	);
	const loadingSpinnerClass = $derived(SentimentAnalysisStyleManager.getLoadingSpinnerClass());
	const errorMessageContainerClass = $derived(SentimentAnalysisStyleManager.getErrorMessageContainerClass());
	const errorIconClass = $derived(SentimentAnalysisStyleManager.getErrorIconClass());
	const errorMessageClass = $derived(SentimentAnalysisStyleManager.getErrorMessageClass());
	const resultSectionClass = $derived(SentimentAnalysisStyleManager.getResultSectionClass(props.resultClass ?? ''));
	const sentimentIconContainerClass = $derived(SentimentAnalysisStyleManager.getSentimentIconContainerClass());
	const confidenceLabelClass = $derived(SentimentAnalysisStyleManager.getConfidenceLabelClass());
	const breakdownHeaderClass = $derived(SentimentAnalysisStyleManager.getBreakdownHeaderClass());
	const breakdownBarClass = $derived(SentimentAnalysisStyleManager.getBreakdownBarClass());
	const negativeSegmentClass = $derived(SentimentAnalysisStyleManager.getNegativeSegmentClass());
	const neutralSegmentClass = $derived(SentimentAnalysisStyleManager.getNeutralSegmentClass());
	const positiveSegmentClass = $derived(SentimentAnalysisStyleManager.getPositiveSegmentClass());
	const sentimentLabelClass = $derived(SentimentAnalysisStyleManager.getSentimentLabelClass());
	const sentimentScaleContainerClass = $derived(SentimentAnalysisStyleManager.getSentimentScaleContainerClass());
	const gradientScaleClass = $derived(SentimentAnalysisStyleManager.getGradientScaleClass());
	const scaleLabelsClass = $derived(SentimentAnalysisStyleManager.getScaleLabelsClass());
	const footerClass = $derived(SentimentAnalysisStyleManager.getFooterClass(props.footerClass ?? ''));

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
			return titleClass;
		},
		get contentClass() {
			return contentClass;
		},
		get inputLabelClass() {
			return inputLabelClass;
		},
		get inputAreaClass() {
			return inputAreaClass;
		},
		get analyzeButtonClass() {
			return analyzeButtonClass;
		},
		get loadingSpinnerClass() {
			return loadingSpinnerClass;
		},
		get errorMessageContainerClass() {
			return errorMessageContainerClass;
		},
		get errorIconClass() {
			return errorIconClass;
		},
		get errorMessageClass() {
			return errorMessageClass;
		},
		get resultSectionClass() {
			return resultSectionClass;
		},
		get sentimentIconContainerClass() {
			return sentimentIconContainerClass;
		},
		get confidenceLabelClass() {
			return confidenceLabelClass;
		},
		get breakdownHeaderClass() {
			return breakdownHeaderClass;
		},
		get breakdownBarClass() {
			return breakdownBarClass;
		},
		get negativeSegmentClass() {
			return negativeSegmentClass;
		},
		get neutralSegmentClass() {
			return neutralSegmentClass;
		},
		get positiveSegmentClass() {
			return positiveSegmentClass;
		},
		get sentimentLabelClass() {
			return sentimentLabelClass;
		},
		get sentimentScaleContainerClass() {
			return sentimentScaleContainerClass;
		},
		get gradientScaleClass() {
			return gradientScaleClass;
		},
		get scaleLabelsClass() {
			return scaleLabelsClass;
		},
		get footerClass() {
			return footerClass;
		},
		getSentimentIconClass(score: number) {
			return SentimentAnalysisStyleManager.getSentimentIconClass(score);
		},
		getSentimentScoreClass(score: number) {
			return SentimentAnalysisStyleManager.getSentimentScoreClass(score);
		},
		getScoreIndicatorClass(score: number) {
			return SentimentAnalysisStyleManager.getScoreIndicatorClass(score);
		},
		analyzeSentiment
	};
}

export default createSentimentAnalysisState;
