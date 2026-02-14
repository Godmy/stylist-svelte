<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';

  type ColorItem = {
    name: string;
    value: string;
    category?: string;
  };

  type RestProps = Omit<HTMLAttributes<HTMLDivElement>, 'class'>;

  type Props = RestProps & {
    colors: ColorItem[];
    title?: string;
    showLabels?: boolean;
    showValues?: boolean;
    columns?: number;
    class?: string;
    itemClass?: string;
    headerClass?: string;
    onColorSelect?: (color: ColorItem) => void;
  };

  let {
    colors = [],
    title = 'Color Palette',
    showLabels = true,
    showValues = false,
    columns = 5,
    class: hostClass = '',
    itemClass = '',
    headerClass = '',
    onColorSelect,
    ...restProps
  }: Props = $props();

  let columnClass = $derived({
    2: 'grid-cols-2',
    3: 'grid-cols-3',
    4: 'grid-cols-4',
    5: 'grid-cols-5',
    6: 'grid-cols-6',
  }[columns] || 'grid-cols-5');

  function handleColorClick(color: ColorItem) {
    onColorSelect?.(color);
  }
</script>

<div class={`color-palette ${hostClass}`} {...restProps}>
  {#if title}
    <h3 class={`text-lg font-medium text-gray-900 mb-4 ${headerClass}`}>{title}</h3>
  {/if}
  
  <div class={`grid ${columnClass} gap-4`}>
    {#each colors as color}
            <button
              type="button"
              class={`flex flex-col items-center cursor-pointer rounded-lg p-3 transition-shadow hover:shadow-md ${itemClass}`}
              onclick={() => handleColorClick(color)}
            >        <div 
          class="w-full h-12 rounded-md mb-2 border border-gray-200"
          style={`background-color: ${color.value}`}
          title={`${color.name}: ${color.value}`}
        ></div>
        {#if showLabels}
          <div class="text-xs font-medium text-gray-700 truncate w-full text-center">
            {color.name}
          </div>
        {/if}
        {#if showValues}
          <div class="text-xs text-gray-500 font-mono truncate w-full text-center">
            {color.value}
          </div>
        {/if}
      </button>
    {/each}
  </div>
</div>



