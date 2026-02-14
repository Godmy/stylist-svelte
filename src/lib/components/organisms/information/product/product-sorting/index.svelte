<script lang="ts">
  import type { IProductSortingProps } from '$lib/design-system/props/product-sorting';
  import { ProductSortingStyleManager } from '$lib/design-system/styles/product-sorting';

  const { getBaseClasses, getSelectClasses, getOptionClasses } = ProductSortingStyleManager;

  export let options: NonNullable<IProductSortingProps['options']> = [];
  export let value: IProductSortingProps['value'] = '';
  export let className: IProductSortingProps['class'] = '';
  export let children: IProductSortingProps['children'] = undefined;
  export let oninput: IProductSortingProps['oninput'] = undefined;
  export let onchange: IProductSortingProps['onchange'] = undefined;

  const handleChange = (event: Event) => {
    onchange?.(event);
  };

  const handleInput = (event: Event) => {
    oninput?.(event);
  };
</script>

<div class={getBaseClasses(className ?? '')}>
  <select class={getSelectClasses()} value={value} on:change={handleChange} on:input={handleInput}>
    {#each options as option (option.value)}
      <option class={getOptionClasses()} value={option.value}>
        {option.label}
      </option>
    {/each}
  </select>

  {#if children}
    {@render children()}
  {/if}
</div>
