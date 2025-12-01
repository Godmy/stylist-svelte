<script lang="ts">
  import DownloadCard from './DownloadCard.svelte';
  import type { IDownloadCardProps } from './types';

  let {
    variant = 'primary'
  } = $props();

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

  let downloadUrl = $state('#');
</script>

<!-- Default story -->
<div id="molecules-download-card">
  <h1>DownloadCard</h1>
  <p>DownloadCard - компонент для отображения карточки файла с возможностью скачивания</p>

  <h2>Default</h2>
  <div class="p-4 border rounded-lg max-w-md">
    <DownloadCard
      file={defaultFile}
      downloadUrl={downloadUrl}
      variant="primary"
      showMetadata={true}
    />
  </div>

  <h2>With Custom Icon</h2>
  <div class="p-4 border rounded-lg max-w-md">
    <DownloadCard
      file={customFile}
      downloadUrl={downloadUrl}
      variant="success"
      icon="📝"
      showMetadata={true}
    />
  </div>

  <h2>Warning Variant</h2>
  <div class="p-4 border rounded-lg max-w-md">
    <DownloadCard
      file={reportFile}
      downloadUrl={downloadUrl}
      variant="warning"
      showMetadata={true}
    />
  </div>

  <h2>Without Metadata</h2>
  <div class="p-4 border rounded-lg max-w-md">
    <DownloadCard
      file={archiveFile}
      downloadUrl={downloadUrl}
      variant="danger"
      showMetadata={false}
    />
  </div>
</div>