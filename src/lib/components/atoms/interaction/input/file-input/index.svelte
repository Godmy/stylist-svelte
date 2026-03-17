<script lang="ts">
	import { createInputState as createBaseInputState } from '$stylist/design-system/runtime/interaction';
	import { INPUT_FIELD_PRESET } from '$stylist/design-system/runtime/input';
	import { getFileSelectionLabel } from '$stylist/design-system/utils/input';
	import type { HTMLInputAttributes } from 'svelte/elements';
	import { INPUT_VARIANTS } from '$stylist/design-system/tokens';
	import { COMPONENT_SIZE } from '$stylist/design-system/tokens/architecture/component-size';

	type Props = {
		value?: File | File[];
		multiple?: boolean;
		accept?: string;
		disabled?: boolean;
		variant?: (typeof INPUT_VARIANTS.input)[number];
		size?: (typeof COMPONENT_SIZE)[number];
		placeholder?: string;
		onFileChange?: (files: File | File[] | null) => void;
		class?: string;
	} & Omit<HTMLInputAttributes, 'size'>;

	let {
		value,
		multiple = false,
		accept = '',
		disabled = false,
		variant = 'default',
		size = 'md',
		placeholder = 'Choose file(s)...',
		onFileChange,
		class: className = '',
		...restProps
	}: Props = $props();
	const createInputState = (props: Props & Record<string, unknown>) =>
		createBaseInputState(INPUT_FIELD_PRESET, props);
	const inputState = $derived(createInputState({ variant, size, disabled, class: className }));
	let inputElement: HTMLInputElement | null = $state(null);

	let internalValue: File | File[] | null = $state(null);
	let fileName = $state('');

	// Update internal value when prop value changes
	$effect(() => {
		internalValue = value ?? null;
		fileName = getFileSelectionLabel(internalValue);
	});

	// Handle file change
	function handleFileChange(e: Event) {
		const target = e.target as HTMLInputElement;
		if (target.files && target.files.length > 0) {
			if (multiple) {
				// Convert FileList to array
				const files = Array.from(target.files);
				internalValue = files;
				fileName = `${files.length} file(s) selected`;
			} else {
				const file = target.files[0];
				internalValue = file;
				fileName = file.name;
			}

			onFileChange?.(multiple ? Array.from(target.files) : target.files[0]);
		} else {
			internalValue = null;
			fileName = '';
			onFileChange?.(null);
		}
	}

	// Clear the file input
	function clearFile() {
		internalValue = null;
		fileName = '';

		onFileChange?.(null);

		if (inputElement) {
			inputElement.value = '';
		}
	}
</script>

<div class="relative">
	<label class={`flex cursor-pointer items-center justify-center ${inputState.classes}`.trim()}>
		<input
			bind:this={inputElement}
			type="file"
			{multiple}
			{accept}
			{disabled}
			onchange={handleFileChange}
			class="sr-only"
			{...restProps}
		/>
		<span class="flex items-center">
			{#if fileName}
				<span class="mr-2 truncate">{fileName}</span>
				<button
					type="button"
					class="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
					onclick={(e) => {
						e.stopPropagation();
						clearFile();
					}}
					aria-label="Clear file"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-4 w-4"
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<path
							fill-rule="evenodd"
							d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
							clip-rule="evenodd"
						/>
					</svg>
				</button>
			{:else}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="mr-2 h-5 w-5"
					viewBox="0 0 20 20"
					fill="currentColor"
				>
					<path
						fill-rule="evenodd"
						d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
						clip-rule="evenodd"
					/>
				</svg>
				<span>{placeholder}</span>
			{/if}
		</span>
	</label>
</div>












