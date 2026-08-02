import type { BehaviorWbdExpertAnswerCardEvents } from '$stylist/wbd/interface/behavior/expert-answer-card-events';
import type { SlotWbdExpertAnswerCard } from '$stylist/wbd/interface/slot/expert-answer-card';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';

export interface RecipeWbdExpertAnswerCard
	extends ComputeIntersectAll<[SlotWbdExpertAnswerCard, BehaviorWbdExpertAnswerCardEvents]> {}
