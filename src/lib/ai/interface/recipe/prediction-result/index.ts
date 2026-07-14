import type { SlotChildren } from '$stylist/theme/interface/slot/children';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { ContractPrediction } from '$stylist/ai/interface/contract/prediction';
import type { StatusState } from '$stylist/information/type/alias/status-state';

export interface RecipePredictionResult extends ComputeIntersectAll<[SlotChildren]> {
	title?: string;
	description?: string;
	predictions?: ContractPrediction[];
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

