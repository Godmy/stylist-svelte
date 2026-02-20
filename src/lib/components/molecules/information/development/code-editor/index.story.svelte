<script lang="ts">
  import CodeEditor from './index.svelte';
  import Story from '$stylist/design-system/playground/Story.svelte';
  import type { ControlConfig } from '$stylist/design-system/tokens/controls';

  // Define controls for the story
  const controls: ControlConfig[] = [
    {
      name: 'code',
      type: 'text',
      defaultValue: 'function hello() {\n  console.log("Hello, World!");\n}',
      description: 'Code content'
    },
    {
      name: 'language',
      type: 'text',
      defaultValue: 'javascript',
      description: 'Programming language'
    },
    {
      name: 'showLineNumbers',
      type: 'boolean',
      defaultValue: false,
      description: 'Whether to show line numbers'
    },
    {
      name: 'showCopyButton',
      type: 'boolean',
      defaultValue: false,
      description: 'Whether to show copy button'
    }
  ];

  const greetingCode = "function greet(name) {\n  return `Hello, ${name}!`;\n}\n\ngreet('World');";
  const typeScriptCode = "interface User {\n  id: number;\n  name: string;\n}\n\nconst user: User = { id: 1, name: 'John' };";
</script>

<div class="p-4">
  <h1 class="mb-4 text-lg font-semibold">CodeEditor Component</h1>

  <div class="mb-6 rounded border p-4">
    <h2 class="text-md mb-2 font-semibold">Interactive CodeEditor</h2>
    <Story {controls} component={CodeEditor} />
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
    <div class="p-4 border rounded">
      <h2 class="text-md font-semibold mb-2">JavaScript Code</h2>
      <CodeEditor
        code={greetingCode}
        language="javascript"
      />
    </div>

    <div class="p-4 border rounded">
      <h2 class="text-md font-semibold mb-2">TypeScript Code</h2>
      <CodeEditor
        code={typeScriptCode}
        language="typescript"
      />
    </div>
  </div>
</div>
