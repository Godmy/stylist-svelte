<script lang="ts">
	import { Icon as BaseIcon } from '$stylist/media';
	import { createDragDropFileUploadState } from '$stylist/file/function/state/drag-drop-file-upload';
	import type { Props } from '$stylist/file/type/struct/drag-drop-file-upload/props';

	let props: Props = $props();
	const state = createDragDropFileUploadState(props);
</script>

<div class={`c-drag-drop-file-upload w-full ${state.classes}`} {...state.restProps}>
	<div
		class={`cursor-pointer rounded-lg border-2 border-dashed p-8 text-center transition-colors ${
			state.isDragging
				? 'border-[var(--color-primary-500)] bg-[var(--color-primary-50)]'
				: 'border-[var(--color-border-primary)] hover:border-[var(--color-border-primary)]'
		} ${state.disabled ? 'cursor-not-allowed opacity-[var(--opacity-50)]' : ''} ${props.dropZoneClass ?? ''}`}
		ondragover={state.handleDragOver}
		ondragleave={state.handleDragLeave}
		ondrop={state.handleDrop}
		onclick={state.triggerFileInput}
		onkeydown={(event) => {
			if (event.key === 'Enter' || event.key === ' ') {
				event.preventDefault();
				state.triggerFileInput();
			}
		}}
		role="button"
		tabindex={0}
	>
		<BaseIcon name="upload" class="mx-auto mb-4 h-12 w-12 text-[var(--color-text-tertiary)]" />
		<p class="text-lg font-medium text-[var(--color-text-primary)]">Drag and drop files here</p>
		<p class="mt-1 text-sm text-[var(--color-text-secondary)]">or click to browse</p>
		<p class="mt-2 text-xs text-[var(--color-text-tertiary)]">
			Supports: {state.accept || 'All files'} | Max: {state.maxSizeLabel}
		</p>

		<input
			bind:this={state.fileInputElement}
			type="file"
			class="hidden"
			onchange={state.handleFileSelect}
			multiple={state.multiple}
			accept={state.accept}
			disabled={state.disabled}
		/>
	</div>

	{#if state.files.length > 0}
		<div class={`mt-4 ${props.fileListClass ?? ''}`}>
			<h4 class="mb-2 text-sm font-medium text-[var(--color-text-primary)]">Selected Files:</h4>
			<ul class="space-y-2">
				{#each state.files as file}
					<li
						class={`flex items-center justify-between rounded-md border p-3 ${props.fileItemClass ?? ''} ${
							file.status === 'error'
								? 'border-[var(--color-danger-200)] bg-[var(--color-danger-50)]'
								: file.status === 'success'
									? 'border-[var(--color-success-200)] bg-[var(--color-success-50)]'
									: 'border-[var(--color-border-primary)] bg-[var(--color-background-secondary)]'
						}`}
					>
						<div class="flex items-center">
							<BaseIcon name="file-text" class="mr-2 h-5 w-5 text-[var(--color-text-secondary)]" />
							<div>
								<p class="text-sm font-medium text-[var(--color-text-primary)]">{file.name}</p>
								<p class="text-xs text-[var(--color-text-secondary)]">{file.size} B</p>
							</div>
						</div>

						<div class="flex items-center space-x-2">
							{#if file.status === 'uploading'}
								<div class="mr-2 h-2 w-24 rounded-full bg-[var(--color-background-tertiary)]">
									<div
										class="h-2 rounded-full bg-[var(--color-primary-600)]"
										style={`width: ${file.progress}%`}
									></div>
								</div>
								<span class="text-xs text-[var(--color-text-secondary)]">{file.progress}%</span>
							{:else if file.status === 'error'}
								<span class="text-xs text-[var(--color-danger-600)]">Error</span>
							{:else if file.status === 'success'}
								<span class="text-xs text-[var(--color-success-600)]">Uploaded</span>
							{/if}

							<button
								type="button"
								class="text-[var(--color-text-tertiary)] hover:text-[var(--color-text-secondary)]"
								onclick={() => state.removeFile(file.id)}
							>
								<BaseIcon name="x" class="h-4 w-4" />
							</button>
						</div>
					</li>
				{/each}
			</ul>
		</div>
	{/if}
</div>
