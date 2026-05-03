<script lang="ts">
  import Icon from '$stylist/media/component/atom/icon/index.svelte';
const ChevronUp = 'chevron-up';
const ChevronDown = 'chevron-down';
const ChevronsUpDown = 'chevrons-up-down';

  import { createSortableTableHeaderState } from '$stylist/control/function/state/sortable-table-header';
  import type { SortableTableHeaderProps } from '$stylist/control/type/struct/sortable-table-header-props';

  let props: SortableTableHeaderProps = $props();

  const state = createSortableTableHeaderState(props);

  const restProps = $derived(
    (() => {
      const { class: _class, ...rest } = props;
      return rest;
    })()
  );

  // Determine the sort icon based on current state
  let sortIcon = $derived<string>(
    !state.isCurrentSort || state.currentSortDirection === null
      ? ChevronsUpDown
      : state.currentSortDirection === 'asc'
        ? ChevronUp
        : ChevronDown
  );

</script>

<th
  class={state.containerClasses}
  onclick={state.handleClick}
  {...restProps}
>
  <div class={state.contentClasses}>
    <span>{state.title}</span>
    <Icon name={sortIcon} class={state.iconClasses} />
  </div>
</th>



