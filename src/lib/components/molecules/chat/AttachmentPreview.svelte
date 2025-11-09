<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import Button from '$lib/components/atoms/controls/buttons/Button.svelte';
  import Icon from '$lib/components/atoms/media/Icon.svelte';

  // Define local types
  interface Attachment {
    id: string;
    name: string;
    type: string;
    size: number;
    url?: string;
    previewUrl?: string;
  }

  // Props
  let { 
    attachment,
    showActions = true
  }: {
    attachment: Attachment;
    showActions?: boolean;
  } = $props();

  // Events
  const dispatch = createEventDispatcher<{
    remove: { attachment: Attachment };
    download: { attachment: Attachment };
  }>();

  // Format file size
  const formatFileSize = (bytes?: number): string => {
    if (!bytes) return '';
    if (bytes < 1024) return bytes + ' B';
    else if (bytes < 1048576) return (bytes / 1024).toFixed(1) + ' KB';
    else return (bytes / 1048576).toFixed(1) + ' MB';
  };

  // Get icon based on file type
  const getIconName = (type: string) => {
    switch (type) {
      case 'image': return 'image';
      case 'video': return 'video';
      case 'audio': return 'audio';
      case 'file': return 'file';
      default: return 'file';
    }
  };

  // Handle download
  function handleDownload() {
    dispatch('download', { attachment });
  }

  // Handle remove
  function handleRemove() {
    dispatch('remove', { attachment });
  }
</script>

<style>
  .attachment-preview {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.75rem;
    background-color: #f8fafc;
    border-radius: 0.5rem;
    border: 1px solid #e2e8f0;
  }

  .attachment-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 3rem;
    height: 3rem;
    border-radius: 0.375rem;
    background-color: #e2e8f0;
    color: #64748b;
  }

  .attachment-details {
    flex: 1;
    min-width: 0;
  }

  .attachment-name {
    font-weight: 500;
    color: #1e293b;
    font-size: 0.875rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .attachment-info {
    display: flex;
    gap: 0.5rem;
    font-size: 0.75rem;
    color: #64748b;
  }

  .attachment-actions {
    display: flex;
    gap: 0.25rem;
  }
</style>

<div class="attachment-preview">
  <div class="attachment-icon">
    <Icon name={getIconName(attachment.type)} size="lg" />
  </div>
  
  <div class="attachment-details">
    <div class="attachment-name">{attachment.name}</div>
    <div class="attachment-info">
      {#if attachment.size}
        <span>{formatFileSize(attachment.size)}</span>
      {/if}
    </div>
  </div>
  
  {#if showActions}
    <div class="attachment-actions">
      <Button 
        variant="ghost" 
        size="sm" 
        onclick={handleDownload}
        title="Скачать"
      >
        <Icon name="download" size="sm" />
      </Button>
      <Button 
        variant="ghost" 
        size="sm" 
        onclick={handleRemove}
        title="Удалить"
      >
        <Icon name="x" size="sm" />
      </Button>
    </div>
  {/if}
</div>
