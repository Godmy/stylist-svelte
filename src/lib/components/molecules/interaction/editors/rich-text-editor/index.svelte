<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { Icon as BaseIcon } from '$stylist/components/atoms';
const Bold = 'bold';
const Italic = 'italic';
const Underline = 'underline';
const AlignLeft = 'align-left';
const AlignCenter = 'align-center';
const AlignRight = 'align-right';
const List = 'list';
const ListOrdered = 'list-ordered';
const Quote = 'quote';
const Type = 'type';
const Link = 'link';
const Image = 'image';
const MoreHorizontal = 'more-horizontal';
const Hash = 'hash';
const Minus = 'minus';


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

<div class={`border border-[var(--color-border-primary)] rounded-lg overflow-hidden ${className}`} {...restProps}>
  {#if showToolbar && toolbarPosition === 'top'}
    <div class={`flex items-center flex-wrap p-2 border-b border-[var(--color-border-primary)] bg-[var(--color-background-secondary)] space-x-1 ${toolbarClass}`}>
      <button
        type="button"
        class="p-2 rounded hover:bg-[var(--color-background-tertiary)]"
        onclick={() => formatText('bold')}
        title="Bold"
      >
        <BaseIcon name={Bold} class="h-4 w-4" />
      </button>
      <button
        type="button"
        class="p-2 rounded hover:bg-[var(--color-background-tertiary)]"
        onclick={() => formatText('italic')}
        title="Italic"
      >
        <BaseIcon name={Italic} class="h-4 w-4" />
      </button>
      <button
        type="button"
        class="p-2 rounded hover:bg-[var(--color-background-tertiary)]"
        onclick={() => formatText('underline')}
        title="Underline"
      >
        <BaseIcon name={Underline} class="h-4 w-4" />
      </button>
      
      <div class="w-px h-6 bg-[var(--color-background-tertiary)] mx-1"></div>
      
      <button
        type="button"
        class="p-2 rounded hover:bg-[var(--color-background-tertiary)]"
        onclick={() => formatText('justifyLeft')}
        title="Align Left"
      >
        <BaseIcon name={AlignLeft} class="h-4 w-4" />
      </button>
      <button
        type="button"
        class="p-2 rounded hover:bg-[var(--color-background-tertiary)]"
        onclick={() => formatText('justifyCenter')}
        title="Align Center"
      >
        <BaseIcon name={AlignCenter} class="h-4 w-4" />
      </button>
      <button
        type="button"
        class="p-2 rounded hover:bg-[var(--color-background-tertiary)]"
        onclick={() => formatText('justifyRight')}
        title="Align Right"
      >
        <BaseIcon name={AlignRight} class="h-4 w-4" />
      </button>
      
      <div class="w-px h-6 bg-[var(--color-background-tertiary)] mx-1"></div>
      
      <button
        type="button"
        class="p-2 rounded hover:bg-[var(--color-background-tertiary)]"
        onclick={() => formatText('insertUnorderedList')}
        title="Bullet List"
      >
        <BaseIcon name={List} class="h-4 w-4" />
      </button>
      <button
        type="button"
        class="p-2 rounded hover:bg-[var(--color-background-tertiary)]"
        onclick={() => formatText('insertOrderedList')}
        title="Numbered List"
      >
        <BaseIcon name={ListOrdered} class="h-4 w-4" />
      </button>
      
      <div class="w-px h-6 bg-[var(--color-background-tertiary)] mx-1"></div>
      
      <button
        type="button"
        class="p-2 rounded hover:bg-[var(--color-background-tertiary)]"
        onclick={toggleBlockquote}
        title="Quote"
      >
        <BaseIcon name={Quote} class="h-4 w-4" />
      </button>
      
      <div class="relative">
        <button
          type="button"
          class="p-2 rounded hover:bg-[var(--color-background-tertiary)]"
          onclick={() => showLinkInput = !showLinkInput}
          title="Insert Link"
        >
          <BaseIcon name={Link} class="h-4 w-4" />
        </button>
        
        {#if showLinkInput}
          <div class="absolute z-[var(--z-index-docked)] mt-1 w-64 p-3 bg-[var(--color-background-primary)] border border-[var(--color-border-primary)] rounded-md shadow-lg">
            <div class="flex">
              <input
                type="text"
                class="flex-1 px-2 py-1 border border-[var(--color-border-primary)] rounded-l text-sm"
                placeholder="https://example.com"
                bind:value={linkUrl}
                onkeydown={(e) => e.key === 'Enter' && insertLink()}
              />
              <button
                type="button"
                class="px-3 py-1 bg-[var(--color-primary-500)] text-[var(--color-text-inverse)] rounded-r text-sm"
                onclick={insertLink}
              >
                Add
              </button>
            </div>
            <button
              type="button"
              class="mt-2 text-xs text-[var(--color-text-secondary)]"
              onclick={() => showLinkInput = false}
            >
              Cancel
            </button>
          </div>
        {/if}
      </div>
      
      <button
        type="button"
        class="p-2 rounded hover:bg-[var(--color-background-tertiary)]"
        onclick={insertImage}
        title="Insert Image"
      >
        <BaseIcon name={Image} class="h-4 w-4" />
      </button>
      
      <div class="w-px h-6 bg-[var(--color-background-tertiary)] mx-1"></div>
      
      <div class="relative group">
        <button
          type="button"
          class="p-2 rounded hover:bg-[var(--color-background-tertiary)]"
          title="More options"
        >
          <BaseIcon name={MoreHorizontal} class="h-4 w-4" />
        </button>
        
        <div class="absolute z-[var(--z-index-docked)] mt-1 w-40 p-2 bg-[var(--color-background-primary)] border border-[var(--color-border-primary)] rounded-md shadow-lg hidden group-hover:block">
          <button
            type="button"
            class="flex items-center w-full px-2 py-1 text-sm rounded hover:bg-[var(--color-background-secondary)]"
            onclick={() => toggleHeading(2)}
          >
            <BaseIcon name={Hash} class="h-4 w-4 mr-2" />
            Heading 2
          </button>
          <button
            type="button"
            class="flex items-center w-full px-2 py-1 text-sm rounded hover:bg-[var(--color-background-secondary)]"
            onclick={() => toggleHeading(3)}
          >
            <BaseIcon name={Hash} class="h-4 w-4 mr-2" />
            Heading 3
          </button>
          <button
            type="button"
            class="flex items-center w-full px-2 py-1 text-sm rounded hover:bg-[var(--color-background-secondary)]"
            onclick={toggleHorizontalRule}
          >
            <BaseIcon name={Minus} class="h-4 w-4 mr-2" />
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
    <div class={`flex items-center flex-wrap p-2 border-t border-[var(--color-border-primary)] bg-[var(--color-background-secondary)] space-x-1 ${toolbarClass}`}>
      <button
        type="button"
        class="p-2 rounded hover:bg-[var(--color-background-tertiary)]"
        onclick={() => formatText('bold')}
        title="Bold"
      >
        <BaseIcon name={Bold} class="h-4 w-4" />
      </button>
      <button
        type="button"
        class="p-2 rounded hover:bg-[var(--color-background-tertiary)]"
        onclick={() => formatText('italic')}
        title="Italic"
      >
        <BaseIcon name={Italic} class="h-4 w-4" />
      </button>
      <button
        type="button"
        class="p-2 rounded hover:bg-[var(--color-background-tertiary)]"
        onclick={() => formatText('underline')}
        title="Underline"
      >
        <BaseIcon name={Underline} class="h-4 w-4" />
      </button>
      
      <div class="w-px h-6 bg-[var(--color-background-tertiary)] mx-1"></div>
      
      <button
        type="button"
        class="p-2 rounded hover:bg-[var(--color-background-tertiary)]"
        onclick={() => formatText('justifyLeft')}
        title="Align Left"
      >
        <BaseIcon name={AlignLeft} class="h-4 w-4" />
      </button>
      <button
        type="button"
        class="p-2 rounded hover:bg-[var(--color-background-tertiary)]"
        onclick={() => formatText('justifyCenter')}
        title="Align Center"
      >
        <BaseIcon name={AlignCenter} class="h-4 w-4" />
      </button>
      <button
        type="button"
        class="p-2 rounded hover:bg-[var(--color-background-tertiary)]"
        onclick={() => formatText('justifyRight')}
        title="Align Right"
      >
        <BaseIcon name={AlignRight} class="h-4 w-4" />
      </button>
    </div>
  {/if}
</div>






