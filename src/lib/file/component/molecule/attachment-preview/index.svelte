<script lang="ts">
  import { Button } from '$stylist/control';
  import { Icon } from '$stylist/media';
  import { createAttachmentPreviewState } from '$stylist/file/function/state/attachment-preview';
  import { getIconName } from '$stylist/file/function/script/attachment-preview-get-icon-name';
  import { formatFileSize } from '$stylist/file/function/script/attachment-preview-format-file-size';
  import type { Props } from '$stylist/file/type/struct/attachment-preview/props';

  let props: Props = $props();
  const state = createAttachmentPreviewState(props);
</script>

<div class="attachment-preview">
  <div class="attachment-icon">
    <Icon name={getIconName(props.attachment.type)} size="lg" />
  </div>

  <div class="attachment-details">
    <div class="attachment-name">{props.attachment.name}</div>
    <div class="attachment-info">
      {#if props.attachment.size}
        <span>{formatFileSize(props.attachment.size)}</span>
      {/if}
    </div>
  </div>

  {#if state.showActions}
    <div class="attachment-actions">
      <Button
        variant="ghost"
        size="sm"
        onclick={state.download}
        title="Скачать"
      >
        <Icon name="download" size="sm" />
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onclick={state.remove}
        title="Удалить"
      >
        <Icon name="x" size="sm" />
      </Button>
    </div>
  {/if}
</div>

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
