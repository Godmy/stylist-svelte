<script lang="ts">
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';

  import CanvasImageEditor, { type CropArea } from './CanvasImageEditor.svelte';

  let {
    id = '',
    title = '',
    description = '',
    controls = [
      { name: 'filter', type: 'select', options: ['none', 'grayscale', 'sepia', 'invert', 'blur'], defaultValue: 'none' },
      { name: 'cropEnabled', type: 'boolean', defaultValue: false }
    ]
  } = $props<{
    id?: string;
    title?: string;
    description?: string;
    controls?: ControlConfig[]
  }>();

  // Sample image URL (using a placeholder)
  const sampleImage = "https://placehold.co/600x400/cccccc/969696?text=Sample+Image";

  // State for editor controls
  let filter = $state('none');
  let cropEnabled = $state(false);
  let cropArea: CropArea = { x: 50, y: 50, width: 200, height: 150 };

  // Function to handle filter changes
  function handleFilterChange(newFilter: 'none' | 'grayscale' | 'sepia' | 'invert' | 'blur') {
    filter = newFilter;
  }

  // Function to handle crop toggle
  function handleCropToggle(enabled: boolean) {
    cropEnabled = enabled;
  }
</script>

<Story
  {id}
  {title}
  {description}
  component={CanvasImageEditor}
  category="Molecules"
  controls={controls}
>
  {#snippet children(props: { filter?: 'none' | 'grayscale' | 'sepia' | 'invert' | 'blur'; cropEnabled?: boolean })}
    <section class="grid w-full gap-8 lg:grid-cols-[1fr_1fr]">
      <div class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-primary] p-6 shadow-sm">
        <p class="text-sm font-semibold uppercase tracking-wide text-[--color-text-secondary]">
          Primary Image Editor Example
        </p>
        <p class="mt-1 text-[--color-text-primary]">Interactive canvas image editor with filter and crop capabilities.</p>

        <div class="mt-6 flex flex-col items-center">
          <div class="flex gap-2 mb-4">
            <button
              class={`px-3 py-1 rounded-md ${filter === 'none' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
              onclick={() => handleFilterChange('none')}
            >
              None
            </button>
            <button
              class={`px-3 py-1 rounded-md ${filter === 'grayscale' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
              onclick={() => handleFilterChange('grayscale')}
            >
              Grayscale
            </button>
            <button
              class={`px-3 py-1 rounded-md ${filter === 'sepia' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
              onclick={() => handleFilterChange('sepia')}
            >
              Sepia
            </button>
            <button
              class={`px-3 py-1 rounded-md ${filter === 'invert' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
              onclick={() => handleFilterChange('invert')}
            >
              Invert
            </button>
            <button
              class={`px-3 py-1 rounded-md ${filter === 'blur' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
              onclick={() => handleFilterChange('blur')}
            >
              Blur
            </button>
            <button
              class={`px-3 py-1 rounded-md ${cropEnabled ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
              onclick={() => handleCropToggle(!cropEnabled)}
            >
              Crop: {cropEnabled ? 'ON' : 'OFF'}
            </button>
          </div>
          
          <CanvasImageEditor
            src={sampleImage}
            filter={props.filter}
            cropEnabled={props.cropEnabled}
            cropArea={cropArea}
            width={500}
            height={300}
          />
        </div>
      </div>

      <div class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-secondary] p-6 shadow-sm">
        <h3 class="text-base font-semibold text-[--color-text-primary]">Image Editor Variations</h3>
        <p class="text-sm text-[--color-text-secondary]">
          Different image editing configurations with various filters.
        </p>

        <div class="mt-5 space-y-4">
          <article class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] p-4">
            <p class="text-sm font-semibold text-[--color-text-primary] mb-2">Original Image</p>
            <div class="flex justify-center">
              <CanvasImageEditor
                src={sampleImage}
                filter="none"
                width={200}
                height={150}
              />
            </div>
          </article>

          <article class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] p-4">
            <p class="text-sm font-semibold text-[--color-text-primary] mb-2">Grayscale Filter</p>
            <div class="flex justify-center">
              <CanvasImageEditor
                src={sampleImage}
                filter="grayscale"
                width={200}
                height={150}
              />
            </div>
          </article>

          <article class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] p-4">
            <p class="text-sm font-semibold text-[--color-text-primary] mb-2">Sepia Filter</p>
            <div class="flex justify-center">
              <CanvasImageEditor
                src={sampleImage}
                filter="sepia"
                width={200}
                height={150}
              />
            </div>
          </article>

          <article class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] p-4">
            <p class="text-sm font-semibold text-[--color-text-primary] mb-2">Inverted Colors</p>
            <div class="flex justify-center">
              <CanvasImageEditor
                src={sampleImage}
                filter="invert"
                width={200}
                height={150}
              />
            </div>
          </article>
        </div>
      </div>
    </section>
  {/snippet}
</Story>