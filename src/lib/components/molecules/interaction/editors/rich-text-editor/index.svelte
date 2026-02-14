<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { 
    Bold, 
    Italic, 
    Underline, 
    AlignLeft, 
    AlignCenter, 
    AlignRight, 
    List, 
    ListOrdered, 
    Quote, 
    Type,
    Link,
    Image,
    MoreHorizontal,
    Hash,
    Minus
  } from 'lucide-svelte';

  type Props = {
    value?: string;
    placeholder?: string;
    onValueInput?: (content: string) => void;
    onValueChange?: (content: string) => void;
    /** @deprecated use onValueInput */
    onInput?: (content: string) => void;
    /** @deprecated use onValueChange */
    onChange?: (content: string) => void;
    showToolbar?: boolean;
    toolbarPosition?: 'top' | 'bottom';
    class?: string;
    toolbarClass?: string;
    editorClass?: string;
  } & HTMLAttributes<HTMLDivElement>;

  let {
    value = '',
    placeholder = 'Write something amazing...',
    onValueInput,
    onValueChange,
    onInput,
    onChange,
    showToolbar = true,
    toolbarPosition = 'top',
    class: className = '',
    toolbarClass = '',
    editorClass = '',
    ...restProps
  } = $props();

  let content = $state(value);
  let editorRef: HTMLDivElement;
  let isFocused = $state(false);
  let showLinkInput = $state(false);
  let linkUrl = $state('');

  // Update local state when value prop changes
  $effect(() => {
    if (content !== value) {
      content = value;
    }
  });

  function updateContent() {
    content = editorRef?.innerHTML || '';
    onValueInput?.(content);
    if (onInput) {
      onInput(content);
    }
  }

  function handleInput() {
    updateContent();
  }

  function handleChange() {
    onValueChange?.(content);
    if (onChange) {
      onChange(content);
    }
  }

  function formatText(command: string, value: string = '') {
    document.execCommand(command, false, value);
    editorRef?.focus();
    updateContent();
  }

  function insertLink() {
    if (linkUrl) {
      formatText('createLink', linkUrl);
      linkUrl = '';
      showLinkInput = false;
    }
  }

  function insertImage() {
    const url = prompt('Enter the image URL:');
    if (url) {
      formatText('insertImage', url);
    }
  }

  function toggleBlockquote() {
    formatText('formatBlock', 'blockquote');
  }

  function toggleHeading(level: number) {
    formatText('formatBlock', `h${level}`);
  }

  function toggleHorizontalRule() {
    formatText('insertHorizontalRule');
  }
</script>

<div class={`border border-gray-200 rounded-lg overflow-hidden ${className}`} {...restProps}>
  {#if showToolbar && toolbarPosition === 'top'}
    <div class={`flex items-center flex-wrap p-2 border-b border-gray-200 bg-gray-50 space-x-1 ${toolbarClass}`}>
      <button
        type="button"
        class="p-2 rounded hover:bg-gray-200"
        onclick={() => formatText('bold')}
        title="Bold"
      >
        <Bold class="h-4 w-4" />
      </button>
      <button
        type="button"
        class="p-2 rounded hover:bg-gray-200"
        onclick={() => formatText('italic')}
        title="Italic"
      >
        <Italic class="h-4 w-4" />
      </button>
      <button
        type="button"
        class="p-2 rounded hover:bg-gray-200"
        onclick={() => formatText('underline')}
        title="Underline"
      >
        <Underline class="h-4 w-4" />
      </button>
      
      <div class="w-px h-6 bg-gray-300 mx-1"></div>
      
      <button
        type="button"
        class="p-2 rounded hover:bg-gray-200"
        onclick={() => formatText('justifyLeft')}
        title="Align Left"
      >
        <AlignLeft class="h-4 w-4" />
      </button>
      <button
        type="button"
        class="p-2 rounded hover:bg-gray-200"
        onclick={() => formatText('justifyCenter')}
        title="Align Center"
      >
        <AlignCenter class="h-4 w-4" />
      </button>
      <button
        type="button"
        class="p-2 rounded hover:bg-gray-200"
        onclick={() => formatText('justifyRight')}
        title="Align Right"
      >
        <AlignRight class="h-4 w-4" />
      </button>
      
      <div class="w-px h-6 bg-gray-300 mx-1"></div>
      
      <button
        type="button"
        class="p-2 rounded hover:bg-gray-200"
        onclick={() => formatText('insertUnorderedList')}
        title="Bullet List"
      >
        <List class="h-4 w-4" />
      </button>
      <button
        type="button"
        class="p-2 rounded hover:bg-gray-200"
        onclick={() => formatText('insertOrderedList')}
        title="Numbered List"
      >
        <ListOrdered class="h-4 w-4" />
      </button>
      
      <div class="w-px h-6 bg-gray-300 mx-1"></div>
      
      <button
        type="button"
        class="p-2 rounded hover:bg-gray-200"
        onclick={toggleBlockquote}
        title="Quote"
      >
        <Quote class="h-4 w-4" />
      </button>
      
      <div class="relative">
        <button
          type="button"
          class="p-2 rounded hover:bg-gray-200"
          onclick={() => showLinkInput = !showLinkInput}
          title="Insert Link"
        >
          <Link class="h-4 w-4" />
        </button>
        
        {#if showLinkInput}
          <div class="absolute z-10 mt-1 w-64 p-3 bg-white border border-gray-200 rounded-md shadow-lg">
            <div class="flex">
              <input
                type="text"
                class="flex-1 px-2 py-1 border border-gray-300 rounded-l text-sm"
                placeholder="https://example.com"
                bind:value={linkUrl}
                onkeydown={(e) => e.key === 'Enter' && insertLink()}
              />
              <button
                type="button"
                class="px-3 py-1 bg-blue-500 text-white rounded-r text-sm"
                onclick={insertLink}
              >
                Add
              </button>
            </div>
            <button
              type="button"
              class="mt-2 text-xs text-gray-500"
              onclick={() => showLinkInput = false}
            >
              Cancel
            </button>
          </div>
        {/if}
      </div>
      
      <button
        type="button"
        class="p-2 rounded hover:bg-gray-200"
        onclick={insertImage}
        title="Insert Image"
      >
        <Image class="h-4 w-4" />
      </button>
      
      <div class="w-px h-6 bg-gray-300 mx-1"></div>
      
      <div class="relative group">
        <button
          type="button"
          class="p-2 rounded hover:bg-gray-200"
          title="More options"
        >
          <MoreHorizontal class="h-4 w-4" />
        </button>
        
        <div class="absolute z-10 mt-1 w-40 p-2 bg-white border border-gray-200 rounded-md shadow-lg hidden group-hover:block">
          <button
            type="button"
            class="flex items-center w-full px-2 py-1 text-sm rounded hover:bg-gray-100"
            onclick={() => toggleHeading(2)}
          >
            <Hash class="h-4 w-4 mr-2" />
            Heading 2
          </button>
          <button
            type="button"
            class="flex items-center w-full px-2 py-1 text-sm rounded hover:bg-gray-100"
            onclick={() => toggleHeading(3)}
          >
            <Hash class="h-4 w-4 mr-2" />
            Heading 3
          </button>
          <button
            type="button"
            class="flex items-center w-full px-2 py-1 text-sm rounded hover:bg-gray-100"
            onclick={toggleHorizontalRule}
          >
            <Minus class="h-4 w-4 mr-2" />
            Divider
          </button>
        </div>
      </div>
    </div>
  {/if}

  <div 
    bind:this={editorRef}
    class={`px-4 py-3 min-h-[200px] focus:outline-none ${editorClass} ${
      isFocused ? 'ring-0' : ''
    }`}
    contenteditable="true"
    placeholder={placeholder}
    oninput={handleInput}
    onchange={handleChange}
    onfocus={() => isFocused = true}
    onblur={() => isFocused = false}
  >
    {@html content}
  </div>

  {#if showToolbar && toolbarPosition === 'bottom'}
    <div class={`flex items-center flex-wrap p-2 border-t border-gray-200 bg-gray-50 space-x-1 ${toolbarClass}`}>
      <button
        type="button"
        class="p-2 rounded hover:bg-gray-200"
        onclick={() => formatText('bold')}
        title="Bold"
      >
        <Bold class="h-4 w-4" />
      </button>
      <button
        type="button"
        class="p-2 rounded hover:bg-gray-200"
        onclick={() => formatText('italic')}
        title="Italic"
      >
        <Italic class="h-4 w-4" />
      </button>
      <button
        type="button"
        class="p-2 rounded hover:bg-gray-200"
        onclick={() => formatText('underline')}
        title="Underline"
      >
        <Underline class="h-4 w-4" />
      </button>
      
      <div class="w-px h-6 bg-gray-300 mx-1"></div>
      
      <button
        type="button"
        class="p-2 rounded hover:bg-gray-200"
        onclick={() => formatText('justifyLeft')}
        title="Align Left"
      >
        <AlignLeft class="h-4 w-4" />
      </button>
      <button
        type="button"
        class="p-2 rounded hover:bg-gray-200"
        onclick={() => formatText('justifyCenter')}
        title="Align Center"
      >
        <AlignCenter class="h-4 w-4" />
      </button>
      <button
        type="button"
        class="p-2 rounded hover:bg-gray-200"
        onclick={() => formatText('justifyRight')}
        title="Align Right"
      >
        <AlignRight class="h-4 w-4" />
      </button>
    </div>
  {/if}
</div>
