<script lang="ts">
  import Story from '$stylist/design-system/playground/Story.svelte';
  import CanvasImageEditor from './index.svelte';
  import { CONTROL_TYPES } from '$stylist/design-system/tokens/interaction/controls';

  const controls = [
    {
      name: 'width',
      type: CONTROL_TYPES.SELECT,
      options: [600, 700, 800, 900],
      defaultValue: 800
    },
    {
      name: 'height',
      type: CONTROL_TYPES.SELECT,
      options: [400, 500, 600, 700],
      defaultValue: 600
    },
    {
      name: 'cropEnabled',
      type: CONTROL_TYPES.BOOLEAN,
      defaultValue: false
    },
    {
      name: 'filter',
      type: CONTROL_TYPES.SELECT,
      options: ['none', 'grayscale', 'sepia', 'invert', 'blur', 'brightness', 'contrast', 'saturate', 'hue-rotate'],
      defaultValue: 'none'
    }
  ];
</script>

<Story
  {controls}
  title="CanvasImageEditor"
  category="Organisms/Media/Canvas"
  description="Canvas-based image editor component for cropping, filtering, and manipulating images."
  tags={['image', 'editor', 'canvas', 'filter', 'crop']}
>
  {#snippet children(values: any)}
    <CanvasImageEditor
      width={values.width}
      height={values.height}
      filter={values.filter}
      cropEnabled={values.cropEnabled}
      src="https://placehold.co/600x400"
    />
  {/snippet}
</Story>


