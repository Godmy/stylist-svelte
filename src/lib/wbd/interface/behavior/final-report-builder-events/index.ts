import type { StructWbdFinalReportSection } from '$stylist/wbd/type/struct/final-report-section';

export interface BehaviorWbdFinalReportBuilderEvents {
	onUpdateSections?: (sections: StructWbdFinalReportSection[]) => void;
	onPublishReport?: () => void;
}
