<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/defaults/interaction/controls';
  import PlaygroundLiveCodeSection from './index.svelte';

  const controls: ControlConfig[] = [
    { name: 'title', type: 'text', defaultValue: 'See It In Action' },
    { name: 'description', type: 'text', defaultValue: 'Every component comes with ready-to-use code' },
    { name: 'ctaText', type: 'text', defaultValue: 'Try in Playground' }
  ];

  const sampleCode = `<script lang="ts">
  let count = $state(0);
</script>

<button onclick={() => count += 1}>
  Count: {count}
</button>`;
</script>

<Story
  component={PlaygroundLiveCodeSection}
  title="Playground Live Code Section"
  description="Landing section with code preview block and call to action."
  {controls}
>
  {#snippet children(values: any)}
    <PlaygroundLiveCodeSection
      title={values.title}
      description={values.description}
      ctaText={values.ctaText}
      code={sampleCode}
    />
  {/snippet}
</Story>


