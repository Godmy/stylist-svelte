import type { RecipePredictionResult as PredictionResultContract } from '$stylist/science/interface/recipe/prediction-result';
import type { StatusState } from '$stylist/token/type/alias/status-state';

export function createPredictionResultState(props: PredictionResultContract) {
	const predictions = $derived(props.predictions ?? []);
	const title = $derived(props.title ?? 'Prediction Result');
	const description = $derived(props.description);
	const actualValue = $derived(props.actualValue);
	const predictedValue = $derived(props.predictedValue);
	const modelUsed = $derived(props.modelUsed);
	const confidence = $derived(props.confidence);
	const status = $derived(props.status ?? 'success');
	const showChart = $derived(props.showChart ?? true);
	const onRetry = $derived(props.onRetry);
	const maxValue = $derived(
		Math.max(
			...predictions.map((prediction) =>
				prediction.confidence !== undefined ? prediction.confidence : prediction.value
			),
			actualValue || 0,
			predictedValue || 0
		)
	);
	const restProps = $derived.by(() => {
		const {
			title: _title,
			description: _description,
			predictions: _predictions,
			actualValue: _actualValue,
			predictedValue: _predictedValue,
			modelUsed: _modelUsed,
			confidence: _confidence,
			status: _status,
			onRetry: _onRetry,
			showChart: _showChart,
			class: _class,
			headerClass: _headerClass,
			contentClass: _contentClass,
			footerClass: _footerClass,
			children: _children,
			...rest
		} = props;

		return rest;
	});
	const containerClass = $derived(
		props.class ? `prediction-result ${props.class}` : 'prediction-result'
	);
	const headerClass = $derived(
		props.headerClass
			? `prediction-result__header ${props.headerClass}`
			: 'prediction-result__header'
	);
	const statusIconStyle = $derived((): string => {
		const base = 'width: 1.25rem; height: 1.25rem; margin-right: var(--spacing-sm);';
		const statusStyles: Partial<Record<StatusState, string>> = {
			loading: `${base} color: var(--color-primary-500); animation: spin 1s linear infinite;`,
			error: `${base} color: var(--color-danger-500);`,
			warning: `${base} color: var(--color-warning-500);`,
			success: `${base} color: var(--color-primary-500);`
		};
		return statusStyles[status] ?? base;
	});
	const contentClass = $derived(
		props.contentClass
			? `prediction-result__content ${props.contentClass}`
			: 'prediction-result__content'
	);
	const footerClass = $derived(
		props.footerClass
			? `prediction-result__footer ${props.footerClass}`
			: 'prediction-result__footer'
	);

	return {
		get predictions() {
			return predictions;
		},
		get title() {
			return title;
		},
		get description() {
			return description;
		},
		get actualValue() {
			return actualValue;
		},
		get predictedValue() {
			return predictedValue;
		},
		get modelUsed() {
			return modelUsed;
		},
		get confidence() {
			return confidence;
		},
		get status() {
			return status;
		},
		get showChart() {
			return showChart;
		},
		get onRetry() {
			return onRetry;
		},
		get maxValue() {
			return maxValue;
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
		get statusIconStyle() {
			return statusIconStyle();
		},
		get titleClass() {
			return 'prediction-result__title';
		},
		get modelTagClass() {
			return 'prediction-result__model-tag';
		},
		get contentClass() {
			return contentClass;
		},
		get descriptionClass() {
			return 'prediction-result__description';
		},
		get centeredDisplayClass() {
			return 'prediction-result__centered';
		},
		get retryButtonClass() {
			return 'prediction-result__retry-btn';
		},
		get predictionSummaryGridClass() {
			return 'prediction-result__summary-grid';
		},
		get confidenceSectionClass() {
			return 'prediction-result__confidence';
		},
		get confidenceLabelClass() {
			return 'prediction-result__confidence-label';
		},
		get confidencePercentageClass() {
			return 'prediction-result__confidence-percent';
		},
		get confidenceBarContainerClass() {
			return 'prediction-result__confidence-bar';
		},
		get confidenceBarFillClass() {
			return 'prediction-result__confidence-fill';
		},
		get breakdownHeaderClass() {
			return 'prediction-result__breakdown-header';
		},
		get predictionItemClass() {
			return 'prediction-result__items';
		},
		get predictionItemLabelClass() {
			return 'prediction-result__item-label';
		},
		get predictionItemValueClass() {
			return 'prediction-result__item-value';
		},
		get chartBarContainerClass() {
			return 'prediction-result__chart-bar';
		},
		get chartBarFillClass() {
			return 'prediction-result__chart-fill';
		},
		get footerClass() {
			return footerClass;
		},
		get trendUpStyle() {
			return 'width: 1.25rem; height: 1.25rem; color: var(--color-success-500);';
		},
		get trendDownStyle() {
			return 'width: 1.25rem; height: 1.25rem; color: var(--color-danger-500);';
		},
		get trendUpDescriptionClass() {
			return 'prediction-result__trend--up';
		},
		get trendDownDescriptionClass() {
			return 'prediction-result__trend--down';
		},
		get predictionLabelClass() {
			return 'prediction-result__prediction-label';
		},
		get predictionValueClass() {
			return 'prediction-result__prediction-value';
		},
		getPredictionBoxClass(isPredicted: boolean) {
			return isPredicted
				? 'prediction-result__box prediction-result__box--predicted'
				: 'prediction-result__box prediction-result__box--actual';
		}
	};
}

export default createPredictionResultState;

