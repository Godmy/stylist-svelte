type RichTextEditorStateProps = { [key: string]: any };
import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';

export const createRichTextEditorState = (props: RichTextEditorStateProps) => {
	// SlotState
	let editorRef: HTMLDivElement | null = $state(null);
	let isFocused = $state(false);
	let showLinkInput = $state(false);
	let linkUrl = $state('');
	let content = $state(props.value ?? '');

	// Update local state when value prop changes
	$effect(() => {
		if (props.value !== undefined && content !== props.value) {
			content = props.value;
		}
	});

	function updateContent() {
		content = editorRef?.innerHTML ?? '';
		props.onValueInput?.(content);
		if (props.onInput) {
			props.onInput(content);
		}
	}

	function handleInput() {
		updateContent();
	}

	function handleChange() {
		props.onValueChange?.(content);
		if (props.onChange) {
			props.onChange(content);
		}
	}

	function formatText(command: string, value: string = '') {
		document.execCommand(command, false, value);
		editorRef?.focus();
		updateContent();
	}

	function insertLink() {
		if (linkUrl) {
			formatText('createLink', linkUrl);
			linkUrl = '';
			showLinkInput = false;
		}
	}

	function insertImage() {
		const url = prompt('Enter the image URL:');
		if (url) {
			formatText('insertImage', url);
		}
	}

	function toggleBlockquote() {
		formatText('formatBlock', 'blockquote');
	}

	function toggleHeading(level: number) {
		formatText('formatBlock', `h${level}`);
	}

	function toggleHorizontalRule() {
		formatText('insertHorizontalRule');
	}

	function handleFocus() {
		isFocused = true;
	}

	function handleBlur() {
		isFocused = false;
	}

	// Computed classes
	const rootClasses = $derived.by(() =>
		mergeClassNames(
			'border border-[var(--color-border-primary)] rounded-lg overflow-hidden',
			props.class
		)
	);

	const toolbarClasses = $derived.by(() =>
		mergeClassNames(
			'flex items-center flex-wrap p-2 border-b border-[var(--color-border-primary)] bg-[var(--color-background-secondary)] space-x-1',
			props.toolbarClass
		)
	);

	const editorClasses = $derived.by(() =>
		mergeClassNames(
			'px-4 py-3 min-h-[200px] focus:outline-none',
			isFocused ? 'ring-0' : '',
			props.editorClass
		)
	);

	const buttonClasses = $derived.by(() =>
		'p-2 rounded hover:bg-[var(--color-background-tertiary)]'
	);

	const dividerClasses = $derived.by(() =>
		'w-px h-6 bg-[var(--color-background-tertiary)] mx-1'
	);

	const linkInputClasses = $derived.by(() =>
		'absolute z-[var(--z-index-docked)] mt-1 w-64 p-3 bg-[var(--color-background-primary)] border border-[var(--color-border-primary)] rounded-md shadow-lg'
	);

	const linkInputFieldClasses = $derived.by(() =>
		'flex-1 px-2 py-1 border border-[var(--color-border-primary)] rounded-l text-sm'
	);

	const linkInputButtonClasses = $derived.by(() =>
		'px-3 py-1 bg-[var(--color-primary-500)] text-[var(--color-text-inverse)] rounded-r text-sm'
	);

	const iconButtonClasses = $derived.by(() => 'h-4 w-4');

	return {
		// SlotState getters
		get content() {
			return content;
		},
		get isFocused() {
			return isFocused;
		},
		get showLinkInput() {
			return showLinkInput;
		},
		get linkUrl() {
			return linkUrl;
		},
		get editorRef() {
			return editorRef;
		},
		set editorRef(value: HTMLDivElement | null) {
			editorRef = value;
			if (value && props.value && value.innerHTML !== props.value) {
				value.innerHTML = props.value;
			}
		},

		// Actions
		setLinkUrl(url: string) {
			linkUrl = url;
		},
		toggleLinkInput() {
			showLinkInput = !showLinkInput;
		},
		setShowLinkInput(value: boolean) {
			showLinkInput = value;
		},

		// Handlers
		handleInput,
		handleChange,
		formatText,
		insertLink,
		insertImage,
		toggleBlockquote,
		toggleHeading,
		toggleHorizontalRule,
		handleFocus,
		handleBlur,

		// Classes
		get rootClasses() {
			return rootClasses;
		},
		get toolbarClasses() {
			return toolbarClasses;
		},
		get editorClasses() {
			return editorClasses;
		},
		get buttonClasses() {
			return buttonClasses;
		},
		get dividerClasses() {
			return dividerClasses;
		},
		get linkInputClasses() {
			return linkInputClasses;
		},
		get linkInputFieldClasses() {
			return linkInputFieldClasses;
		},
		get linkInputButtonClasses() {
			return linkInputButtonClasses;
		},
		get iconButtonClasses() {
			return iconButtonClasses;
		}
	};
};

export default createRichTextEditorState;
