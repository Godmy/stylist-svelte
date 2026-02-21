<script lang="ts">
  /**
   * DownloadCard - компонент для отображения карточки файла с возможностью скачивания
   * 
   * Следует принципам SOLID:
   * 
   * Single Responsibility: Отвечает только за отображение карточки файла и действия скачивания
   * Open/Closed: Легко расширяется через пропсы, не требует изменений в коде
   * Liskov Substitution: Может быть заменен другим компонентом файл-менеджмента при необходимости
   * Interface Segregation: Имеет минимальный, конкретный интерфейс для файлов
   * Dependency Inversion: Зависит от абстракции стилей через DownloadCardStyleManager
   * 
   * Использует подход Atomic Design (Molecule) - комбинирует базовые элементы
   * (иконка, информация о файле, кнопка скачивания) в составной компонент
   */
  
  import type { IDownloadCardProps, DownloadCardVariant } from '$stylist/design-system/props/information/download-card';
  import { DownloadCardStyleManager } from '$stylist/design-system/styles/information/download-card';
  import { Download } from 'lucide-svelte';
  
  let {
    file,
    variant = 'primary',
    downloadUrl,
    iconAlt = 'File',
    showMetadata = true,
    icon,
    class: className = ''
  }: IDownloadCardProps = $props();
  
  // Вычисляемые стили через derived для изоляции логики стилизации
  const containerClasses = $derived(DownloadCardStyleManager.getContainerClasses(className));
  const iconContainerClasses = $derived(DownloadCardStyleManager.getIconContainerClasses());
  const iconClasses = $derived(DownloadCardStyleManager.getIconClasses(variant));
  const infoContainerClasses = $derived(DownloadCardStyleManager.getInfoContainerClasses());
  const fileNameClasses = $derived(DownloadCardStyleManager.getFileNameClasses());
  const metadataClasses = $derived(DownloadCardStyleManager.getMetadataClasses());
  const metadataItemClasses = $derived(DownloadCardStyleManager.getMetadataItemClasses());
  const downloadButtonClasses = $derived(DownloadCardStyleManager.getDownloadButtonClasses(variant));

  // Форматирование размера файла (если передано число)
  function formatFileSize(size: string | number): string {
    if (typeof size === 'number') {
      const units = ['B', 'KB', 'MB', 'GB'];
      let unitIndex = 0;
      let fileSize = size;

      while (fileSize >= 1024 && unitIndex < units.length - 1) {
        fileSize /= 1024;
        unitIndex++;
      }

      return `${fileSize.toFixed(1)} ${units[unitIndex]}`;
    }
    
    return size;
  }
  
  // Обработчик клика по кнопке скачивания
  function handleDownload() {
    // Открываем URL для скачивания
    window.open(downloadUrl, '_blank');
  }
</script>

<div class={containerClasses} role="article" aria-label={`Download card: ${file.name}`}>
  <!-- Иконка файла -->
  <div class={iconContainerClasses} aria-hidden="true">
    {#if icon}
      <span class={iconClasses} aria-label={iconAlt}>{icon}</span>
    {:else}
      <svg class={iconClasses} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M14 2V8H20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M16 13V19M13 16L16 13L19 16" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    {/if}
  </div>

  <!-- Информация о файле -->
  <div class={infoContainerClasses}>
    <div class={fileNameClasses} aria-label={`File name: ${file.name}`}>{file.name}</div>
    
    {#if showMetadata}
      <div class={metadataClasses} aria-label="File metadata">
        {#if file.size}
          <span class={metadataItemClasses} aria-label={`File size: ${formatFileSize(file.size)}`}>
            {formatFileSize(file.size)}
          </span>
        {/if}
        {#if file.type}
          <span class={metadataItemClasses} aria-label={`File type: ${file.type}`}>
            {file.type}
          </span>
        {/if}
        {#if file.date}
          <span class={metadataItemClasses} aria-label={`File date: ${file.date}`}>
            {file.date}
          </span>
        {/if}
      </div>
    {/if}
  </div>

  <!-- Кнопка скачивания -->
  <button 
    class={downloadButtonClasses}
    aria-label={`Download ${file.name}`}
    title={`Download ${file.name}`}
    onclick={handleDownload}
    type="button"
  >
    <Download class="w-5 h-5" aria-hidden="true" />
  </button>
</div>
