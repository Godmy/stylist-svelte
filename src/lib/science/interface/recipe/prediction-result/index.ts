import type { SlotChildren } from '$stylist/layout/interface/slot/children';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { ContractPrediction } from '$stylist/science/interface/contract/prediction';
import type { StatusState } from '$stylist/information/type/struct/status-state';

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
