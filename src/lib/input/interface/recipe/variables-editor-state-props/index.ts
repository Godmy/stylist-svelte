import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
export interface VariablesEditorStateProps extends StructIntersectAll<[]> {
	variables?: Record<string, any>;
	height?: string;
	class?: string;
	onChange?: (variables: Record<string, any>) => void;
}
