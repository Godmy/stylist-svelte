<script lang="ts">
  import type { IAiResultCardProps } from './types';
  import { AiResultCardStyleManager } from './styles';

  let {
    children,
    title = '',
    description = '',
    icon = '',
    class: className = ''
  }: IAiResultCardProps = $props();
</script>

<div class={AiResultCardStyleManager.getContainerClass(className)}>
  <div class={AiResultCardStyleManager.getContentWrapperClass()}>
    {#if icon}
      <div class={AiResultCardStyleManager.getIconContainerClass()}>
        <img src={icon} alt="" class={AiResultCardStyleManager.getIconClass()} />
      </div>
    {/if}
    <div class={AiResultCardStyleManager.getTextContentWrapperClass()}>
      {#if title}
        <h3 class={AiResultCardStyleManager.getTitleClass()}>{title}</h3>
      {/if}
      {#if description}
        <p class={AiResultCardStyleManager.getDescriptionClass()}>{description}</p>
      {/if}
      <div>
        {@render children()}
      </div>
    </div>
  </div>
</div>