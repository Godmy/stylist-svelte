<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/interaction/controls';
  import CodeBlock from './index.svelte';

  const controls: ControlConfig[] = [
    { name: 'code', type: 'text', defaultValue: 'function hello(name) {\n  return `Hello, ${name}`;\n}\n\nhello("World");' },
    { name: 'language', type: 'select', options: ['javascript', 'typescript', 'python', 'json', 'bash'], defaultValue: 'javascript' },
    { name: 'showLineNumbers', type: 'boolean', defaultValue: false },
    { name: 'copyable', type: 'boolean', defaultValue: true },
    { name: 'title', type: 'text', defaultValue: 'Example snippet' }
  ];
</script>

<Story
  id="molecules-code-block"
  title="Molecules / Information / Development / CodeBlock"
  component={CodeBlock}
  category="Molecules/Information/Development"
  description="General code renderer with optional title, line numbers and copy action."
  {controls}
>
  {#snippet children(args: any)}
    <div class="p-4 rounded-xl bg-gray-50 space-y-4">
      <CodeBlock
        code={args.code}
        language={args.language}
        showLineNumbers={args.showLineNumbers}
        copyable={args.copyable}
        title={args.title}
      />
      <CodeBlock code={`const endpoint = '/api/orders';\nfetch(endpoint);`} language="javascript" title="Secondary preview" />
    </div>
  {/snippet}
</Story>
