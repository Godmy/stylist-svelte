<script lang="ts">
	import type { RecipePromoBanner } from '$stylist/media/interface/recipe/promo-banner';
	import { createPromoBannerState } from '$stylist/media/function/state/promo-banner/index.svelte';

	let props: RecipePromoBanner = $props();
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
	.pb-host {
		display: flex;
		flex-direction: column;
		align-items: center;
		border: 1px solid;
		border-radius: 0.5rem;
		padding: 1.5rem;
	}
	@media (min-width: 768px) {
		.pb-host {
			flex-direction: row;
		}
	}
	.pb-host--primary {
		background-color: var(--color-primary-50);
		border-color: var(--color-primary-200);
		color: var(--color-primary-800);
	}
	.pb-host--secondary {
		background-color: var(--color-background-secondary);
		border-color: var(--color-border-primary);
		color: var(--color-text-primary);
	}
	.pb-host--success {
		background-color: var(--color-success-50, #ecfdf5);
		border-color: var(--color-success-200, #a7f3d0);
		color: var(--color-success-800, #065f46);
	}
	.pb-host--warning {
		background-color: var(--color-warning-50, #fffbeb);
		border-color: var(--color-warning-200, #fde68a);
		color: var(--color-warning-800, #92400e);
	}
	.pb-host--danger {
		background-color: var(--color-danger-50, #fef2f2);
		border-color: var(--color-danger-200, #fecaca);
		color: var(--color-danger-800, #991b1b);
	}
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
