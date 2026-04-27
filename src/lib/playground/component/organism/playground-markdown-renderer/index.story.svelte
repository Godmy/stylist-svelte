<script lang="ts">
  import { Story } from '$stylist/playground/component';
  import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
  import RecipePlaygroundMarkdownRenderer from './index.svelte';

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
  component={RecipePlaygroundMarkdownRenderer}
  title="Playground Markdown Renderer"
  description="Renders markdown content with syntax highlighting."
  {controls}
>
  {#snippet children(values: any)}
    <RecipePlaygroundMarkdownRenderer
      content={sampleMarkdown}
      class={values.className}
    />
  {/snippet}
</Story>

