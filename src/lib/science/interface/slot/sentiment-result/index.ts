import type { HtmlAttributesBase } from '$stylist/information/interface/slot';

export interface SlotSentimentResult {
	score: number;
	label: 'very negative' | 'negative' | 'neutral' | 'positive' | 'very positive';
	confidence: number;
	breakdown?: {
		positive: number;
		neutral: number;
		negative: number;
	};
}
