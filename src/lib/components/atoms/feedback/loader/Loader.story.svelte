<script lang="ts">
  import Loader from './Loader.svelte';
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';

  let size = $state(32);
  let thickness = $state(4);
  let color = $state('#2563eb');

  const controls: ControlConfig[] = [
    { name: 'size', type: 'number', min: 16, max: 96, step: 4, defaultValue: 32 },
    { name: 'thickness', type: 'number', min: 2, max: 8, step: 1, defaultValue: 4 },
    { name: 'color', type: 'color', defaultValue: '#2563eb' }
  ];
</script>

<Story
  id="atoms-loader"
  title="Loader"
  component={Loader}
  category="Atoms"
  description="Accessible spinner that inherits current color."
  tags={['loading', 'feedback']}
  controls={controls}
>
  <div class="space-y-6 p-8">
    <div class="flex items-center gap-4">
      <Loader style={`width:${size}px;height:${size}px;border-width:${thickness}px;color:${color};`} />
      <span class="text-sm text-gray-500">
        The spinner uses <code>border-current</code>, so it adopts the text color you pass.
      </span>
    </div>

    <div class="grid gap-4 md:grid-cols-2">
      <label class="flex flex-col gap-1 text-sm">
        Size ({size}px)
        <input type="range" min="16" max="96" step="4" bind:value={size} />
      </label>
      <label class="flex flex-col gap-1 text-sm">
        Border thickness ({thickness}px)
        <input type="range" min="2" max="8" step="1" bind:value={thickness} />
      </label>
      <label class="flex flex-col gap-1 text-sm md:col-span-2">
        Color
        <input type="color" bind:value={color} class="h-10 w-full cursor-pointer rounded border border-gray-300 bg-white" />
      </label>
    </div>
  </div>
</Story>
