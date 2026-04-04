<script lang="ts">
  /**
   * DownloadCard - РєРѕРјРїРѕРЅРµРЅС‚ РґР»СЏ РѕС‚РѕР±СЂР°Р¶РµРЅРёСЏ РєР°СЂС‚РѕС‡РєРё С„Р°Р№Р»Р° СЃ РІРѕР·РјРѕР¶РЅРѕСЃС‚СЊСЋ СЃРєР°С‡РёРІР°РЅРёСЏ
   * 
   * РЎР»РµРґСѓРµС‚ РїСЂРёРЅС†РёРїР°Рј SOLID:
   * 
   * Single Responsibility: РћС‚РІРµС‡Р°РµС‚ С‚РѕР»СЊРєРѕ Р·Р° РѕС‚РѕР±СЂР°Р¶РµРЅРёРµ РєР°СЂС‚РѕС‡РєРё С„Р°Р№Р»Р° Рё РґРµР№СЃС‚РІРёСЏ СЃРєР°С‡РёРІР°РЅРёСЏ
   * Open/Closed: Р›РµРіРєРѕ СЂР°СЃС€РёСЂСЏРµС‚СЃСЏ С‡РµСЂРµР· РїСЂРѕРїСЃС‹, РЅРµ С‚СЂРµР±СѓРµС‚ РёР·РјРµРЅРµРЅРёР№ РІ РєРѕРґРµ
   * Liskov Substitution: РњРѕР¶РµС‚ Р±С‹С‚СЊ Р·Р°РјРµРЅРµРЅ РґСЂСѓРіРёРј РєРѕРјРїРѕРЅРµРЅС‚РѕРј С„Р°Р№Р»-РјРµРЅРµРґР¶РјРµРЅС‚Р° РїСЂРё РЅРµРѕР±С…РѕРґРёРјРѕСЃС‚Рё
   * Interface Segregation: РРјРµРµС‚ РјРёРЅРёРјР°Р»СЊРЅС‹Р№, РєРѕРЅРєСЂРµС‚РЅС‹Р№ РёРЅС‚РµСЂС„РµР№СЃ РґР»СЏ С„Р°Р№Р»РѕРІ
   * Dependency Inversion: Р—Р°РІРёСЃРёС‚ РѕС‚ Р°Р±СЃС‚СЂР°РєС†РёРё СЃС‚РёР»РµР№ С‡РµСЂРµР· DownloadCardStyleManager
   * 
   * РСЃРїРѕР»СЊР·СѓРµС‚ РїРѕРґС…РѕРґ Atomic Design (Molecule) - РєРѕРјР±РёРЅРёСЂСѓРµС‚ Р±Р°Р·РѕРІС‹Рµ СЌР»РµРјРµРЅС‚С‹
   * (РёРєРѕРЅРєР°, РёРЅС„РѕСЂРјР°С†РёСЏ Рѕ С„Р°Р№Р»Рµ, РєРЅРѕРїРєР° СЃРєР°С‡РёРІР°РЅРёСЏ) РІ СЃРѕСЃС‚Р°РІРЅРѕР№ РєРѕРјРїРѕРЅРµРЅС‚
   */
  
  import type { IDownloadCardProps } from '$stylist/file/interface/component/download-card/other';
  import { Icon as BaseIcon } from '$stylist';
  import { DownloadCardStyleManager } from '$stylist/file/class/style-manager/download-card';

  
  let {
    file,
    variant = 'primary',
    downloadUrl,
    iconAlt = 'File',
    showMetadata = true,
    icon,
    class: className = ''
  }: IDownloadCardProps = $props();
  
  // Р’С‹С‡РёСЃР»СЏРµРјС‹Рµ СЃС‚РёР»Рё С‡РµСЂРµР· derived РґР»СЏ РёР·РѕР»СЏС†РёРё Р»РѕРіРёРєРё СЃС‚РёР»РёР·Р°С†РёРё
  const containerClasses = $derived(DownloadCardStyleManager.getContainerClasses(className));
  const iconContainerClasses = $derived(DownloadCardStyleManager.getIconContainerClasses());
  const iconClasses = $derived(DownloadCardStyleManager.getIconClasses(variant));
  const infoContainerClasses = $derived(DownloadCardStyleManager.getInfoContainerClasses());
  const fileNameClasses = $derived(DownloadCardStyleManager.getFileNameClasses());
  const metadataClasses = $derived(DownloadCardStyleManager.getMetadataClasses());
  const metadataItemClasses = $derived(DownloadCardStyleManager.getMetadataItemClasses());
  const downloadButtonClasses = $derived(DownloadCardStyleManager.getDownloadButtonClasses(variant));

  // Р¤РѕСЂРјР°С‚РёСЂРѕРІР°РЅРёРµ СЂР°Р·РјРµСЂР° С„Р°Р№Р»Р° (РµСЃР»Рё РїРµСЂРµРґР°РЅРѕ С‡РёСЃР»Рѕ)
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
  
  // РћР±СЂР°Р±РѕС‚С‡РёРє РєР»РёРєР° РїРѕ РєРЅРѕРїРєРµ СЃРєР°С‡РёРІР°РЅРёСЏ
  function handleDownload() {
    // РћС‚РєСЂС‹РІР°РµРј URL РґР»СЏ СЃРєР°С‡РёРІР°РЅРёСЏ
    window.open(downloadUrl, '_blank');
  }
</script>

<div class={containerClasses} role="article" aria-label={`Download card: ${file.name}`}>
  <!-- РРєРѕРЅРєР° С„Р°Р№Р»Р° -->
  <div class={iconContainerClasses} aria-hidden="true">
    {#if icon}
      <span class={iconClasses} aria-label={iconAlt}>{icon}</span>
    {:else}
      <BaseIcon name="download" class={iconClasses} aria-hidden="true" />
    {/if}
  </div>

  <!-- РРЅС„РѕСЂРјР°С†РёСЏ Рѕ С„Р°Р№Р»Рµ -->
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

  <!-- РљРЅРѕРїРєР° СЃРєР°С‡РёРІР°РЅРёСЏ -->
  <button 
    class={downloadButtonClasses}
    aria-label={`Download ${file.name}`}
    title={`Download ${file.name}`}
    onclick={handleDownload}
    type="button"
  >
    <BaseIcon name="download" class="w-5 h-5" aria-hidden="true" />
  </button>
</div>





