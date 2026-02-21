<script lang="ts">
  import { createColorPaletteState } from '$stylist/design-system/models/interaction/color-palette.svelte';
  import type { ColorPaletteProps } from '$stylist/design-system/props/interaction/color-palette';
  import type { HTMLAttributes } from 'svelte/elements';

  type Props = ColorPaletteProps & HTMLAttributes<HTMLDivElement>;
  let props: Props = $props();

  const state = createColorPaletteState(props);

  function handleColorClick(color: typeof state.colors[0]) {
    props.onValueInput?.(color);
    props.onValueChange?.(color);
  }

  const restProps = $derived(
    (() => {
      const { class: _class, ...rest } = props;
      return rest;
    })()
  );
</script>

<div class={state.containerClasses} {...restProps}>
  {#if state.title}
    <h3 class={state.headerClasses}>{state.title}</h3>
  {/if}

  <div class={state.gridClasses}>
    {#each state.colors as color}
      <button
        type="button"
        class={state.itemClasses}
        onclick={() => handleColorClick(color)}
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