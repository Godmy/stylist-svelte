import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { TokenTrajectory } from '$stylist/architecture/type/enum/trajectory';
import type { ScienceHTMLAttributes } from '$stylist/science/type/struct';
import type { ChildrenHtmlAttributes } from '$stylist/science/interface/slot';
import type { Snippet } from 'svelte';
import type { ContractPrediction } from '$stylist/science/interface/contract/prediction';
import type { PredictionResultStatus } from '$stylist/science/type/struct/prediction-result-status';

export interface RecipePredictionResult extends StructIntersectAll<[]> {
	title?: string;
	description?: string;
	predictions?: ContractPrediction[];
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
	footerClass?: string;	children?: Snippet;
}
