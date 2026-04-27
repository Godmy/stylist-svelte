<script lang="ts">
  import type { ThemeGradientBackgroundRecipe } from '$stylist/layout/interface/recipe/gradient-background';
  import { GradientBackgroundStyleManager } from '$stylist/layout/class/style-manager/gradient-background';
  import { createGradientBackgroundState } from '$stylist/layout/function/state/gradient-background';

  let props: ThemeGradientBackgroundRecipe = $props();
  const state = createGradientBackgroundState(props);
</script>

<svelte:head>
  <style>{GradientBackgroundStyleManager.getStyleSheet()}</style>
</svelte:head>

<div class={state.containerClass} role="presentation" {...state.restProps}>
  <div
    class={state.gradientClass}
    style={state.inlineStyle}
    aria-hidden="true"
  ></div>

  {#if props.children}
    <div class={state.contentWrapperClass}>
      {#if props.children}{@render props.children()}{/if}
    </div>
  {/if}
</div>


