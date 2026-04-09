<script lang="ts">
  import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';
  import { Icon as BaseIcon } from '$stylist';
  const Upload = 'upload';
  const FileText = 'file-text';
  const X = 'x';
  import { createDragDropFileUploadState } from '$stylist/file/function/state/drag-drop-file-upload';
  import type { FileType } from '$stylist/file/type/struct/drag-drop-file-upload/file-type';
  import type { Props } from '$stylist/file/type/struct/drag-drop-file-upload/props';
  import {
    handleFileSelect as handleFileSelectFn,
    handleDrop as handleDropFn,
    processFiles as processFilesFn,
    removeFile as removeFileFn,
    formatFileSize,
  } from '$stylist/file/function/script/drag-drop-file-upload';

  let props: Props = $props();

  let files = $state<FileType[]>([]);
  let isDragging = $state(false);
  let fileInputRef: HTMLInputElement | null = $state(null);
  let multiple = $derived(props.multiple ?? false);
  let accept = $derived(props.accept ?? '');
  let maxSize = $derived(props.maxSize ?? 10 * 1024 * 1024);
  const state = createDragDropFileUploadState(props);

  let restProps = $derived.by(() => {
    const {
      multiple: _multiple, accept: _accept, maxSize: _maxSize,
      disabled, class: _class, dropZoneClass, fileListClass, fileItemClass, buttonClass,
      preview, onFileSelect, onFileUpload,
      ...rest
    } = props;
    return rest;
  });

  function setIsDragging(value: boolean) {
    isDragging = value;
  }

  function updateFile(id: string, updates: Partial<FileType>) {
    files = files.map(f => f.id === id ? { ...f, ...updates } : f);
  }

  function processFilesInner(selectedFiles: FileList) {
    props.onFileSelect?.(selectedFiles);

    for (let i = 0; i < selectedFiles.length; i++) {
      const file = selectedFiles[i];

      if (file.size > maxSize) {
        console.error(`File ${file.name} exceeds max size of ${maxSize} bytes`);
        continue;
      }

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
      let progress = 0;
      const interval = setInterval(() => {
        progress += 10;
        if (progress >= 100) {
          clearInterval(interval);
          updateFile(newFile.id, { progress: 100, status: 'success' });
          props.onFileUpload?.(file);
        } else {
          updateFile(newFile.id, { progress });
        }
      }, 200);
    }
  }

  function handleFileSelect(e: Event) {
    handleFileSelectFn(e, processFilesInner);
  }

  function handleDrop(e: DragEvent) {
    handleDropFn(e, setIsDragging, processFilesInner);
  }

  function removeFile(id: string) {
    files = removeFileFn(id, files);
  }

  function triggerFileInput() {
    if (!state.disabled && fileInputRef) {
      fileInputRef.click();
    }
  }
</script>

<div class={`c-drag-drop-file-upload w-full ${state.classes}`} {...restProps}>
  <!-- Drop Zone -->
  <div
    class={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${
      isDragging ? 'border-[var(--color-primary-500)] bg-[var(--color-primary-50)]' : 'border-[var(--color-border-primary)] hover:border-[var(--color-border-primary)]'
    } ${state.disabled ? 'opacity-[var(--opacity-50)] cursor-not-allowed' : ''} ${props.dropZoneClass ?? ''}`}
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
    <BaseIcon name={Upload} class="mx-auto h-12 w-12 text-[var(--color-text-tertiary)] mb-4" />
    <p class="text-lg font-medium text-[var(--color-text-primary)]">Drag and drop files here</p>
    <p class="text-sm text-[var(--color-text-secondary)] mt-1">or click to browse</p>
    <p class="text-xs text-[var(--color-text-tertiary)] mt-2">Supports: {accept || 'All files'} | Max: {formatFileSize(maxSize)}</p>

    <input
      type="file"
      bind:this={fileInputRef}
      class="hidden"
      onchange={handleFileSelect}
      {multiple}
      {accept}
      disabled={state.disabled}
    />
  </div>

  <!-- Selected Files List -->
  {#if files.length > 0}
    <div class={`mt-4 ${props.fileListClass ?? ''}`}>
      <h4 class="text-sm font-medium text-[var(--color-text-primary)] mb-2">Selected Files:</h4>
      <ul class="space-y-2">
        {#each files as file}
          <li class={`flex items-center justify-between p-3 border rounded-md ${props.fileItemClass ?? ''} ${
            file.status === 'error' ? 'border-[var(--color-danger-200)] bg-[var(--color-danger-50)]' :
            file.status === 'success' ? 'border-[var(--color-success-200)] bg-[var(--color-success-50)]' :
            'border-[var(--color-border-primary)] bg-[var(--color-background-secondary)]'
          }`}>
            <div class="flex items-center">
              <BaseIcon name={FileText} class="h-5 w-5 text-[var(--color-text-secondary)] mr-2" />
              <div>
                <p class="text-sm font-medium text-[var(--color-text-primary)]">{file.name}</p>
                <p class="text-xs text-[var(--color-text-secondary)]">{formatFileSize(file.size)}</p>
              </div>
            </div>

            <div class="flex items-center space-x-2">
              {#if file.status === 'uploading'}
                <div class="w-24 bg-[var(--color-background-tertiary)] rounded-full h-2 mr-2">
                  <div
                    class="bg-[var(--color-primary-600)] h-2 rounded-full"
                    style={`width: ${file.progress}%`}
                  ></div>
                </div>
                <span class="text-xs text-[var(--color-text-secondary)]">{file.progress}%</span>
              {:else if file.status === 'error'}
                <span class="text-xs text-[var(--color-danger-600)]">Error</span>
              {:else if file.status === 'success'}
                <span class="text-xs text-[var(--color-success-600)]">✓ Uploaded</span>
              {/if}

              <button
                type="button"
                class="text-[var(--color-text-tertiary)] hover:text-[var(--color-text-secondary)]"
                onclick={() => removeFile(file.id)}
              >
                <BaseIcon name={X} class="h-4 w-4" />
              </button>
            </div>
          </li>
        {/each}
      </ul>
    </div>
  {/if}
</div>
