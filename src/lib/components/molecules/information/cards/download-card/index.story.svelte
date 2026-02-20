<script lang="ts">
  import DownloadCard from './index.svelte';
  import Story from '$stylist/design-system/playground/Story.svelte';
  import type { IDownloadCardProps } from '$stylist/design-system/props/download-card';
  import type { ControlConfig } from '$stylist/design-system/tokens/controls';

  // Define controls for the story
  const controls: ControlConfig[] = [
    {
      name: 'variant',
      type: 'select',
      defaultValue: 'primary',
      options: ['primary', 'secondary', 'success', 'warning', 'danger', 'info'],
      description: 'Visual variant of the download card'
    },
    {
      name: 'showMetadata',
      type: 'boolean',
      defaultValue: true,
      description: 'Whether to show file metadata'
    }
  ];

  // Sample file data
  let defaultFile: IDownloadCardProps['file'] = {
    name: 'documentation.pdf',
    size: 2457600, // bytes
    type: 'PDF',
    date: '2023-10-15'
  };

  let customFile: IDownloadCardProps['file'] = {
    name: 'style-guide.docx',
    size: '3.2 MB',
    type: 'DOCX',
    date: '2023-10-10'
  };

  let reportFile: IDownloadCardProps['file'] = {
    name: 'report.xlsx',
    size: 5120000, // bytes
    type: 'XLSX',
    date: '2023-10-01'
  };

  let archiveFile: IDownloadCardProps['file'] = {
    name: 'archive.zip',
    size: 10485760, // bytes
    type: 'ZIP'
  };

  let downloadUrl = '#';
</script>

<div class="p-4">
  <h1 class="mb-4 text-lg font-semibold">DownloadCard Component</h1>

  <div class="mb-6 rounded border p-4">
    <h2 class="text-md mb-2 font-semibold">Interactive DownloadCard</h2>
    <Story {controls}>
      {#snippet children(values: any)}
        <DownloadCard
          file={defaultFile}
          downloadUrl={downloadUrl}
          variant={values.variant}
          showMetadata={values.showMetadata}
        />
      {/snippet}
    </Story>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
    <div class="p-4 border rounded">
      <h2 class="text-md font-semibold mb-2">With Custom Icon</h2>
      <DownloadCard
        file={customFile}
        downloadUrl={downloadUrl}
        variant="success"
        icon="📝"
        showMetadata={true}
      />
    </div>

    <div class="p-4 border rounded">
      <h2 class="text-md font-semibold mb-2">Warning Variant</h2>
      <DownloadCard
        file={reportFile}
        downloadUrl={downloadUrl}
        variant="warning"
        showMetadata={true}
      />
    </div>

    <div class="p-4 border rounded">
      <h2 class="text-md font-semibold mb-2">Without Metadata</h2>
      <DownloadCard
        file={archiveFile}
        downloadUrl={downloadUrl}
        variant="danger"
        showMetadata={false}
      />
    </div>

    <div class="p-4 border rounded">
      <h2 class="text-md font-semibold mb-2">Default DownloadCard</h2>
      <DownloadCard
        file={defaultFile}
        downloadUrl={downloadUrl}
        variant="primary"
        showMetadata={true}
      />
    </div>
  </div>
</div>
