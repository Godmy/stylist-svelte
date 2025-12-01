<script lang="ts">
  import CodeDiff from './CodeDiff.svelte';

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
  
  let language: string = 'javascript';
  let showLineNumbers: boolean = true;
</script>

<div class="p-4">
  <h1 class="text-lg font-semibold mb-4">CodeDiff Component</h1>

  <div class="mb-6 p-4 border rounded">
    <h2 class="text-md font-semibold mb-2">Interactive CodeDiff</h2>
    <CodeDiff 
      {original}
      {modified}
      {language}
      {showLineNumbers}
    />

    <div class="mt-4 flex flex-wrap gap-2">
      <div>
        <label for="code-diff-language" class="block text-sm mb-1">Language:</label>
        <select
          id="code-diff-language"
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
        <label for="show-diff-line-numbers" class="flex items-center gap-1">
          <input id="show-diff-line-numbers" type="checkbox" bind:checked={showLineNumbers} />
          Show Line Numbers
        </label>
      </div>
    </div>
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