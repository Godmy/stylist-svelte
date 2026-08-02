import type { BehaviorWbdQuestionNavigationEvents } from '$stylist/wbd/interface/behavior/question-navigation-events';
import type { SlotWbdExpertQuestionNavigator } from '$stylist/wbd/interface/slot/expert-question-navigator';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';

export interface RecipeWbdExpertQuestionNavigator
	extends ComputeIntersectAll<[SlotWbdExpertQuestionNavigator, BehaviorWbdQuestionNavigationEvents]> {}
