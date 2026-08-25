import type { ComponentImportRow } from '$stylist/domain/type/object/component-import-row';
import type { ComponentImportSummary } from '$stylist/domain/type/object/component-import-summary';
export interface RecipeDomainComponentImportDiagnostics {
	rows: ComponentImportRow[];
	summary: ComponentImportSummary;
	class?: string;
}
