import type { HtmlAttributesBase } from './common';
import type { PredictionResultStatus } from '$stylist/design-system/tokens/interaction/statuses';

import type { Prediction } from '../../types/information/prediction-result';
export interface PredictionResultProps extends HtmlAttributesBase<HTMLDivElement> {
	title?: string;
	description?: string;
	predictions?: Prediction[];
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



