import type { BehaviorWbdQuestionImportEvents } from '$stylist/wbd/interface/behavior/question-import-events';
import type { SlotWbdQuestionImportPanel } from '$stylist/wbd/interface/slot/question-import-panel';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';

export interface RecipeWbdQuestionImportPanel
	extends ComputeIntersectAll<[SlotWbdQuestionImportPanel, BehaviorWbdQuestionImportEvents]> {}
