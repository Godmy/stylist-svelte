import type { SchemaLayout } from '$stylist/erd/type/alias/schema-layout';
import type { SchemaDocument } from '$stylist/erd/type/struct/schema-document';

export type SchemaViewProps = {
	document: SchemaDocument;
	zoom?: number;
	showRelations?: boolean;
	highlightRelations?: boolean;
	layout?: SchemaLayout;
	activeTableId?: string;
	draggable?: boolean;
};
