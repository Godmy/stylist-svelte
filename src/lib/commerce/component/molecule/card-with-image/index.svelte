<script lang="ts">
	import type { RecipeCardWithImage } from '$stylist/commerce/interface/recipe/card-with-image';
	import createCardWithImageState from './state.svelte';

	let props: RecipeCardWithImage = $props();
	const state = createCardWithImageState(props);
</script>

<div class="card-with-image" {...state.restProps}>
	{#if props.image}
		<img src={props.image} alt="" class="card-with-image__image" />
	{/if}

	<div class="card-with-image__body">
		{#if props.title || props.subtitle}
			<div class="card-with-image__header">
				{#if props.title}
					<h3 class="card-with-image__title">{props.title}</h3>
				{/if}
				{#if props.subtitle}
					<p class="card-with-image__subtitle">{props.subtitle}</p>
				{/if}
			</div>
		{/if}

		{#if props.description}
			<p class="card-with-image__description">{props.description}</p>
		{/if}

		{#if props.footer}
			<div class={props.footerClass}>
				{@render props.footer()}
			</div>
		{/if}

		{#if props.actions}
			<div class={props.actionsClass}>
				{@render props.actions()}
			</div>
		{/if}
	</div>
</div>

<style>
	.card-with-image {
		border-radius: 0.75rem;
		box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
		overflow: hidden;
		border-width: 1px;
		border-style: solid;
		border-color: var(--color-border-primary);
		background-color: var(--color-background-primary);
	}

	.card-with-image__image {
		height: 12rem;
		width: 100%;
		object-fit: cover;
	}

	.card-with-image__body {
		padding: 1.5rem;
	}

	.card-with-image__header {
		margin-bottom: 1rem;
	}

	.card-with-image__title {
		font-size: 1.125rem;
		line-height: 1.75rem;
		font-weight: 600;
		color: var(--color-text-primary);
	}

	.card-with-image__subtitle {
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: var(--color-text-secondary);
	}

	.card-with-image__description {
		color: var(--color-text-primary);
		margin-bottom: 1rem;
	}
</style>
