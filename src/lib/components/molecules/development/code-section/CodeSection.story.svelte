<script lang="ts">
  import CodeSection from './CodeSection.svelte';
  import type { CodeLanguage } from '../../../molecules/development/code-editor/types';

  let title: string = 'Example Code';
  let language: CodeLanguage = 'javascript';
  let code: string = `function helloWorld() {
  console.log('Hello, world!');

  // This is a sample function
  const greeting = 'Welcome to our application';
  return greeting;
}`;
  let variant: 'default' | 'terminal' | 'diff' = 'default';
  let showLineNumbers: boolean = false;
  let startLineNumber: number = 1;
  let showCopyButton: boolean = true;
  let copySuccessMessage: string = 'Code copied to clipboard!';
  let copyErrorMessage: string = 'Failed to copy code';
  let tags: string[] = ['example', 'javascript'];

  const languages: CodeLanguage[] = [
    'javascript', 'typescript', 'python', 'java', 'html', 'css',
    'json', 'yaml', 'csharp', 'go', 'rust'
  ];
</script>

<div class="p-4">
  <h1 class="text-lg font-semibold mb-4">CodeSection Component</h1>

  <div class="mb-6 p-4 border rounded">
    <h2 class="text-md font-semibold mb-2">Interactive CodeSection</h2>
    <div class="flex flex-col gap-4">
      <CodeSection
        {title}
        {language}
        {code}
        {variant}
        {showLineNumbers}
        {startLineNumber}
        {showCopyButton}
        {copySuccessMessage}
        {copyErrorMessage}
        {tags}
      />
    </div>

    <div class="mt-4 flex flex-wrap gap-2">
      <div>
        <label for="code-title" class="block text-sm mb-1">Title:</label>
        <input
          id="code-title"
          type="text"
          bind:value={title}
          class="border rounded p-1"
        />
      </div>

      <div>
        <label for="code-language" class="block text-sm mb-1">Language:</label>
        <select id="code-language" bind:value={language} class="border rounded p-1">
          {#each languages as lang}
            <option value={lang}>{lang}</option>
          {/each}
        </select>
      </div>

      <div>
        <label for="code-variant" class="block text-sm mb-1">Variant:</label>
        <select id="code-variant" bind:value={variant} class="border rounded p-1">
          <option value="default">Default</option>
          <option value="terminal">Terminal</option>
          <option value="diff">Diff</option>
        </select>
      </div>

      <div class="flex items-end">
        <label for="code-show-line-numbers" class="flex items-center gap-1">
          <input id="code-show-line-numbers" type="checkbox" bind:checked={showLineNumbers} />
          Show Line Numbers
        </label>
      </div>

      <div class="flex items-end">
        <label for="code-show-copy-button" class="flex items-center gap-1">
          <input id="code-show-copy-button" type="checkbox" bind:checked={showCopyButton} />
          Show Copy Button
        </label>
      </div>
    </div>
  </div>

  <div class="mb-6 p-4 border rounded">
    <h2 class="text-md font-semibold mb-2">Default CodeSection</h2>
    <CodeSection {title} {language} {code} {tags} />
  </div>

  <div class="p-4 border rounded">
    <h2 class="text-md font-semibold mb-2">CodeSection with Line Numbers</h2>
    <CodeSection {title} language="javascript" code={`// Sample JavaScript code
const items = [1, 2, 3, 4, 5];
const doubled = items.map(item => item * 2);
console.log(doubled);`} showLineNumbers={true} tags={["javascript", "array"]} />
  </div>
</div>