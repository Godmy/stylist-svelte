import type { SchemaFormField } from '$stylist/form/type/struct/schema-form-field';

export interface RecipeSchemaFormDialog {
	isOpen: boolean;
	mode: 'create' | 'edit';
	title: string;
	subtitle?: string;
	fields: SchemaFormField[];
	initialData?: Record<string, unknown>;
	onClose: () => void;
	onSave: (data: Record<string, unknown>) => Promise<void>;
}
