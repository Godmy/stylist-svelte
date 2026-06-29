import type { HtmlAttributesBase } from '$stylist/information/interface/slot/html-attributes-base';
import type { RecipeScience } from '$stylist/science/interface/recipe/science';
import type { StatusState } from '$stylist/information/type/alias/status-state';

export interface SlotPredictionResult extends HtmlAttributesBase<HTMLDivElement> {
	title?: string;
	description?: string;
	predictions?: RecipeScience[];
	actualValue?: number;
	predictedValue?: number;
	modelUsed?: string;
	confidence?: number;
	status?: StatusState;
	onRetry?: () => void;
	showChart?: boolean;
	class?: string;
	headerClass?: string;
	contentClass?: string;
	footerClass?: string;
}

