<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { ChevronUp, ChevronDown, ChevronsUpDown } from 'lucide-svelte';

  type SortDirection = 'asc' | 'desc' | null;

  type RestProps = Omit<HTMLAttributes<HTMLTableHeaderCellElement>, 'class'>;

  type Props = RestProps & {
    title: string;
    sortKey?: string;
    currentSortKey?: string;
    currentSortDirection?: SortDirection;
    class?: string;
    onSort?: (key: string) => void;
  };

  let {
    title,
    sortKey,
    currentSortKey,
    currentSortDirection = null,
    class: hostClass = '',
    onSort,
    ...restProps
  }: Props = $props();

  let isCurrentSort = $derived(currentSortKey === sortKey);
  let sortIcon = $derived(() => {
    if (!isCurrentSort || currentSortDirection === null) return ChevronsUpDown;
    return currentSortDirection === 'asc' ? ChevronUp : ChevronDown;
  });
  let SortIcon = $derived(sortIcon);

  function handleClick() {
    if (sortKey) {
      onSort?.(sortKey);
    }
  }
</script>

<th 
  class={`px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100 ${hostClass}`} 
  onclick={handleClick}
  {...restProps}
>
  <div class="flex items-center">
    <span>{title}</span>
    <SortIcon class="ml-1 h-4 w-4" />
  </div>
</th>
