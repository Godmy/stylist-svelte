<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/controls';
  import { ResponseViewerStyleManager } from '$stylist/design-system/styles';
  import ResponseViewer from './index.svelte';

  type Props = {
    title: string;
    status: 'success' | 'error' | 'info';
    showLineNumbers: boolean;
    showCopyButton: boolean;
    showDownloadButton: boolean;
    collapsed: boolean;
  };

  const controls: ControlConfig[] = [
    { name: 'title', type: 'text', defaultValue: 'API Response' },
    { name: 'status', type: 'select', options: ['success', 'error', 'info'], defaultValue: 'success' },
    { name: 'showLineNumbers', type: 'boolean', defaultValue: true },
    { name: 'showCopyButton', type: 'boolean', defaultValue: true },
    { name: 'showDownloadButton', type: 'boolean', defaultValue: false },
    { name: 'collapsed', type: 'boolean', defaultValue: false }
  ];

  const successResponse = JSON.stringify({ ok: true, items: [1, 2, 3], total: 3 }, null, 2);
  const errorResponse = JSON.stringify({ ok: false, error: 'Not found', code: 404 }, null, 2);
  const infoResponse = JSON.stringify({ message: 'Rate limit: 100 requests/hour', remaining: 95 }, null, 2);

  function getResponseByStatus(status: string) {
    switch (status) {
      case 'error': return errorResponse;
      case 'info': return infoResponse;
      default: return successResponse;
    }
  }

  function handleCopy(content: string) {
    console.log('Content copied:', content);
  }

  function handleDownload(content: string) {
    console.log('Content downloaded:', content);
  }
</script>

<Story
  id="organisms-response-viewer"
  title="Organisms / Interaction / Feedback / Response Viewer"
  component={ResponseViewer}
  category="Organisms/Interaction/Feedback"
  description="A response viewer component for displaying API responses with syntax highlighting and actions."
  tags={['response', 'api', 'json', 'viewer']}
  controls={controls}
>
  {#snippet children(values: any)}
    <div class={ResponseViewerStyleManager.root('sb-organisms-response-viewer p-4')}>
      <h1 class="text-lg font-semibold mb-4">ResponseViewer Component</h1>

      <div class="mb-6 p-4 border rounded">
        <h2 class="text-md font-semibold mb-2">Interactive ResponseViewer</h2>
        <div class="max-w-2xl">
          <ResponseViewer 
            title={values.title}
            status={values.status}
            response={getResponseByStatus(values.status)}
          />
        </div>
      </div>
    </div>
  {/snippet}
</Story>


