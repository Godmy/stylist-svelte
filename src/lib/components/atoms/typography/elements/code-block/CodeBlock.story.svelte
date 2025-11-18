<script lang="ts">
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';
  import CodeBlock from '../CodeBlock.svelte';

  type CodeBlockStoryProps = {
    language: string;
    variant: 'default' | 'terminal' | 'diff';
    size: 'sm' | 'md' | 'lg';
    showLineNumbers: boolean;
    startLineNumber: number;
  };

  const variantOptions = ['default', 'terminal', 'diff'];
  const sizeOptions = ['sm', 'md', 'lg'];

  const controls: ControlConfig[] = [
    {
      name: 'language',
      type: 'text',
      defaultValue: 'javascript'
    },
    {
      name: 'variant',
      type: 'select',
      defaultValue: 'default',
      options: variantOptions
    },
    {
      name: 'size',
      type: 'select',
      defaultValue: 'md',
      options: sizeOptions
    },
    {
      name: 'showLineNumbers',
      type: 'boolean',
      defaultValue: false
    },
    {
      name: 'startLineNumber',
      type: 'number',
      defaultValue: 1,
      min: 1
    }
  ];
</script>

<Story
  id="atoms-code-block"
  title="CodeBlock"
  component={CodeBlock}
  category="Atoms"
  description="CodeBlock component for displaying formatted code blocks."
  tags={['code', 'syntax', 'highlighting', 'block']}
  controls={controls}
>
  {#snippet children(props: CodeBlockStoryProps)}
    <CodeBlock
      language={props.language}
      variant={props.variant}
      size={props.size}
      showLineNumbers={props.showLineNumbers}
      startLineNumber={props.startLineNumber}
    >
      {`function example() {
  console.log("This is an example code block");
  return true;
}`}
    </CodeBlock>
  {/snippet}
</Story>