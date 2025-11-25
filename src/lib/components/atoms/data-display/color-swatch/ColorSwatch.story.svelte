<script lang="ts">
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';
  import ColorSwatch from './ColorSwatch.svelte';
  import { createRawSnippet } from 'svelte';

  type ColorSwatchStoryProps = {
    color: string;
    size: number;
    withContent: boolean;
  };

  const controls: ControlConfig[] = [
    {
      name: 'color',
      type: 'color',
      defaultValue: '#0ea5e9'
    },
    {
      name: 'size',
      type: 'number',
      defaultValue: 32,
      min: 16,
      max: 64
    },
    {
      name: 'withContent',
      type: 'boolean',
      defaultValue: false
    }
  ];

  const inlineContent = createRawSnippet(() => ({
    render: () => `<span class="text-sm font-semibold">Aa</span>`
  }));
</script>

<Story
  id="atoms-color-swatch"
  title="ColorSwatch"
  component={ColorSwatch}
  category="Atoms"
  description="Color sample (square) component."
  tags={['display', 'color', 'swatch']}
  controls={controls}
>
  {#snippet children(props: ColorSwatchStoryProps)}
    <div class="flex flex-col gap-4">
      <div class="flex items-center gap-4">
        {#if props.withContent}
          <ColorSwatch
            color={props.color}
            size={props.size}
            content={inlineContent}
          />
        {:else}
          <ColorSwatch
            color={props.color}
            size={props.size}
            content={undefined}
          />
        {/if}
        <span>Color: {props.color}, Size: {props.size}px</span>
      </div>
    </div>
  {/snippet}
</Story>
