<script lang="ts">
  import type { AtomicPrinciplesShowcaseProps } from '$stylist/development/type/struct/atomic-principles-showcase-props';
  import { createAtomicPrinciplesShowcaseState } from '$stylist/development/function/state/atomic-principles-showcase';
  import { Icon as BaseIcon } from '$stylist/media';

  let { ...props }: AtomicPrinciplesShowcaseProps = $props();
  const state = createAtomicPrinciplesShowcaseState(props);
</script>

<style>
  @keyframes float {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    50% { transform: translateY(-20px) rotate(5deg); }
  }
  .float-animation {
    animation: float var(--duration-s6) var(--animation-ease-in-out) infinite;
  }
</style>

<section class={state.sectionClass} {...state.restProps}>
  <div class={state.innerContainerClass}>
    <div class={state.textCenterClass}>
      <div class={state.badgeClass}>
        <BaseIcon name={state.GitBranch} class={state.badgeIconClass} />
        <span class={state.badgeTextClass}>{state.badgeText}</span>
      </div>
      <h2 class={state.titleClass}>
        {state.title}
      </h2>
      <p class={state.descriptionClass}>
        {state.description}
      </p>
    </div>

    <div class={state.gridClass}>
      <div class="group bg-white dark:bg-gray-800 rounded-3xl shadow-lg hover:shadow-2xl p-10 border-2 border-blue-300 dark:border-blue-700 hover:border-blue-500 dark:hover:border-blue-400 transition-all hover:scale-105 hover:-translate-y-2">
        <div class="w-24 h-24 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-8 float-animation shadow-lg">
          <BaseIcon name={state.Code} class="w-12 h-12 text-white" />
        </div>
        <h3 class="text-3xl font-black text-gray-900 dark:text-white mb-4">
          Atoms
        </h3>
        <p class="text-gray-600 dark:text-gray-400 mb-6 min-h-[60px]">
          Basic building blocks - buttons, inputs, labels, icons
        </p>
        <div class="text-5xl font-black text-blue-600 dark:text-blue-400">
          {state.stats?.atoms ?? 0}
        </div>
        <p class="text-sm text-gray-500 dark:text-gray-400 mt-2 font-semibold">components</p>
      </div>

      <div class="group bg-white dark:bg-gray-800 rounded-3xl shadow-lg hover:shadow-2xl p-10 border-2 border-purple-300 dark:border-purple-700 hover:border-purple-500 dark:hover:border-purple-400 transition-all hover:scale-105 hover:-translate-y-2" style="animation-delay: 0.1s">
        <div class="w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-8 float-animation shadow-lg" style="animation-delay: 1s">
          <BaseIcon name={state.Layers} class="w-12 h-12 text-white" />
        </div>
        <h3 class="text-3xl font-black text-gray-900 dark:text-white mb-4">
          Molecules
        </h3>
        <p class="text-gray-600 dark:text-gray-400 mb-6 min-h-[60px]">
          Combined atoms - search bars, cards, form fields
        </p>
        <div class="text-5xl font-black text-purple-600 dark:text-purple-400">
          {state.stats?.molecules ?? 0}
        </div>
        <p class="text-sm text-gray-500 dark:text-gray-400 mt-2 font-semibold">components</p>
      </div>

      <div class="group bg-white dark:bg-gray-800 rounded-3xl shadow-lg hover:shadow-2xl p-10 border-2 border-green-300 dark:border-green-700 hover:border-green-500 dark:hover:border-green-400 transition-all hover:scale-105 hover:-translate-y-2" style="animation-delay: 0.2s">
        <div class="w-24 h-24 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-8 float-animation shadow-lg" style="animation-delay: 2s">
          <BaseIcon name={state.Package} class="w-12 h-12 text-white" />
        </div>
        <h3 class="text-3xl font-black text-gray-900 dark:text-white mb-4">
          Organisms
        </h3>
        <p class="text-gray-600 dark:text-gray-400 mb-6 min-h-[60px]">
          Complex components - headers, forms, modals
        </p>
        <div class="text-5xl font-black text-green-600 dark:text-green-400">
          {state.stats?.organisms ?? 0}
        </div>
        <p class="text-sm text-gray-500 dark:text-gray-400 mt-2 font-semibold">components</p>
      </div>
    </div>
  </div>
</section>
