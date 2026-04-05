import { cn } from '$stylist/layout/function/script/merge-class-names';

export interface VariablesEditorStateProps {
	variables?: Record<string, any>;
	height?: string;
	class?: string;
	onChange?: (variables: Record<string, any>) => void;
}

export const createVariablesEditorState = (props: VariablesEditorStateProps) => {
	// State
	let variablesContent = $state(JSON.stringify(props.variables ?? {}, null, 2));
	let isValid = $state(true);
	const placeholderText = '{"userId": 123}';

	// Update local state when variables prop changes
	$effect(() => {
		if (props.variables !== undefined) {
			const newContent = JSON.stringify(props.variables, null, 2);
			if (variablesContent !== newContent) {
				variablesContent = newContent;
				isValid = true;
			}
		}
	});

	// Validate JSON and call onChange
	const handleInput = (e: Event) => {
		const target = e.target as HTMLTextAreaElement;
		variablesContent = target.value;

		try {
			const parsed = JSON.parse(variablesContent);
			isValid = true;
			props.onChange?.(parsed);
		} catch (error) {
			isValid = false;
			props.onChange?.({});
		}
	};

	// Format the variables JSON
	const formatVariables = () => {
		try {
			const parsed = JSON.parse(variablesContent);
			variablesContent = JSON.stringify(parsed, null, 2);
			props.onChange?.(parsed);
		} catch (error) {
			console.error('Invalid JSON', error);
		}
	};

	// Load example variables
	const loadExample = () => {
		const example = {
			userId: 123,
			postId: 456,
			limit: 10,
			filter: {
				published: true
			}
		};
		variablesContent = JSON.stringify(example, null, 2);
		props.onChange?.(example);
	};

	// Clear variables
	const clearVariables = () => {
		variablesContent = '{}';
		props.onChange?.({});
	};

	// Computed classes
	const rootClasses = $derived.by(() =>
		cn(
			'variables-editor border border-[var(--color-border-primary)] rounded-md',
			'dark:border-[var(--color-border-primary)]',
			'bg-[var(--color-background-primary)] dark:bg-[var(--color-neutral-800)]',
			'overflow-hidden',
			props.class
		)
	);

	const toolbarClasses = $derived.by(() =>
		cn(
			'toolbar bg-[var(--color-background-secondary)] dark:bg-[var(--color-neutral-700)]',
			'border-b border-[var(--color-border-primary)] dark:border-[var(--color-border-primary)]',
			'p-2 flex items-center justify-between'
		)
	);

	const labelClasses = $derived.by(() =>
		'text-xs font-medium text-[var(--color-text-primary)] dark:text-[var(--color-text-tertiary)]'
	);

	const textareaClasses = $derived.by(() =>
		cn(
			'w-full h-full p-4 font-mono text-sm border-none focus:outline-none resize-none',
			'bg-[var(--color-background-primary)] dark:bg-[var(--color-neutral-800)]',
			'text-[var(--color-text-primary)] dark:text-[var(--color-neutral-100)]',
			!isValid ? 'text-[var(--color-danger-500)]' : ''
		)
	);

	const placeholderClasses = $derived.by(() =>
		'absolute inset-0 flex items-center justify-center pointer-events-none'
	);

	const placeholderContentClasses = $derived.by(() =>
		'text-[var(--color-text-tertiary)] dark:text-[var(--color-text-secondary)] text-center p-4'
	);

	const invalidJsonBadgeClasses = $derived.by(() =>
		'absolute top-2 right-2 bg-[var(--color-danger-500)] text-[var(--color-text-inverse)] text-xs px-2 py-1 rounded'
	);

	const iconClasses = $derived.by(() => 'h-8 w-8 mx-auto mb-1');

	return {
		// State getters
		get variablesContent() {
			return variablesContent;
		},
		get isValid() {
			return isValid;
		},
		get placeholderText() {
			return placeholderText;
		},

		// Actions
		setVariablesContent(content: string) {
			variablesContent = content;
		},
		setIsValid(valid: boolean) {
			isValid = valid;
		},

		// Handlers
		handleInput,
		formatVariables,
		loadExample,
		clearVariables,

		// Classes
		rootClasses,
		toolbarClasses,
		labelClasses,
		textareaClasses,
		placeholderClasses,
		placeholderContentClasses,
		invalidJsonBadgeClasses,
		iconClasses
	};
};

export default createVariablesEditorState;
