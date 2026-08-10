import { untrack } from 'svelte';
import { clearFile } from '$stylist/file/function/script/clear-file';
import { resolveFileSelectionLabel } from '$stylist/file/function/script/resolve-file-selection-label';
import { handleFileChange } from '$stylist/file/function/script/file-input';
import type { RecipeFileInput } from '$stylist/file/interface/recipe/file-input';

export function createFileInputState(props: RecipeFileInput) {
	const variant = $derived(props.variant ?? 'default');
	const size = $derived(props.size ?? 'md');
	const disabled = $derived(props.disabled ?? false);
	const multiple = $derived(props.multiple ?? false);
	const accept = $derived(props.accept ?? '');
	const placeholder = $derived(props.placeholder ?? 'Choose file(s)...');
	const classes = $derived([props.class || ''].filter(Boolean).join(' '));

	let inputElement = $state<HTMLInputElement | null>(null);
	let internalValue = $state<File | File[] | null>(untrack(() => props.value ?? null));
	const fileName = $derived(resolveFileSelectionLabel(internalValue));

	$effect(() => {
		internalValue = props.value ?? null;
	});

	function handleChange(event: Event): void {
		const result = handleFileChange(event, multiple, props.onFileChange);

		internalValue = result.internalValue;
	}

	function clearSelection(): void {
		clearFile(inputElement, props.onFileChange);
		internalValue = null;
	}

	return {
		get variant() {
			return variant;
		},
		get size() {
			return size;
		},
		get disabled() {
			return disabled;
		},
		get multiple() {
			return multiple;
		},
		get accept() {
			return accept;
		},
		get placeholder() {
			return placeholder;
		},
		get classes() {
			return classes;
		},
		get inputElement() {
			return inputElement;
		},
		set inputElement(value: HTMLInputElement | null) {
			inputElement = value;
		},
		get internalValue() {
			return internalValue;
		},
		get fileName() {
			return fileName;
		},
		handleChange,
		clearSelection
	};
}
