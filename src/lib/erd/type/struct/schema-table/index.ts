import type { SchemaField } from '$stylist/erd/type/struct/schema-field';

export type SchemaTable = {
	id: string;
	name: string;
	fields: readonly SchemaField[];
};
