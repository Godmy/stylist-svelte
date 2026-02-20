<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/controls';
  import ColorPalette from './index.svelte';

  const defaultColors = [
    { name: 'Red', value: '#EF4444' },
    { name: 'Blue', value: '#3B82F6' },
    { name: 'Green', value: '#10B981' },
    { name: 'Yellow', value: '#F59E0B' },
    { name: 'Purple', value: '#8B5CF6' },
    { name: 'Pink', value: '#EC4899' },
    { name: 'Indigo', value: '#6366F1' },
    { name: 'Gray', value: '#6B7280' }
  ];

  const columnOptions = [2, 3, 4, 5, 6];

  const controls: ControlConfig[] = [
    {
      name: 'title',
      type: 'text',
      defaultValue: 'Color Palette',
      description: 'Title for the color palette'
    },
    {
      name: 'showLabels',
      type: 'boolean',
      defaultValue: true,
      description: 'Whether to show color labels'
    },
    {
      name: 'showValues',
      type: 'boolean',
      defaultValue: false,
      description: 'Whether to show color values'
    },
    {
      name: 'columns',
      type: 'select',
      defaultValue: 4,
      options: columnOptions,
      description: 'Number of columns to display'
    }
  ];
</script>

<Story
  id="atoms-color-palette"
  title="ColorPalette"
  component={ColorPalette}
  category="Atoms/Interaction/Controls/Selectors"
  description="ColorPalette component for selecting colors."
  tags={['color', 'palette', 'selector', 'picker']}
  controls={controls}
>
  {#snippet children(values: any)}
    <div class="p-4">
      <ColorPalette
        {...values}
        colors={defaultColors}
        onValueChange={(color) => console.log('Selected color:', color)}
      />
    </div>
  {/snippet}
  
  {#snippet variants()}
    <div class="grid grid-cols-1 gap-8 p-4">
      <div>
        <h3 class="text-lg font-semibold mb-4">With Labels</h3>
        <ColorPalette
          colors={defaultColors}
          title="Palette with Labels"
          showLabels={true}
          showValues={false}
          columns={4}
        />
      </div>
      <div>
        <h3 class="text-lg font-semibold mb-4">With Values</h3>
        <ColorPalette
          colors={defaultColors}
          title="Palette with Values"
          showLabels={true}
          showValues={true}
          columns={3}
        />
      </div>
      <div>
        <h3 class="text-lg font-semibold mb-4">Compact View</h3>
        <ColorPalette
          colors={defaultColors.slice(0, 4)}
          title="Compact Palette"
          showLabels={false}
          showValues={false}
          columns={4}
        />
      </div>
    </div>
  {/snippet}
</Story>
