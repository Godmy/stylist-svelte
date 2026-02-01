<script lang="ts">
  import type { IAlertPanelProps } from '$stylist/design-system/interaction/feedback/notification/alert-panel';
  import { AlertPanelStyleManager } from '$stylist/design-system/interaction/feedback/notification/alert-panel';

  let {
    title = '',
    description = '',
    status = 'info',
    showIcon = true,
    class: className = ''
  }: IAlertPanelProps = $props();

  const statusIcons: Record<'info' | 'success' | 'warning' | 'error', string> = {
    info: 'ℹ',
    success: '✓',
    warning: '⚠',
    error: '✕'
  };
</script>

<div class={AlertPanelStyleManager.getContainerClass(status, className)}>
  <div class={AlertPanelStyleManager.getContentWrapperClass()}>
    {#if showIcon}
      <span class={AlertPanelStyleManager.getIconClass()}>{statusIcons[status]}</span>
    {/if}
    <div class={AlertPanelStyleManager.getTextContentWrapperClass()}>
      <h3 class={AlertPanelStyleManager.getTitleClass()}>{title}</h3>
      {#if description}
        <p class={AlertPanelStyleManager.getDescriptionClass()}>{description}</p>
      {/if}
    </div>
  </div>
</div>
