<script lang="ts">
  import { Button } from '$stylist';
  import { createFileUploadState } from '$stylist/file/function/state/file-upload';
  import type { Props } from '$stylist/file/type/struct/file-upload/props';

  let props: Props = $props();
  const state = createFileUploadState(props);
</script>

<div class={`file-upload-container ${state.className}`} {...state.restProps}>
  {#if state.children}
    {@render state.children()}
  {:else}
    <div class="file-upload-area border-2 border-dashed border-[var(--color-border-primary)] rounded-lg p-6 text-center bg-[var(--color-background-secondary)]" class:opacity-[var(--opacity-50)]={state.disabled}>
      <svg class="mx-auto h-12 w-12 text-[var(--color-text-tertiary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
      </svg>
      <p class="mt-2 text-sm text-[var(--color-text-secondary)]">
        <label for="file-upload" class="relative cursor-pointer bg-[var(--color-background-primary)] rounded-md font-medium text-[var(--color-primary-600)] hover:text-[var(--color-primary-500)]" class:cursor-not-allowed={state.disabled}>
          <span>Select file</span>
          <input id="file-upload" type="file" class="sr-only" accept={state.accept} onchange={state.handleFileSelect} multiple={state.multiple} disabled={state.disabled} />
          </label>
          <span class="pl-1">{state.uploadText}</span>
          </p>
          <p class="mt-1 text-xs text-[var(--color-text-secondary)]">
          {state.accept.replace('.', '').replace(/,/g, ', ')} up to {(state.maxSize / (1024 * 1024)).toFixed(0)}MB
          </p>
          </div>


    {#if state.file}
      <div class="file-info mt-4 p-4 bg-[var(--color-background-primary)] border border-[var(--color-border-primary)] rounded-lg">
        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <svg class="h-8 w-8 text-[var(--color-text-tertiary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <div class="ml-4">
              <div class="text-sm font-medium text-[var(--color-text-primary)]">{state.file.name}</div>
              <div class="text-sm text-[var(--color-text-secondary)]">{(state.file.size / 1024).toFixed(1)}KB</div>
            </div>
          </div>
          <Button variant="ghost" size="sm" onclick={state.clearFile} disabled={state.disabled}>
            <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </Button>
        </div>

        {#if state.status === 'uploading'}
          <div class="mt-4">
            <div class="w-full bg-[var(--color-background-secondary)] rounded-full h-2.5">
              <div class="bg-[var(--color-primary-600)] h-2.5 rounded-full animate-pulse" style="width: 45%"></div>
            </div>
            <p class="mt-2 text-sm text-[var(--color-text-secondary)]">Uploading...</p>
          </div>
        {:else if state.status === 'success'}
          <div class="mt-4 flex items-center text-[var(--color-success-600)] text-sm">
            <svg class="h-5 w-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            File uploaded successfully
          </div>
        {:else if state.status === 'error'}
          <div class="mt-4 flex items-center text-[var(--color-danger-600)] text-sm">
            <svg class="h-5 w-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
            Error uploading file
          </div>
        {/if}

        {#if state.status !== 'uploading' && state.status !== 'success'}
          <div class="mt-4">
            <Button variant="primary" size="md" onclick={state.handleUpload} disabled={state.disabled || !state.file}>
              Upload
            </Button>
          </div>
        {/if}

      </div>
    {/if}
  {/if}
</div>
