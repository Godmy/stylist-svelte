import type { SchemaDependency } from '$stylist/erd/type/struct/schema-dependency';
import type { SchemaTable } from '$stylist/erd/type/struct/schema-table';

export type SchemaDocument = {
	tables: readonly SchemaTable[];
	dependencies: readonly SchemaDependency[];
};
