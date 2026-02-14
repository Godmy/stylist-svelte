<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/controls';
  import DocumentationBlock from './index.svelte';

  type Props = {
    title: string;
    variant: 'default' | 'info' | 'warning' | 'success' | 'danger';
  };

  const controls: ControlConfig[] = [
    {
      name: 'title',
      type: 'text',
      defaultValue: 'Documentation Block Example'
    },
    {
      name: 'variant',
      type: 'select',
      options: ['default', 'info', 'warning', 'success', 'danger'],
      defaultValue: 'default'
    }
  ];

  let content: string = `
    <h3>Introduction</h3>
    <p>This is an example of a documentation block component. It can contain rich content with HTML formatting.</p>

    <h3>Features</h3>
    <ul>
      <li>Renders HTML content safely</li>
      <li>Supports multiple code examples</li>
      <li>Customizable variants</li>
      <li>Tagging system</li>
    </ul>

    <h3>Usage</h3>
    <p>This component is perfect for documentation pages, API references, or any content that requires both text and code examples.</p>
  `;

  let tags: string[] = ['documentation', 'example'];

  type CodeExample = {
    title: string;
    code: string;
    language: string;
    showLineNumbers: boolean;
  };

  let codeExamples: CodeExample[] = [
    {
      title: 'JavaScript Example',
      code: `function example() {
  console.log('This is a code example');
  return 'Hello World';
}`,
      language: 'javascript',
      showLineNumbers: false
    },
    {
      title: 'Python Example',
      code: `def example():
    print("This is a Python code example")
    return "Hello World"`,
      language: 'python',
      showLineNumbers: true
    }
  ];
</script>

<Story
  id="molecules-documentation-block"
  title="Molecules / Information / Development / DocumentationBlock"
  component={DocumentationBlock}
  category="Molecules/Information/Development"
  description="A component for displaying documentation with rich content and code examples."
  controls={controls}
>
  {#snippet children(args: any)}
    <div class="sb-molecules-documentation-block p-4">
      <h1 class="text-lg font-semibold mb-4">DocumentationBlock Component</h1>

      <div class="mb-6 p-4 border rounded">
        <h2 class="text-md font-semibold mb-2">Interactive DocumentationBlock</h2>
        <div class="flex flex-col gap-4">
          <DocumentationBlock
            title={args.title}
            content={content}
            variant={args.variant}
            codeExamples={codeExamples}
            tags={tags}
          />
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div class="p-4 border rounded">
          <h2 class="text-md font-semibold mb-2">Info Variant</h2>
          <DocumentationBlock
            title="Information Block"
            content="<p>This is an information block with helpful tips and guidelines.</p>"
            variant="info"
            tags={['info', 'tips']}
          />
        </div>

        <div class="p-4 border rounded">
          <h2 class="text-md font-semibold mb-2">Warning Variant</h2>
          <DocumentationBlock
            title="Warning Block"
            content="<p>This is a warning block with important notices.</p>"
            variant="warning"
            tags={['warning', 'important']}
          />
        </div>

        <div class="p-4 border rounded">
          <h2 class="text-md font-semibold mb-2">Success Variant</h2>
          <DocumentationBlock
            title="Success Block"
            content="<p>This is a success block with positive feedback or achievements.</p>"
            variant="success"
            tags={['success', 'positive']}
          />
        </div>

        <div class="p-4 border rounded">
          <h2 class="text-md font-semibold mb-2">Danger Variant</h2>
          <DocumentationBlock
            title="Danger Block"
            content="<p>This is a danger block with critical warnings or errors.</p>"
            variant="danger"
            tags={['danger', 'critical']}
          />
        </div>
      </div>

      <div class="p-4 border rounded">
        <h2 class="text-md font-semibold mb-2">DocumentationBlock with Code Examples</h2>
        <DocumentationBlock
          title="Code Examples Block"
          content="<p>This documentation block includes multiple code examples in different languages.</p>"
          codeExamples={codeExamples}
          tags={['code', 'examples']}
        />
      </div>
    </div>
  {/snippet}
</Story>


