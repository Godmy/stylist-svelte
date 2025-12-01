<script lang="ts">
  import type { IPageBuilderProps, IElement, ElementType, IToolbarItem, ITextAttributes, IHeadingAttributes, IButtonAttributes, IImageAttributes } from './types';
  import { PageBuilderStyleManager } from './styles';
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

  // JSDoc: PageBuilder - это компонент для визуального конструирования веб-страниц.
  // Он следует принципам SAMO (SOLID + Atomic Design), разделяя логику отображения и стилизации.
  // Компонент позволяет пользователям добавлять, перемещать и редактировать элементы страницы
  // через интуитивный интерфейс "перетаскивания".

  let {
    initialElements = [],
    onSave,
    showToolbar = true,
    showPreview = true,
    editable = true,
    class: className = '',
    toolbarClass = '',
    canvasClass = '',
    elementClass = '',
    ...restProps
  }: IPageBuilderProps = $props();

  let elements = $state<IElement[]>(initialElements);
  let selectedElementId: string | null = $state(null);
  let isDragging = $state(false);
  let dragIndex: number | null = $state(null);
  let isPreviewMode = $state(false);

  const toolbarItems: IToolbarItem[] = [
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
    const newElement: IElement = {
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

  function getDefaultAttributes(type: ElementType) {
    switch(type) {
      case 'text': return { fontSize: '16px', color: 'var(--color-text-primary)' };
      case 'heading': return { level: 2, fontSize: '32px', color: 'var(--color-text-primary)' };
      case 'button': return { backgroundColor: 'var(--color-primary-500)', color: 'var(--color-text-inverse)', padding: '8px 16px' };
      case 'image': return { src: '', alt: 'Image', width: '100%', height: 'auto' };
      case 'divider': return { color: 'var(--color-border)' };
      case 'container': return { backgroundColor: 'var(--color-background-primary)', padding: '16px', margin: '8px', borderRadius: '4px' };
      default: return {};
    }
  }

  function updateElement(id: string, updates: Partial<IElement>) {
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

  function renderElement(element: IElement) {
    switch(element.type) {
      case 'text':
        const textAttrs = element.attributes as ITextAttributes | undefined;
        return `<p style="font-size: ${textAttrs?.fontSize || '16px'}; color: ${textAttrs?.color || 'var(--color-text-primary)'};">${element.content}</p>`;
      case 'heading':
        const headingAttrs = element.attributes as IHeadingAttributes | undefined;
        const level = headingAttrs?.level || 2;
        return `<h${level} style="font-size: ${headingAttrs?.fontSize || '32px'}; color: ${headingAttrs?.color || 'var(--color-text-primary)'};">${element.content}</h${level}>`;
      case 'button':
        const buttonAttrs = element.attributes as IButtonAttributes | undefined;
        return `<button style="background-color: ${buttonAttrs?.backgroundColor || 'var(--color-primary-500)'}; color: ${buttonAttrs?.color || 'var(--color-text-inverse)'}; padding: ${buttonAttrs?.padding || '8px 16px'}; border: none; border-radius: 4px; cursor: pointer;">${element.content}</button>`;
      case 'divider':
        return `<hr style="border: 0; border-top: 1px solid var(--color-border); margin: 16px 0;" />`;
      case 'image':
        const imageAttrs = element.attributes as IImageAttributes | undefined;
        return `<img src="${imageAttrs?.src || ''}" alt="${imageAttrs?.alt || 'Image'}" style="width: ${imageAttrs?.width || '100%'}; height: ${imageAttrs?.height || 'auto'};" />`;
      default:
        return `<div>${element.content}</div>`;
    }
  }

  // Получение CSS-классов из StyleManager
  const containerClasses = $derived(PageBuilderStyleManager.getContainerClasses(className));
  const toolbarClasses = $derived(PageBuilderStyleManager.getToolbarClasses(toolbarClass));
  const toolbarButtonClasses = $derived(PageBuilderStyleManager.getToolbarButtonClasses());
  const canvasClasses = $derived(PageBuilderStyleManager.getCanvasClasses(canvasClass, isPreviewMode));
  const elementClasses = $derived((element: IElement) =>
    PageBuilderStyleManager.getElementClasses(selectedElementId === element.id, elementClass));
  const dragHandleClasses = $derived(PageBuilderStyleManager.getDragHandleClasses());
  const elementControlButtonClasses = $derived((isDeleteButton: boolean) =>
    PageBuilderStyleManager.getElementControlButtonClasses(isDeleteButton));
  const addElementButtonClasses = $derived(PageBuilderStyleManager.getAddElementButtonClasses());
  const propertiesPanelClasses = $derived(PageBuilderStyleManager.getPropertiesPanelClasses());
  const propertiesPanelHeaderClasses = $derived(PageBuilderStyleManager.getPropertiesPanelHeaderClasses());
  const inputFieldClasses = $derived(PageBuilderStyleManager.getInputFieldClasses());
  const sliderClasses = $derived(PageBuilderStyleManager.getSliderClasses());
</script>

<div class={containerClasses} {...restProps}>
  {#if showToolbar}
    <div class={toolbarClasses}>
      <div class="flex space-x-1">
        {#each toolbarItems as item}
          <button
            type="button"
            class={toolbarButtonClasses}
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
          class={toolbarButtonClasses}
          onclick={togglePreview}
          title="Preview"
        >
          <Eye class="h-4 w-4" />
        </button>
        <button
          type="button"
          class={toolbarButtonClasses}
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
    <div class={canvasClasses}>
      {#if isPreviewMode || !editable}
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
                class={elementClasses(element)}
                role="button"
                tabindex="0"
                draggable={editable}
                ondragstart={() => editable && handleDragStart(index)}
                ondragover={(e) => editable && handleDragOver(e, index)}
                ondragend={() => editable && handleDragEnd()}
                onclick={() => editable && selectElement(element.id)}
                onkeydown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    editable && selectElement(element.id);
                  }
                }}
              >
                <!-- Drag handle -->
                {#if editable}
                  <div class={dragHandleClasses}>
                    <GripVertical class="h-4 w-4" />
                  </div>
                {/if}

                <!-- Element content -->
                {#if element.type === 'text'}
                  {@const attrs = element.attributes as ITextAttributes | undefined}
                  <p style="font-size: {attrs?.fontSize || '16px'}; color: {attrs?.color || '#000000'};">
                    {element.content}
                  </p>
                {:else if element.type === 'heading'}
                  {@const attrs = element.attributes as IHeadingAttributes | undefined}
                  {@const level = attrs?.level || 2}
                  {#if level === 1}
                    <h1 style="font-size: {attrs?.fontSize || '32px'}; color: {attrs?.color || '#000000'};">{element.content}</h1>
                  {:else if level === 2}
                    <h2 style="font-size: {attrs?.fontSize || '32px'}; color: {attrs?.color || '#000000'};">{element.content}</h2>
                  {:else if level === 3}
                    <h3 style="font-size: {attrs?.fontSize || '32px'}; color: {attrs?.color || '#000000'};">{element.content}</h3>
                  {:else if level === 4}
                    <h4 style="font-size: {attrs?.fontSize || '32px'}; color: {attrs?.color || '#000000'};">{element.content}</h4>
                  {:else if level === 5}
                    <h5 style="font-size: {attrs?.fontSize || '32px'}; color: {attrs?.color || '#000000'};">{element.content}</h5>
                  {:else if level === 6}
                    <h6 style="font-size: {attrs?.fontSize || '32px'}; color: {attrs?.color || '#000000'};">{element.content}</h6>
                  {:else}
                    <h2 style="font-size: {attrs?.fontSize || '32px'}; color: {attrs?.color || '#000000'};">{element.content}</h2>
                  {/if}
                {:else if element.type === 'button'}
                  {@const attrs = element.attributes as IButtonAttributes | undefined}
                  <button
                    style="background-color: {attrs?.backgroundColor || '#3B82F6'}; color: {attrs?.color || '#FFFFFF'}; padding: {attrs?.padding || '8px 16px'};"
                    class="rounded border-0 cursor-pointer"
                  >
                    {element.content}
                  </button>
                {:else if element.type === 'divider'}
                  <hr class="border-t border-gray-300 my-2" />
                {:else if element.type === 'image'}
                  {@const attrs = element.attributes as IImageAttributes | undefined}
                  <div class="border border-gray-200 rounded flex items-center justify-center h-32 bg-gray-100">
                    <Image class="h-8 w-8 text-gray-400" />
                    <span class="ml-2 text-sm text-gray-500">Image: {attrs?.alt || 'Placeholder'}</span>
                  </div>
                {/if}

                <!-- Element controls -->
                {#if editable}
                  <div class="absolute -right-6 top-0 flex space-x-1 opacity-0 group-hover:opacity-100">
                    <button
                      type="button"
                      class={elementControlButtonClasses(false)}
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
                      class={elementControlButtonClasses(true)}
                      onclick={(e) => {
                        e.stopPropagation();
                        deleteElement(element.id);
                      }}
                      title="Delete"
                    >
                      <Trash2 class="h-4 w-4" />
                    </button>
                  </div>
                {/if}
              </div>
            {/each}
          {/if}

          <!-- Add element at the end -->
          {#if editable}
            <div class="flex justify-center mt-4">
              <button
                type="button"
                class={addElementButtonClasses}
                onclick={() => addElement('text', elements.length)}
              >
                <Plus class="h-4 w-4 mr-1" />
                Add Element
              </button>
            </div>
          {/if}
        </div>
      {/if}
    </div>

    <!-- Properties panel -->
    {#if selectedElementId && !isPreviewMode && editable}
      <div class={propertiesPanelClasses}>
        <div class={propertiesPanelHeaderClasses}>
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
                    class={inputFieldClasses}
                    bind:value={element.content}
                    oninput={() => updateElement(element.id, { content: element.content })}
                  />
                </div>

                <div>
                  <label for="textColor" class="block text-sm font-medium text-gray-700 mb-1">Color</label>
                  <input
                    type="color"
                    id="textColor"
                    class={inputFieldClasses}
                    value={(element.attributes as any)?.color || ''}
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
                    class={sliderClasses}
                    min="8"
                    max="72"
                    value={(element.attributes as any)?.fontSize || '16'}
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
                  <div class="text-right text-sm text-gray-500">{(element.attributes as any)?.fontSize || '16'}px</div>
                </div>
              {/if}

              {#if element.type === 'button'}
                <div>
                  <label for="buttonText" class="block text-sm font-medium text-gray-700 mb-1">Button Text</label>
                  <input
                    type="text"
                    id="buttonText"
                    class={inputFieldClasses}
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
