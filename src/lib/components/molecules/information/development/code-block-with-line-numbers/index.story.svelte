<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/controls';
  import CodeBlockWithLineNumbers from './index.svelte';

  type Props = {
    language: string;
    showLineNumbers: boolean;
    title: string;
    copyable: boolean;
  };

  const controls: ControlConfig[] = [
    {
      name: 'language',
      type: 'select',
      options: ['javascript', 'typescript', 'python', 'html', 'css', 'json', 'text'],
      defaultValue: 'javascript'
    },
    {
      name: 'showLineNumbers',
      type: 'boolean',
      defaultValue: true
    },
    {
      name: 'title',
      type: 'text',
      defaultValue: 'Example JavaScript Code'
    },
    {
      name: 'copyable',
      type: 'boolean',
      defaultValue: true
    }
  ];

  let code: string = `function greet(name) {
  console.log("Hello, " + name + "!");
  return "Welcome to our application";
}

const user = "Alice";
const message = greet(user);
console.log(message);`;
</script>

<Story
  id="molecules-code-block-with-line-numbers"
  title="Molecules / Information / Development / CodeBlockWithLineNumbers"
  component={CodeBlockWithLineNumbers}
  category="Molecules/Information/Development"
  description="A code block component with line numbers and copy functionality."
  controls={controls}
>
  {#snippet children(args)}
    <div class="sb-molecules-code-block-with-line-numbers p-4">
      <h1 class="text-lg font-semibold mb-4">CodeBlockWithLineNumbers Component</h1>

      <div class="mb-6 p-4 border rounded">
        <h2 class="text-md font-semibold mb-2">Interactive CodeBlockWithLineNumbers</h2>
        <CodeBlockWithLineNumbers
          code={code}
          language={args.language}
          showLineNumbers={args.showLineNumbers}
          title={args.title}
          copyable={args.copyable}
        />
      </div>

      <div class="p-4 border rounded">
        <h2 class="text-md font-semibold mb-2">CodeBlock Variations</h2>
        <div class="space-y-4">
          <div>
            <h3 class="text-sm font-medium mb-2">Without Line Numbers</h3>
            <CodeBlockWithLineNumbers
              code={`console.log("Hello, World!");\n// This code block has no line numbers`}
              language="javascript"
              showLineNumbers={false}
              title="Code without line numbers"
            />
          </div>
          <div>
            <h3 class="text-sm font-medium mb-2">Python Code</h3>
            <CodeBlockWithLineNumbers
              code={`def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n-1) + fibonacci(n-2)

result = fibonacci(10)
print(result)`}
              language="python"
              title="Python Fibonacci Function"
            />
          </div>
        </div>
      </div>
    </div>
  {/snippet}
</Story>



