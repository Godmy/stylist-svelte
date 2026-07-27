import type { SchemaField } from '$stylist/erd/type/struct/schema-field';

export interface RecipeErdTableField {
	field: SchemaField;
	active?: boolean;
	related?: boolean;
}
