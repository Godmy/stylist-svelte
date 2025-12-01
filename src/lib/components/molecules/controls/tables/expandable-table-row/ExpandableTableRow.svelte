<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import type { Snippet } from 'svelte';
  import { ChevronDown, ChevronRight } from 'lucide-svelte';

  type RestProps = Omit<HTMLAttributes<HTMLTableRowElement>, 'class'>;

  type Props = RestProps & {
    expandableContent: Snippet;
    rowContent: Snippet;
    isExpanded?: boolean;
    class?: string;
    cellClass?: string;
    headerCellClass?: string;
    onToggle?: (expanded: boolean) => void;
  };

  let {
    expandableContent,
    rowContent,
    isExpanded = false,
    class: hostClass = '',
    cellClass = '',
    headerCellClass = '',
    onToggle,
    ...restProps
  }: Props = $props();

  let expanded = $state(isExpanded);

  $effect(() => {
    expanded = isExpanded;
  });

  function toggleExpanded() {
    expanded = !expanded;
    onToggle?.(expanded);
  }
</script>

  <!-- Main row -->
  <tr class={`border-b border-gray-200 ${hostClass}`} {...restProps}>
    <td class={`py-4 px-6 text-sm font-medium text-gray-900 ${headerCellClass}`}>
      <button 
        type="button" 
        class="flex items-center text-gray-500 hover:text-gray-700 focus:outline-none"
        onclick={toggleExpanded}
      >
        {#if expanded}
          <ChevronDown class="h-5 w-5 text-gray-400" />
        {:else}
          <ChevronRight class="h-5 w-5 text-gray-400" />
        {/if}
      </button>
    </td>
    {@render rowContent()}
  </tr>

  <!-- Expanded content row -->
  {#if expanded}
    <tr class={`border-b border-gray-200 ${hostClass}`}>
      <td class={`py-4 px-6 text-sm text-gray-500 ${cellClass}`} colspan="999">
        {@render expandableContent()}
      </td>
    </tr>
  {/if}
