<script lang="ts">
  import type { HTMLInputAttributes } from 'svelte/elements';

  type Props = {
    value?: File | File[];
    multiple?: boolean;
    accept?: string;
    disabled?: boolean;
    placeholder?: string;
  } & HTMLInputAttributes;

  let {
    value,
    multiple = false,
    accept = '',
    disabled = false,
    placeholder = 'Choose file(s)...',
    ...restProps
  }: Props = $props();

  let internalValue: File | File[] | null = $state(null);
  let fileName = $state('');

  // Update internal value when prop value changes
  $effect(() => {
    if (value) {
      internalValue = value;
      if (Array.isArray(value)) {
        fileName = value.length > 0 ? `${value.length} file(s) selected` : '';
      } else {
        fileName = value?.name || '';
      }
    }
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
      
      // Dispatch event to notify parent of change
      const event = new CustomEvent('fileChange', { detail: { files: multiple ? Array.from(target.files) : target.files[0] } });
      dispatchEvent(event);
    } else {
      internalValue = null;
      fileName = '';
      
      // Dispatch event to notify parent of change
      const event = new CustomEvent('fileChange', { detail: { files: null } });
      dispatchEvent(event);
    }
  }

  // Clear the file input
  function clearFile() {
    internalValue = null;
    fileName = '';
    
    // Dispatch event to notify parent of change
    const event = new CustomEvent('fileChange', { detail: { files: null } });
    dispatchEvent(event);
    
    // Reset the actual input element
    const inputElement = document.querySelector('input[type="file"]') as HTMLInputElement;
    if (inputElement) {
      inputElement.value = '';
    }
  }
</script>

<div class="relative">
  <label class="flex items-center justify-center w-full h-10 px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
    <input
      type="file"
      multiple={multiple}
      accept={accept}
      disabled={disabled}
      onchange={handleFileChange}
      class="sr-only"
      {...restProps}
    />
    <span class="flex items-center">
      {#if fileName}
        <span class="truncate mr-2">{fileName}</span>
        <button 
          type="button" 
          class="text-gray-500 hover:text-gray-700"
          onclick={e => { e.stopPropagation(); clearFile(); }}
          aria-label="Clear file"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
          </svg>
        </button>
      {:else}
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd" />
        </svg>
        <span>{placeholder}</span>
      {/if}
    </span>
  </label>
</div>