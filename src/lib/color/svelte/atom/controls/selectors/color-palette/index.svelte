<script lang="ts">
  import { createColorPaletteState } from '$stylist/color/function/state/color-palette';
  import type { ThemeColorPaletteRecipe } from '$stylist/color/interface/recipe/color-palette';

  let props: ThemeColorPaletteRecipe = $props();

  const state = createColorPaletteState(props);
</script>

<div class={state.containerClasses} {...state.restProps}>
  {#if state.title}
    <h3 class={state.headerClasses}>{state.title}</h3>
  {/if}

  <div class={state.gridClasses}>
    {#each state.colors as color}
      <button
        type="button"
        class={state.itemClasses}
        onclick={() => state.handleColorClick(color)}
      >
        <div
          class={state.colorSwatchClasses}
          style={`background-color: ${color.value}`}
          title={`${color.name}: ${color.value}`}
        ></div>
        {#if state.showLabels}
          <div class={state.labelClasses}>
            {color.name}
          </div>
        {/if}
        {#if state.showValues}
          <div class={state.valueClasses}>
            {color.value}
          </div>
        {/if}
      </button>
    {/each}
  </div>
</div>
