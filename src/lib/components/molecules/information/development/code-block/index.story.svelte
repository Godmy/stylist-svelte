<script lang="ts">
  import CodeBlock from './index.svelte';
  import Story from '$stylist/design-system/playground/Story.svelte';
  import type { ControlConfig } from '$stylist/design-system/tokens/controls';

  // Define controls for the story
  const controls: ControlConfig[] = [
    {
      name: 'code',
      type: 'text',
      defaultValue: 'function hello() {\n  console.log("Hello, World!");\n}\n\nhello();',
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
      name: 'copyable',
      type: 'boolean',
      defaultValue: false,
      description: 'Whether to show copy button'
    },
    {
      name: 'title',
      type: 'text',
      defaultValue: '',
      description: 'Code block title'
    }
  ];

  function handleCopy() {
    console.log('Code copied!');
  }

  const greetingCode = "function greet(name) {\n  return `Hello, ${name}!`;\n}\n\ngreet('World');";
  const typeScriptCode = "interface User {\n  id: number;\n  name: string;\n}\n\nconst user: User = { id: 1, name: 'John' };";
</script>

<div class="p-4">
  <h1 class="mb-4 text-lg font-semibold">CodeBlock Component</h1>

  <div class="mb-6 rounded border p-4">
    <h2 class="text-md mb-2 font-semibold">Interactive CodeBlock</h2>
    <Story {controls} component={CodeBlock} />
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
    <div class="p-4 border rounded">
      <h2 class="text-md font-semibold mb-2">With Line Numbers</h2>
      <CodeBlock
        code={greetingCode}
        language="javascript"
        showLineNumbers={true}
      />
    </div>

    <div class="p-4 border rounded">
      <h2 class="text-md font-semibold mb-2">With Copy Button</h2>
      <CodeBlock
        code="const answer = 42;\nconsole.log(answer);"
        language="javascript"
        copyable={true}
        title="Example Code"
      />
    </div>

    <div class="p-4 border rounded">
      <h2 class="text-md font-semibold mb-2">TypeScript Code</h2>
      <CodeBlock
        code={typeScriptCode}
        language="typescript"
        showLineNumbers={true}
        copyable={true}
        title="TypeScript Example"
      />
    </div>

    <div class="p-4 border rounded">
      <h2 class="text-md font-semibold mb-2">Python Code</h2>
      <CodeBlock
        code="def fibonacci(n):\n    if n <= 1:\n        return n\n    return fibonacci(n-1) + fibonacci(n-2)\n\nprint(fibonacci(10))"
        language="python"
        showLineNumbers={true}
        copyable={true}
        title="Python Example"
      />
    </div>
  </div>
</div>
