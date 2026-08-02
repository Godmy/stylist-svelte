import type { BehaviorWbdQuestionBulkEditorEvents } from '$stylist/wbd/interface/behavior/question-bulk-editor-events';
import type { SlotWbdQuestionBulkEditor } from '$stylist/wbd/interface/slot/question-bulk-editor';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';

export interface RecipeWbdQuestionBulkEditor
	extends ComputeIntersectAll<[SlotWbdQuestionBulkEditor, BehaviorWbdQuestionBulkEditorEvents]> {}
