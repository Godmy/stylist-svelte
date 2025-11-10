<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { Search } from 'lucide-svelte';

  type IconItem = {
    name: string;
    component: any; // Using any for now, since Svelte components have complex typing
    category?: string;
    keywords?: string[];
  };

  type RestProps = Omit<HTMLAttributes<HTMLDivElement>, 'class'>;

  type Props = RestProps & {
    icons: IconItem[];
    title?: string;
    searchPlaceholder?: string;
    selectedIcon?: string;
    columns?: number;
    class?: string;
    itemClass?: string;
    headerClass?: string;
    onIconSelect?: (icon: IconItem) => void;
    showSearch?: boolean;
    showCategories?: boolean;
  };

  let {
    icons = [],
    title = 'Icon Picker',
    searchPlaceholder = 'Search icons...',
    selectedIcon,
    columns = 6,
    class: hostClass = '',
    itemClass = '',
    headerClass = '',
    onIconSelect,
    showSearch = true,
    showCategories = true,
    ...restProps
  }: Props = $props();

  let searchQuery = $state('');
  let filteredIcons = $derived(
    searchQuery
      ? icons.filter(icon => 
          icon.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          (icon.keywords && icon.keywords.some(kw => 
            kw.toLowerCase().includes(searchQuery.toLowerCase())
          ))
        )
      : icons
  );

  let columnClass = $derived({
    2: 'grid-cols-2',
    3: 'grid-cols-3',
    4: 'grid-cols-4',
    5: 'grid-cols-5',
    6: 'grid-cols-6',
    7: 'grid-cols-7',
    8: 'grid-cols-8'
  }[columns] || 'grid-cols-6');

  function handleIconClick(icon: IconItem) {
    onIconSelect?.(icon);
  }
</script>

<div class={`icon-picker ${hostClass}`} {...restProps}>
  <div class={`mb-4 ${headerClass}`}>
    {#if title}
      <h3 class="text-lg font-medium text-gray-900 mb-2">{title}</h3>
    {/if}
    
    {#if showSearch}
      <div class="relative">
        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search class="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          class="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          placeholder={searchPlaceholder}
          value={searchQuery}
          oninput={(e) => searchQuery = (e.target as HTMLInputElement).value}
        />
      </div>
    {/if}
  </div>
  
  <div class={`grid ${columnClass} gap-4 max-h-[400px] overflow-y-auto p-1`}>
    {#each filteredIcons as icon}
            <button
              type="button"
              class={`flex flex-col items-center p-3 cursor-pointer rounded-lg transition-colors hover:bg-gray-100 ${itemClass} ${
                selectedIcon === icon.name ? 'ring-2 ring-blue-500 ring-offset-2' : ''
              }`}
              onclick={() => handleIconClick(icon)}
              title={icon.name}
            >        <div class="w-8 h-8 flex items-center justify-center text-gray-700">
          {@render icon.component({ class: 'w-6 h-6' })}
        </div>
        <div class="mt-1 text-xs text-gray-700 truncate w-full text-center">
          {icon.name}
        </div>
      </button>
    {/each}
  </div>
</div>
