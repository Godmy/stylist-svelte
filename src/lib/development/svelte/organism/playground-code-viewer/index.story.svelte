<script lang="ts">
  import { Story } from '$stylist/development/svelte/playground';
  import type { InterfaceControllerSettings } from '$stylist/development/type/struct/interface-controller-settings/interface-controller-settings';
  import PlaygroundCodeViewer from './index.svelte';

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
  component={PlaygroundCodeViewer}
  title="Playground Code Viewer"
  description="Syntax-highlighted code panel with copy and download actions."
  {controls}
>
  {#snippet children(values: any)}
    <PlaygroundCodeViewer
      code={sampleCode}
      componentName={values.componentName}
      language={values.language}
    />
  {/snippet}
</Story>



