<script lang="ts">
  import { onMount } from 'svelte';
  import type { HTMLAttributes } from 'svelte/elements';

  type ComponentStats = {
    totalComponents: number;
    atoms: number;
    molecules: number;
    organisms: number;
  };

  type Props = {
    stats: ComponentStats;
    sectionId?: string;
    animateOnVisible?: boolean;
    durationMs?: number;
    steps?: number;
    class?: string;
  } & HTMLAttributes<HTMLDivElement>;

  let {
    stats,
    sectionId = 'stats-section',
    animateOnVisible = true,
    durationMs = 2000,
    steps = 60,
    class: className = '',
    ...restProps
  }: Props = $props();

  let animatedStats = $state<ComponentStats>({ totalComponents: 0, atoms: 0, molecules: 0, organisms: 0 });
  let animationStarted = $state(false);

  function animateStats() {
    const safeSteps = Math.max(1, steps);
    const stepDuration = Math.max(1, Math.floor(durationMs / safeSteps));
    let currentStep = 0;

    const interval = setInterval(() => {
      const progress = currentStep / safeSteps;
      const easeProgress = 1 - Math.pow(1 - progress, 3);

      animatedStats = {
        totalComponents: Math.floor(stats.totalComponents * easeProgress),
        atoms: Math.floor(stats.atoms * easeProgress),
        molecules: Math.floor(stats.molecules * easeProgress),
        organisms: Math.floor(stats.organisms * easeProgress)
      };

      currentStep += 1;

      if (currentStep > safeSteps) {
        clearInterval(interval);
        animatedStats = stats;
      }
    }, stepDuration);
  }

  onMount(() => {
    if (!animateOnVisible) {
      animationStarted = true;
      animatedStats = stats;
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting && !animationStarted) {
          animationStarted = true;
          animateStats();
          observer.disconnect();
          break;
        }
      }
    });

    const statsElement = document.getElementById(sectionId);
    if (statsElement) {
      observer.observe(statsElement);
    }

    return () => observer.disconnect();
  });
</script>

<div id={sectionId} class={`slide-up mb-20 ${className}`} style="animation-delay: 0.7s" {...restProps}>
  <div class="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
    <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl p-8 border-2 border-orange-300 dark:border-orange-700 hover:border-orange-500 dark:hover:border-orange-400 hover:scale-105 hover:-translate-y-1 transition-all cursor-pointer">
      <div class="text-5xl font-black text-orange-600 dark:text-orange-400 mb-2">
        {animatedStats.totalComponents}
      </div>
      <div class="text-sm font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wide">
        Components
      </div>
    </div>

    <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl p-8 border-2 border-blue-300 dark:border-blue-700 hover:border-blue-500 dark:hover:border-blue-400 hover:scale-105 hover:-translate-y-1 transition-all cursor-pointer">
      <div class="text-5xl font-black text-blue-600 dark:text-blue-400 mb-2">
        {animatedStats.atoms}
      </div>
      <div class="text-sm font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wide">
        Atoms
      </div>
    </div>

    <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl p-8 border-2 border-purple-300 dark:border-purple-700 hover:border-purple-500 dark:hover:border-purple-400 hover:scale-105 hover:-translate-y-1 transition-all cursor-pointer">
      <div class="text-5xl font-black text-purple-600 dark:text-purple-400 mb-2">
        {animatedStats.molecules}
      </div>
      <div class="text-sm font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wide">
        Molecules
      </div>
    </div>

    <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl p-8 border-2 border-green-300 dark:border-green-700 hover:border-green-500 dark:hover:border-green-400 hover:scale-105 hover:-translate-y-1 transition-all cursor-pointer">
      <div class="text-5xl font-black text-green-600 dark:text-green-400 mb-2">
        {animatedStats.organisms}
      </div>
      <div class="text-sm font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wide">
        Organisms
      </div>
    </div>
  </div>
</div>


