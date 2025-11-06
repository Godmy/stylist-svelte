<script lang="ts">
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
        <svg class="flex-shrink-0 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
        </svg>
      {/if}
      <a href={item.href} class="ml-2 text-sm font-medium text-gray-500 hover:text-gray-700" aria-current={i === items.length - 1 ? 'page' : undefined}>
        {item.label}
      </a>
    </div>
  {/each}
</nav>
