import type { HtmlAttributesBase } from '$stylist/information/interface/slot';
import type { RecipeScience } from '$stylist/science/interface/recipe/science';
import type { PredictionResultStatus } from '$stylist/science/type/struct/prediction-result-status';

export interface SlotPredictionResult extends HtmlAttributesBase<HTMLDivElement> {
	title?: string;
	description?: string;
	predictions?: RecipeScience[];
	actualValue?: number;
	predictedValue?: number;
	modelUsed?: string;
	confidence?: number;
	status?: PredictionResultStatus;
	onRetry?: () => void;
	showChart?: boolean;
	class?: string;
	headerClass?: string;
	contentClass?: string;
	footerClass?: string;
}
