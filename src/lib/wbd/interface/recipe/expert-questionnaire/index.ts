import type { BehaviorWbdExpertQuestionnaireEvents } from '$stylist/wbd/interface/behavior/expert-questionnaire-events';
import type { SlotWbdExpertQuestionnaire } from '$stylist/wbd/interface/slot/expert-questionnaire';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';

export interface RecipeWbdExpertQuestionnaire
	extends ComputeIntersectAll<[SlotWbdExpertQuestionnaire, BehaviorWbdExpertQuestionnaireEvents]> {}
