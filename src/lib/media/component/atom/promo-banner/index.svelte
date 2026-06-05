<script lang="ts">
	import createPromoBannerState from '$stylist/media/function/state/promo-banner/index.svelte';
	import type { PromoBannerProps } from '$stylist/media/interface/recipe/promo-banner-promo-banner-props';

	let props: PromoBannerProps = $props();
	const state = createPromoBannerState(props);
</script>

<div class={state.hostClasses}>
	<div class="pb-content">
		<h2 class="pb-title">{state.title}</h2>
		<p class="pb-desc">{state.description}</p>
		<button onclick={state.onCtaClick} class="pb-cta">{state.cta}</button>
	</div>
	{#if state.image}
		<div class="pb-image-wrap">
			<img src={state.image} alt={state.title} class="pb-img" />
		</div>
	{/if}
</div>

<style>
	.pb-content {
		margin-bottom: 1rem;
	}

	@media (min-width: 768px) {
		.pb-content {
			margin-bottom: 0;
			width: 66.67%;
			padding-right: 1.5rem;
		}
	}

	.pb-title {
		margin-bottom: 0.5rem;
		font-size: 1.25rem;
		font-weight: 700;
	}
	.pb-desc {
		margin-bottom: 1rem;
	}

	.pb-cta {
		border-radius: 0.25rem;
		background-color: var(--color-primary-500);
		padding: 0.5rem 1rem;
		color: var(--color-text-inverse);
	}

	.pb-cta:hover {
		background-color: var(--color-primary-600);
	}

	.pb-image-wrap {
		display: flex;
		justify-content: center;
	}

	@media (min-width: 768px) {
		.pb-image-wrap {
			width: 33.33%;
		}
	}

	.pb-img {
		max-height: 8rem;
		object-fit: contain;
	}
</style>
