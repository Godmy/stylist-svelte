import type { HtmlAttributesBase } from '$stylist/design-system/contracts/information/common';
import type { TokenSeverity } from '$stylist/design-system/tokens/interaction/sevetity';

export type PredictionResultStatus = 'loading' | Extract<TokenSeverity, 'success' | 'warning' | 'error'>;

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
