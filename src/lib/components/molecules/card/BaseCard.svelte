<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';

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
    ...restProps
  }: Props = $props();
</script>

<div class={`bg-white rounded-lg shadow border border-gray-200 overflow-hidden ${className}`} {...restProps}>
  {#if title || description}
    <div class={`border-b ${headerClass}`}>
      {#if title}
        <h3 class="p-4 text-lg font-medium text-gray-900">{title}</h3>
      {/if}
      {#if description}
        <p class="px-4 pb-2 text-sm text-gray-500">{description}</p>
      {/if}
    </div>
  {/if}
  <div class={`p-4 ${bodyClass}`}>
    <slot />
  </div>
</div>