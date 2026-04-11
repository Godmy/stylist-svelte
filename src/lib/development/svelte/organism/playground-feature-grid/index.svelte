<script lang="ts">
  import { Icon as BaseIcon } from '$stylist';
  import { createPlaygroundFeatureGridState } from '$stylist/development/function/state/playground-feature-grid';
  import type { Props } from '$stylist/development/type/struct/playground-feature-grid';

  let props: Props = $props();
  const state = createPlaygroundFeatureGridState(props);
</script>

<section class={`py-24 bg-white dark:bg-gray-800 ${state.className}`}>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-16">
      <h2 class="text-5xl font-black text-gray-900 dark:text-white mb-4">
        {state.title}
      </h2>
      <p class="text-xl text-gray-600 dark:text-gray-400">
        {state.subtitle}
      </p>
    </div>

    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {#each state.features as feature}
        <div class={`bg-gradient-to-br ${feature.palette} rounded-2xl p-8 border-2`}>
          <div class={`w-16 h-16 ${feature.iconBg} rounded-xl flex items-center justify-center mb-6`}>
            <BaseIcon name={state.getIcon(feature.icon)} class="w-8 h-8 text-white" />
          </div>
          <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            {feature.title}
          </h3>
          <p class="text-gray-600 dark:text-gray-400">
            {feature.description}
          </p>
        </div>
      {/each}
    </div>
  </div>
</section>
