<script lang="ts">
  import type { InformationHTMLAttributes } from '$stylist/design-system/html/attributes/information';
  import type { Snippet } from 'svelte';

  type Props = {
    title?: string;
    subtitle?: string;
    description?: string;
    image?: string;
    imageClass?: string;
    footer?: Snippet;
    actions?: Snippet;
    class?: string;
    headerClass?: string;
    bodyClass?: string;
    footerClass?: string;
    actionsClass?: string;
  } & InformationHTMLAttributes<HTMLDivElement>;

  let {
    title,
    subtitle,
    description,
    image,
    imageClass = 'h-48 w-full object-cover',
    footer,
    actions,
    class: className = '',
    headerClass = '',
    bodyClass = '',
    footerClass = '',
    actionsClass = '',
    ...restProps
  }: Props = $props();
</script>

<div class={className + ' bg-[var(--color-background-primary)] rounded-lg shadow overflow-hidden'} {...restProps}>
  {#if image}
    <img src={image} alt="" class={imageClass} />
  {/if}
  
  <div class="p-6">
    {#if title || subtitle}
      <div class="mb-4">
        {#if title}
          <h3 class="text-lg font-semibold text-[var(--color-text-primary)]">{title}</h3>
        {/if}
        {#if subtitle}
          <p class="text-sm text-[var(--color-text-secondary)]">{subtitle}</p>
        {/if}
      </div>
    {/if}
    
    {#if description}
      <p class="text-[var(--color-text-primary)] mb-4">{description}</p>
    {/if}
    
    {#if footer}
      <div class={footerClass}>
        {@render footer()}
      </div>
    {/if}
    
    {#if actions}
      <div class={actionsClass}>
        {@render actions()}
      </div>
    {/if}
  </div>
</div>



