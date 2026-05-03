<script lang="ts">
  import Story from '$stylist/playground/component/molecule/story/index.svelte';
  import CanvasImageEditor from './index.svelte';
  import { TOKEN_CONTROLLER_TYPE } from '$stylist/interaction/const/map/controller-type';

  const controls = [
    {
      name: 'width',
      type: TOKEN_CONTROLLER_TYPE.SELECT,
      options: [600, 700, 800, 900],
      defaultValue: 800
    },
    {
      name: 'height',
      type: TOKEN_CONTROLLER_TYPE.SELECT,
      options: [400, 500, 600, 700],
      defaultValue: 600
    },
    {
      name: 'cropEnabled',
      type: TOKEN_CONTROLLER_TYPE.BOOLEAN,
      defaultValue: false
    },
    {
      name: 'filter',
      type: TOKEN_CONTROLLER_TYPE.SELECT,
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





