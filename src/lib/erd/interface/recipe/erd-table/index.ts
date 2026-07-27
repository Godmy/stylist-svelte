import type { SchemaTable } from '$stylist/erd/type/struct/schema-table';

export interface RecipeErdTable {
	table: SchemaTable;
	active?: boolean;
	relatedFieldIds?: readonly string[];
}
