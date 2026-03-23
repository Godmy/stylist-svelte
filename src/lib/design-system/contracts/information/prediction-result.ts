import type { HtmlAttributesBase } from '$stylist/design-system/contracts/information/common';

export type PredictionResultStatus = 'loading' | 'success' | 'warning' | 'error';

export interface Prediction {
	label: string;
	value: number;
	confidence?: number;
}

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
