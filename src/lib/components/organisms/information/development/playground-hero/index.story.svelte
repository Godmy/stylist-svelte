<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/interaction/controls';
  import PlaygroundHero from './index.svelte';

  const controls: ControlConfig[] = [
    { name: 'title', type: 'text', defaultValue: 'Stylist' },
    { name: 'subtitle', type: 'text', defaultValue: "The world's largest Svelte 5 component library" },
    { name: 'badgeLabel', type: 'text', defaultValue: 'AI-Generated Component Library' }
  ];
</script>

<Story
  component={PlaygroundHero}
  title="Playground Hero"
  description="Landing hero section used by the playground homepage."
  {controls}
>
  {#snippet children(values: any)}
    <PlaygroundHero title={values.title} subtitle={values.subtitle} badgeLabel={values.badgeLabel} />
  {/snippet}
</Story>
