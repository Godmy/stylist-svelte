<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/interaction/controls';
  import CodeWithCopy from './index.svelte';

  const controls: ControlConfig[] = [
    { name: 'language', type: 'select', options: ['javascript', 'typescript', 'python', 'bash'], defaultValue: 'javascript' },
    { name: 'variant', type: 'select', options: ['default', 'terminal', 'diff'], defaultValue: 'default' },
    { name: 'showLineNumbers', type: 'boolean', defaultValue: false }
  ];

  const codeContent = `npm install @stylist/svelte\n\n# then start app\nnpm run dev`;
</script>

<Story
  id="molecules-code-with-copy"
  title="Molecules / Information / Development / CodeWithCopy"
  component={CodeWithCopy}
  category="Molecules/Information/Development"
  description="Wrapper that renders custom code content and adds floating copy action."
  {controls}
>
  {#snippet children(args: any)}
    <div class="p-4 rounded-xl bg-gray-50">
      <CodeWithCopy language={args.language} variant={args.variant} showLineNumbers={args.showLineNumbers}>
        {#snippet children()}
          <pre class="p-4 rounded bg-gray-100 text-sm overflow-x-auto"><code>{codeContent}</code></pre>
        {/snippet}
      </CodeWithCopy>
    </div>
  {/snippet}
</Story>
