<script lang="ts">
  import CodeEditor from './CodeEditor.svelte';

  // Example code content
  const defaultCode = `function greet(name) {
  return "Hello, " + name + "!";
}

console.log(greet("World"));`;

  const readOnlyCode = `// This is a read-only example
const PI = 3.14159;
const calculateArea = (radius) => PI * radius * radius;`;

  const htmlCode = `<div class="container">
  <h1>Welcome to our site</h1>
  <p>This is a sample HTML code.</p>
  <button onclick="handleClick()">Click me</button>
</div>`;

  const svelteCode = `<script>
  let name = 'world';
  let count = 0;

  function handleClick() {
    count += 1;
  }
<\/script>

<h1>Hello {name}!</h1>
<p>Button clicked {count} times.</p>
<button on:click={handleClick}>
  Click me
</button>`;

  // Define the problematic string separately to avoid template literal issues
  const problematicButtonString = `<button>
    Click me
  </button>`;
</script>

<div class="p-4">
  <h1 class="text-lg font-semibold mb-4">CodeEditor Component</h1>

  <div class="mb-6">
    <h2 class="text-md font-semibold mb-2">Default Code Editor</h2>
    <div class="border p-4 rounded">
      <CodeEditor
        code={defaultCode}
        language="javascript"
        height="300px"
        showLineNumbers={true}
        fontSize={14}
      />
    </div>
  </div>

  <div class="mb-6">
    <h2 class="text-md font-semibold mb-2">Read-Only Code Editor</h2>
    <div class="border p-4 rounded">
      <CodeEditor
        code={readOnlyCode}
        language="javascript"
        height="200px"
        readOnly={true}
      />
    </div>
  </div>

  <div class="mb-6">
    <h2 class="text-md font-semibold mb-2">HTML Code Example</h2>
    <div class="border p-4 rounded">
      <CodeEditor
        code={htmlCode}
        language="html"
        height="250px"
      />
    </div>
  </div>

  <div class="mb-6">
    <h2 class="text-md font-semibold mb-2">Svelte Code Example</h2>
    <div class="border p-4 rounded">
      <CodeEditor
        code={svelteCode}
        language="svelte"
        height="350px"
      />
    </div>
  </div>
</div>