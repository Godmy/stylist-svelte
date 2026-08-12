<script lang="ts">
	import type { RecipeCtaBanner } from '$stylist/marketing/interface/recipe/cta-banner';
	import createCtaBannerState from './state.svelte';

	let props: RecipeCtaBanner = $props();
	const state = createCtaBannerState(props);
</script>

<section
	class="cta-banner"
	role="banner"
	aria-label={`CTA Banner: ${state.title}`}
	{...state.restProps}
>
	{#if state.backgroundVariant === 'image' && state.backgroundImage}
		<div
			class="cta-banner__background"
			style={`background-image: url('${state.backgroundImage}');`}
			aria-hidden="true"
		></div>
	{:else}
		<div class="cta-banner__background" aria-hidden="true"></div>
	{/if}

	<div class="cta-banner__content">
		<h2 class="cta-banner__title" aria-label={state.title}>{state.title}</h2>

		{#if state.description}
			<p class="cta-banner__description" aria-label={state.description}>{state.description}</p>
		{/if}

		{#if state.buttons.length > 0}
			<div class="cta-banner__buttons-container">
				{#each state.buttons as button}
					<button
						class="cta-banner__button"
						data-TODO="was state.ButtonClasses(...) — add data-attr"
						onclick={() => button.onClick?.()}
						type="button"
						aria-label={button.label}
					>
						{button.label}
					</button>
				{/each}
			</div>
		{/if}
	</div>
</section>

<style>
	.cta-banner {
		position: relative;
		padding-top: 4rem;
		padding-bottom: 4rem;
		overflow: hidden;
	}

	.cta-banner__background {
		position: absolute;
		inset: 0;
		background-color: var(--color-background-secondary);
	}

	.cta-banner__content {
		position: relative;
		margin-left: auto;
		margin-right: auto;
		padding-left: 1rem;
		padding-right: 1rem;
		text-align: center;
		max-width: 48rem;
	}

	.cta-banner__title {
		font-size: 1.875rem;
		line-height: 2.25rem;
		font-weight: 700;
		color: var(--color-text-inverse);
		margin-bottom: 1rem;
	}
	@media (min-width: 768px) {
		.cta-banner__title {
			font-size: 2.25rem;
			line-height: 2.5rem;
		}
	}

	.cta-banner__description {
		font-size: 1.25rem;
		line-height: 1.75rem;
		color: var(--color-primary-100);
		margin-bottom: 2rem;
	}

	.cta-banner__buttons-container {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 1rem;
	}

	.cta-banner__button {
		padding-left: 1.5rem;
		padding-right: 1.5rem;
		padding-top: 0.75rem;
		padding-bottom: 0.75rem;
		border-radius: 0.5rem;
		font-weight: 500;
		transition-property: color, background-color, border-color;
		transition-duration: 150ms;
	}
	.cta-banner__button:focus {
		outline: 2px solid transparent;
		outline-offset: 2px;
		box-shadow: 0 0 0 2px rgb(59 130 246 / 0.5);
	}
</style>
