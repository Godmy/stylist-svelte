import type { RecipePredictionResult as PredictionResultContract } from '$stylist/science/interface/recipe/prediction-result';
import { PredictionResultStyleManager } from '$stylist/science/class/style-manager/prediction-result';

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
			...predictions.map((prediction) => (prediction.confidence !== undefined ? prediction.confidence : prediction.value)),
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
	const containerClass = $derived(PredictionResultStyleManager.getContainerClass(props.class ?? ''));
	const headerClass = $derived(PredictionResultStyleManager.getHeaderClass(props.headerClass ?? ''));
	const statusIconClass = $derived(PredictionResultStyleManager.getStatusIconClass(status));
	const titleClass = $derived(PredictionResultStyleManager.getTitleClass());
	const modelTagClass = $derived(PredictionResultStyleManager.getModelTagClass());
	const contentClass = $derived(PredictionResultStyleManager.getContentClass(props.contentClass ?? ''));
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
	const footerClass = $derived(PredictionResultStyleManager.getFooterClass(props.footerClass ?? ''));
	const trendUpClass = $derived(PredictionResultStyleManager.getTrendIndicatorClass(true));
	const trendDownClass = $derived(PredictionResultStyleManager.getTrendIndicatorClass(false));
	const trendUpDescriptionClass = $derived(PredictionResultStyleManager.getTrendDescriptionClass(true));
	const trendDownDescriptionClass = $derived(PredictionResultStyleManager.getTrendDescriptionClass(false));
	const predictionLabelClass = $derived(PredictionResultStyleManager.getPredictionLabelClass());
	const predictionValueClass = $derived(PredictionResultStyleManager.getPredictionValueClass());

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
		get statusIconClass() {
			return statusIconClass;
		},
		get titleClass() {
			return titleClass;
		},
		get modelTagClass() {
			return modelTagClass;
		},
		get contentClass() {
			return contentClass;
		},
		get descriptionClass() {
			return descriptionClass;
		},
		get centeredDisplayClass() {
			return centeredDisplayClass;
		},
		get retryButtonClass() {
			return retryButtonClass;
		},
		get predictionSummaryGridClass() {
			return predictionSummaryGridClass;
		},
		get confidenceSectionClass() {
			return confidenceSectionClass;
		},
		get confidenceLabelClass() {
			return confidenceLabelClass;
		},
		get confidencePercentageClass() {
			return confidencePercentageClass;
		},
		get confidenceBarContainerClass() {
			return confidenceBarContainerClass;
		},
		get confidenceBarFillClass() {
			return confidenceBarFillClass;
		},
		get breakdownHeaderClass() {
			return breakdownHeaderClass;
		},
		get predictionItemClass() {
			return predictionItemClass;
		},
		get predictionItemLabelClass() {
			return predictionItemLabelClass;
		},
		get predictionItemValueClass() {
			return predictionItemValueClass;
		},
		get chartBarContainerClass() {
			return chartBarContainerClass;
		},
		get chartBarFillClass() {
			return chartBarFillClass;
		},
		get footerClass() {
			return footerClass;
		},
		get trendUpClass() {
			return trendUpClass;
		},
		get trendDownClass() {
			return trendDownClass;
		},
		get trendUpDescriptionClass() {
			return trendUpDescriptionClass;
		},
		get trendDownDescriptionClass() {
			return trendDownDescriptionClass;
		},
		get predictionLabelClass() {
			return predictionLabelClass;
		},
		get predictionValueClass() {
			return predictionValueClass;
		},
		getPredictionBoxClass(isPredicted: boolean) {
			return PredictionResultStyleManager.getPredictionBoxClass(isPredicted);
		}
	};
}

export default createPredictionResultState;
