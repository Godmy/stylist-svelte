export interface VariablesEditorStateProps {
	variables?: Record<string, any>;
	height?: string;
	class?: string;
	onChange?: (variables: Record<string, any>) => void;
}
