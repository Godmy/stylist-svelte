<script lang="ts">
  import { ChevronRight } from 'lucide-svelte';

  type BreadcrumbItem = {
    label: string;
    href?: string;
  };

  type Props = {
    items: BreadcrumbItem[];
    class?: string;
  };

  let { items, class: className = '' }: Props = $props();
</script>

<nav aria-label="Breadcrumb" class={`flex items-center space-x-2 text-sm text-gray-500 ${className}`}>
  {#each items as item, i}
    <div class="flex items-center">
      {#if i > 0}
        <ChevronRight class="flex-shrink-0 h-5 w-5 text-gray-400" aria-hidden="true" />
      {/if}
      <a href={item.href} class="ml-2 text-sm font-medium text-gray-500 hover:text-gray-700" aria-current={i === items.length - 1 ? 'page' : undefined}>
        {item.label}
      </a>
    </div>
  {/each}
</nav>
