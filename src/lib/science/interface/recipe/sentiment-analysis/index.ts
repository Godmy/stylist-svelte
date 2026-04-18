import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { TokenTrajectory } from '$stylist/architecture/type/enum/trajectory';
import type { ScienceHTMLAttributes } from '$stylist/science/type/struct';
import type { ChildrenHtmlAttributes } from '$stylist/science/interface/slot';
import type { Snippet } from 'svelte';
import type { SlotSentimentAnalysisResult } from '$stylist/science/interface/slot/sentiment-analysis-result';
import type { SentimentAnalysisStatus } from '$stylist/science/type/struct/sentiment-analysis-status';

export interface RecipeSentimentAnalysis extends StructIntersectAll<[]> {
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
	footerClass?: string;	children?: Snippet;
}
