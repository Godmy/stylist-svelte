<script lang="ts">
  import { Story } from '$stylist/playground/component';
  import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
  import RecipePlaygroundCodeViewer from './index.svelte';

  const controls: InterfaceControllerSettings[] = [
    { name: 'componentName', type: 'text', defaultValue: 'Button' },
    { name: 'language', type: 'select', defaultValue: 'svelte', options: ['svelte', 'ts', 'js'] }
  ];

  const sampleCode = `<scr` + `ipt lang="ts">
  let count = $state(0);
</scr` + `ipt>

<button onclick={() => count++}>
  Count: {count}
</button>`;
</script>

<Story
  component={RecipePlaygroundCodeViewer}
  title="Playground Code Viewer"
  description="Syntax-highlighted code panel with copy and download actions."
  {controls}
>
  {#snippet children(values: any)}
    <RecipePlaygroundCodeViewer
      code={sampleCode}
      componentName={values.componentName}
      language={values.language}
    />
  {/snippet}
</Story>



