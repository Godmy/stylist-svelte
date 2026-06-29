import type { SchemaDocument } from '$stylist/erd/type/struct/schema-document';

export type SchemaViewProps = {
	document: SchemaDocument;
	zoom?: number;
	showRelations?: boolean;
	highlightRelations?: boolean;
	activeTableId?: string;
	draggable?: boolean;
};
