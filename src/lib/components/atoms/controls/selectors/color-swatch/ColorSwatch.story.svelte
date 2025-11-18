<script lang="ts">
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';
  import ColorSwatch from './ColorSwatch.svelte';

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
        <ColorSwatch
          color={props.color}
          size={props.size}
          content={props.withContent ? (): any => 'Aa' : undefined}
        />
        <span>Color: {props.color}, Size: {props.size}px</span>
      </div>
    </div>
  {/snippet}
</Story>