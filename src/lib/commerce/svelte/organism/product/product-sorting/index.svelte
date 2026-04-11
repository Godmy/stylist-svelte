<script lang="ts">
  import type { Props } from '$stylist/commerce/type/struct/product-sorting';
  import { createProductSortingState } from '$stylist/commerce/function/state/product-sorting';

  let props: Props = $props();
  const state = createProductSortingState(props);
</script>

<div class={state.baseClasses}>
  <select class={state.selectClasses} value={props.value} onchange={state.handleChange} oninput={state.handleInput}>
    {#each props.options as option (option.value)}
      <option class={state.getOptionClasses()} value={option.value}>
        {option.label}
      </option>
    {/each}
  </select>

  {#if props.children}
    {@render props.children()}
  {/if}
</div>




