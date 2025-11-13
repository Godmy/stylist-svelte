<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import {
    Square,
    Type,
    Image,
    Video,
    Columns3,
    Columns2,
    Plus,
    Copy,
    Trash2,
    GripVertical,
    Settings,
    Eye,
    Save,
    X
  } from 'lucide-svelte';

  type ElementType =
    | 'text'
    | 'image'
    | 'video'
    | 'button'
    | 'divider'
    | 'heading'
    | 'container'
    | 'grid';

  type Element = {
    id: string;
    type: ElementType;
    content?: string;
    attributes?: Record<string, any>;
    children?: Element[];
  };

  type ToolbarItem = {
    type: ElementType;
    label: string;
    icon: any;
  };

  type Props = {
    initialElements?: Element[];
    onSave?: (elements: Element[]) => void;
    showToolbar?: boolean;
    showPreview?: boolean;
    class?: string;
    toolbarClass?: string;
    canvasClass?: string;
    elementClass?: string;
  } & HTMLAttributes<HTMLDivElement>;

  let {
    initialElements = [],
    onSave,
    showToolbar = true,
    showPreview = true,
    class: className = '',
    toolbarClass = '',
    canvasClass = '',
    elementClass = '',
    ...restProps
  } = $props();

  let elements = $state<Element[]>(initialElements);
  let selectedElementId: string | null = $state(null);
  let isDragging = $state(false);
  let dragIndex: number | null = $state(null);
  let isPreviewMode = $state(false);

  const toolbarItems: ToolbarItem[] = [
    { type: 'text', label: 'Text', icon: Type },
    { type: 'heading', label: 'Heading', icon: Type },
    { type: 'image', label: 'Image', icon: Image },
    { type: 'button', label: 'Button', icon: Square },
    { type: 'divider', label: 'Divider', icon: Square },
    { type: 'container', label: 'Container', icon: Square },
    { type: 'grid', label: 'Grid', icon: Columns2 }
  ];

  function selectElement(id: string) {
    selectedElementId = id;
  }

  function addElement(type: ElementType, index?: number) {
    const newElement: Element = {
      id: `element-${Date.now()}`,
      type,
      content: getDefaultContent(type),
      attributes: getDefaultAttributes(type)
    };

    if (index !== undefined) {
      elements = [...elements.slice(0, index), newElement, ...elements.slice(index)];
    } else {
      elements = [...elements, newElement];
    }

    selectedElementId = newElement.id;
  }

  function getDefaultContent(type: ElementType): string {
    switch(type) {
      case 'text': return 'Add your text here...';
      case 'heading': return 'Heading';
      case 'button': return 'Click me';
      default: return '';
    }
  }

  function getDefaultAttributes(type: ElementType): Record<string, any> {
    switch(type) {
      case 'text': return { fontSize: '16px', color: '#000000' };
      case 'heading': return { level: 2, fontSize: '32px', color: '#000000' };
      case 'button': return { backgroundColor: '#3B82F6', color: '#FFFFFF', padding: '8px 16px' };
      case 'image': return { src: '', alt: 'Image', width: '100%', height: 'auto' };
      default: return {};
    }
  }

  function updateElement(id: string, updates: Partial<Element>) {
    elements = elements.map(el =>
      el.id === id ? { ...el, ...updates } : el
    );
  }

  function deleteElement(id: string) {
    elements = elements.filter(el => el.id !== id);
    if (selectedElementId === id) {
      selectedElementId = null;
    }
  }

  function duplicateElement(id: string) {
    const elementToCopy = elements.find(el => el.id === id);
    if (elementToCopy) {
      const newElement = { ...elementToCopy, id: `element-${Date.now()}` };
      const index = elements.findIndex(el => el.id === id);
      elements = [...elements.slice(0, index + 1), newElement, ...elements.slice(index + 1)];
    }
  }

  function moveElement(fromIndex: number, toIndex: number) {
    const newElements = [...elements];
    const [movedItem] = newElements.splice(fromIndex, 1);
    newElements.splice(toIndex, 0, movedItem);
    elements = newElements;
  }

  function handleDragStart(index: number) {
    isDragging = true;
    dragIndex = index;
  }

  function handleDragOver(e: DragEvent, targetIndex: number) {
    e.preventDefault();
    if (dragIndex === null || dragIndex === targetIndex) return;

    moveElement(dragIndex, targetIndex);
    dragIndex = targetIndex;
  }

  function handleDragEnd() {
    isDragging = false;
    dragIndex = null;
  }

  function togglePreview() {
    isPreviewMode = !isPreviewMode;
  }

  function handleSave() {
    if (onSave) {
      onSave(elements);
    }
  }

  function renderElement(element: Element) {
    switch(element.type) {
      case 'text':
        return `<p style="font-size: ${element.attributes?.fontSize || '16px'}; color: ${element.attributes?.color || '#000000'};">${element.content}</p>`;
      case 'heading':
        const level = element.attributes?.level || 2;
        return `<h${level} style="font-size: ${element.attributes?.fontSize || '32px'}; color: ${element.attributes?.color || '#000000'};">${element.content}</h${level}>`;
      case 'button':
        return `<button style="background-color: ${element.attributes?.backgroundColor || '#3B82F6'}; color: ${element.attributes?.color || '#FFFFFF'}; padding: ${element.attributes?.padding || '8px 16px'}; border: none; border-radius: 4px; cursor: pointer;">${element.content}</button>`;
      case 'divider':
        return `<hr style="border: 0; border-top: 1px solid #e5e7eb; margin: 16px 0;" />`;
      case 'image':
        return `<img src="${element.attributes?.src || ''}" alt="${element.attributes?.alt || 'Image'}" style="width: ${element.attributes?.width || '100%'}; height: ${element.attributes?.height || 'auto'};" />`;
      default:
        return `<div>${element.content}</div>`;
    }
  }
</script>

<div class={`border border-gray-200 rounded-lg overflow-hidden ${className}`} {...restProps}>
  {#if showToolbar}
    <div class={`flex items-center p-3 border-b border-gray-200 bg-gray-50 ${toolbarClass}`}>
      <div class="flex space-x-1">
        {#each toolbarItems as item}
          <button
            type="button"
            class="p-2 rounded hover:bg-gray-200 flex items-center"
            onclick={() => addElement(item.type)}
            title={item.label}
          >
            <item.icon class="h-4 w-4" />
          </button>
        {/each}
      </div>

      <div class="flex-1"></div>

      <div class="flex space-x-2">
        <button
          type="button"
          class="p-2 rounded hover:bg-gray-200"
          onclick={togglePreview}
          title="Preview"
        >
          <Eye class="h-4 w-4" />
        </button>
        <button
          type="button"
          class="p-2 rounded hover:bg-gray-200"
          onclick={handleSave}
          title="Save"
        >
          <Save class="h-4 w-4" />
        </button>
      </div>
    </div>
  {/if}

  <div class="flex">
    <!-- Canvas area -->
    <div class={`flex-1 p-6 min-h-[500px] ${canvasClass} ${isPreviewMode ? 'bg-gray-100' : 'bg-white'}`}>
      {#if isPreviewMode}
        <!-- Preview mode - render the page as it would appear -->
        <div class="max-w-4xl mx-auto">
          {#each elements as element}
            <div class="mb-4">{@html renderElement(element)}</div>
          {/each}
        </div>
      {:else}
        <!-- Edit mode -->
        <div class="max-w-4xl mx-auto border border-dashed border-gray-300 rounded-lg min-h-[400px] p-4">
          {#if elements.length === 0}
            <div class="flex flex-col items-center justify-center h-64 text-gray-500">
              <div class="mb-4">
                <Square class="h-12 w-12 mx-auto" />
              </div>
              <p>Drag elements here to start building your page</p>
              <p class="text-sm mt-2">Or use the toolbar to add elements</p>
            </div>
          {:else}
            {#each elements as element, index}
              <div
                class={`relative group border ${
                  selectedElementId === element.id ? 'border-blue-500' : 'border-transparent'
                } p-2 mb-2 rounded ${
                  elementClass
                }`}
                role="button"
                tabindex="0"
                draggable="true"
                ondragstart={() => handleDragStart(index)}
                ondragover={(e) => handleDragOver(e, index)}
                ondragend={handleDragEnd}
                onclick={() => selectElement(element.id)}
                onkeydown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    selectElement(element.id);
                  }
                }}
              >
                <!-- Drag handle -->
                <div class="absolute -left-6 top-0 p-1 cursor-move text-gray-400 opacity-0 group-hover:opacity-100">
                  <GripVertical class="h-4 w-4" />
                </div>

                <!-- Element content -->
                {#if element.type === 'text'}
                  <p style="font-size: {element.attributes?.fontSize || '16px'}; color: {element.attributes?.color || '#000000'};">
                    {element.content}
                  </p>
                {:else if element.type === 'heading'}
                  {@const level = element.attributes?.level || 2}
                  <h:level style="font-size: {element.attributes?.fontSize || '32px'}; color: {element.attributes?.color || '#000000'};">
                    {element.content}
                  </h:level>
                {:else if element.type === 'button'}
                  <button
                    style="background-color: {element.attributes?.backgroundColor || '#3B82F6'}; color: {element.attributes?.color || '#FFFFFF'}; padding: {element.attributes?.padding || '8px 16px'};"
                    class="rounded border-0 cursor-pointer"
                  >
                    {element.content}
                  </button>
                {:else if element.type === 'divider'}
                  <hr class="border-t border-gray-300 my-2" />
                {:else if element.type === 'image'}
                  <div class="border border-gray-200 rounded flex items-center justify-center h-32 bg-gray-100">
                    <Image class="h-8 w-8 text-gray-400" />
                    <span class="ml-2 text-sm text-gray-500">Image: {element.attributes?.alt || 'Placeholder'}</span>
                  </div>
                {/if}

                <!-- Element controls -->
                <div class="absolute -right-6 top-0 flex space-x-1 opacity-0 group-hover:opacity-100">
                  <button
                    type="button"
                    class="p-1 rounded hover:bg-gray-200"
                    onclick={(e) => {
                      e.stopPropagation();
                      duplicateElement(element.id);
                    }}
                    title="Duplicate"
                  >
                    <Copy class="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    class="p-1 rounded hover:bg-gray-200 text-red-500"
                    onclick={(e) => {
                      e.stopPropagation();
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

          <!-- Add element at the end -->
          <div class="flex justify-center mt-4">
            <button
              type="button"
              class="inline-flex items-center px-3 py-1 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
              onclick={() => addElement('text', elements.length)}
            >
              <Plus class="h-4 w-4 mr-1" />
              Add Element
            </button>
          </div>
        </div>
      {/if}
    </div>

    <!-- Properties panel -->
    {#if selectedElementId && !isPreviewMode}
      <div class="w-80 border-l p-4 bg-white">
        <div class="flex items-center justify-between mb-4">
          <h3 class="text-lg font-medium text-gray-900">Properties</h3>
          <button
            type="button"
            class="p-1 rounded hover:bg-gray-200"
            onclick={() => selectedElementId = null}
            title="Close"
          >
            <X class="h-5 w-5" />
          </button>
        </div>

        {#if selectedElementId}
          {@const element = elements.find(el => el.id === selectedElementId)}
          {#if element}
            <div class="space-y-4">
              <div>
                <div class="block text-sm font-medium text-gray-700 mb-1">Type</div>
                <span class="text-sm text-gray-900 capitalize">{element.type}</span>
              </div>

              {#if element.type === 'text' || element.type === 'heading'}
                <div>
                  <label for="textContent" class="block text-sm font-medium text-gray-700 mb-1">Content</label>
                  <input
                    type="text"
                    id="textContent"
                    class="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    bind:value={element.content}
                    oninput={() => updateElement(element.id, { content: element.content })}
                  />
                </div>

                <div>
                  <label for="textColor" class="block text-sm font-medium text-gray-700 mb-1">Color</label>
                  <input
                    type="color"
                    id="textColor"
                    class="block w-full h-10 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    value={element.attributes?.color || ''}
                    oninput={(e) => {
                      const target = e.target as HTMLInputElement;
                      const newColor = target.value;
                      updateElement(element.id, { 
                        attributes: { 
                          ...element.attributes, 
                          color: newColor 
                        } 
                      });
                    }}
                  />
                </div>

                <div>
                  <label for="textSize" class="block text-sm font-medium text-gray-700 mb-1">Font Size</label>
                  <input
                    type="range"
                    id="textSize"
                    class="block w-full"
                    min="8"
                    max="72"
                    value={element.attributes?.fontSize || '16'}
                    oninput={(e) => {
                      const target = e.target as HTMLInputElement;
                      const newFontSize = target.value;
                      updateElement(element.id, { 
                        attributes: { 
                          ...element.attributes, 
                          fontSize: newFontSize 
                        } 
                      });
                    }}
                  />
                  <div class="text-right text-sm text-gray-500">{element.attributes?.fontSize || '16'}px</div>
                </div>
              {/if}

              {#if element.type === 'button'}
                <div>
                  <label for="buttonText" class="block text-sm font-medium text-gray-700 mb-1">Button Text</label>
                  <input
                    type="text"
                    id="buttonText"
                    class="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    bind:value={element.content}
                    oninput={() => updateElement(element.id, { content: element.content })}
                  />
                </div>
              {/if}
            </div>
          {/if}
        {/if}
      </div>
    {/if}
  </div>
</div>
