<script lang="ts">
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';

  import * as CanvasDrawingSurfaceModule from './CanvasDrawingSurface.svelte';
  const CanvasDrawingSurface: any = CanvasDrawingSurfaceModule.default ?? CanvasDrawingSurfaceModule;

  let {
    id = '',
    title = '',
    description = '',
    controls = [
      { name: 'drawingEnabled', type: 'boolean', defaultValue: true },
      { name: 'tool', type: 'select', options: ['pen', 'eraser', 'select'], defaultValue: 'pen' },
      { name: 'strokeColor', type: 'color', defaultValue: '#000000' },
      { name: 'strokeWidth', type: 'range', min: 1, max: 20, defaultValue: 2 }
    ]
  } = $props<{
    id?: string;
    title?: string;
    description?: string;
    controls?: ControlConfig[]
  }>();

  // State for managing the canvas
  let canvasRef: any = null; // Using 'any' to avoid type issues with Svelte component
  let clearCanvasMethod: (() => void) | null = null;
  let strokeColor = $state('#000000');
  let strokeWidth = $state(2);
  let tool = $state<'pen' | 'eraser' | 'select'>('pen');
  let drawingEnabled = $state(true);

  // Function to clear the canvas
  function clearCanvas() {
    if (clearCanvasMethod) {
      clearCanvasMethod();
    }
  }

  function handleExposeMethods(e: CustomEvent<{ clear: () => void }>) {
    clearCanvasMethod = e.detail.clear;
  }

  // Function to handle color change
  function handleColorChange(color: string) {
    strokeColor = color;
  }

  // Function to handle stroke width change
  function handleStrokeWidthChange(width: number) {
    strokeWidth = width;
  }

  // Function to handle tool change
  function handleToolChange(selectedTool: 'pen' | 'eraser' | 'select') {
    tool = selectedTool;
  }

  // Function to handle drawing enabled change
  function handleDrawingEnabledChange(enabled: boolean) {
    drawingEnabled = enabled;
  }
</script>

<Story
  {id}
  {title}
  {description}
  component={CanvasDrawingSurface}
  category="Molecules"
  controls={controls}
>
  {#snippet children(props: { drawingEnabled?: boolean; tool?: 'pen' | 'eraser' | 'select'; strokeColor?: string; strokeWidth?: number })}
    <section class="grid w-full gap-8 lg:grid-cols-[1fr_1fr]">
      <div class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-primary] p-6 shadow-sm">
        <p class="text-sm font-semibold uppercase tracking-wide text-[--color-text-secondary]">
          Primary Drawing Surface Example
        </p>
        <p class="mt-1 text-[--color-text-primary]">Interactive canvas drawing surface with customizable tools.</p>

        <div class="mt-6 flex flex-col items-center">
          <div class="flex gap-2 mb-4">
            <button
              class={`px-3 py-1 rounded-md ${tool === 'pen' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
              onclick={() => handleToolChange('pen')}
            >
              Pen
            </button>
            <button
              class={`px-3 py-1 rounded-md ${tool === 'eraser' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
              onclick={() => handleToolChange('eraser')}
            >
              Eraser
            </button>
            <button
              class={`px-3 py-1 rounded-md ${tool === 'select' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
              onclick={() => handleToolChange('select')}
            >
              Select
            </button>
            <input
              type="color"
              value={strokeColor}
              oninput={(e) => handleColorChange((e.target as HTMLInputElement).value)}
              class="w-10 h-10 border border-gray-300 rounded cursor-pointer"
            />
            <input
              type="range"
              min="1"
              max="20"
              value={strokeWidth}
              oninput={(e) => handleStrokeWidthChange(parseInt((e.target as HTMLInputElement).value))}
              class="w-24"
            />
            <button
              class="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600"
              onclick={clearCanvas}
            >
              Clear
            </button>
          </div>
          
          <CanvasDrawingSurface
            bind:this={canvasRef}
            drawingEnabled={drawingEnabled}
            tool={props.tool ?? tool}
            strokeColor={props.strokeColor ?? strokeColor}
            strokeWidth={props.strokeWidth ?? strokeWidth}
            width={500}
            height={300}
            on:expose-methods={handleExposeMethods as (e: CustomEvent<any>) => void}
          />
        </div>
      </div>

      <div class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-secondary] p-6 shadow-sm">
        <h3 class="text-base font-semibold text-[--color-text-primary]">Drawing Surface Variations</h3>
        <p class="text-sm text-[--color-text-secondary]">
          Different canvas configurations with various tools and settings.
        </p>

        <div class="mt-5 space-y-4">
          <article class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] p-4">
            <p class="text-sm font-semibold text-[--color-text-primary] mb-2">Drawing Disabled</p>
            <div class="flex justify-center">
              <CanvasDrawingSurface
                drawingEnabled={false}
                width={250}
                height={150}
                backgroundColor="#f0f0f0"
              />
            </div>
          </article>

          <article class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] p-4">
            <p class="text-sm font-semibold text-[--color-text-primary] mb-2">Thick Brush</p>
            <div class="flex justify-center">
              <CanvasDrawingSurface
                drawingEnabled={true}
                tool="pen"
                strokeColor="#ff0000"
                strokeWidth={10}
                width={250}
                height={150}
              />
            </div>
          </article>

          <article class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] p-4">
            <p class="text-sm font-semibold text-[--color-text-primary] mb-2">Eraser Tool</p>
            <div class="flex justify-center">
              <CanvasDrawingSurface
                drawingEnabled={true}
                tool="eraser"
                strokeWidth={15}
                width={250}
                height={150}
                backgroundColor="#e0e0e0"
              />
            </div>
          </article>
        </div>
      </div>
    </section>
  {/snippet}
</Story>
