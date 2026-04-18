<script lang="ts">
  import { Story } from '$stylist/development/svelte/playground';
  import type { InterfaceControllerSettings } from '$stylist/development/type/struct/interface-controller-settings';
  import RecipePlaygroundGenericCodeViewer from './index.svelte';

  const controls: InterfaceControllerSettings[] = [
    { name: 'language', type: 'select', defaultValue: 'svelte', options: ['svelte', 'ts', 'js', 'css', 'html'] }
  ];

  const sampleCode = `<scr` + `ipt lang="ts">
  let value = $state('');
</scr` + `ipt>

<input bind:value placeholder="Type here..." />`;
</script>

<Story
  component={RecipePlaygroundGenericCodeViewer}
  title="Playground Generic Code Viewer"
  description="Generic syntax-highlighted code viewer for any language."
  {controls}
>
  {#snippet children(values: any)}
    <RecipePlaygroundGenericCodeViewer
      code={sampleCode}
      language={values.language}
    />
  {/snippet}
</Story>

