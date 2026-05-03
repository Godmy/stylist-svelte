<script lang="ts">
  import type { ThemeAdvancedColorPickerRecipe } from '$stylist/color/interface/recipe/advanced-color-picker';
  import { createAdvancedColorPickerState } from '$stylist/color/function/state/advanced-color-picker';

  let props: ThemeAdvancedColorPickerRecipe = $props();
  const state = createAdvancedColorPickerState(props);
</script>

<div class={state.rootClass} {...state.restProps}>
  <button type="button" class={state.triggerClass} onclick={state.toggleOpen} disabled={props.disabled ?? false}>
    <div class={state.previewClass} style={`background-color: ${state.internalValue}`}></div>
    {#if props.showInput ?? true}
      <input
        type="text"
        bind:value={state.internalValue}
        class={state.textInputClass}
        onblur={() => state.setColor(state.internalValue)}
      />
    {/if}
  </button>

  {#if state.isOpen && !(props.disabled ?? false)}
    <div class={state.panelClass}>
      {#if props.showPalette ?? true}
        <div class={state.paletteClass}>
          {#each state.palette as color}
            <button
              type="button"
              aria-label={`Select color ${color}`}
              class={state.paletteButtonClass}
              style={`background-color: ${color}`}
              onclick={() => state.setColor(color)}
            ></button>
          {/each}
        </div>
      {/if}
      <input
        type="color"
        bind:value={state.internalValue}
        oninput={state.handleInput}
        onchange={state.handleChange}
      />
      <button type="button" class={state.acceptButtonClass} onclick={() => state.setOpen(false)}>OK</button>
    </div>
  {/if}
</div>
