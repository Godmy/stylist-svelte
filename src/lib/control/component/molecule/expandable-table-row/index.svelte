<script lang="ts">
  import { Icon as BaseIcon } from '$stylist/media';
const ChevronDown = 'chevron-down';
const ChevronRight = 'chevron-right';
  import type { ExpandableTableRowProps } from '$stylist/control/type/struct/expandable-table-row-props';
  import { createExpandableTableRowState } from '$stylist/control/function/state/expandable-table-row';

  let {
    expandableContent,
    rowContent,
    isExpanded = false,
    class: hostClass = '',
    cellClass = '',
    headerCellClass = '',
    onToggle,
    ...restProps
  }: ExpandableTableRowProps = $props();

  const state = createExpandableTableRowState({
    expandableContent,
    rowContent,
    isExpanded,
    class: hostClass,
    cellClass,
    headerCellClass,
    onToggle,
    ...restProps
  });
</script>

  <!-- Main row -->
  <tr class={`border-b border-[var(--color-border-primary)] ${hostClass}`} {...restProps}>
    <td class={`py-4 px-6 text-sm font-medium text-[var(--color-text-primary)] ${headerCellClass}`}>
      <button 
        type="button" 
        class="flex items-center text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] focus:outline-none"
        onclick={() => state.toggleExpanded()}
      >
        {#if state.expanded}
          <BaseIcon name={ChevronDown} class="h-5 w-5 text-[var(--color-text-tertiary)]" />
        {:else}
          <BaseIcon name={ChevronRight} class="h-5 w-5 text-[var(--color-text-tertiary)]" />
        {/if}
      </button>
    </td>
    {@render rowContent()}
  </tr>

  <!-- Expanded content row -->
  {#if state.expanded}
    <tr class={`border-b border-[var(--color-border-primary)] ${hostClass}`}>
      <td class={`py-4 px-6 text-sm text-[var(--color-text-secondary)] ${cellClass}`} colspan="999">
        {@render expandableContent()}
      </td>
    </tr>
  {/if}





