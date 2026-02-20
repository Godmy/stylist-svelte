<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/controls';
  import CopyableCodeBlock from './index.svelte';

  type Props = {
    language: string;
    title: string;
  };

  const controls: ControlConfig[] = [
    {
      name: 'language',
      type: 'select',
      options: ['javascript', 'typescript', 'python', 'html', 'css', 'json', 'text'],
      defaultValue: 'javascript'
    },
    {
      name: 'title',
      type: 'text',
      defaultValue: 'Example JavaScript Code'
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
  id="molecules-copyable-code-block"
  title="Molecules / Information / Development / CopyableCodeBlock"
  component={CopyableCodeBlock}
  category="Molecules/Information/Development"
  description="A code block component with copy functionality."
  controls={controls}
>
  {#snippet children(args)}
    <div class="sb-molecules-copyable-code-block p-4">
      <h1 class="text-lg font-semibold mb-4">CopyableCodeBlock Component</h1>

      <div class="mb-6 p-4 border rounded">
        <h2 class="text-md font-semibold mb-2">Interactive CopyableCodeBlock</h2>
        <CopyableCodeBlock
          code={code}
          language={args.language}
          title={args.title}
        />
      </div>

      <div class="p-4 border rounded">
        <h2 class="text-md font-semibold mb-2">CopyableCodeBlock Variations</h2>
        <div class="space-y-4">
          <div>
            <h3 class="text-sm font-medium mb-2">Python Code Block</h3>
            <CopyableCodeBlock
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
          <div>
            <h3 class="text-sm font-medium mb-2">CSS Code Block</h3>
            <CopyableCodeBlock
              code={`.container {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
}`}
              language="css"
              title="Container Styles"
            />
          </div>
          <div>
            <h3 class="text-sm font-medium mb-2">Without Title</h3>
            <CopyableCodeBlock
              code={`console.log("Hello, World!");`}
              language="javascript"
            />
          </div>
        </div>
      </div>
    </div>
  {/snippet}
</Story>



