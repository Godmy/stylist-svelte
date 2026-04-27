<script lang="ts">
  import { Story } from '$stylist/playground/component';
  import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
  import RecipePlaygroundLiveCodeSection from './index.svelte';

  const controls: InterfaceControllerSettings[] = [
    { name: 'title', type: 'text', defaultValue: 'See It In Action' },
    { name: 'description', type: 'text', defaultValue: 'Every component comes with ready-to-use code' },
    { name: 'ctaText', type: 'text', defaultValue: 'Try in Playground' }
  ];

  const sampleCode = `<scr` + `ipt lang="ts">
  let count = $state(0);
</scr` + `ipt>

<button onclick={() => count += 1}>
  Count: {count}
</button>`;
</script>

<Story
  component={RecipePlaygroundLiveCodeSection}
  title="Playground Live Code Section"
  description="Landing section with code preview block and call to action."
  {controls}
>
  {#snippet children(values: any)}
    <RecipePlaygroundLiveCodeSection
      title={values.title}
      description={values.description}
      ctaText={values.ctaText}
      code={sampleCode}
    />
  {/snippet}
</Story>



