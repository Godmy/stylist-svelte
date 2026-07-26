import type { SchemaLayout } from '$stylist/erd/type/alias/schema-layout';

export type SchemaProps = {
	title?: string;
	value?: string;
	zoom?: number;
	showRelations?: boolean;
	highlightRelations?: boolean;
	layout?: SchemaLayout;
	draggable?: boolean;
};
