<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/interaction/controls';
  import CodeBlockWithLineNumbers from './index.svelte';

  const controls: ControlConfig[] = [
    { name: 'language', type: 'select', options: ['javascript', 'typescript', 'python', 'json'], defaultValue: 'typescript' },
    { name: 'title', type: 'text', defaultValue: 'Typed utility' },
    { name: 'copyable', type: 'boolean', defaultValue: true },
    { name: 'highlightLines', type: 'text', defaultValue: '2,3' }
  ];

  const code = `type User = {\n  id: string;\n  email: string;\n};\n\nexport function formatUser(user: User) {\n  return \`\${user.id} - \${user.email}\`;\n}`;

  function parseLines(value: string): number[] {
    return value
      .split(',')
      .map((part) => Number(part.trim()))
      .filter((part) => !Number.isNaN(part) && part > 0);
  }
</script>

<Story
  id="molecules-code-block-with-line-numbers"
  title="Molecules / Information / Development / CodeBlockWithLineNumbers"
  component={CodeBlockWithLineNumbers}
  category="Molecules/Information/Development"
  description="Legacy wrapper over CodeBlock with line numbers always enabled."
  {controls}
>
  {#snippet children(args: any)}
    <div class="p-4 rounded-xl bg-gray-50">
      <CodeBlockWithLineNumbers
        code={code}
        language={args.language}
        title={args.title}
        copyable={args.copyable}
        highlightLines={parseLines(args.highlightLines)}
      />
    </div>
  {/snippet}
</Story>
