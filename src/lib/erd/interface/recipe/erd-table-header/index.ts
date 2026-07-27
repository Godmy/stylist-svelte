import type { SchemaTable } from '$stylist/erd/type/struct/schema-table';

export interface RecipeErdTableHeader {
	table: SchemaTable;
	active?: boolean;
}
