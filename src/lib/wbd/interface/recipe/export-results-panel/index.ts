import type { BehaviorWbdExportResultsEvents } from '$stylist/wbd/interface/behavior/export-results-events';
import type { SlotWbdExportResultsPanel } from '$stylist/wbd/interface/slot/export-results-panel';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';

export interface RecipeWbdExportResultsPanel
	extends ComputeIntersectAll<[SlotWbdExportResultsPanel, BehaviorWbdExportResultsEvents]> {}
