<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { ChevronDown } from 'lucide-svelte';
  import Select from '../../atoms/controls/selectors/Select.svelte';

  type SortOption = {
    id: string;
    label: string;
    field: string;
    direction: 'asc' | 'desc';
  };

  type RestProps = Omit<HTMLAttributes<HTMLDivElement>, 'class'>;

  type Props = RestProps & {
    options: SortOption[];
    selectedOption?: string;
    class?: string;
    selectClass?: string;
    label?: string;
    showLabel?: boolean;
    onSortChange?: (option: SortOption) => void;
    disabled?: boolean;
  };

  let {
    options = [
      { id: 'featured', label: 'Featured', field: 'featured', direction: 'desc' },
      { id: 'newest', label: 'Newest Arrivals', field: 'createdAt', direction: 'desc' },
      { id: 'price-low-high', label: 'Price: Low to High', field: 'price', direction: 'asc' },
      { id: 'price-high-low', label: 'Price: High to Low', field: 'price', direction: 'desc' },
      { id: 'customer-top', label: 'Customer Top Rated', field: 'rating', direction: 'desc' },
      { id: 'a-z', label: 'A to Z', field: 'name', direction: 'asc' },
      { id: 'z-a', label: 'Z to A', field: 'name', direction: 'desc' }
    ],
    selectedOption = 'featured',
    class: hostClass = '',
    selectClass = '',
    label = 'Sort by',
    showLabel = true,
    onSortChange,
    disabled = false,
    ...restProps
  }: Props = $props();

  let selectedValue = $state(selectedOption);

  $effect(() => {
    selectedValue = selectedOption;
  });

  function handleChange(e: Event) {
    const target = e.target as HTMLSelectElement;
    const value = target.value;
    selectedValue = value;
    
    const option = options.find(opt => opt.id === value);
    if (option) {
      onSortChange?.(option);
    }
  }
</script>

<div class={`product-sort ${hostClass}`} {...restProps}>
  <label for="product-sort" class={`block text-sm font-medium text-gray-700 mb-1 ${showLabel ? '' : 'sr-only'}`}>
    {label}
  </label>
  
  <div class="relative">
    <select
      id="product-sort"
      class={`block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md ${selectClass} ${
        disabled ? 'bg-gray-100 cursor-not-allowed' : 'bg-white'
      }`}
      value={selectedValue}
      onchange={handleChange}
      disabled={disabled}
    >
      {#each options as option}
        <option value={option.id}>{option.label}</option>
      {/each}
    </select>
    
    <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
      <ChevronDown class="h-5 w-5 text-gray-400" />
    </div>
  </div>
</div>
