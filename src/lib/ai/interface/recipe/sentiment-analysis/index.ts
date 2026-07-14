import type { SlotChildren } from '$stylist/theme/interface/slot/children';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotSentimentAnalysisResult } from '$stylist/ai/interface/slot/sentiment-analysis-result';
import type { SentimentAnalysisStatus } from '$stylist/ai/type/alias/sentiment-analysis-status';

export interface RecipeSentimentAnalysis extends ComputeIntersectAll<[SlotChildren]> {
	text?: string;
	result?: SlotSentimentAnalysisResult;
	onAnalyze?: (text: string) => void;
	status?: SentimentAnalysisStatus;
	errorMessage?: string;
	class?: string;
	headerClass?: string;
	contentClass?: string;
	inputClass?: string;
	resultClass?: string;
	footerClass?: string;
}

