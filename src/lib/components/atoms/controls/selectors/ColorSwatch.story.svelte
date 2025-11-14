<script lang="ts">
  import ColorSwatch from './ColorSwatch.svelte';
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';

  let color = $state('#0ea5e9');
  let size = $state(48);
  let showContent = $state(false);

  const controls: ControlConfig[] = [
    { name: 'color', type: 'color', defaultValue: '#0ea5e9' },
    { name: 'size', type: 'number', min: 16, max: 96, step: 4, defaultValue: 48 },
    { name: 'showContent', type: 'boolean', defaultValue: false }
  ];
</script>

<Story
  id="atoms-color-swatch"
  title="ColorSwatch"
  component={ColorSwatch}
  category="Atoms"
  description="Displays brand palettes, token previews or custom content over a colored tile."
  tags={['color', 'picker']}
  controls={controls}
>
  {#snippet children()}
    {#snippet labelContent()}
      <span class="text-xs font-medium text-white drop-shadow">{color.toUpperCase()}</span>
    {/snippet}

    <div class="space-y-6 p-6">
      <div class="flex flex-wrap gap-4">
        <ColorSwatch color={color} size={size} content={showContent ? labelContent : undefined} />
        <ColorSwatch color="#ec4899" size={size} />
        <ColorSwatch color="#84cc16" size={size} />
        <ColorSwatch color="#f97316" size={size} />
      </div>

      <div class="grid gap-4 sm:grid-cols-2">
        <label class="flex flex-col gap-1 text-sm">
          Color
          <input type="color" bind:value={color} class="h-10 w-full cursor-pointer rounded border border-gray-300 bg-white" />
        </label>
        <label class="flex flex-col gap-1 text-sm">
          Size ({size}px)
          <input
            type="range"
            min="16"
            max="96"
            step="4"
            bind:value={size}
          />
        </label>
        <label class="flex items-center gap-2 text-sm">
          <input type="checkbox" bind:checked={showContent} />
          Show label snippet
        </label>
      </div>
    </div>
  {/snippet}
</Story>
