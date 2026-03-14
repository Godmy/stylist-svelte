<script lang="ts">
  import { Icon } from '$stylist/components/atoms';
const ChevronUp = 'chevron-up';
const ChevronDown = 'chevron-down';
const ChevronsUpDown = 'chevrons-up-down';

  import { createSortableTableHeaderState } from '$stylist/design-system/models/interaction/sortable-table-header.svelte';
  import type { SortableTableHeaderProps } from '$stylist/design-system/contracts/interaction/sortable-table-header';
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
  let sortIcon = $derived<string>(
    !state.isCurrentSort || state.currentSortDirection === null
      ? ChevronsUpDown
      : state.currentSortDirection === 'asc'
        ? ChevronUp
        : ChevronDown
  );

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
    <Icon name={sortIcon} class={state.iconClasses} />
  </div>
</th>



