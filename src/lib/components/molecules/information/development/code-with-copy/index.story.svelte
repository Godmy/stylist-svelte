<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/controls';
  import CodeWithCopy from './index.svelte';

  type Props = {
    language: string;
    variant: 'default' | 'terminal' | 'diff';
    showLineNumbers: boolean;
  };

  const controls: ControlConfig[] = [
    {
      name: 'language',
      type: 'select',
      options: ['javascript', 'typescript', 'python', 'html', 'css', 'json', 'text'],
      defaultValue: 'javascript'
    },
    {
      name: 'variant',
      type: 'select',
      options: ['default', 'terminal', 'diff'],
      defaultValue: 'default'
    },
    {
      name: 'showLineNumbers',
      type: 'boolean',
      defaultValue: false
    }
  ];

  let codeContent: string = `function greet(name) {
  console.log("Hello, " + name + "!");
  return "Welcome to our application";
}

const user = "Alice";
const message = greet(user);
console.log(message);`;
</script>

<Story
  id="molecules-code-with-copy"
  title="Molecules / Information / Development / CodeWithCopy"
  component={CodeWithCopy}
  category="Molecules/Information/Development"
  description="A component to display code with a copy functionality."
  controls={controls}
>
  {#snippet children(args)}
    <div class="sb-molecules-code-with-copy p-4">
      <h1 class="text-lg font-semibold mb-4">CodeWithCopy Component</h1>

      <div class="mb-6 p-4 border rounded">
        <h2 class="text-md font-semibold mb-2">Interactive CodeWithCopy</h2>
        <CodeWithCopy
          language={args.language}
          variant={args.variant}
          showLineNumbers={args.showLineNumbers}
          startLineNumber={1}
        >
          <pre class="p-4 bg-gray-100 rounded text-sm overflow-x-auto"><code>{codeContent}</code></pre>
        </CodeWithCopy>
      </div>

      <div class="p-4 border rounded">
        <h2 class="text-md font-semibold mb-2">CodeWithCopy Variations</h2>
        <div class="space-y-4">
          <div>
            <h3 class="text-sm font-medium mb-2">Python Code with Copy</h3>
            <CodeWithCopy
              language="python"
            >
              <pre class="p-4 bg-gray-100 rounded text-sm overflow-x-auto"><code>{`def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n-1) + fibonacci(n-2)

result = fibonacci(10)
print(result)`}</code></pre>
            </CodeWithCopy>
          </div>
          <div>
            <h3 class="text-sm font-medium mb-2">Terminal Style</h3>
            <CodeWithCopy
              language="bash"
              variant="terminal"
            >
              <pre class="p-4 bg-gray-900 text-green-400 rounded text-sm overflow-x-auto">$ npm install @stylist/svelte
$ npm run dev</pre>
            </CodeWithCopy>
          </div>
        </div>
      </div>
    </div>
  {/snippet}
</Story>



