<script lang="ts">
  import CodeWithCopy from './CodeWithCopy.svelte';

  let language: string = 'javascript';
  let variant: 'default' | 'terminal' | 'diff' = 'default';
  let showLineNumbers: boolean = false;
  let startLineNumber: number = 1;
  let codeContent: string = `function greet(name) {
  console.log("Hello, " + name + "!");
  return "Welcome to our application";
}

const user = "Alice";
const message = greet(user);
console.log(message);`;
</script>

<div class="p-4">
  <h1 class="text-lg font-semibold mb-4">CodeWithCopy Component</h1>

  <div class="mb-6 p-4 border rounded">
    <h2 class="text-md font-semibold mb-2">Interactive CodeWithCopy</h2>
    <CodeWithCopy
      {language}
      {variant}
      {showLineNumbers}
      {startLineNumber}
    >
      <pre class="p-4 bg-gray-100 rounded text-sm overflow-x-auto"><code>{codeContent}</code></pre>
    </CodeWithCopy>

    <div class="mt-4 flex flex-wrap gap-2">
      <div>
        <label for="code-copy-language" class="block text-sm mb-1">Language:</label>
        <select
          id="code-copy-language"
          bind:value={language}
          class="border rounded p-1"
        >
          <option value="javascript">JavaScript</option>
          <option value="typescript">TypeScript</option>
          <option value="python">Python</option>
          <option value="html">HTML</option>
          <option value="css">CSS</option>
          <option value="json">JSON</option>
          <option value="text">Plain Text</option>
        </select>
      </div>

      <div>
        <label for="code-copy-variant" class="block text-sm mb-1">Variant:</label>
        <select
          id="code-copy-variant"
          bind:value={variant}
          class="border rounded p-1"
        >
          <option value="default">Default</option>
          <option value="terminal">Terminal</option>
          <option value="diff">Diff</option>
        </select>
      </div>

      <div class="flex items-end">
        <label for="show-copy-line-numbers" class="flex items-center gap-1">
          <input id="show-copy-line-numbers" type="checkbox" bind:checked={showLineNumbers} />
          Show Line Numbers
        </label>
      </div>
    </div>
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