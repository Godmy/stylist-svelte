<script lang="ts">
	import { createPromoBannerState } from '$stylist/media/function/state/promo-banner';
	import type { PromoBannerProps } from '$stylist/media/interface/recipe/promo-banner-promo-banner-props';

	let props: PromoBannerProps = $props();
	const state = createPromoBannerState(props);
</script>

<div class={state.hostClasses}>
	<div class="mb-4 md:mb-0 md:w-2/3 md:pr-6">
		<h2 class="mb-2 text-xl font-bold">{state.title}</h2>
		<p class="mb-4">{state.description}</p>
		<button
			onclick={state.onCtaClick}
			class="rounded bg-[var(--color-primary-500)] px-4 py-2 text-[var(--color-text-inverse)] hover:bg-[var(--color-primary-600)]"
		>
			{state.cta}
		</button>
	</div>
	{#if state.image}
		<div class="flex justify-center md:w-1/3">
			<img src={state.image} alt={state.title} class="max-h-32 object-contain" />
		</div>
	{/if}
</div>
