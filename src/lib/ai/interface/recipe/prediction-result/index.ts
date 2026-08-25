import type { SlotChildren } from '$stylist/theme/interface/slot/children';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { StatusState } from '$stylist/ai/type/alias/status-state';
export interface RecipePredictionResult extends ComputeIntersectAll<[SlotChildren]> {
	title?: string;
	description?: string;
	predictions?: {
		label: string;
		value: number;
		confidence?: number;
	}[];
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
