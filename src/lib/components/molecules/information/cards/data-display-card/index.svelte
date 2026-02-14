<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import type { Snippet } from 'svelte';

  type Props = {
    title?: string;
    subtitle?: string;
    description?: string;
    image?: string;
    footer?: Snippet;
    actions?: Snippet;
    class?: string;
    imageClass?: string;
    headerClass?: string;
    bodyClass?: string;
    footerClass?: string;
    actionsClass?: string;
  } & HTMLAttributes<HTMLDivElement>;

  let {
    title,
    subtitle,
    description,
    image,
    footer,
    actions,
    class: className = '',
    imageClass = '',
    headerClass = '',
    bodyClass = '',
    footerClass = '',
    actionsClass = '',
    ...restProps
  }: Props = $props();
</script>

<div class={`bg-white rounded-lg shadow-md overflow-hidden ${className}`} {...restProps}>
  {#if image}
    <img 
      src={image} 
      alt={title || 'Card image'} 
      class={`w-full h-auto ${imageClass}`} 
    />
  {/if}
  
  <div class="p-6">
    {#if title || subtitle}
      <div class={`mb-4 ${headerClass}`}>
        {#if title}
          <h3 class="text-xl font-bold text-gray-900">{title}</h3>
        {/if}
        {#if subtitle}
          <p class="text-sm text-gray-500">{subtitle}</p>
        {/if}
      </div>
    {/if}
    
    {#if description}
      <div class={`mb-4 ${bodyClass}`}>
        <p class="text-gray-700">{description}</p>
      </div>
    {/if}
    
    {#if actions}
      <div class={`mt-4 ${actionsClass}`}>
        {@render actions()}
      </div>
    {/if}
  </div>
  
  {#if footer}
    <div class={`px-6 py-3 bg-gray-50 border-t border-gray-200 ${footerClass}`}>
      {@render footer()}
    </div>
  {/if}
</div>
