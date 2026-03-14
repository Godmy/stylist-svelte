<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/defaults/interaction/controls';
  import PlaygroundCodeViewer from './index.svelte';

  const controls: ControlConfig[] = [
    { name: 'componentName', type: 'text', defaultValue: 'Button' },
    { name: 'language', type: 'select', defaultValue: 'svelte', options: ['svelte', 'ts', 'js'] }
  ];

  const sampleCode = `<script lang="ts">
  let count = $state(0);
</script>

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


