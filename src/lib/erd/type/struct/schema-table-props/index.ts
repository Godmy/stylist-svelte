import type { SchemaTable } from '$stylist/erd/type/struct/schema-table';

export type SchemaTableProps = {
	table: SchemaTable;
	active?: boolean;
	relatedFieldIds?: readonly string[];
};
