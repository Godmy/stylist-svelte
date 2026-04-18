<script lang="ts">
  import { Icon as BaseIcon } from '$stylist';
  import { createPlaygroundCtaButtonsState } from '$stylist/development/function/state/playground-cta-buttons';
  import type { PlaygroundCtaButtonsProps } from '$stylist/development/type/struct/playground-cta-buttons-props';
const Package = 'package';
const Layers = 'layers';
const ArrowRight = 'arrow-right';

  import type { InformationHTMLAttributes } from '$stylist/information/type/struct';

  let {
    totalComponents,
    ...restProps
  }: PlaygroundCtaButtonsProps = $props();
  const state = createPlaygroundCtaButtonsState({ totalComponents, ...restProps });
</script>

<div class="slide-up grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto {state.className}" style="animation-delay: 0.8s" {...restProps}>
  <a
    href={state.componentsHref}
    class="group relative bg-gradient-to-r from-orange-600 via-orange-500 to-red-600 rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-orange-500/50 p-8 transition-all duration-[var(--duration-300)] hover:scale-105 hover:-translate-y-1 overflow-hidden"
  >
    <div class="absolute inset-0 bg-gradient-to-br from-white/0 to-white/10 opacity-[var(--opacity-0)] group-hover:opacity-[var(--opacity-100)] transition-opacity"></div>
    <div class="relative flex items-center justify-between mb-4">
      <BaseIcon name={Package} class="w-12 h-12 text-white drop-shadow-lg" />
      <BaseIcon name={ArrowRight} class="w-8 h-8 text-white/70 group-hover:text-white group-hover:translate-x-3 transition-all" />
    </div>
    <h3 class="relative text-3xl font-black text-white mb-3">
      {state.componentsTitle}
    </h3>
    <p class="relative text-orange-50">
      {state.componentsDescriptionPrefix} {state.totalComponents} AI-generated production-ready components
    </p>
  </a>

  <a
    href={state.playgroundHref}
    class="group relative bg-gradient-to-br from-purple-600 via-purple-500 to-pink-600 rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-purple-500/50 p-8 transition-all duration-[var(--duration-300)] hover:scale-105 hover:-translate-y-1 overflow-hidden"
  >
    <div class="absolute inset-0 bg-gradient-to-br from-white/0 to-white/10 opacity-[var(--opacity-0)] group-hover:opacity-[var(--opacity-100)] transition-opacity"></div>
    <div class="relative flex items-center justify-between mb-4">
      <BaseIcon name={Layers} class="w-12 h-12 text-white drop-shadow-lg" />
      <BaseIcon name={ArrowRight} class="w-8 h-8 text-white/70 group-hover:text-white group-hover:translate-x-3 transition-all" />
    </div>
    <h3 class="relative text-3xl font-black text-white mb-3">
      {state.playgroundTitle}
    </h3>
    <p class="relative text-purple-50">
      {state.playgroundDescription}
    </p>
  </a>
</div>
