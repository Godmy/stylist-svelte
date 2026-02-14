<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { BaseCardStyleManager } from '$stylist/design-system/styles/base-card';

  type Props = {
    title?: string;
    description?: string;
    class?: string;
    headerClass?: string;
    bodyClass?: string;
  } & HTMLAttributes<HTMLDivElement>;

  let {
    title,
    description,
    class: className = '',
    headerClass = '',
    bodyClass = '',
    children,
    ...restProps
  }: Props & { children?: () => any } = $props();

  // Generate CSS classes using the style manager
  const cardClass = $derived(BaseCardStyleManager.getCardClass(className));
  const headerClassComputed = $derived(BaseCardStyleManager.getHeaderClass(headerClass));
  const titleClass = $derived(BaseCardStyleManager.getTitleClass());
  const descriptionClass = $derived(BaseCardStyleManager.getDescriptionClass());
  const bodyClassComputed = $derived(BaseCardStyleManager.getBodyClass(bodyClass));
</script>

<div class={cardClass} {...restProps}>
  {#if title || description}
    <div class={headerClassComputed}>
      {#if title}
        <h3 class={titleClass}>{title}</h3>
      {/if}
      {#if description}
        <p class={descriptionClass}>{description}</p>
      {/if}
    </div>
  {/if}
  <div class={bodyClassComputed}>
    {#if children}
      {@render children()}
    {/if}
  </div>
</div>
