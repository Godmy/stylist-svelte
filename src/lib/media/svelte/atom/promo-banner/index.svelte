<script lang="ts">
  import { createPromoBannerState, type PromoBannerProps } from '$stylist/media/function/state/promo-banner';

  let props: PromoBannerProps = $props();
  const state = createPromoBannerState(props);
</script>

<div class={state.hostClasses}>
  <div class="md:w-2/3 mb-4 md:mb-0 md:pr-6">
    <h2 class="text-xl font-bold mb-2">{state.title}</h2>
    <p class="mb-4">{state.description}</p>
    <button
      onclick={state.onCtaClick}
      class="px-4 py-2 bg-[var(--color-primary-500)] text-[var(--color-text-inverse)] rounded hover:bg-[var(--color-primary-600)]"
    >
      {state.cta}
    </button>
  </div>
  {#if state.image}
    <div class="md:w-1/3 flex justify-center">
      <img src={state.image} alt={state.title} class="max-h-32 object-contain" />
    </div>
  {/if}
</div>
