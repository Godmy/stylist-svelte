export type AdminKpiMetric = { label: string; value: string; description?: string };

export interface RecipeAdminKpiRow {
	metrics: AdminKpiMetric[];
	class?: string;
}
