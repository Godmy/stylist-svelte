import type { ErrorDiagnosticItem } from '$stylist/dashboard/type/object/error-diagnostic-item';
export interface RecipeErrorListPanel {
	items: ErrorDiagnosticItem[];
	selectedId?: string;
	query?: string;
	groupBy?: 'project' | 'analyzer' | 'file' | 'none';
	severityFilter?: 'all' | 'error' | 'warning' | 'info';
	baselineMode?: 'all' | 'new-only';
	loading?: boolean;
	onSelect?: (item: ErrorDiagnosticItem) => void;
	onQueryChange?: (value: string) => void;
	onGroupChange?: (value: 'project' | 'analyzer' | 'file' | 'none') => void;
	onOpenFile?: (item: ErrorDiagnosticItem) => void;
	class?: string;
}
