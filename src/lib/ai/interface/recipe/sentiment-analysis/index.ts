import type { SlotChildren } from '$stylist/theme/interface/slot/children';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SentimentAnalysisStatus } from '$stylist/ai/type/alias/sentiment-analysis-status';
export interface RecipeSentimentAnalysis extends ComputeIntersectAll<[SlotChildren]> {
	text?: string;
	result?: {
		score: number;
		label: 'very negative' | 'negative' | 'neutral' | 'positive' | 'very positive';
		confidence: number;
		breakdown?: {
			positive: number;
			neutral: number;
			negative: number;
		};
	};
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
