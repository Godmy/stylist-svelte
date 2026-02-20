<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/controls';
  import CodeSection from './index.svelte';

  type Props = {
    title: string;
    language: string;
    variant: 'default' | 'terminal' | 'diff';
    showLineNumbers: boolean;
    showCopyButton: boolean;
    tags: string[];
  };

  const controls: ControlConfig[] = [
    {
      name: 'title',
      type: 'text',
      defaultValue: 'Example Code'
    },
    {
      name: 'language',
      type: 'select',
      options: ['javascript', 'typescript', 'python', 'java', 'html', 'css', 'json', 'yaml', 'csharp', 'go', 'rust'],
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
    },
    {
      name: 'showCopyButton',
      type: 'boolean',
      defaultValue: true
    },
    {
      name: 'tags',
      type: 'text', // Simplified for story controls
      defaultValue: 'example,javascript'
    }
  ];

  let code: string = `function helloWorld() {
  console.log('Hello, world!');

  // This is a sample function
  const greeting = 'Welcome to our application';
  return greeting;
}`;
</script>

<Story
  id="molecules-code-section"
  title="Molecules / Information / Development / CodeSection"
  component={CodeSection}
  category="Molecules/Information/Development"
  description="A component to display code sections with titles and tags."
  controls={controls}
>
  {#snippet children(args)}
    <div class="sb-molecules-code-section p-4">
      <h1 class="text-lg font-semibold mb-4">CodeSection Component</h1>

      <div class="mb-6 p-4 border rounded">
        <h2 class="text-md font-semibold mb-2">Interactive CodeSection</h2>
        <div class="flex flex-col gap-4">
          <CodeSection
            title={args.title}
            language={args.language}
            code={code}
            variant={args.variant}
            showLineNumbers={args.showLineNumbers}
            startLineNumber={1}
            showCopyButton={args.showCopyButton}
            copySuccessMessage={'Code copied to clipboard!'}
            copyErrorMessage={'Failed to copy code'}
            tags={args.tags.split(',')}
          />
        </div>
      </div>

      <div class="mb-6 p-4 border rounded">
        <h2 class="text-md font-semibold mb-2">Default CodeSection</h2>
        <CodeSection 
          title={args.title} 
          language={args.language} 
          code={code} 
          tags={['example', 'javascript']} 
        />
      </div>

      <div class="p-4 border rounded">
        <h2 class="text-md font-semibold mb-2">CodeSection with Line Numbers</h2>
        <CodeSection 
          title={args.title} 
          language="javascript" 
          code={`// Sample JavaScript code
const items = [1, 2, 3, 4, 5];
const doubled = items.map(item => item * 2);
console.log(doubled);`} 
          showLineNumbers={true} 
          tags={['javascript', 'array']} 
        />
      </div>
    </div>
  {/snippet}
</Story>



