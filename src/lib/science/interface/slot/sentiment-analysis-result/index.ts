// ==================== SentimentAnalysis ====================
export interface SlotSentimentAnalysisResult {
	score: number;
	label: 'very negative' | 'negative' | 'neutral' | 'positive' | 'very positive';
	confidence: number;
	breakdown?: {
		positive: number;
		neutral: number;
		negative: number;
	};
}
