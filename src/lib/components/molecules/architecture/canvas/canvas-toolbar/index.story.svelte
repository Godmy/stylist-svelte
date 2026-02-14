<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/controls';

  import * as CanvasToolbarModule from './index.svelte';
  const CanvasToolbar: any = CanvasToolbarModule.default ?? CanvasToolbarModule;

  let {
    id = '',
    title = '',
    description = '',
    controls = [
      { name: 'selectedTool', type: 'select', options: ['pen', 'eraser', 'select', 'text', 'shape'], defaultValue: 'pen' }
    ]
  } = $props<{
    id?: string;
    title?: string;
    description?: string;
    controls?: ControlConfig[]
  }>();

  // State for toolbar options
  let selectedTool = $state('pen');
  let drawingOptions = $state({
    lineWidth: 2,
    strokeColor: '#000000',
    tool: 'pen' as const,
    mode: 'draw' as const
  });

  // Event handlers
  function handleToolChange(event: CustomEvent<{ tool: any; options: any }>) {
    console.log('Tool changed:', event.detail.tool, event.detail.options);
    drawingOptions = event.detail.options;
  }

  function handleClearCanvas() {
    console.log('Clear canvas requested');
  }

  function handleSave() {
    console.log('Save requested');
  }

  function handleUndo() {
    console.log('Undo requested');
  }

  function handleRedo() {
    console.log('Redo requested');
  }

  // Function to update tool
  function updateTool(tool: 'pen' | 'eraser' | 'select' | 'text' | 'shape') {
    selectedTool = tool;
  }
</script>

<Story
  {id}
  {title}
  {description}
  component={CanvasToolbar}
  category="Molecules"
  controls={controls}
>
  {#snippet children(props: { selectedTool?: 'pen' | 'eraser' | 'select' | 'text' | 'shape' })}
    <section class="grid w-full gap-8 lg:grid-cols-[1fr_1fr]">
      <div class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-primary] p-6 shadow-sm">
        <p class="text-sm font-semibold uppercase tracking-wide text-[--color-text-secondary]">
          Primary Canvas Toolbar Example
        </p>
        <p class="mt-1 text-[--color-text-primary]">Interactive canvas toolbar with drawing tools and options.</p>

        <div class="mt-6 flex items-center justify-center">
          <CanvasToolbar
            selectedTool={props.selectedTool}
            {drawingOptions}
            on:tool-change={handleToolChange as (e: CustomEvent<any>) => void}
            on:clear-canvas={handleClearCanvas as (e: CustomEvent<any>) => void}
            on:save={handleSave as (e: CustomEvent<any>) => void}
            on:undo={handleUndo as (e: CustomEvent<any>) => void}
            on:redo={handleRedo as (e: CustomEvent<any>) => void}
          />
        </div>
      </div>

      <div class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-secondary] p-6 shadow-sm">
        <h3 class="text-base font-semibold text-[--color-text-primary]">Toolbar Variations</h3>
        <p class="text-sm text-[--color-text-secondary]">
          Different toolbar configurations with various tools and settings.
        </p>

        <div class="mt-5 space-y-4">
          <article class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] p-4">
            <p class="text-sm font-semibold text-[--color-text-primary] mb-2">Pen Tool Configuration</p>
            <div class="flex items-center justify-center">
              <CanvasToolbar
                selectedTool="pen"
                {drawingOptions}
                on:tool-change={handleToolChange as (e: CustomEvent<any>) => void}
              />
            </div>
          </article>

          <article class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] p-4">
            <p class="text-sm font-semibold text-[--color-text-primary] mb-2">Eraser Tool Configuration</p>
            <div class="flex items-center justify-center">
              <CanvasToolbar
                selectedTool="eraser"
                {drawingOptions}
                on:tool-change={handleToolChange as (e: CustomEvent<any>) => void}
              />
            </div>
          </article>

          <article class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] p-4">
            <p class="text-sm font-semibold text-[--color-text-primary] mb-2">Toolbar with Custom Options</p>
            <div class="flex items-center justify-center">
              <CanvasToolbar
                selectedTool="pen"
                {drawingOptions}
                on:tool-change={handleToolChange as (e: CustomEvent<any>) => void}
              />
            </div>
          </article>
        </div>
      </div>
    </section>
  {/snippet}
</Story>


