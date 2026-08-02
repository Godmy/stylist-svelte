import type { StructWbdFinalReportSection } from '$stylist/wbd/type/struct/final-report-section';

export interface SlotWbdFinalReportBuilder {
	sections: StructWbdFinalReportSection[];
	class?: string;
}
