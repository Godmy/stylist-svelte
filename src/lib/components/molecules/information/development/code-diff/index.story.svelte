<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/controls';
  import CodeDiff from './index.svelte';

  type Props = {
    language: string;
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
      name: 'showLineNumbers',
      type: 'boolean',
      defaultValue: true
    }
  ];

  let original: string = `function greet(name) {
  console.log("Hello, " + name + "!");
  return "Welcome to our application";
}

const user = "Alice";
const message = greet(user);
console.log(message);`;

  let modified: string = `function greet(name) {
  console.log("Hello, " + name + "!");
  return "Welcome to our application";
}

// Added a new function
function farewell(name) {
  return "Goodbye, " + name + "!";
}

const user = "Alice";
const message = greet(user);
const farewellMessage = farewell(user);
console.log(message);
console.log(farewellMessage);`;
</script>

<Story
  id="molecules-code-diff"
  title="Molecules / Information / Development / CodeDiff"
  component={CodeDiff}
  category="Molecules/Information/Development"
  description="A component to display differences between code versions."
  controls={controls}
>
  {#snippet children(args: any)}
    <div class="sb-molecules-code-diff p-4">
      <h1 class="text-lg font-semibold mb-4">CodeDiff Component</h1>

      <div class="mb-6 p-4 border rounded">
        <h2 class="text-md font-semibold mb-2">Interactive CodeDiff</h2>
        <CodeDiff
          original={original}
          modified={modified}
          language={args.language}
          showLineNumbers={args.showLineNumbers}
        />
      </div>

      <div class="p-4 border rounded">
        <h2 class="text-md font-semibold mb-2">CodeDiff Variations</h2>
        <div class="space-y-4">
          <div>
            <h3 class="text-sm font-medium mb-2">Python Code Diff</h3>
            <CodeDiff
              original={`def calculate(a, b):
    result = a + b
    return result

print(calculate(5, 3))`}
              modified={`def calculate(a, b):
    if a < 0 or b < 0:
        raise ValueError("Arguments must be positive")
    result = a + b
    return result

print(calculate(5, 3))
print(calculate(-1, 2))`}
              language="python"
            />
          </div>
          <div>
            <h3 class="text-sm font-medium mb-2">Without Line Numbers</h3>
            <CodeDiff
              original={`console.log("Hello");\nconsole.log("World");`}
              modified={`console.log("Hello");\nconsole.log("Universe");`}
              language="javascript"
              showLineNumbers={false}
            />
          </div>
        </div>
      </div>
    </div>
  {/snippet}
</Story>


