<script lang="ts">
  import { Icon as BaseIcon } from '$stylist/components/atoms';
const Package = 'package';
const Layers = 'layers';
const ArrowRight = 'arrow-right';

  import type { HTMLAttributes } from 'svelte/elements';

  type Props = {
    totalComponents: number;
    componentsHref?: string;
    playgroundHref?: string;
    componentsTitle?: string;
    componentsDescriptionPrefix?: string;
    playgroundTitle?: string;
    playgroundDescription?: string;
    class?: string;
  } & HTMLAttributes<HTMLDivElement>;

  let {
    totalComponents,
    componentsHref = '/components',
    playgroundHref = '/playground',
    componentsTitle = 'Browse Components',
    componentsDescriptionPrefix = 'Explore',
    playgroundTitle = 'Interactive Playground',
    playgroundDescription = 'Test components with live controls and code generation',
    class: className = '',
    ...restProps
  }: Props = $props();
</script>

<div class={`slide-up grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto ${className}`} style="animation-delay: 0.8s" {...restProps}>
  <a
    href={componentsHref}
    class="group relative bg-gradient-to-r from-orange-600 via-orange-500 to-red-600 rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-orange-500/50 p-8 transition-all duration-300 hover:scale-105 hover:-translate-y-1 overflow-hidden"
  >
    <div class="absolute inset-0 bg-gradient-to-br from-white/0 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
    <div class="relative flex items-center justify-between mb-4">
      <BaseIcon name={Package} class="w-12 h-12 text-white drop-shadow-lg" />
      <BaseIcon name={ArrowRight} class="w-8 h-8 text-white/70 group-hover:text-white group-hover:translate-x-3 transition-all" />
    </div>
    <h3 class="relative text-3xl font-black text-white mb-3">
      {componentsTitle}
    </h3>
    <p class="relative text-orange-50">
      {componentsDescriptionPrefix} {totalComponents} AI-generated production-ready components
    </p>
  </a>

  <a
    href={playgroundHref}
    class="group relative bg-gradient-to-br from-purple-600 via-purple-500 to-pink-600 rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-purple-500/50 p-8 transition-all duration-300 hover:scale-105 hover:-translate-y-1 overflow-hidden"
  >
    <div class="absolute inset-0 bg-gradient-to-br from-white/0 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
    <div class="relative flex items-center justify-between mb-4">
      <BaseIcon name={Layers} class="w-12 h-12 text-white drop-shadow-lg" />
      <BaseIcon name={ArrowRight} class="w-8 h-8 text-white/70 group-hover:text-white group-hover:translate-x-3 transition-all" />
    </div>
    <h3 class="relative text-3xl font-black text-white mb-3">
      {playgroundTitle}
    </h3>
    <p class="relative text-purple-50">
      {playgroundDescription}
    </p>
  </a>
</div>

