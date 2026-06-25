/** AREA: STYLIST CODER MODEL -> AUTO-GENERATED */
import type { ColumnSchema } from '$stylist/table/type/schema/column';

export interface RecipeColumn<T = Record<string, unknown>> {
	schema: ColumnSchema<T>;
	currentSortKey?: string;
	currentSortDirection?: 'asc' | 'desc' | 'none';
	onSort?: (key: string) => void;
}
