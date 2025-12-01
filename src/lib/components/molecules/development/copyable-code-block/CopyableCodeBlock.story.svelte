<script lang="ts">
  import CopyableCodeBlock from './CopyableCodeBlock.svelte';

  let code: string = `function greet(name) {
  console.log("Hello, " + name + "!");
  return "Welcome to our application";
}

const user = "Alice";
const message = greet(user);
console.log(message);`;
  
  let language: string = 'javascript';
  let title: string = 'Example JavaScript Code';
</script>

<div class="p-4">
  <h1 class="text-lg font-semibold mb-4">CopyableCodeBlock Component</h1>

  <div class="mb-6 p-4 border rounded">
    <h2 class="text-md font-semibold mb-2">Interactive CopyableCodeBlock</h2>
    <CopyableCodeBlock 
      {code}
      {language}
      {title}
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
    </div>
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