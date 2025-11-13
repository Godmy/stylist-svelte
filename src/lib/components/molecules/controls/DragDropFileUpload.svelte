<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { Upload, FileText, X } from 'lucide-svelte';

  type FileType = {
    id: string;
    name: string;
    size: number;
    type: string;
    status: 'uploading' | 'success' | 'error';
    progress?: number;
  };

  type Props = {
    multiple?: boolean;
    accept?: string;
    maxSize?: number; // in bytes
    disabled?: boolean;
    class?: string;
    dropZoneClass?: string;
    fileListClass?: string;
    fileItemClass?: string;
    buttonClass?: string;
    preview?: boolean;
    onFileSelect?: (files: FileList) => void;
    onFileUpload?: (file: File) => void;
  } & HTMLAttributes<HTMLDivElement>;

  let {
    multiple = false,
    accept = '',
    maxSize = 10 * 1024 * 1024, // 10MB default
    disabled = false,
    class: className = '',
    dropZoneClass = '',
    fileListClass = '',
    fileItemClass = '',
    buttonClass = '',
    preview = false,
    onFileSelect,
    onFileUpload,
    ...restProps
  }: Props = $props();

  let files = $state<FileType[]>([]);
  let isDragging = $state(false);
  let fileInputRef: HTMLInputElement;

  function handleFileSelect(e: Event) {
    const target = e.target as HTMLInputElement;
    if (target.files && target.files.length > 0) {
      processFiles(target.files);
    }
  }

  function handleDrop(e: DragEvent) {
    e.preventDefault();
    isDragging = false;

    if (e.dataTransfer?.files && e.dataTransfer.files.length > 0) {
      processFiles(e.dataTransfer.files);
    }
  }

  function processFiles(selectedFiles: FileList) {
    // Call the callback if provided
    if (onFileSelect) {
      onFileSelect(selectedFiles);
    }

    for (let i = 0; i < selectedFiles.length; i++) {
      const file = selectedFiles[i];

      // Check file size
      if (file.size > maxSize) {
        console.error(`File ${file.name} exceeds max size of ${maxSize} bytes`);
        continue;
      }

      // Add file to state
      const newFile: FileType = {
        id: Math.random().toString(36).substring(2, 9),
        name: file.name,
        size: file.size,
        type: file.type,
        status: 'uploading',
        progress: 0
      };

      files = [...files, newFile];

      // Simulate upload process
      simulateUpload(newFile.id, file);
    }
  }

  function simulateUpload(fileId: string, file: File) {
    // Simulate upload progress
    const interval = setInterval(() => {
      const fileIndex = files.findIndex(f => f.id === fileId);
      if (fileIndex !== -1) {
        const currentProgress = files[fileIndex].progress || 0;
        if (currentProgress < 100) {
          files[fileIndex].progress = currentProgress + 10;
        } else {
          clearInterval(interval);
          files[fileIndex].status = 'success';
          if (onFileUpload) {
            onFileUpload(file);
          }
        }
      }
    }, 200);
  }

  function removeFile(id: string) {
    files = files.filter(file => file.id !== id);
  }

  function formatFileSize(bytes: number): string {
    if (bytes < 1024) return bytes + ' bytes';
    else if (bytes < 1048576) return (bytes / 1024).toFixed(1) + ' KB';
    else return (bytes / 1048576).toFixed(1) + ' MB';
  }

  function triggerFileInput() {
    if (!disabled && fileInputRef) {
      fileInputRef.click();
    }
  }
</script>

<div class={`w-full ${className}`} {...restProps}>
  <!-- Drop Zone -->
  <div
    class={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${
      isDragging ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-gray-400'
    } ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${dropZoneClass}`}
    ondragover={(e: DragEvent) => {
      e.preventDefault();
      isDragging = true;
    }}
    ondragleave={() => isDragging = false}
    ondrop={handleDrop}
    onclick={triggerFileInput}
    onkeydown={(e: KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        triggerFileInput();
      }
    }}
    role="button"
    tabindex={0}
  >
    <Upload class="mx-auto h-12 w-12 text-gray-400 mb-4" />
    <p class="text-lg font-medium text-gray-900">Drag and drop files here</p>
    <p class="text-sm text-gray-500 mt-1">or click to browse</p>
    <p class="text-xs text-gray-400 mt-2">Supports: {accept || 'All files'} | Max: {formatFileSize(maxSize)}</p>

    <input
      type="file"
      bind:this={fileInputRef}
      class="hidden"
      onchange={handleFileSelect}
      {multiple}
      {accept}
      disabled={disabled}
    />
  </div>

  <!-- Selected Files List -->
  {#if files.length > 0}
    <div class={`mt-4 ${fileListClass}`}>
      <h4 class="text-sm font-medium text-gray-700 mb-2">Selected Files:</h4>
      <ul class="space-y-2">
        {#each files as file}
          <li class={`flex items-center justify-between p-3 border rounded-md ${fileItemClass} ${
            file.status === 'error' ? 'border-red-200 bg-red-50' :
            file.status === 'success' ? 'border-green-200 bg-green-50' :
            'border-gray-200 bg-gray-50'
          }`}>
            <div class="flex items-center">
              <FileText class="h-5 w-5 text-gray-500 mr-2" />
              <div>
                <p class="text-sm font-medium text-gray-900">{file.name}</p>
                <p class="text-xs text-gray-500">{formatFileSize(file.size)}</p>
              </div>
            </div>

            <div class="flex items-center space-x-2">
              {#if file.status === 'uploading'}
                <div class="w-24 bg-gray-200 rounded-full h-2 mr-2">
                  <div
                    class="bg-blue-600 h-2 rounded-full"
                    style={`width: ${file.progress}%`}
                  ></div>
                </div>
                <span class="text-xs text-gray-500">{file.progress}%</span>
              {:else if file.status === 'error'}
                <span class="text-xs text-red-600">Error</span>
              {:else if file.status === 'success'}
                <span class="text-xs text-green-600">✓ Uploaded</span>
              {/if}

              <button
                type="button"
                class="text-gray-400 hover:text-gray-600"
                onclick={() => removeFile(file.id)}
              >
                <X class="h-4 w-4" />
              </button>
            </div>
          </li>
        {/each}
      </ul>
    </div>
  {/if}
</div>