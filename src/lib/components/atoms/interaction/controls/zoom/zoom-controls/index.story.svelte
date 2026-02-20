<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/controls';
  import ZoomControls from './index.svelte';

  const controls: ControlConfig[] = [
    {
      name: 'initialValue',
      type: 'number',
      defaultValue: 100,
      min: 25,
      max: 400,
      description: 'Initial zoom level percentage'
    },
    {
      name: 'minZoom',
      type: 'number',
      defaultValue: 50,
      min: 10,
      max: 200,
      description: 'Minimum zoom level percentage'
    },
    {
      name: 'maxZoom',
      type: 'number',
      defaultValue: 200,
      min: 100,
      max: 500,
      description: 'Maximum zoom level percentage'
    },
    {
      name: 'step',
      type: 'number',
      defaultValue: 10,
      min: 1,
      max: 50,
      description: 'Zoom step increment/decrement'
    },
    {
      name: 'showPercentage',
      type: 'boolean',
      defaultValue: true,
      description: 'Whether to show percentage indicator'
    }
  ];
</script>

<Story
  id="atoms-zoom-controls"
  title="ZoomControls"
  component={ZoomControls}
  category="Atoms/Interaction/Controls/Zoom"
  description="ZoomControls component for zooming content."
  tags={['zoom', 'controls', 'accessibility', 'scale']}
  controls={controls}
>
  {#snippet children(props)}
    <div class="p-4 h-96 flex items-center justify-center">
      <div class="content-container border-2 border-dashed border-gray-300 p-8 rounded-lg">
        <h2 class="text-xl font-bold mb-4">Zoomable Content</h2>
        <p>This content can be zoomed in and out using the controls.</p>
        <div class="mt-4 grid grid-cols-3 gap-4">
          {#each Array.from({ length: 9 }) as _, i}
            <div class="bg-blue-100 p-4 rounded text-center">
              Box {i + 1}
            </div>
          {/each}
        </div>
      </div>
      <ZoomControls
        {...props}
        onValueChange={(zoomLevel) => console.log('Zoom level changed:', zoomLevel)}
      />
    </div>
  {/snippet}
  
  {#snippet variants}
    <div class="p-4 h-96 flex items-center justify-center">
      <div class="content-container border-2 border-dashed border-gray-300 p-8 rounded-lg">
        <h2 class="text-xl font-bold mb-4">Different Zoom Controls</h2>
        <p>Try different zoom configurations.</p>
        <div class="mt-4 grid grid-cols-3 gap-4">
          {#each Array.from({ length: 9 }) as _, i}
            <div class="bg-green-100 p-4 rounded text-center">
              Item {i + 1}
            </div>
          {/each}
        </div>
      </div>
      <ZoomControls
        initialValue={75}
        minZoom={25}
        maxZoom={150}
        step={5}
        showPercentage={true}
      />
    </div>
  {/snippet}
</Story>
