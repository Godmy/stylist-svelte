<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/controls';
  import { DocumentPreviewStyleManager } from '$stylist/design-system/styles';
  import DocumentPreview from './index.svelte';

  type Props = {
    format: 'json' | 'text' | 'markdown';
    showLineNumbers: boolean;
    showCopyButton: boolean;
    showDownloadButton: boolean;
    readOnly: boolean;
    height: string;
  };

  const controls: ControlConfig[] = [
    { name: 'format', type: 'select', options: ['json', 'text', 'markdown'], defaultValue: 'json' },
    { name: 'showLineNumbers', type: 'boolean', defaultValue: true },
    { name: 'showCopyButton', type: 'boolean', defaultValue: true },
    { name: 'showDownloadButton', type: 'boolean', defaultValue: false },
    { name: 'readOnly', type: 'boolean', defaultValue: true },
    { name: 'height', type: 'text', defaultValue: '400px' }
  ];

  const jsonContent = JSON.stringify({ status: 'ok', data: { items: [1, 2, 3], total: 3 } }, null, 2);
  const textContent = `This is a plain text document.
  
It contains multiple lines of text.

You can use this component to preview any text content.`;
  const markdownContent = `# Markdown Document

This is a **markdown** document.

- Item 1
- Item 2
- Item 3
`;

  function getContentByFormat(format: string) {
    switch (format) {
      case 'text': return textContent;
      case 'markdown': return markdownContent;
      default: return jsonContent;
    }
  }

  function handleCopy(content: string) {
    console.log('Content copied:', content);
  }

  function handleDownload(content: string, format: string) {
    console.log('Content downloaded:', format);
  }
</script>

<Story
  id="organisms-document-preview"
  title="Organisms / Interaction / Forms / Document Preview"
  component={DocumentPreview}
  category="Organisms/Interaction/Forms"
  description="A document preview component for displaying and editing various document formats."
  tags={['document', 'preview', 'editor', 'viewer']}
  controls={controls}
>
  {#snippet children(props)}
    <div class={DocumentPreviewStyleManager.root('sb-organisms-document-preview p-4')}>
      <h1 class="text-lg font-semibold mb-4">DocumentPreview Component</h1>

      <div class="mb-6 p-4 border rounded">
        <h2 class="text-md font-semibold mb-2">Interactive DocumentPreview</h2>
        <div class="max-w-3xl">
          <DocumentPreview 
            content={getContentByFormat(props.format)}
            format={props.format}
            showLineNumbers={props.showLineNumbers}
            showCopyButton={props.showCopyButton}
            showDownloadButton={props.showDownloadButton}
            readOnly={props.readOnly}
            height={props.height}
            onCopy={handleCopy}
            onDownload={handleDownload}
          />
        </div>
      </div>
    </div>
  {/snippet}
</Story>


