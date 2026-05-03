<script lang="ts">
  import { Icon as BaseIcon } from '$stylist/media';
  import { PageBuilderStyleManager } from '$stylist/control/class/style-manager/page-builder';
  import type { PageBuilderTextAttributes } from '$stylist/control/type/struct/page-builder-text-attributes';
  import type { PageBuilderHeadingAttributes } from '$stylist/control/type/struct/page-builder-heading-attributes';
  import type { PageBuilderButtonAttributes } from '$stylist/control/type/struct/page-builder-button-attributes';
  import type { PageBuilderImageAttributes } from '$stylist/control/type/struct/page-builder-image-attributes';
  import { PAGE_BUILDER_TOOLBAR_ITEMS } from '$stylist/control/const/record/page-builder-toolbar-items';
  import { PAGE_BUILDER_ICON } from '$stylist/control/const/map/page-builder-icons';
  import { createPageBuilderState } from '$stylist/control/function/state/page-builder';
  import { pageBuilderRenderElement } from '$stylist/control/function/script/page-builder-render-element';
  import type { PageBuilderProps } from '$stylist/control/type/struct/page-builder-props';

  let props: PageBuilderProps = $props();
  const state = createPageBuilderState(props);
</script>

<div class={PageBuilderStyleManager.getContainerClasses(state.className)} {...state.restProps}>
  {#if state.showToolbar}
    <div class={PageBuilderStyleManager.getToolbarClasses(state.toolbarClass)}>
      <div class="flex space-x-1">
        {#each PAGE_BUILDER_TOOLBAR_ITEMS as item}
          <button
            type="button"
            class={PageBuilderStyleManager.getToolbarButtonClasses()}
            onclick={() => state.addElement(item.type)}
            title={item.label}
          >
            <BaseIcon name={item.icon} class="h-4 w-4" />
          </button>
        {/each}
      </div>

      <div class="flex-1"></div>

      <div class="flex space-x-2">
        <button
          type="button"
          class={PageBuilderStyleManager.getToolbarButtonClasses()}
          onclick={() => (state.isPreviewMode = !state.isPreviewMode)}
          title="Preview"
        >
          <BaseIcon name={PAGE_BUILDER_ICON.EYE} class="h-4 w-4" />
        </button>
        <button
          type="button"
          class={PageBuilderStyleManager.getToolbarButtonClasses()}
          onclick={state.handleSave}
          title="Save"
        >
          <BaseIcon name={PAGE_BUILDER_ICON.SAVE} class="h-4 w-4" />
        </button>
      </div>
    </div>
  {/if}

  <div class="flex">
    <div class={PageBuilderStyleManager.getCanvasClasses(state.canvasClass, state.isPreviewMode)}>
      {#if state.isPreviewMode || !state.editable}
        <div class="max-w-4xl mx-auto">
          {#each state.elements as element}
            <div class="mb-4">{@html pageBuilderRenderElement(element)}</div>
          {/each}
        </div>
      {:else}
        <div class="max-w-4xl mx-auto border border-dashed border-[var(--color-border-primary)] rounded-lg min-h-[400px] p-4">
          {#if state.elements.length === 0}
            <div class="flex flex-col items-center justify-center h-64 text-[var(--color-text-secondary)]">
              <BaseIcon name={PAGE_BUILDER_ICON.SQUARE} class="h-12 w-12 mb-4" />
              <p>Drag elements here to start building your page</p>
              <p class="text-sm mt-2">Or use the toolbar to add elements</p>
            </div>
          {:else}
            {#each state.elements as element, index}
              <div
                class={PageBuilderStyleManager.getElementClasses(state.selectedElementId === element.id, state.elementClass)}
                role="button"
                tabindex="0"
                draggable={state.editable}
                ondragstart={() => (state.dragIndex = index)}
                ondragover={(event) => state.handleDragOver(event, index)}
                ondragend={() => (state.dragIndex = null)}
                onclick={() => state.selectElement(element.id)}
                onkeydown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    state.selectElement(element.id);
                  }
                }}
              >
                <div class={PageBuilderStyleManager.getDragHandleClasses()}>
                  <BaseIcon name={PAGE_BUILDER_ICON.GRIP_VERTICAL} class="h-4 w-4" />
                </div>

                {#if element.type === 'text'}
                  {@const attrs = element.attributes as PageBuilderTextAttributes | undefined}
                  <p style={`font-size:${attrs?.FONT_SIZE ?? 'var(--font-size-4)'};color:${attrs?.color ?? 'var(--color-text-primary)'};`}>{element.content}</p>
                {:else if element.type === 'heading'}
                  {@const attrs = element.attributes as PageBuilderHeadingAttributes | undefined}
                  <h2 style={`font-size:${attrs?.FONT_SIZE ?? 'var(--font-size-8)'};color:${attrs?.color ?? 'var(--color-text-primary)'};`}>{element.content}</h2>
                {:else if element.type === 'button'}
                  {@const attrs = element.attributes as PageBuilderButtonAttributes | undefined}
                  <button
                    style={`background-color:${attrs?.backgroundColor ?? 'var(--color-primary-500)'};color:${attrs?.color ?? 'var(--color-background-primary)'};padding:${attrs?.padding ?? 'var(--spacing-2) var(--spacing-4)'};`}
                    class="rounded border-0 cursor-pointer"
                  >
                    {element.content}
                  </button>
                {:else if element.type === 'divider'}
                  <hr class="border-t border-[var(--color-border-primary)] my-2" />
                {:else if element.type === 'image'}
                  {@const attrs = element.attributes as PageBuilderImageAttributes | undefined}
                  <div class="border border-[var(--color-border-primary)] rounded flex items-center justify-center h-32 bg-[var(--color-background-secondary)]">
                    <BaseIcon name={PAGE_BUILDER_ICON.IMAGE} class="h-8 w-8 text-[var(--color-text-tertiary)]" />
                    <span class="ml-2 text-sm text-[var(--color-text-secondary)]">Image: {attrs?.alt ?? 'Placeholder'}</span>
                  </div>
                {/if}

                <div class="absolute -right-6 top-0 flex space-x-1 opacity-[var(--opacity-0)] group-hover:opacity-[var(--opacity-100)]">
                  <button
                    type="button"
                    class={PageBuilderStyleManager.getElementControlButtonClasses(false)}
                    onclick={(event) => {
                      event.stopPropagation();
                      state.duplicateElement(element.id);
                    }}
                    title="Duplicate"
                  >
                    <BaseIcon name={PAGE_BUILDER_ICON.COPY} class="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    class={PageBuilderStyleManager.getElementControlButtonClasses(true)}
                    onclick={(event) => {
                      event.stopPropagation();
                      state.deleteElement(element.id);
                    }}
                    title="Delete"
                  >
                    <BaseIcon name={PAGE_BUILDER_ICON.TRASH_2} class="h-4 w-4" />
                  </button>
                </div>
              </div>
            {/each}
          {/if}

          <div class="flex justify-center mt-4">
            <button
              type="button"
              class={PageBuilderStyleManager.getAddElementButtonClasses()}
              onclick={() => state.addElement('text', state.elements.length)}
            >
              <BaseIcon name={PAGE_BUILDER_ICON.PLUS} class="h-4 w-4 mr-1" />
              Add Element
            </button>
          </div>
        </div>
      {/if}
    </div>

    {#if state.selectedElement && !state.isPreviewMode && state.editable}
      <div class={PageBuilderStyleManager.getPropertiesPanelClasses()}>
        <div class={PageBuilderStyleManager.getPropertiesPanelHeaderClasses()}>
          <h3 class="text-lg font-medium text-[var(--color-text-primary)]">Properties</h3>
          <button
            type="button"
            class="p-1 rounded hover:bg-[var(--color-background-tertiary)]"
            onclick={() => (state.selectedElementId = null)}
            title="Close"
          >
            <BaseIcon name={PAGE_BUILDER_ICON.X} class="h-5 w-5" />
          </button>
        </div>

        <div class="space-y-4">
          <div>
            <div class="block text-sm font-medium text-[var(--color-text-primary)] mb-1">Type</div>
            <span class="text-sm text-[var(--color-text-primary)] capitalize">{state.selectedElement?.type}</span>
          </div>

          {#if state.selectedElement?.type === 'text' || state.selectedElement?.type === 'heading'}
            <div>
              <label for="textContent" class="block text-sm font-medium text-[var(--color-text-primary)] mb-1">Content</label>
              <input
                id="textContent"
                type="text"
                class={PageBuilderStyleManager.getInputFieldClasses()}
                value={state.selectedElement?.content ?? ''}
                oninput={(event) =>
                  state.selectedElement && state.updateElement(state.selectedElement.id, { content: (event.target as HTMLInputElement).value })}
              />
            </div>
          {/if}

          {#if state.selectedElement?.type === 'button'}
            <div>
              <label for="buttonText" class="block text-sm font-medium text-[var(--color-text-primary)] mb-1">Button Text</label>
              <input
                id="buttonText"
                type="text"
                class={PageBuilderStyleManager.getInputFieldClasses()}
                value={state.selectedElement?.content ?? ''}
                oninput={(event) =>
                  state.selectedElement && state.updateElement(state.selectedElement.id, { content: (event.target as HTMLInputElement).value })}
              />
            </div>
          {/if}

          <div>
            <label for="FONT_SIZE" class="block text-sm font-medium text-[var(--color-text-primary)] mb-1">Font Size</label>
            <input
              id="FONT_SIZE"
              type="range"
              class={PageBuilderStyleManager.getSliderClasses()}
              min="8"
              max="72"
              value={(state.selectedElement?.attributes as PageBuilderTextAttributes | undefined)?.FONT_SIZE?.replace('px', '') ?? '16'}
              oninput={(event) => {
                const FONT_SIZE = `${(event.target as HTMLInputElement).value}px`;
                if (state.selectedElement) {
                  state.updateElement(state.selectedElement.id, {
                    attributes: { ...(state.selectedElement.attributes ?? {}), FONT_SIZE } as any
                  });
                }
              }}
            />
          </div>
        </div>
      </div>
    {/if}
  </div>
</div>
