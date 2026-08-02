import type { StructWbdExportOption } from '$stylist/wbd/type/struct/export-option';

export interface BehaviorWbdExportResultsEvents {
	onExport?: (option: StructWbdExportOption) => void;
}
