<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { ArrowUpDown, ArrowUp, ArrowDown, ChevronDown } from 'lucide-svelte';
  import Select from '../../atoms/controls/selectors/Select.svelte';

  type SortOption = {
    id: string;
    label: string;
    field: string;
    direction: 'asc' | 'desc';
  };

  type RestProps = Omit<HTMLAttributes<HTMLDivElement>, 'class'>;

  type Props = RestProps & {
    options?: SortOption[];
    defaultOption?: string;
    showIcon?: boolean;
    showLabel?: boolean;
    label?: string;
    class?: string;
    selectClass?: string;
    onSortChange?: (option: SortOption) => void;
  };

  let {
    options = [
      { id: 'featured', label: 'Featured', field: 'featured', direction: 'desc' },
      { id: 'newest', label: 'Newest', field: 'createdAt', direction: 'desc' },
      { id: 'price-low', label: 'Price: Low to High', field: 'price', direction: 'asc' },
      { id: 'price-high', label: 'Price: High to Low', field: 'price', direction: 'desc' },
      { id: 'rating', label: 'Top Rated', field: 'rating', direction: 'desc' },
      { id: 'name-asc', label: 'Name: A to Z', field: 'name', direction: 'asc' },
      { id: 'name-desc', label: 'Name: Z to A', field: 'name', direction: 'desc' }
    ],
    defaultOption = 'featured',
    showIcon = true,
    showLabel = true,
    label = 'Sort by',
    class: hostClass = '',
    selectClass = '',
    onSortChange,
    ...restProps
  }: Props = $props();

  let currentSort = $state(options.find(opt => opt.id === defaultOption) || options[0]);

  function handleSortChange(e: Event) {
    const target = e.target as HTMLSelectElement;
    const selectedId = target.value;
    const selectedOption = options.find(opt => opt.id === selectedId);

    if (selectedOption) {
      currentSort = selectedOption;
      onSortChange?.(selectedOption);
    }
  }

  function getSortIcon() {
    if (currentSort.direction === 'asc') {
      return ArrowUp;
    } else if (currentSort.direction === 'desc') {
      return ArrowDown;
    }
    return ArrowUp; // default
  }

  let SortIcon = $derived.by(() => getSortIcon());
</script>

<div class={`product-sorting flex items-center ${hostClass}`} {...restProps}>
  {#if showLabel}
    <label for="sort-options" class="block text-sm font-medium text-gray-700 mr-2">
      {label}
    </label>
  {/if}

  <div class="relative">
    <Select
      id="sort-options"
      label={label}
      value={currentSort.id}
      options={options.map(option => ({ value: option.id, label: option.label }))}
      onchange={handleSortChange}
      class={`pl-10 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md ${selectClass}`}
    />

    <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
      {#if showIcon}
        <SortIcon class="h-5 w-5 text-gray-400" />
      {/if}
    </div>

    <div class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
      <ChevronDown class="h-5 w-5 text-gray-400" />
    </div>
  </div>
</div>
