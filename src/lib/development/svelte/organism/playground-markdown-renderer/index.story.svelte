<script lang="ts">
  import { Story } from '$stylist/development/svelte/playground';
  import type { InterfaceControllerSettings } from '$stylist/development/type/struct/interface-controller-settings/interface-controller-settings';
  import PlaygroundMarkdownRenderer from './index.svelte';

  const controls: InterfaceControllerSettings[] = [
    { name: 'className', type: 'text', defaultValue: '' }
  ];

  const sampleMarkdown = `# Heading

This is **bold** and this is *italic*.

- List item 1
- List item 2

\`\`\`ts
const x = 10;
\`\`\`
`;
</script>

<Story
  component={PlaygroundMarkdownRenderer}
  title="Playground Markdown Renderer"
  description="Renders markdown content with syntax highlighting."
  {controls}
>
  {#snippet children(values: any)}
    <PlaygroundMarkdownRenderer
      content={sampleMarkdown}
      class={values.className}
    />
  {/snippet}
</Story>

