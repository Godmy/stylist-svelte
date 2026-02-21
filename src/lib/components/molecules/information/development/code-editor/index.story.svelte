<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/interaction/controls';
  import CodeEditor from './index.svelte';

  const controls: ControlConfig[] = [
    { name: 'code', type: 'text', defaultValue: 'const total = (a, b) => a + b;\n\ntotal(2, 3);' },
    { name: 'language', type: 'select', options: ['javascript', 'typescript', 'python', 'json'], defaultValue: 'javascript' },
    { name: 'showLineNumbers', type: 'boolean', defaultValue: false },
    { name: 'showCopyButton', type: 'boolean', defaultValue: true }
  ];
</script>

<Story
  id="molecules-code-editor"
  title="Molecules / Information / Development / CodeEditor"
  component={CodeEditor}
  category="Molecules/Information/Development"
  description="Legacy code editor wrapper over CodeBlock."
  {controls}
>
  {#snippet children(args: any)}
    <div class="p-4 rounded-xl bg-gray-50">
      <CodeEditor
        code={args.code}
        language={args.language}
        showLineNumbers={args.showLineNumbers}
        showCopyButton={args.showCopyButton}
      />
    </div>
  {/snippet}
</Story>
