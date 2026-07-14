<script lang="ts">
	import type { RecipeAiResultCard as AiResultCardContract } from '$stylist/ai/interface/recipe/ai-result-card';
	import createAiResultCardState from '$stylist/ai/function/state/ai-result-card/index.svelte';

	let props: AiResultCardContract = $props();
	const state = createAiResultCardState(props);
</script>

<div class={state.containerClass}>
	<div class={state.contentWrapperClass}>
		{#if state.icon}
			<div class={state.iconContainerClass}>
				<img src={state.icon} alt="" class={state.iconClass} />
			</div>
		{/if}
		<div class={state.textContentWrapperClass}>
			{#if state.title}
				<h3 class={state.titleClass}>{state.title}</h3>
			{/if}
			{#if state.description}
				<p class={state.descriptionClass}>{state.description}</p>
			{/if}
			{#if state.children}
				<div>
					{#if state.children}{#if state.children}{@render state.children()}{/if}{/if}
				</div>
			{/if}
		</div>
	</div>
</div>

<style>
	:global(.ai-result-card) {
		background-image: var(--gradient-ocean);
		border-radius: 0.75rem;
		padding: var(--spacing-lg);
		border: 1px solid var(--color-primary-100);
	}

	:global(.ai-result-card__content) {
		display: flex;
		align-items: flex-start;
	}

	:global(.ai-result-card__icon) {
		margin-right: var(--spacing-md);
		margin-top: 0.25rem;
	}

	:global(.ai-result-card__icon-img) {
		width: 2rem;
		height: 2rem;
	}

	:global(.ai-result-card__text) {
		flex: 1;
	}

	:global(.ai-result-card__title) {
		font-size: 1.125rem;
		font-weight: var(--font-weight-semibold, 600);
		color: var(--color-text-primary);
		margin-bottom: var(--spacing-xs);
	}

	:global(.ai-result-card__description) {
		color: var(--color-text-secondary);
		margin-bottom: var(--spacing-md);
	}
</style>
