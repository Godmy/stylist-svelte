<script lang="ts">
  import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';
  import type { Snippet } from 'svelte';
  import { Button } from '$stylist';

  type UploadStatus = 'idle' | 'uploading' | 'success' | 'error';

  type Props = {
    /**
     * Acceptable file types
     */
    accept?: string;
    /**
     * Maximum file size in bytes
     */
    maxSize?: number;
    /**
     * Whether multiple files can be selected
     */
    multiple?: boolean;
    /**
     * Upload status
     */
    status?: UploadStatus;
    /**
     * Uploaded file
     */
    file?: File | null;
    /**
     * On file selection handler
     */
    onFileSelect?: (file: File | FileList | null) => void;
    /**
     * On upload handler
     */
    onUpload?: (file: File) => Promise<void>;
    /**
     * Content snippet for customization
     */
    children?: Snippet;
    /**
     * Whether the file upload is disabled
     */
    disabled?: boolean;
    /**
     * Text to display in the upload area
     */
    uploadText?: string;
  } & InteractionHTMLAttributes<HTMLDivElement>;

  let {
    accept = '.pdf,.doc,.docx,.xls,.xlsx,.txt',
    maxSize = 10 * 1024 * 1024, // 10MB
    multiple = false,
    status = 'idle',
    file = null,
    onFileSelect,
    onUpload,
    children,
    disabled = false,
    uploadText = 'или перетащить сюда',
    class: className = '',
    ...restProps
  }: Props = $props();

  // Handle file selection
  function handleFileSelect(e: Event) {
    const target = e.target as HTMLInputElement;
    const files = target.files;

    if (files) {
      if (multiple) {
        onFileSelect?.(files);
      } else {
        onFileSelect?.(files[0]);
      }
    }
  }

  // Upload file
  async function handleUpload() {
    if (file && onUpload) {
      try {
        await onUpload(file);
      } catch (error) {
        console.error('Upload error:', error);
      }
    }
  }
</script>

<div class={`file-upload-container ${className}`} {...restProps}>
  {#if children}
    {@render children()}
  {:else}
    <div class="file-upload-area border-2 border-dashed border-[var(--color-border-primary)] rounded-lg p-6 text-center bg-[var(--color-background-secondary)]" class:opacity-[var(--opacity-50)]={disabled}>
      <svg class="mx-auto h-12 w-12 text-[var(--color-text-tertiary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
      </svg>
      <p class="mt-2 text-sm text-[var(--color-text-secondary)]">
        <label for="file-upload" class="relative cursor-pointer bg-[var(--color-background-primary)] rounded-md font-medium text-[var(--color-primary-600)] hover:text-[var(--color-primary-500)]" class:cursor-not-allowed={disabled}>
          <span>Загрузить файл</span>
          <input
            id="file-upload"
            type="file"
            class="sr-only"
            accept={accept}
            onchange={handleFileSelect}
            multiple={multiple}
            disabled={disabled}
          />
        </label>
        <span class="pl-1">{uploadText}</span>
      </p>
      <p class="mt-1 text-xs text-[var(--color-text-secondary)]">
        {accept.replace('.', '').replace(/,/g, ', ')} файлов до {(maxSize / (1024 * 1024)).toFixed(0)}MB
      </p>
    </div>

    {#if file}
      <div class="file-info mt-4 p-4 bg-[var(--color-background-primary)] border border-[var(--color-border-primary)] rounded-lg">
        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <svg class="h-8 w-8 text-[var(--color-text-tertiary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <div class="ml-4">
              <div class="text-sm font-medium text-[var(--color-text-primary)]">{file.name}</div>
              <div class="text-sm text-[var(--color-text-secondary)]">{(file.size / 1024).toFixed(1)}KB</div>
            </div>
          </div>
          <Button variant="ghost" size="sm" onclick={() => onFileSelect?.(null)} disabled={disabled}>
            <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </Button>
        </div>

        {#if status === 'uploading'}
          <div class="mt-4">
            <div class="flex items-center">
              <div class="flex-1 bg-[var(--color-background-tertiary)] rounded-full h-2">
                <div class="bg-[var(--color-primary-600)] h-2 rounded-full" style="width: 50%;"></div>
              </div>
              <div class="ml-3 text-sm text-[var(--color-text-secondary)]">50%</div>
            </div>
          </div>
        {:else if status === 'success'}
          <div class="mt-4 flex items-center text-sm text-[var(--color-success-600)]">
            <svg class="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Файл успешно загружен
          </div>
        {:else if status === 'error'}
          <div class="mt-4 flex items-center text-sm text-[var(--color-danger-600)]">
            <svg class="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Ошибка загрузки файла
          </div>
        {/if}
      </div>
    {/if}
  {/if}
</div>

<style>
  .file-upload-area {
    transition: all var(--duration-200) var(--animation-ease);
  }

  .file-upload-area:hover {
    border-color: var(--color-secondary-400);
  }

  .file-info {
    animation: fadeIn var(--duration-300) var(--animation-ease);
  }

  @keyframes fadeIn {
    from { opacity: var(--opacity-0); transform: translateY(-10px); }
    to { opacity: var(--opacity-100); transform: translateY(var(--opacity-0)); }
  }
</style>



