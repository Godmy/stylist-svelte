<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import type { Snippet } from 'svelte';
  import Button from '../../atoms/controls/Button.svelte';
  import Icon from '../../atoms/media/Icon.svelte';
  
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
  } & HTMLAttributes<HTMLDivElement>;

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
    <div class="file-upload-area border-2 border-dashed border-gray-300 rounded-lg p-6 text-center bg-gray-50" class:opacity-50={disabled}>
      <Icon name="upload" class="mx-auto h-12 w-12 text-gray-400" />
      <p class="mt-2 text-sm text-gray-600">
        <label for="file-upload" class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500" class:cursor-not-allowed={disabled}>
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
      <p class="mt-1 text-xs text-gray-500">
        {accept.replace('.', '').replace(/,/g, ', ')} файлов до {(maxSize / (1024 * 1024)).toFixed(0)}MB
      </p>
    </div>
    
    {#if file}
      <div class="file-info mt-4 p-4 bg-white border border-gray-200 rounded-lg">
        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <Icon name="file" class="h-8 w-8 text-gray-400" />
            <div class="ml-4">
              <div class="text-sm font-medium text-gray-900">{file.name}</div>
              <div class="text-sm text-gray-500">{(file.size / 1024).toFixed(1)}KB</div>
            </div>
          </div>
          <Button variant="ghost" size="sm" onclick={() => onFileSelect?.(null)} disabled={disabled}>
            <Icon name="x" class="h-4 w-4" />
          </Button>
        </div>
        
        {#if status === 'uploading'}
          <div class="mt-4">
            <div class="flex items-center">
              <div class="flex-1 bg-gray-200 rounded-full h-2">
                <div class="bg-indigo-600 h-2 rounded-full" style="width: 50%;"></div>
              </div>
              <div class="ml-3 text-sm text-gray-500">50%</div>
            </div>
          </div>
        {:else if status === 'success'}
          <div class="mt-4 flex items-center text-sm text-green-600">
            <Icon name="check-circle" class="h-5 w-5 mr-2" />
            Файл успешно загружен
          </div>
        {:else if status === 'error'}
          <div class="mt-4 flex items-center text-sm text-red-600">
            <Icon name="x-circle" class="h-5 w-5 mr-2" />
            Ошибка загрузки файла
          </div>
        {/if}
      </div>
    {/if}
  {/if}
</div>

<style>
  .file-upload-area {
    transition: all 0.2s ease;
  }
  
  .file-upload-area:hover {
    border-color: #a78bfa;
  }
  
  .file-info {
    animation: fadeIn 0.3s ease;
  }
  
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
  }
</style>