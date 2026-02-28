<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/interaction/controls';
  import PlaygroundCtaButtons from './index.svelte';

  const controls: ControlConfig[] = [
    { name: 'totalComponents', type: 'number', defaultValue: 320, min: 0, max: 1000, step: 1 },
    { name: 'componentsTitle', type: 'text', defaultValue: 'Browse Components' },
    { name: 'playgroundTitle', type: 'text', defaultValue: 'Interactive Playground' }
  ];
</script>

<Story
  component={PlaygroundCtaButtons}
  title="Playground CTA Buttons"
  description="Dual CTA cards for browsing components and opening the interactive playground."
  {controls}
>
  {#snippet children(values: any)}
    <PlaygroundCtaButtons
      totalComponents={values.totalComponents}
      componentsTitle={values.componentsTitle}
      playgroundTitle={values.playgroundTitle}
    />
  {/snippet}
</Story>
