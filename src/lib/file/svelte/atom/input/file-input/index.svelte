<script lang="ts">
import { resolveFileSelectionLabel } from '$stylist/file/function/script/resolve-file-selection-label';
import { createFileInputState } from '$stylist/file/function/state/file-input';
import { handleFileChange, clearFile } from '$stylist/file/function/script/file-input';
import type { Props } from '$stylist/file/type/struct/file-input';

	let props: Props = $props();
	let inputElement: HTMLInputElement | null = $state(null);
	let internalValue: File | File[] | null = $state(null);
	let fileName = $state('');
	const state = createFileInputState(props);

	// Update internal value when prop value changes
	$effect(() => {
		internalValue = props.value ?? null;
		fileName = resolveFileSelectionLabel(internalValue);
	});
</script>

<div class="relative">
	<label class={`flex cursor-pointer items-center justify-center ${state.classes}`.trim()}>
		<input
			bind:this={inputElement}
			type="file"
			multiple={props.multiple ?? false}
			accept={props.accept ?? ''}
			disabled={props.disabled ?? false}
			onchange={(e) => {
				const result = handleFileChange(e, props.multiple ?? false, props.onFileChange);
				internalValue = result.internalValue;
				fileName = result.fileName;
			}}
			class="sr-only"
		/>
		<span class="flex items-center">
			{#if fileName}
				<span class="mr-2 truncate">{fileName}</span>
				<button
					type="button"
					class="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
					onclick={(e) => {
						e.stopPropagation();
						clearFile(inputElement, props.onFileChange);
						internalValue = null;
						fileName = '';
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
				<span>{props.placeholder ?? 'Choose file(s)...'}</span>
			{/if}
		</span>
	</label>
</div>
