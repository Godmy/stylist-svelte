import type { SchemaField } from '$stylist/erd/type/struct/schema-field';

export type SchemaTableFieldProps = {
	field: SchemaField;
	active?: boolean;
	related?: boolean;
};
