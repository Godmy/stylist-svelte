import type { HtmlAttributesBase } from '$stylist/information/interface/slot';
import type { SlotSentimentResult } from '$stylist/science/interface/slot/sentiment-result';

export interface SlotSentimentAnalysis extends HtmlAttributesBase<HTMLDivElement> {
	text?: string;
	result?: SlotSentimentResult;
	onAnalyze?: (text: string) => void;
	status?: 'idle' | 'analyzing' | 'completed' | 'error';
	errorMessage?: string;
	class?: string;
	headerClass?: string;
	contentClass?: string;
	inputClass?: string;
	resultClass?: string;
	footerClass?: string;
}
