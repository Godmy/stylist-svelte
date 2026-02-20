<script lang="ts">
  import { ChevronUp, ChevronDown, ChevronsUpDown } from 'lucide-svelte';
  import { createSortableTableHeaderState } from '$stylist/design-system/models/sortable-table-header.svelte';
  import type { SortableTableHeaderProps } from '$stylist/design-system/props/sortable-table-header';
  import type { HTMLAttributes } from 'svelte/elements';

  type Props = SortableTableHeaderProps & HTMLAttributes<HTMLTableHeaderCellElement>;
  let props: Props = $props();

  const state = createSortableTableHeaderState(props);

  const restProps = $derived(
    (() => {
      const { class: _class, ...rest } = props;
      return rest;
    })()
  );

  // Determine the sort icon based on current state
  let sortIcon = $derived(() => {
    if (!state.isCurrentSort || state.currentSortDirection === null) return ChevronsUpDown;
    return state.currentSortDirection === 'asc' ? ChevronUp : ChevronDown;
  });
  let SortIcon = $derived(sortIcon);

  function handleClick() {
    if (state.sortKey) {
      props.onValueInput?.(state.sortKey);
      props.onValueChange?.(state.sortKey);
    }
  }
</script>

<th
  class={state.containerClasses}
  onclick={handleClick}
  {...restProps}
>
  <div class={state.contentClasses}>
    <span>{state.title}</span>
    <SortIcon class={state.iconClasses} />
  </div>
</th>