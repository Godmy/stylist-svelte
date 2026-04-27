<script lang="ts">
import { createFileInputState } from '$stylist/file/function/state/file-input';
import type { Props } from '$stylist/file/type/struct/file-input';

	let props: Props = $props();
	const state = createFileInputState(props);
</script>

<div class="relative">
	<label class={`flex cursor-pointer items-center justify-center ${state.classes}`.trim()}>
		<input
			bind:this={state.inputElement}
			type="file"
			multiple={state.multiple}
			accept={state.accept}
			disabled={state.disabled}
			onchange={state.handleChange}
			class="sr-only"
		/>
		<span class="flex items-center">
			{#if state.fileName}
				<span class="mr-2 truncate">{state.fileName}</span>
				<button
					type="button"
					class="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
					onclick={(e) => {
						e.stopPropagation();
						state.clearSelection();
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
				<span>{state.placeholder}</span>
			{/if}
		</span>
	</label>
</div>
