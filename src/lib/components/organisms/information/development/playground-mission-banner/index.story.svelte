<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/interaction/controls';
  import PlaygroundMissionBanner from './index.svelte';

  const controls: ControlConfig[] = [
    { name: 'badgeText', type: 'text', defaultValue: 'Our Mission' },
    { name: 'title', type: 'text', defaultValue: 'Building the Future of\\nComponent Libraries' },
    { name: 'primaryLabel', type: 'text', defaultValue: 'Explore Components' },
    { name: 'secondaryLabel', type: 'text', defaultValue: 'Try Playground' }
  ];
</script>

<Story
  component={PlaygroundMissionBanner}
  title="Playground Mission Banner"
  description="Hero mission section with dual CTA links and strong gradient styling."
  {controls}
>
  {#snippet children(values: any)}
    <PlaygroundMissionBanner
      badgeText={values.badgeText}
      title={values.title}
      primaryLabel={values.primaryLabel}
      secondaryLabel={values.secondaryLabel}
    />
  {/snippet}
</Story>
