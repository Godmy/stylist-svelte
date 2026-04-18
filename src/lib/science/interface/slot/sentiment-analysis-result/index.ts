import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { TokenTrajectory } from '$stylist/architecture/type/enum/trajectory';
import type { ScienceHTMLAttributes } from '$stylist/science/type/struct';
import type { ChildrenHtmlAttributes } from '$stylist/science/interface/slot';
import type { Snippet } from 'svelte';

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
