<script lang="ts">
  import type { IAlertCardProps } from './types';
  import { AlertCardStyleManager } from './styles';

  let {
    title = '',
    subtitle = '',
    icon = '',
    actions = [],
    class: className = ''
  }: IAlertCardProps = $props();
</script>

<div class={AlertCardStyleManager.getContainerClass(className)}>
  <div class={AlertCardStyleManager.getContentWrapperClass()}>
    {#if icon}
      <div class={AlertCardStyleManager.getIconContainerClass()}>
        <img src={icon} alt="" class={AlertCardStyleManager.getIconClass()} />
        <div class={AlertCardStyleManager.getTextContainerClass()}>
          <h3 class={AlertCardStyleManager.getTitleClass()}>{title}</h3>
          {#if subtitle}<p class={AlertCardStyleManager.getSubtitleClass()}>{subtitle}</p>{/if}
        </div>
      </div>
    {:else}
      <h3 class={`${AlertCardStyleManager.getTitleClass()} mb-[--spacing-sm]`}>{title}</h3>
      {#if subtitle}<p class={`${AlertCardStyleManager.getSubtitleClass()} mb-[--spacing-md]`}>{subtitle}</p>{/if}
    {/if}

    <div class={AlertCardStyleManager.getActionsContainerClass()}>
      {#each actions as action, i}
        <button
          onclick={action.onClick}
          class={AlertCardStyleManager.getActionButtonClass()}
        >
          {action.label}
        </button>
      {/each}
    </div>
  </div>
</div>