import type { BehaviorWbdFinalReportBuilderEvents } from '$stylist/wbd/interface/behavior/final-report-builder-events';
import type { SlotWbdFinalReportBuilder } from '$stylist/wbd/interface/slot/final-report-builder';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';

export interface RecipeWbdFinalReportBuilder
	extends ComputeIntersectAll<[SlotWbdFinalReportBuilder, BehaviorWbdFinalReportBuilderEvents]> {}
