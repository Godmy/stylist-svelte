<script lang="ts">
  import type { SlotDownloadCard as IDownloadCardProps } from '$stylist/file/interface/slot/download-card';
  import { Icon as BaseIcon } from '$stylist';
  import { DownloadCardStyleManager } from '$stylist/file/class/style-manager/download-card';
  import { formatFileSize } from '$stylist/file/function/script/format-file-size';
  import { handleFileDownload } from '$stylist/file/function/script/handle-file-download';
  import { createDownloadCardState } from '$stylist/file/function/state/download-card';

  let props: IDownloadCardProps = $props();
  const state = createDownloadCardState(props as IDownloadCardProps & Record<string, unknown>);

  const containerClasses = $derived(DownloadCardStyleManager.getContainerClasses(state.class));
  const iconContainerClasses = $derived(DownloadCardStyleManager.getIconContainerClasses());
  const iconClasses = $derived(DownloadCardStyleManager.getIconClasses(state.variant));
  const infoContainerClasses = $derived(DownloadCardStyleManager.getInfoContainerClasses());
  const fileNameClasses = $derived(DownloadCardStyleManager.getFileNameClasses());
  const metadataClasses = $derived(DownloadCardStyleManager.getMetadataClasses());
  const metadataItemClasses = $derived(DownloadCardStyleManager.getMetadataItemClasses());
  const downloadButtonClasses = $derived(DownloadCardStyleManager.getDownloadButtonClasses(state.variant));

  function handleDownload() {
    if (state.downloadUrl) handleFileDownload(state.downloadUrl);
  }
</script>

<div class={containerClasses} role="article" aria-label={`Download card: ${props.file.name}`}>
  <!-- Иконка файла -->
  <div class={iconContainerClasses} aria-hidden="true">
    {#if props.icon}
      <span class={iconClasses} aria-label={props.iconAlt ?? 'File'}>{props.icon}</span>
    {:else}
      <BaseIcon name="download" class={iconClasses} aria-hidden="true" />
    {/if}
  </div>

  <!-- Информация о файле -->
  <div class={infoContainerClasses}>
    <div class={fileNameClasses} aria-label={`File name: ${props.file.name}`}>{props.file.name}</div>

    {#if props.showMetadata ?? true}
      <div class={metadataClasses} aria-label="File metadata">
        {#if props.file.size}
          <span class={metadataItemClasses} aria-label={`File size: ${formatFileSize(props.file.size)}`}>
            {formatFileSize(props.file.size)}
          </span>
        {/if}
        {#if props.file.type}
          <span class={metadataItemClasses} aria-label={`File type: ${props.file.type}`}>
            {props.file.type}
          </span>
        {/if}
        {#if props.file.date}
          <span class={metadataItemClasses} aria-label={`File date: ${props.file.date}`}>
            {props.file.date}
          </span>
        {/if}
      </div>
    {/if}
  </div>

  <!-- Кнопка скачивания -->
  <button
    class={downloadButtonClasses}
    aria-label={`Download ${props.file.name}`}
    title={`Download ${props.file.name}`}
    onclick={handleDownload}
    type="button"
  >
    <BaseIcon name="download" class="w-5 h-5" aria-hidden="true" />
  </button>
</div>
