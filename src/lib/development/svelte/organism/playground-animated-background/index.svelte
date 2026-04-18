<script lang="ts">
  import type { PlaygroundAnimatedBackgroundProps } from '$stylist/development/type/struct/playground-animated-background-props';
  import { createPlaygroundAnimatedBackgroundState } from '$stylist/development/function/state/playground-animated-background';

  let { ...props }: PlaygroundAnimatedBackgroundProps = $props();
  const state = createPlaygroundAnimatedBackgroundState(props);
</script>

<!-- AnimatedBackground.svelte -->
<div class={state.containerClass} aria-hidden="true">
  <!-- soft gradient wash -->
  <div class={state.washClass}></div>

  <!-- big blurred shapes -->
  <div class={state.shapeClass + " s1"}></div>
  <div class={state.shapeClass + " s2"}></div>
  <div class={state.shapeClass + " s3"}></div>

  <!-- glowing orbs -->
  <div class={state.orbClass + " o1"}></div>
  <div class={state.orbClass + " o2"}></div>
  <div class={state.orbClass + " o3"}></div>
  <div class={state.orbClass + " o4"}></div>
  <div class={state.orbClass + " o5"}></div>

  <!-- tiny drifting particles -->
  <div class={state.particlesContainerClass}>
    {#each state.particleIndices as i}
      <span class={state.particleClass + " p{i}"}></span>
    {/each}
  </div>

  <!-- OPTIONAL: subtle geometric overlay via SVG -->
  <svg class={state.geoOverlayClass} viewBox="0 0 100 100" preserveAspectRatio="none">
    <defs>
      <radialGradient id="g1" cx="30%" cy="20%" r="60%">
        <stop offset="0%" stop-color="var(--color-warning-500)" stop-opacity="0.12"/>
        <stop offset="100%" stop-color="var(--color-danger-500)" stop-opacity="0"/>
      </radialGradient>
      <radialGradient id="g2" cx="70%" cy="70%" r="65%">
        <stop offset="0%" stop-color="var(--color-error-500)" stop-opacity="0.10"/>
        <stop offset="100%" stop-color="var(--color-error-500)" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <circle cx="20" cy="15" r="18" fill="url(#g1)"/>
    <circle cx="78" cy="72" r="22" fill="url(#g2)"/>
  </svg>
</div>

<!-- Your content should sit above this -->
<div class={state.contentWrapperClass}>
  {#if state.children}
    {@render state.children()}
  {/if}
</div>
