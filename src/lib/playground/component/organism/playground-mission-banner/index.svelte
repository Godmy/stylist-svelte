<script lang="ts">
  import { Icon as BaseIcon } from '$stylist';
  import { createPlaygroundMissionBannerState } from '$stylist/playground/function/state/playground-mission-banner';
  import type { PlaygroundMissionBannerProps } from '$stylist/playground/type/struct/playground-mission-banner-props';
const Sparkles = 'sparkles';

  let props: PlaygroundMissionBannerProps = $props();
  const state = createPlaygroundMissionBannerState(props);
</script>

<section class={`py-24 bg-gradient-to-br from-orange-600 via-red-600 to-purple-600 text-white ${state.className}`}>
  <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <div class="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur rounded-full mb-8">
      <BaseIcon name={Sparkles} class="w-5 h-5" />
      <span class="text-sm font-bold">{state.badgeText}</span>
    </div>

    <h2 class="text-5xl md:text-6xl font-black mb-8 leading-tight">
      {#each state.titleLines as line, index}
        {line}{#if index < state.titleLines.length - 1}<br />{/if}
      {/each}
    </h2>

    <p class="text-2xl mb-12 leading-relaxed opacity-[var(--opacity-90)]">
      {state.description}
    </p>

    <div class="flex flex-wrap gap-6 justify-center">
      <a
        href={state.primaryHref}
        class="px-10 py-5 bg-white text-gray-900 font-black text-xl rounded-2xl hover:shadow-2xl hover:scale-105 transition-all"
      >
        {state.primaryLabel}
      </a>
      <a
        href={state.secondaryHref}
        class="px-10 py-5 bg-transparent border-4 border-white text-white font-black text-xl rounded-2xl hover:bg-white hover:text-gray-900 hover:shadow-2xl hover:scale-105 transition-all"
      >
        {state.secondaryLabel}
      </a>
    </div>
  </div>
</section>
