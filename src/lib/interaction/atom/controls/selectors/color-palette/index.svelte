<script lang="ts">
  import { createColorPaletteState } from '$stylist/interaction/state/color-palette';
  import type { ColorPaletteProps } from '$stylist/interaction/type/attribute/color-palette';
  import type { InteractionHTMLAttributes } from '$stylist/interaction/type/attribute/interaction';

  type Props = ColorPaletteProps & InteractionHTMLAttributes<HTMLDivElement>;
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

