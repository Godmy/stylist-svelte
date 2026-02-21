<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/interaction/controls';
  import CodeSection from './index.svelte';

  const controls: ControlConfig[] = [
    { name: 'title', type: 'text', defaultValue: 'API Example' },
    { name: 'language', type: 'select', options: ['javascript', 'typescript', 'python', 'yaml'], defaultValue: 'javascript' },
    { name: 'variant', type: 'select', options: ['default', 'terminal', 'diff'], defaultValue: 'default' },
    { name: 'showLineNumbers', type: 'boolean', defaultValue: true },
    { name: 'showCopyButton', type: 'boolean', defaultValue: true },
    { name: 'tags', type: 'text', defaultValue: 'example,api' }
  ];

  const code = `async function loadOrders() {\n  const response = await fetch('/api/orders');\n  if (!response.ok) throw new Error('Request failed');\n  return response.json();\n}`;

  function parseTags(value: string): string[] {
    return value
      .split(',')
      .map((tag) => tag.trim())
      .filter((tag) => tag.length > 0);
  }
</script>

<Story
  id="molecules-code-section"
  title="Molecules / Information / Development / CodeSection"
  component={CodeSection}
  category="Molecules/Information/Development"
  description="Composed section for titled code examples with badges and controls."
  {controls}
>
  {#snippet children(args: any)}
    <div class="p-4 rounded-xl bg-gray-50">
      <CodeSection
        title={args.title}
        language={args.language}
        code={code}
        variant={args.variant}
        showLineNumbers={args.showLineNumbers}
        showCopyButton={args.showCopyButton}
        tags={parseTags(args.tags)}
      />
    </div>
  {/snippet}
</Story>
