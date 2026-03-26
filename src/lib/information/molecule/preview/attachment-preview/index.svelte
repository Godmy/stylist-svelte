<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { Button, Icon } from '$stylist';

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
    gap: var(--spacing-3);
    padding: var(--spacing-3);
    background-color: var(--color-background-secondary);
    border-radius: var(--border-radius-lg);
    border: 1px solid var(--color-border-primary);
  }

  .attachment-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: var(--spacing-12);
    height: var(--spacing-12);
    border-radius: var(--border-radius-lg);
    background-color: var(--color-background-tertiary);
    color: var(--color-text-secondary);
  }

  .attachment-details {
    flex: 1;
    min-width: var(--size-0);
  }

  .attachment-name {
    font-weight: var(--font-weight-medium);
    color: var(--color-text-primary);
    font-size: var(--font-size-3);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .attachment-info {
    display: flex;
    gap: var(--spacing-2);
    font-size: var(--font-size-3);
    color: var(--color-text-secondary);
  }

  .attachment-actions {
    display: flex;
    gap: var(--spacing-1);
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




