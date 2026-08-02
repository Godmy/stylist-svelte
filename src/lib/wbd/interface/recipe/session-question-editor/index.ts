import type { BehaviorWbdQuestionEditorEvents } from '$stylist/wbd/interface/behavior/question-editor-events';
import type { SlotWbdSessionQuestionEditor } from '$stylist/wbd/interface/slot/session-question-editor';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';

export interface RecipeWbdSessionQuestionEditor
	extends ComputeIntersectAll<[SlotWbdSessionQuestionEditor, BehaviorWbdQuestionEditorEvents]> {}
