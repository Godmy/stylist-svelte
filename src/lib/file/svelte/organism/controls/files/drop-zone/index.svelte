<script lang="ts">
  import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';
  import type { Snippet } from 'svelte';
  import { Icon as BaseIcon } from '$stylist';
const Upload = 'upload';
const X = 'x';
const Check = 'check';

  import { Button } from '$stylist';

  type DropItem = {
    id: string;
    name: string;
    type: string;
    size?: number;
    data?: any;
  };

  type RestProps = Omit<InteractionHTMLAttributes<HTMLDivElement>, 'class'>;

  type Props = RestProps & {
    children?: Snippet;
    class?: string;
    accept?: string;
    multiple?: boolean;
    disabled?: boolean;
    maxSize?: number; // in bytes
    maxItems?: number;
    onDrop?: (items: DropItem[]) => void;
    onDragOver?: (items: DragEvent) => void;
    onDragLeave?: (items: DragEvent) => void;
    onItemAdded?: (item: DropItem) => void;
    onItemRemoved?: (item: DropItem) => void;
    preview?: boolean;
    label?: string;
    description?: string;
  };

  let {
    children,
    class: hostClass = '',
    accept = '*',
    multiple = true,
    disabled = false,
    maxSize = Infinity,
    maxItems = Infinity,
    onDrop,
    onDragOver,
    onDragLeave,
    onItemAdded,
    onItemRemoved,
    preview = true,
    label = 'Drop files here',
    description = 'or click to browse',
    ...restProps
  }: Props = $props();

  let isDragOver = $state(false);
  let items = $state<DropItem[]>([]);
  let isProcessing = $state(false);

  function handleDragOver(e: DragEvent) {
    e.preventDefault();
    isDragOver = true;
    onDragOver?.(e);
  }

  function handleDragLeave(e: DragEvent) {
    e.preventDefault();
    isDragOver = false;
    onDragLeave?.(e);
  }

  function handleDrop(e: DragEvent) {
    e.preventDefault();
    isDragOver = false;

    if (disabled) return;

    const files = e.dataTransfer?.files;
    if (files && files.length > 0) {
      processFiles(files);
    }
  }

  function handleFileInput(e: Event) {
    if (disabled) return;

    const target = e.target as HTMLInputElement;
    if (target.files && target.files.length > 0) {
      processFiles(target.files);
    }
  }

  function processFiles(fileList: FileList) {
    isProcessing = true;
    const newItems: DropItem[] = [];

    for (let i = 0; i < fileList.length; i++) {
      const file = fileList[i];

      // Check file size
      if (file.size > maxSize) {
        console.warn(`File ${file.name} exceeds max size of ${maxSize} bytes`);
        continue;
      }

      // Check file type
      if (accept !== '*' && !accept.split(',').some(type =>
        type.trim().startsWith('.')
          ? file.name.toLowerCase().endsWith(type.trim().toLowerCase())
          : file.type.startsWith(type.trim())
      )) {
        console.warn(`File ${file.name} is not of accepted type ${accept}`);
        continue;
      }

      // Check max items limit
      if (items.length + newItems.length >= maxItems) {
        console.warn(`Maximum number of items (${maxItems}) reached`);
        break;
      }

      const newItem: DropItem = {
        id: `${file.name}-${file.size}-${file.lastModified}`,
        name: file.name,
        type: file.type || 'unknown',
        size: file.size,
        data: file
      };

      newItems.push(newItem);
      onItemAdded?.(newItem);
    }

    if (newItems.length > 0) {
      const allItems = [...items, ...newItems];
      items = allItems;
      onDrop?.(allItems);
    }

    isProcessing = false;
  }

  function removeItem(id: string) {
    const item = items.find(i => i.id === id);
    if (item) {
      items = items.filter(i => i.id !== id);
      onItemRemoved?.(item);
    }
  }

  function clearAll() {
    items = [];
  }

  // Convert bytes to human-readable format
  function formatFileSize(bytes: number): string {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }
</script>

<div
  class={`c-drop-zone border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors ${
    isDragOver ? 'border-[var(--color-primary-500)] bg-[var(--color-primary-50)]' : 'border-[var(--color-border-primary)] hover:border-[var(--color-border-primary)]'
  } ${disabled ? 'opacity-[var(--opacity-50)] cursor-not-allowed' : ''} ${hostClass}`}
  ondragover={handleDragOver}
  ondragleave={handleDragLeave}
  ondrop={handleDrop}
  {...restProps}
>
  {#if children}
    {@render children()}
  {:else}
    <div class="flex flex-col items-center justify-center">
      <BaseIcon name={Upload} class="h-10 w-10 text-[var(--color-text-tertiary)] mb-2" />
      <h3 class="text-lg font-medium text-[var(--color-text-primary)]">{label}</h3>
      <p class="text-sm text-[var(--color-text-secondary)] mt-1">{description}</p>
      <p class="text-xs text-[var(--color-text-tertiary)] mt-2">Accepts: {accept}</p>
    </div>

    <input
      type="file"
      class="hidden"
      accept={accept}
      multiple={multiple}
      disabled={disabled}
      onchange={handleFileInput}
    />

    <div class="mt-4">
      <Button
        variant="secondary"
        onclick={(e) => {
          e.preventDefault();
          const element = e.target as HTMLElement;
          const parentElement = element.parentElement;
          const fileInput = parentElement ? parentElement.querySelector('input[type="file"]') : null;
          if (fileInput) (fileInput as HTMLInputElement).click();
        }}
        disabled={disabled}
      >
        Browse Files
      </Button>
    </div>
  {/if}

  {#if items.length > 0}
    <div class="mt-6">
      <div class="flex justify-between items-center mb-3">
        <h4 class="text-md font-medium text-[var(--color-text-primary)]">Dropped Items ({items.length})</h4>
        <Button
          variant="ghost"
          size="sm"
          onclick={clearAll}
          disabled={disabled}
        >
          Clear All
        </Button>
      </div>

      <div class="space-y-2 max-h-60 overflow-y-auto">
        {#each items as item}
          <div class="flex items-center justify-between p-3 bg-[var(--color-background-primary)] border border-[var(--color-border-primary)] rounded-md">
            <div class="flex items-center truncate">
              <div class="flex-shrink-0 h-5 w-5 text-[var(--color-primary-500)]">
                <BaseIcon name={Check} class="h-5 w-5" />
              </div>
              <div class="ml-3 min-w-0">
                <p class="text-sm font-medium text-[var(--color-text-primary)] truncate">{item.name}</p>
                <p class="text-xs text-[var(--color-text-secondary)]">{item.type} • {formatFileSize(item.size || 0)}</p>
              </div>
            </div>

            <div class="flex items-center">
              <Button
                variant="ghost"
                size="sm"
                onclick={() => removeItem(item.id)}
                disabled={disabled}
              >
                <BaseIcon name={X} class="h-4 w-4" />
              </Button>
            </div>
          </div>
        {/each}
      </div>
    </div>
  {/if}

  {#if isProcessing}
    <div class="mt-4 flex justify-center">
      <div class="text-sm text-[var(--color-text-secondary)]">Processing...</div>
    </div>
  {/if}
</div>





