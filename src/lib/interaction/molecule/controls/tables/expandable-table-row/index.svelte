<script lang="ts">
  import type { ArchitectureHTMLAttributes } from '$stylist/architecture/type/attribute/item';
  import type { Snippet } from 'svelte';
  import { Icon as BaseIcon } from '$stylist';
const ChevronDown = 'chevron-down';
const ChevronRight = 'chevron-right';


  type RestProps = Omit<ArchitectureHTMLAttributes<HTMLTableRowElement>, 'class'>;

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
  <tr class={`border-b border-[var(--color-border-primary)] ${hostClass}`} {...restProps}>
    <td class={`py-4 px-6 text-sm font-medium text-[var(--color-text-primary)] ${headerCellClass}`}>
      <button 
        type="button" 
        class="flex items-center text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] focus:outline-none"
        onclick={toggleExpanded}
      >
        {#if expanded}
          <BaseIcon name={ChevronDown} class="h-5 w-5 text-[var(--color-text-tertiary)]" />
        {:else}
          <BaseIcon name={ChevronRight} class="h-5 w-5 text-[var(--color-text-tertiary)]" />
        {/if}
      </button>
    </td>
    {@render rowContent()}
  </tr>

  <!-- Expanded content row -->
  {#if expanded}
    <tr class={`border-b border-[var(--color-border-primary)] ${hostClass}`}>
      <td class={`py-4 px-6 text-sm text-[var(--color-text-secondary)] ${cellClass}`} colspan="999">
        {@render expandableContent()}
      </td>
    </tr>
  {/if}





