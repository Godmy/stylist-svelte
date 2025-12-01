<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { X } from 'lucide-svelte';

  type Props = {
    tags?: string[];
    placeholder?: string;
    disabled?: boolean;
    maxTags?: number;
    delimiter?: string; // Character that triggers tag creation
    validator?: (tag: string) => boolean; // Function to validate if a tag is valid
    class?: string;
    inputClass?: string;
    tagClass?: string;
    removeButtonClass?: string;
    onInput?: (tags: string[]) => void;
    onChange?: (tags: string[]) => void;
  } & HTMLAttributes<HTMLDivElement>;

  let {
    tags = [],
    placeholder = 'Enter tags...',
    disabled = false,
    maxTags = 0, // 0 means unlimited
    delimiter = ',',
    validator = () => true,
    class: className = '',
    inputClass = '',
    tagClass = '',
    removeButtonClass = '',
    onInput,
    onChange,
    ...restProps
  }: Props = $props();

  let currentTags = $state<string[]>([...tags]);
  let inputText = $state('');
  let inputRef: HTMLInputElement;

  // Update local state when tags prop changes
  $effect(() => {
    if (JSON.stringify(currentTags) !== JSON.stringify(tags)) {
      currentTags = [...tags];
    }
  });

  function addTag(tagText: string) {
    const trimmedTag = tagText.trim();
    
    // Check if tag is empty, already exists, or is invalid
    if (
      !trimmedTag || 
      currentTags.includes(trimmedTag) || 
      !validator(trimmedTag) ||
      (maxTags > 0 && currentTags.length >= maxTags)
    ) {
      return false;
    }
    
    currentTags = [...currentTags, trimmedTag];
    emitChange();
    return true;
  }

  function removeTag(index: number) {
    if (disabled) return;
    
    currentTags = currentTags.filter((_, i) => i !== index);
    emitChange();
  }

  function handleInput(e: Event) {
    const target = e.target as HTMLInputElement;
    const text = target.value;
    
    // Check if the input contains a delimiter
    if (text.includes(delimiter)) {
      const parts = text.split(delimiter);
      
      // Add all parts except the last one (which is still being typed)
      for (let i = 0; i < parts.length - 1; i++) {
        addTag(parts[i]);
      }
      
      // Set the input to the last part
      inputText = parts[parts.length - 1];
      target.value = inputText;
    } else {
      inputText = text;
    }
    
    if (onInput) {
      onInput([...currentTags]);
    }
  }

  function handleKeyDown(e: KeyboardEvent) {
    if (e.key === 'Enter' || e.key === delimiter) {
      e.preventDefault();
      if (addTag(inputText)) {
        inputText = '';
        if (inputRef) inputRef.value = '';
      }
    } else if (e.key === 'Backspace' && inputText === '' && currentTags.length > 0) {
      // Remove the last tag when backspace is pressed in an empty input
      removeTag(currentTags.length - 1);
    }
  }

  function emitChange() {
    if (onChange) {
      onChange([...currentTags]);
    }
  }

  function clearAll() {
    if (disabled) return;
    
    currentTags = [];
    emitChange();
  }
</script>

<div class={`flex flex-wrap items-center gap-2 ${className}`} {...restProps}>
  {#each currentTags as tag, index}
    <span class={`inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800 ${tagClass}`}>
      {tag}
      <button
        type="button"
        class={`ml-2 rounded-full hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${removeButtonClass}`}
        onclick={() => removeTag(index)}
        aria-label={`Remove tag: ${tag}`}
      >
        <X class="h-4 w-4" />
      </button>
    </span>
  {/each}
  
  <div class="relative flex-1 min-w-[150px]">
    <input
      bind:this={inputRef}
      type="text"
      class={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 ${
        disabled ? 'bg-gray-100 cursor-not-allowed' : 'bg-white'
      } ${inputClass}`}
      placeholder={currentTags.length === 0 ? placeholder : ''}
      oninput={handleInput}
      onkeydown={handleKeyDown}
      disabled={disabled || (maxTags > 0 && currentTags.length >= maxTags)}
    />
  </div>
  
  {#if currentTags.length > 0}
    <button
      type="button"
      class={`text-sm text-red-600 hover:text-red-800 ${removeButtonClass}`}
      onclick={clearAll}
      aria-label="Clear all tags"
    >
      Clear all
    </button>
  {/if}
</div>