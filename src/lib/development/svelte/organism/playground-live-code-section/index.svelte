<script lang="ts">
  import { Icon as BaseIcon } from '$stylist';
  import { createPlaygroundLiveCodeSectionState } from '$stylist/development/function/state/playground-live-code-section';
  import type { Props } from '$stylist/development/type/struct/playground-live-code-section';
const Play = 'play';
const ArrowRight = 'arrow-right';

  let props: Props = $props();
  const state = createPlaygroundLiveCodeSectionState(props);
</script>

<section class={`py-24 bg-gray-900 ${state.className}`}>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-16">
      <div class="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 dark:bg-orange-900/30 rounded-full mb-4">
        <BaseIcon name={Play} class="w-5 h-5 text-orange-600" />
        <span class="text-sm font-bold text-orange-900 dark:text-orange-300">{state.badgeText}</span>
      </div>
      <h2 class="text-5xl font-black text-white mb-4">
        {state.title}
      </h2>
      <p class="text-xl text-gray-400 max-w-2xl mx-auto">
        {state.description}
      </p>
    </div>

    <div class="max-w-4xl mx-auto bg-gray-800 rounded-2xl shadow-2xl overflow-hidden border border-gray-700">
      {#if state.children}
        {@render state.children()}
      {:else}
        <pre class="m-0 p-6 text-sm text-gray-100 overflow-x-auto"><code>{state.code}</code></pre>
      {/if}
    </div>

    <div class="text-center mt-12">
      <a
        href={state.ctaHref}
        class="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 text-white font-bold text-lg rounded-xl hover:shadow-2xl hover:shadow-orange-500/50 transition-all hover:scale-105"
      >
        <BaseIcon name={Play} class="w-6 h-6" />
        {state.ctaText}
        <BaseIcon name={ArrowRight} class="w-6 h-6" />
      </a>
    </div>
  </div>
</section>
