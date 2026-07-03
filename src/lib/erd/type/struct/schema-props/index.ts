import type { SchemaLayout } from '$stylist/erd/type/alias/schema-layout';

export type SchemaProps = {
	value?: string;
	zoom?: number;
	showRelations?: boolean;
	highlightRelations?: boolean;
	layout?: SchemaLayout;
	draggable?: boolean;
};
