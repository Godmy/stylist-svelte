import type { SchemaDocument } from '$stylist/erd/type/struct/schema-document';

export type SchemaParseResult = {
	document: SchemaDocument;
	errors: readonly string[];
};
