<script lang="ts">
  import {
    Columns2,
    Copy,
    Eye,
    GripVertical,
    Image,
    Plus,
    Save,
    Square,
    Trash2,
    Type,
    X
  } from 'lucide-svelte';
  import { PageBuilderStyleManager } from '$stylist/design-system/styles';
  import type {
    PageBuilderButtonAttributes,
    PageBuilderElement,
    PageBuilderElementType,
    PageBuilderHeadingAttributes,
    PageBuilderImageAttributes,
    PageBuilderProps,
    PageBuilderTextAttributes,
    PageBuilderToolbarItem
  } from '$stylist/design-system/props';

  let {
    initialElements = [],
    onSave,
    showToolbar = true,
    editable = true,
    class: className = '',
    toolbarClass = '',
    canvasClass = '',
    elementClass = '',
    ...restProps
  }: PageBuilderProps = $props();

  let elements = $state<PageBuilderElement[]>(initialElements);
  let selectedElementId = $state<string | null>(null);
  let dragIndex = $state<number | null>(null);
  let isPreviewMode = $state(false);

  const toolbarItems: PageBuilderToolbarItem[] = [
    { type: 'text', label: 'Text', icon: Type },
    { type: 'heading', label: 'Heading', icon: Type },
    { type: 'image', label: 'Image', icon: Image },
    { type: 'button', label: 'Button', icon: Square },
    { type: 'divider', label: 'Divider', icon: Square },
    { type: 'container', label: 'Container', icon: Square },
    { type: 'grid', label: 'Grid', icon: Columns2 }
  ];

  function getDefaultContent(type: PageBuilderElementType): string {
    switch (type) {
      case 'text':
        return 'Add your text here...';
      case 'heading':
        return 'Heading';
      case 'button':
        return 'Click me';
      default:
        return '';
    }
  }

  function getDefaultAttributes(type: PageBuilderElementType): PageBuilderElement['attributes'] {
    switch (type) {
      case 'text':
        return { fontSize: '16px', color: 'var(--color-text-primary)' };
      case 'heading':
        return { level: 2, fontSize: '32px', color: 'var(--color-text-primary)' };
      case 'button':
        return {
          backgroundColor: 'var(--color-primary-500)',
          color: 'var(--color-text-inverse)',
          padding: '8px 16px'
        };
      case 'image':
        return { src: '', alt: 'Image', width: '100%', height: 'auto' };
      case 'divider':
        return { color: 'var(--color-border)' };
      case 'container':
        return {
          backgroundColor: 'var(--color-background-primary)',
          padding: '16px',
          margin: '8px',
          borderRadius: '4px'
        };
      default:
        return {};
    }
  }

  function selectElement(id: string): void {
    selectedElementId = id;
  }

  function addElement(type: PageBuilderElementType, index?: number): void {
    const newElement: PageBuilderElement = {
      id: `element-${Date.now()}`,
      type,
      content: getDefaultContent(type),
      attributes: getDefaultAttributes(type)
    };
    if (index === undefined) {
      elements = [...elements, newElement];
    } else {
      elements = [...elements.slice(0, index), newElement, ...elements.slice(index)];
    }
    selectedElementId = newElement.id;
  }

  function updateElement(id: string, updates: Partial<PageBuilderElement>): void {
    elements = elements.map((el) => (el.id === id ? { ...el, ...updates } : el));
  }

  function deleteElement(id: string): void {
    elements = elements.filter((el) => el.id !== id);
    if (selectedElementId === id) {
      selectedElementId = null;
    }
  }

  function duplicateElement(id: string): void {
    const element = elements.find((el) => el.id === id);
    if (!element) return;
    const newElement = { ...element, id: `element-${Date.now()}` };
    const index = elements.findIndex((el) => el.id === id);
    elements = [...elements.slice(0, index + 1), newElement, ...elements.slice(index + 1)];
  }

  function moveElement(fromIndex: number, toIndex: number): void {
    const nextElements = [...elements];
    const [movedItem] = nextElements.splice(fromIndex, 1);
    nextElements.splice(toIndex, 0, movedItem);
    elements = nextElements;
  }

  function handleDragOver(event: DragEvent, targetIndex: number): void {
    event.preventDefault();
    if (dragIndex === null || dragIndex === targetIndex) return;
    moveElement(dragIndex, targetIndex);
    dragIndex = targetIndex;
  }

  function handleSave(): void {
    onSave?.(elements);
  }

  function renderElement(element: PageBuilderElement): string {
    switch (element.type) {
      case 'text': {
        const attrs = element.attributes as PageBuilderTextAttributes | undefined;
        return `<p style="font-size:${attrs?.fontSize ?? '16px'};color:${attrs?.color ?? 'var(--color-text-primary)'};">${element.content ?? ''}</p>`;
      }
      case 'heading': {
        const attrs = element.attributes as PageBuilderHeadingAttributes | undefined;
        const level = Math.min(Math.max(attrs?.level ?? 2, 1), 6);
        return `<h${level} style="font-size:${attrs?.fontSize ?? '32px'};color:${attrs?.color ?? 'var(--color-text-primary)'};">${element.content ?? ''}</h${level}>`;
      }
      case 'button': {
        const attrs = element.attributes as PageBuilderButtonAttributes | undefined;
        return `<button style="background-color:${attrs?.backgroundColor ?? 'var(--color-primary-500)'};color:${attrs?.color ?? 'var(--color-text-inverse)'};padding:${attrs?.padding ?? '8px 16px'};border:none;border-radius:4px;cursor:pointer;">${element.content ?? ''}</button>`;
      }
      case 'divider':
        return '<hr style="border:0;border-top:1px solid var(--color-border);margin:16px 0;" />';
      case 'image': {
        const attrs = element.attributes as PageBuilderImageAttributes | undefined;
        return `<img src="${attrs?.src ?? ''}" alt="${attrs?.alt ?? 'Image'}" style="width:${attrs?.width ?? '100%'};height:${attrs?.height ?? 'auto'};" />`;
      }
      default:
        return `<div>${element.content ?? ''}</div>`;
    }
  }

  const selectedElement = $derived(elements.find((el) => el.id === selectedElementId));
</script>

<div class={PageBuilderStyleManager.getContainerClasses(className)} {...restProps}>
  {#if showToolbar}
    <div class={PageBuilderStyleManager.getToolbarClasses(toolbarClass)}>
      <div class="flex space-x-1">
        {#each toolbarItems as item}
          {@const Icon = item.icon as any}
          <button
            type="button"
            class={PageBuilderStyleManager.getToolbarButtonClasses()}
            onclick={() => addElement(item.type)}
            title={item.label}
          >
            <Icon class="h-4 w-4" />
          </button>
        {/each}
      </div>

      <div class="flex-1"></div>

      <div class="flex space-x-2">
        <button
          type="button"
          class={PageBuilderStyleManager.getToolbarButtonClasses()}
          onclick={() => (isPreviewMode = !isPreviewMode)}
          title="Preview"
        >
          <Eye class="h-4 w-4" />
        </button>
        <button
          type="button"
          class={PageBuilderStyleManager.getToolbarButtonClasses()}
          onclick={handleSave}
          title="Save"
        >
          <Save class="h-4 w-4" />
        </button>
      </div>
    </div>
  {/if}

  <div class="flex">
    <div class={PageBuilderStyleManager.getCanvasClasses(canvasClass, isPreviewMode)}>
      {#if isPreviewMode || !editable}
        <div class="max-w-4xl mx-auto">
          {#each elements as element}
            <div class="mb-4">{@html renderElement(element)}</div>
          {/each}
        </div>
      {:else}
        <div class="max-w-4xl mx-auto border border-dashed border-gray-300 rounded-lg min-h-[400px] p-4">
          {#if elements.length === 0}
            <div class="flex flex-col items-center justify-center h-64 text-gray-500">
              <Square class="h-12 w-12 mb-4" />
              <p>Drag elements here to start building your page</p>
              <p class="text-sm mt-2">Or use the toolbar to add elements</p>
            </div>
          {:else}
            {#each elements as element, index}
              <div
                class={PageBuilderStyleManager.getElementClasses(selectedElementId === element.id, elementClass)}
                role="button"
                tabindex="0"
                draggable={editable}
                ondragstart={() => (dragIndex = index)}
                ondragover={(event) => handleDragOver(event, index)}
                ondragend={() => (dragIndex = null)}
                onclick={() => selectElement(element.id)}
                onkeydown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    selectElement(element.id);
                  }
                }}
              >
                <div class={PageBuilderStyleManager.getDragHandleClasses()}>
                  <GripVertical class="h-4 w-4" />
                </div>

                {#if element.type === 'text'}
                  {@const attrs = element.attributes as PageBuilderTextAttributes | undefined}
                  <p style={`font-size:${attrs?.fontSize ?? '16px'};color:${attrs?.color ?? '#000000'};`}>{element.content}</p>
                {:else if element.type === 'heading'}
                  {@const attrs = element.attributes as PageBuilderHeadingAttributes | undefined}
                  <h2 style={`font-size:${attrs?.fontSize ?? '32px'};color:${attrs?.color ?? '#000000'};`}>{element.content}</h2>
                {:else if element.type === 'button'}
                  {@const attrs = element.attributes as PageBuilderButtonAttributes | undefined}
                  <button
                    style={`background-color:${attrs?.backgroundColor ?? '#3B82F6'};color:${attrs?.color ?? '#FFFFFF'};padding:${attrs?.padding ?? '8px 16px'};`}
                    class="rounded border-0 cursor-pointer"
                  >
                    {element.content}
                  </button>
                {:else if element.type === 'divider'}
                  <hr class="border-t border-gray-300 my-2" />
                {:else if element.type === 'image'}
                  {@const attrs = element.attributes as PageBuilderImageAttributes | undefined}
                  <div class="border border-gray-200 rounded flex items-center justify-center h-32 bg-gray-100">
                    <Image class="h-8 w-8 text-gray-400" />
                    <span class="ml-2 text-sm text-gray-500">Image: {attrs?.alt ?? 'Placeholder'}</span>
                  </div>
                {/if}

                <div class="absolute -right-6 top-0 flex space-x-1 opacity-0 group-hover:opacity-100">
                  <button
                    type="button"
                    class={PageBuilderStyleManager.getElementControlButtonClasses(false)}
                    onclick={(event) => {
                      event.stopPropagation();
                      duplicateElement(element.id);
                    }}
                    title="Duplicate"
                  >
                    <Copy class="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    class={PageBuilderStyleManager.getElementControlButtonClasses(true)}
                    onclick={(event) => {
                      event.stopPropagation();
                      deleteElement(element.id);
                    }}
                    title="Delete"
                  >
                    <Trash2 class="h-4 w-4" />
                  </button>
                </div>
              </div>
            {/each}
          {/if}

          <div class="flex justify-center mt-4">
            <button
              type="button"
              class={PageBuilderStyleManager.getAddElementButtonClasses()}
              onclick={() => addElement('text', elements.length)}
            >
              <Plus class="h-4 w-4 mr-1" />
              Add Element
            </button>
          </div>
        </div>
      {/if}
    </div>

    {#if selectedElement && !isPreviewMode && editable}
      <div class={PageBuilderStyleManager.getPropertiesPanelClasses()}>
        <div class={PageBuilderStyleManager.getPropertiesPanelHeaderClasses()}>
          <h3 class="text-lg font-medium text-gray-900">Properties</h3>
          <button
            type="button"
            class="p-1 rounded hover:bg-gray-200"
            onclick={() => (selectedElementId = null)}
            title="Close"
          >
            <X class="h-5 w-5" />
          </button>
        </div>

        <div class="space-y-4">
          <div>
            <div class="block text-sm font-medium text-gray-700 mb-1">Type</div>
            <span class="text-sm text-gray-900 capitalize">{selectedElement.type}</span>
          </div>

          {#if selectedElement.type === 'text' || selectedElement.type === 'heading'}
            <div>
              <label for="textContent" class="block text-sm font-medium text-gray-700 mb-1">Content</label>
              <input
                id="textContent"
                type="text"
                class={PageBuilderStyleManager.getInputFieldClasses()}
                value={selectedElement.content}
                oninput={(event) =>
                  updateElement(selectedElement.id, { content: (event.target as HTMLInputElement).value })}
              />
            </div>
          {/if}

          {#if selectedElement.type === 'button'}
            <div>
              <label for="buttonText" class="block text-sm font-medium text-gray-700 mb-1">Button Text</label>
              <input
                id="buttonText"
                type="text"
                class={PageBuilderStyleManager.getInputFieldClasses()}
                value={selectedElement.content}
                oninput={(event) =>
                  updateElement(selectedElement.id, { content: (event.target as HTMLInputElement).value })}
              />
            </div>
          {/if}

          <div>
            <label for="fontSize" class="block text-sm font-medium text-gray-700 mb-1">Font Size</label>
            <input
              id="fontSize"
              type="range"
              class={PageBuilderStyleManager.getSliderClasses()}
              min="8"
              max="72"
              value={(selectedElement.attributes as PageBuilderTextAttributes)?.fontSize?.replace('px', '') ?? '16'}
              oninput={(event) => {
                const fontSize = `${(event.target as HTMLInputElement).value}px`;
                updateElement(selectedElement.id, {
                  attributes: { ...(selectedElement.attributes ?? {}), fontSize }
                });
              }}
            />
          </div>
        </div>
      </div>
    {/if}
  </div>
</div>


