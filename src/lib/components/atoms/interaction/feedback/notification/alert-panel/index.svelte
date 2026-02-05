<script lang="ts">
  import { AlertStyleManager } from '$stylist/design-system/presets/interaction/interaction-presets';

  let {
    title = '',
    description = '',
    variant = 'info',
    showIcon = true,
    class: className = ''
  } = $props<{
    title?: string;
    description?: string;
    variant?: 'info' | 'success' | 'warning' | 'error' | 'primary' | 'secondary' | 'danger';
    showIcon?: boolean;
    class?: string;
  }>();

  const statusIcons: Record<string, string> = {
    info: 'ℹ',
    success: '✓',
    warning: '⚠',
    error: '✕',
    primary: '●',
    secondary: '◆',
    danger: '▲'
  };
</script>

<div class={AlertStyleManager.getBaseClasses(variant) + ' ' + className}>
  <div class={AlertStyleManager.getContentWrapperClass()}>
    {#if showIcon}
      <span class={AlertStyleManager.getIconClasses(variant)}>{statusIcons[variant]}</span>
    {/if}
    <div class={AlertStyleManager.getTextContentWrapperClass()}>
      <h3 class={AlertStyleManager.getTitleClasses()}>{title}</h3>
      {#if description}
        <p class={AlertStyleManager.getContentContainerClasses()}>{description}</p>
      {/if}
    </div>
  </div>
</div>
