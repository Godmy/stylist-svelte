import type { SchemaLayout } from '$stylist/erd/type/alias/schema-layout';

export type SchemaToolProps = {
	zoom?: number;
	showRelations?: boolean;
	highlightRelations?: boolean;
	layout?: SchemaLayout;
	canImport?: boolean;
	canExport?: boolean;
};
