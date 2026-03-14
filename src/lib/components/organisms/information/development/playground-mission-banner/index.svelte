<script lang="ts">
  import { Icon as BaseIcon } from '$stylist/components/atoms';
const Sparkles = 'sparkles';

  import type { HTMLAttributes } from 'svelte/elements';

  type Props = {
    badgeText?: string;
    title?: string;
    description?: string;
    primaryLabel?: string;
    primaryHref?: string;
    secondaryLabel?: string;
    secondaryHref?: string;
    class?: string;
  } & HTMLAttributes<HTMLElement>;

  let {
    badgeText = 'Our Mission',
    title = 'Building the Future of\nComponent Libraries',
    description = "To create the world's largest library of visual components for Svelte 5 developers. Every release expands this AI-curated collection, enabling teams to build consistent user interfaces faster with components designed by collective intelligence.",
    primaryLabel = 'Explore Components',
    primaryHref = '/components',
    secondaryLabel = 'Try Playground',
    secondaryHref = '/playground',
    class: className = '',
    ...restProps
  }: Props = $props();

  const titleLines = $derived(title.split('n'));
</script>

<section class={`py-24 bg-gradient-to-br from-orange-600 via-red-600 to-purple-600 text-white ${className}`} {...restProps}>
  <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <div class="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur rounded-full mb-8">
      <BaseIcon name={Sparkles} class="w-5 h-5" />
      <span class="text-sm font-bold">{badgeText}</span>
    </div>

    <h2 class="text-5xl md:text-6xl font-black mb-8 leading-tight">
      {#each titleLines as line, index}
        {line}{#if index < titleLines.length - 1}<br />{/if}
      {/each}
    </h2>

    <p class="text-2xl mb-12 leading-relaxed opacity-[var(--opacity-90)]">
      {description}
    </p>

    <div class="flex flex-wrap gap-6 justify-center">
      <a
        href={primaryHref}
        class="px-10 py-5 bg-white text-gray-900 font-black text-xl rounded-2xl hover:shadow-2xl hover:scale-105 transition-all"
      >
        {primaryLabel}
      </a>
      <a
        href={secondaryHref}
        class="px-10 py-5 bg-transparent border-4 border-white text-white font-black text-xl rounded-2xl hover:bg-white hover:text-gray-900 hover:shadow-2xl hover:scale-105 transition-all"
      >
        {secondaryLabel}
      </a>
    </div>
  </div>
</section>




