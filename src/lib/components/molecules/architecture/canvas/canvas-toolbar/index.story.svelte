<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/controls';

  import CanvasToolbar from './index.svelte';

  const controls: ControlConfig[] = [
    { name: 'selectedTool', type: 'select', options: ['pen', 'eraser', 'select', 'text', 'shape'], defaultValue: 'pen' }
  ];

  // State for toolbar options
  let lineWidth = $state(2);
  let strokeColor = $state('#000000');
  let tool = $state('pen');
  let mode = $state('draw');

  // Event handlers
  function handleToolChange(event: CustomEvent<{ tool: any; options: any }>) {
    console.log('Tool changed:', event.detail.tool, event.detail.options);
    lineWidth = event.detail.options.lineWidth;
    strokeColor = event.detail.options.strokeColor;
    tool = event.detail.options.tool;
    mode = event.detail.options.mode;
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

  // Create drawing options object
  let drawingOptions = $derived({
    lineWidth,
    strokeColor,
    tool: tool as 'pen' | 'eraser' | 'select' | 'text' | 'shape',
    mode: mode as 'draw' | 'erase'
  });
</script>

<Story
  id="molecules-canvas-toolbar"
  title="Canvas Toolbar"
  component={CanvasToolbar}
  category="Molecules"
  description="Interactive canvas toolbar with drawing tools and options."
  controls={controls}
>
  {#snippet children(props)}
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
            on:tool-change={handleToolChange}
            on:clear-canvas={handleClearCanvas}
            on:save={handleSave}
            on:undo={handleUndo}
            on:redo={handleRedo}
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
                on:tool-change={handleToolChange}
              />
            </div>
          </article>

          <article class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] p-4">
            <p class="text-sm font-semibold text-[--color-text-primary] mb-2">Eraser Tool Configuration</p>
            <div class="flex items-center justify-center">
              <CanvasToolbar
                selectedTool="eraser"
                {drawingOptions}
                on:tool-change={handleToolChange}
              />
            </div>
          </article>

          <article class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] p-4">
            <p class="text-sm font-semibold text-[--color-text-primary] mb-2">Toolbar with Custom Options</p>
            <div class="flex items-center justify-center">
              <CanvasToolbar
                selectedTool="pen"
                {drawingOptions}
                on:tool-change={handleToolChange}
              />
            </div>
          </article>
        </div>
      </div>
    </section>
  {/snippet}
</Story>



