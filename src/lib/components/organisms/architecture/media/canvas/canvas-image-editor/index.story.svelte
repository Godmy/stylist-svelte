<script lang="ts">
  // @ts-nocheck
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/controls';

  import CanvasImageEditor from './index.svelte';

  type Props = {
    width: number;
    height: number;
    cropEnabled: boolean;
    filter: 'none' | 'grayscale' | 'sepia' | 'invert' | 'blur';
  };

  const controls: ControlConfig[] = [
    { name: 'width', type: 'number', min: 200, max: 1200, defaultValue: 800 },
    { name: 'height', type: 'number', min: 200, max: 800, defaultValue: 600 },
    { name: 'cropEnabled', type: 'boolean', defaultValue: false },
    { name: 'filter', type: 'select', options: ['none', 'grayscale', 'sepia', 'invert', 'blur'], defaultValue: 'none' }
  ];

  let status = $state('Waiting for interaction…');

  const updateStatus = (message: string) => {
    status = `${new Date().toLocaleTimeString()}: ${message}`;
  };
</script>

<Story
  id="organisms-canvas-image-editor"
  title="Organisms / Architecture / Media / Canvas / Canvas Image Editor"
  component={CanvasImageEditor}
  category="Organisms/Architecture/Media/Canvas"
  description="Canvas-based image editor component for cropping, filtering, and manipulating images."
  controls={controls}
>
  {#snippet children(props: Props)}
    <section class="sb-organisms-canvas-image-editor grid w-full gap-8 lg:grid-cols-[1fr_1fr]">
      <div class="rounded-[2.5rem] border border-[--color-border-primary] bg-[--color-background-primary] p-6 shadow-sm">
        <header class="mb-4 flex items-center justify-between">
          <div>
            <p class="text-sm font-semibold uppercase tracking-wide text-[--color-text-secondary]">Canvas Image Editor</p>
            <p class="text-lg text-[--color-text-primary]">Interactive canvas-based image editor.</p>
          </div>
          <span class="rounded-full bg-[--color-background-secondary] px-4 py-1 text-xs font-semibold text-[--color-text-primary]">
            {props.filter} filter
          </span>
        </header>

        <div class="h-[500px] rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-secondary] p-6 flex items-center justify-center">
          <CanvasImageEditor
            width={props.width}
            height={props.height}
            filter={props.filter}
            cropEnabled={props.cropEnabled}
            src="https://placehold.co/600x400"
            onImageEdit={(result) => updateStatus(`Image edited: ${result}`)}
          />
        </div>
      </div>

      <div class="rounded-[2.5rem] border border-[--color-border-primary] bg-[--color-background-secondary] p-6 shadow-sm">
        <h3 class="text-base font-semibold text-[--color-text-primary]">Event feed</h3>
        <p class="text-sm text-[--color-text-secondary]">Use callbacks to update logs, analytics, or change content.</p>
        <div class="mt-4 rounded-2xl border border-[--color-border-primary] bg-[--color-background-primary] px-4 py-3 text-sm">
          {status}
        </div>
        <ul class="mt-4 space-y-2 text-xs text-[--color-text-secondary]">
          <li>• `onImageEdit(result)` fired when image is processed.</li>
          <li>• Supports various image filters (grayscale, sepia, etc.).</li>
          <li>• Crop functionality available.</li>
        </ul>
      </div>
    </section>
  {/snippet}
</Story>


