<script lang="ts">
  import CodeBlockWithLineNumbers from './CodeBlockWithLineNumbers.svelte';

  let code: string = `function greet(name) {
  console.log("Hello, " + name + "!");
  return "Welcome to our application";
}

const user = "Alice";
const message = greet(user);
console.log(message);`;
  
  let language: string = 'javascript';
  let showLineNumbers: boolean = true;
  let title: string = 'Example JavaScript Code';
  let copyable: boolean = true;
</script>

<div class="p-4">
  <h1 class="text-lg font-semibold mb-4">CodeBlockWithLineNumbers Component</h1>

  <div class="mb-6 p-4 border rounded">
    <h2 class="text-md font-semibold mb-2">Interactive CodeBlockWithLineNumbers</h2>
    <CodeBlockWithLineNumbers 
      {code}
      {language}
      {showLineNumbers}
      {title}
      {copyable}
    />

    <div class="mt-4 flex flex-wrap gap-2">
      <div>
        <label for="code-block-title" class="block text-sm mb-1">Title:</label>
        <input
          id="code-block-title"
          type="text"
          bind:value={title}
          class="border rounded p-1 w-40"
        />
      </div>

      <div>
        <label for="code-block-language" class="block text-sm mb-1">Language:</label>
        <select
          id="code-block-language"
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

      <div class="flex items-end">
        <label for="show-line-numbers" class="flex items-center gap-1">
          <input id="show-line-numbers" type="checkbox" bind:checked={showLineNumbers} />
          Show Line Numbers
        </label>
      </div>

      <div class="flex items-end">
        <label for="codeblock-copyable" class="flex items-center gap-1">
          <input id="codeblock-copyable" type="checkbox" bind:checked={copyable} />
          Copyable
        </label>
      </div>
    </div>
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