import { cn } from '$stylist/layout/function/script/merge-class-names';

export type ContentType = 'text' | 'image' | 'quote' | 'divider' | 'header' | 'list';

export interface ContentElement {
	id: string;
	type: ContentType;
	content: string;
	attributes?: Record<string, any>;
}

export interface ContentEditorStateProps {
	initialContent?: ContentElement[];
	onSave?: (content: ContentElement[]) => void;
	onPreview?: () => void;
	placeholder?: string;
	showToolbar?: boolean;
	showPreviewButton?: boolean;
	class?: string;
	toolbarClass?: string;
	editorClass?: string;
	contentClass?: string;
}

export const createContentEditorState = (props: ContentEditorStateProps) => {
	// State
	let contentElements = $state<ContentElement[]>(props.initialContent ?? [{ id: '1', type: 'text', content: '' }]);
	let activeElementId: string | null = $state(null);
	let isPreviewMode = $state(false);

	// Set the first element as active by default
	$effect(() => {
		if (contentElements.length > 0 && !activeElementId) {
			activeElementId = contentElements[0].id;
		}
	});

	function updateContent(id: string, newContent: string) {
		contentElements = contentElements.map(el =>
			el.id === id ? { ...el, content: newContent } : el
		);
	}

	function addNewElement(index: number, type: ContentType = 'text') {
		const newElement: ContentElement = {
			id: `element-${Date.now()}`,
			type,
			content: ''
		};

		contentElements = [
			...contentElements.slice(0, index + 1),
			newElement,
			...contentElements.slice(index + 1)
		];

		activeElementId = newElement.id;
	}

	function deleteElement(id: string) {
		if (contentElements.length <= 1) return;

		const index = contentElements.findIndex(el => el.id === id);
		contentElements = contentElements.filter(el => el.id !== id);

		if (activeElementId === id) {
			activeElementId = index > 0
				? contentElements[index - 1].id
				: contentElements[0]?.id || null;
		}
	}

	function moveElement(id: string, direction: 'up' | 'down') {
		const index = contentElements.findIndex(el => el.id === id);
		if (index === -1) return;

		if (direction === 'up' && index > 0) {
			const newElements = [...contentElements];
			[newElements[index - 1], newElements[index]] = [newElements[index], newElements[index - 1]];
			contentElements = newElements;
		} else if (direction === 'down' && index < contentElements.length - 1) {
			const newElements = [...contentElements];
			[newElements[index + 1], newElements[index]] = [newElements[index], newElements[index + 1]];
			contentElements = newElements;
		}
	}

	function formatText(command: string) {
		document.execCommand(command, false);
	}

	function togglePreview() {
		isPreviewMode = !isPreviewMode;
		props.onPreview?.();
	}

	function handleSave() {
		props.onSave?.(contentElements);
	}

	function setActiveElementId(id: string | null) {
		activeElementId = id;
	}

	function setIsPreviewMode(value: boolean) {
		isPreviewMode = value;
	}

	// Computed classes
	const rootClasses = $derived.by(() =>
		cn(
			'c-content-editor border border-[var(--color-border-primary)] rounded-lg overflow-hidden',
			props.class
		)
	);

	const toolbarClasses = $derived.by(() =>
		cn(
			'flex items-center p-2 border-b border-[var(--color-border-primary)] bg-[var(--color-background-secondary)] space-x-1',
			props.toolbarClass
		)
	);

	const editorClasses = $derived.by(() =>
		cn('p-4', props.editorClass)
	);

	const contentClasses = $derived.by(() =>
		cn('mb-4 p-2 border rounded', props.contentClass)
	);

	const activeElementClasses = $derived.by(() =>
		'border-[var(--color-primary-500)]'
	);

	const inactiveElementClasses = $derived.by(() =>
		'border-transparent'
	);

	const buttonClasses = $derived.by(() =>
		'p-2 rounded hover:bg-[var(--color-background-tertiary)]'
	);

	const dividerClasses = $derived.by(() =>
		'w-px h-6 bg-[var(--color-background-tertiary)] mx-1'
	);

	const iconButtonClasses = $derived.by(() => 'h-4 w-4');

	const moveButtonClasses = $derived.by(() =>
		'text-[var(--color-text-tertiary)] hover:text-[var(--color-text-secondary)] p-1'
	);

	const deleteButtonClasses = $derived.by(() =>
		'text-[var(--color-text-tertiary)] hover:text-[var(--color-danger-500)] p-1'
	);

	const addButtonTextClasses = $derived.by(() =>
		'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] text-sm font-medium flex items-center'
	);

	const addIconClasses = $derived.by(() => 'h-4 w-4 mr-1');

	const previewClasses = $derived.by(() => 'prose max-w-none');

	const headingClasses = $derived.by(() => 'text-2xl font-bold mb-4');

	const quoteClasses = $derived.by(() => 'border-l-4 border-[var(--color-border-primary)] pl-4 italic my-4');

	const listClasses = $derived.by(() => 'list-disc pl-5 my-4');

	const textareaClasses = $derived.by(() => 'w-full focus:outline-none');

	const headingInputClasses = $derived.by(() => 'w-full text-2xl font-bold focus:outline-none');

	const quoteTextareaClasses = $derived.by(() => 'w-full italic focus:outline-none border-l-4 border-[var(--color-border-primary)] pl-4');

	const imagePlaceholderClasses = $derived.by(() =>
		'border-2 border-dashed border-[var(--color-border-primary)] rounded flex flex-col items-center justify-center p-8'
	);

	const imagePlaceholderIconClasses = $derived.by(() => 'h-10 w-10 text-[var(--color-text-tertiary)] mb-2');

	const imagePlaceholderTextClasses = $derived.by(() => 'text-[var(--color-text-secondary)]');

	const imagePlaceholderHintClasses = $derived.by(() => 'text-sm text-[var(--color-text-tertiary)] mt-1');

	return {
		// State getters
		get contentElements() {
			return contentElements;
		},
		get activeElementId() {
			return activeElementId;
		},
		get isPreviewMode() {
			return isPreviewMode;
		},

		// Actions
		setActiveElementId,
		setIsPreviewMode,
		setContentElements(elements: ContentElement[]) {
			contentElements = elements;
		},

		// Handlers
		updateContent,
		addNewElement,
		deleteElement,
		moveElement,
		formatText,
		togglePreview,
		handleSave,

		// Classes
		rootClasses,
		toolbarClasses,
		editorClasses,
		contentClasses,
		activeElementClasses,
		inactiveElementClasses,
		buttonClasses,
		dividerClasses,
		iconButtonClasses,
		moveButtonClasses,
		deleteButtonClasses,
		addButtonTextClasses,
		addIconClasses,
		previewClasses,
		headingClasses,
		quoteClasses,
		listClasses,
		textareaClasses,
		headingInputClasses,
		quoteTextareaClasses,
		imagePlaceholderClasses,
		imagePlaceholderIconClasses,
		imagePlaceholderTextClasses,
		imagePlaceholderHintClasses
	};
};

export default createContentEditorState;
