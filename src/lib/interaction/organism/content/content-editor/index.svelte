<script lang="ts">
  import type { InteractionHTMLAttributes } from '$stylist/interaction/type/attribute/interaction';
  import { Icon as BaseIcon } from '$stylist';
const Bold = 'bold';
const Italic = 'italic';
const Underline = 'underline';
const AlignLeft = 'align-left';
const AlignCenter = 'align-center';
const AlignRight = 'align-right';
const List = 'list';
const ListOrdered = 'list-ordered';
const Link = 'link';
const Image = 'image';
const Quote = 'quote';
const Type = 'type';
const MoreHorizontal = 'more-horizontal';
const Save = 'save';
const Eye = 'eye';
const FileText = 'file-text';


  type ContentType = 'text' | 'image' | 'quote' | 'divider' | 'header' | 'list';

  type ContentElement = {
    id: string;
    type: ContentType;
    content: string;
    attributes?: Record<string, any>;
  };

  type Props = {
    initialContent?: ContentElement[];
    onSave?: (content: ContentElement[]) => void;
    onPreview?: () => void;
    placeholder?: string;
    showToolbar?: boolean;
    showPreviewButton?: boolean;
    class?: string;
    toolbarClass?: string;
    editorClass?: string;
    contentClass?: string;
  } & InteractionHTMLAttributes<HTMLDivElement>;

  let {
    initialContent = [{ id: '1', type: 'text', content: '' }],
    onSave,
    onPreview,
    placeholder = 'Start writing here...',
    showToolbar = true,
    showPreviewButton = true,
    class: className = '',
    toolbarClass = '',
    editorClass = '',
    contentClass = '',
    ...restProps
  } = $props();

  let contentElements = $state<ContentElement[]>(initialContent);
  let activeElementId: string | null = $state(null);
  let isPreviewMode = $state(false);

  // Set the first element as active by default
  $effect(() => {
    if (contentElements.length > 0 && !activeElementId) {
      activeElementId = contentElements[0].id;
    }
  });

  function updateContent(id: string, newContent: string) {
    contentElements = contentElements.map(el =>
      el.id === id ? { ...el, content: newContent } : el
    );
  }

  function addNewElement(index: number, type: ContentType = 'text') {
    const newElement: ContentElement = {
      id: `element-${Date.now()}`,
      type,
      content: ''
    };

    contentElements = [
      ...contentElements.slice(0, index + 1),
      newElement,
      ...contentElements.slice(index + 1)
    ];

    activeElementId = newElement.id;
  }

  function deleteElement(id: string) {
    if (contentElements.length <= 1) return; // Keep at least one element

    const index = contentElements.findIndex(el => el.id === id);
    contentElements = contentElements.filter(el => el.id !== id);

    if (activeElementId === id) {
      activeElementId = index > 0
        ? contentElements[index - 1].id
        : contentElements[0]?.id || null;
    }
  }

  function moveElement(id: string, direction: 'up' | 'down') {
    const index = contentElements.findIndex(el => el.id === id);
    if (index === -1) return;

    if (direction === 'up' && index > 0) {
      const newElements = [...contentElements];
      [newElements[index - 1], newElements[index]] = [newElements[index], newElements[index - 1]];
      contentElements = newElements;
    } else if (direction === 'down' && index < contentElements.length - 1) {
      const newElements = [...contentElements];
      [newElements[index + 1], newElements[index]] = [newElements[index], newElements[index + 1]];
      contentElements = newElements;
    }
  }

  function formatText(command: string) {
    document.execCommand(command, false);
  }

  function togglePreview() {
    isPreviewMode = !isPreviewMode;
    if (onPreview) {
      onPreview();
    }
  }

  function handleSave() {
    if (onSave) {
      onSave(contentElements);
    }
  }
</script>

<div class={`c-content-editor border border-[var(--color-border-primary)] rounded-lg overflow-hidden ${className}`} {...restProps}>
  {#if showToolbar}
    <div class={`flex items-center p-2 border-b border-[var(--color-border-primary)] bg-[var(--color-background-secondary)] space-x-1 ${toolbarClass}`}>
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
        title="Add Image"
      >
        <BaseIcon name={Image} class="h-4 w-4" />
      </button>
      <button
        type="button"
        class="p-2 rounded hover:bg-[var(--color-background-tertiary)]"
        title="Add Link"
      >
        <BaseIcon name={Link} class="h-4 w-4" />
      </button>

      <div class="flex-1"></div>

      <button
        type="button"
        class="p-2 rounded hover:bg-[var(--color-background-tertiary)]"
        onclick={togglePreview}
        title="Preview"
      >
        <BaseIcon name={Eye} class="h-4 w-4" />
      </button>
      <button
        type="button"
        class="p-2 rounded hover:bg-[var(--color-background-tertiary)]"
        onclick={handleSave}
        title="Save"
      >
        <BaseIcon name={Save} class="h-4 w-4" />
      </button>
    </div>
  {/if}

  <div class={`p-4 ${editorClass}`}>
    {#if isPreviewMode}
      <div class="prose max-w-none">
        {#each contentElements as element}
          {#if element.type === 'text'}
            <p class="mb-4">{element.content || placeholder}</p>
          {:else if element.type === 'header'}
            <h2 class="text-2xl font-bold mb-4">{element.content}</h2>
          {:else if element.type === 'quote'}
            <blockquote class="border-l-4 border-[var(--color-border-primary)] pl-4 italic my-4">
              {element.content}
            </blockquote>
          {:else if element.type === 'list'}
            <ul class="list-disc pl-5 my-4">
              <li>{element.content}</li>
            </ul>
          {/if}
        {/each}
      </div>
    {:else}
      {#each contentElements as element, index}
        <div
          class={`mb-4 p-2 border rounded ${
            activeElementId === element.id ? 'border-[var(--color-primary-500)]' : 'border-transparent'
          }`}
          role="button"
          tabindex="0"
          onclick={() => activeElementId = element.id}
          onkeydown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              activeElementId = element.id;
            }
          }}
        >
          {#if element.type === 'text'}
            <textarea
              class={`w-full focus:outline-none ${contentClass}`}
              placeholder={index === 0 ? placeholder : ''}
              bind:value={element.content}
              oninput={() => updateContent(element.id, element.content)}
              rows={3}
            ></textarea>
          {:else if element.type === 'header'}
            <input
              type="text"
              class={`w-full text-2xl font-bold focus:outline-none ${contentClass}`}
              bind:value={element.content}
              oninput={() => updateContent(element.id, element.content)}
              placeholder="Heading..."
            />
          {:else if element.type === 'quote'}
            <textarea
              class={`w-full italic focus:outline-none border-l-4 border-[var(--color-border-primary)] pl-4 ${contentClass}`}
              bind:value={element.content}
              oninput={() => updateContent(element.id, element.content)}
              placeholder="Quote..."
              rows={2}
            ></textarea>
          {:else if element.type === 'image'}
            <div class="border-2 border-dashed border-[var(--color-border-primary)] rounded flex flex-col items-center justify-center p-8">
              <BaseIcon name={Image} class="h-10 w-10 text-[var(--color-text-tertiary)] mb-2" />
              <p class="text-[var(--color-text-secondary)]">Image: {element.content || 'No image selected'}</p>
              <p class="text-sm text-[var(--color-text-tertiary)] mt-1">Click to add image</p>
            </div>
          {/if}

          <div class="flex justify-end space-x-1 mt-1">
            <button
              type="button"
              class="text-[var(--color-text-tertiary)] hover:text-[var(--color-text-secondary)] p-1"
              onclick={() => moveElement(element.id, 'up')}
              disabled={index === 0}
              title="Move up"
            >
              <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
              </svg>
            </button>
            <button
              type="button"
              class="text-[var(--color-text-tertiary)] hover:text-[var(--color-text-secondary)] p-1"
              onclick={() => moveElement(element.id, 'down')}
              disabled={index === contentElements.length - 1}
              title="Move down"
            >
              <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <button
              type="button"
              class="text-[var(--color-text-tertiary)] hover:text-[var(--color-danger-500)] p-1"
              onclick={() => deleteElement(element.id)}
              disabled={contentElements.length <= 1}
              title="Delete"
            >
              <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </button>
          </div>
        </div>

        <!-- Add button between elements -->
        <div class="flex justify-center my-2">
          <button
            type="button"
            class="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] text-sm font-medium flex items-center"
            onclick={() => addNewElement(index)}
          >
            <svg class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            Add
          </button>
        </div>
      {/each}

      <!-- Add button at the end -->
      <div class="flex justify-center mt-4">
        <button
          type="button"
          class="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] text-sm font-medium flex items-center"
          onclick={() => addNewElement(contentElements.length - 1)}
        >
          <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          Add new block
        </button>
      </div>
    {/if}
  </div>
</div>




