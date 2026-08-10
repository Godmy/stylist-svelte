<script lang="ts">
	import type { RecipeDataDisplayCard as DataDisplayCardProps } from '$stylist/commerce/interface/recipe/data-display-card';
	import createDataDisplayCardState from './state.svelte';

	let props: DataDisplayCardProps = $props();
	const state = createDataDisplayCardState(props);
</script>

<div class="data-display-card" {...state.restProps}>
	{#if props.image}
		<img src={props.image} alt={props.title || 'Card image'} class="data-display-card__image" />
	{/if}

	<div class="data-display-card__body">
		{#if props.title || props.subtitle}
			<div class="data-display-card__header">
				{#if props.title}
					<h3 class="data-display-card__title">{props.title}</h3>
				{/if}
				{#if props.subtitle}
					<p class="data-display-card__subtitle">{props.subtitle}</p>
				{/if}
			</div>
		{/if}

		{#if props.description}
			<div class="data-display-card__description-container">
				<p class="data-display-card__description">{props.description}</p>
			</div>
		{/if}

		{#if props.actions}
			<div class="data-display-card__actions">
				{@render props.actions()}
			</div>
		{/if}
	</div>

	{#if props.footer}
		<div class="data-display-card__footer">
			{@render props.footer()}
		</div>
	{/if}
</div>

<style>
	.data-display-card {
		border-radius: 0.75rem;
		box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
		overflow: hidden;
		border-width: 1px;
		border-style: solid;
		border-color: var(--color-border-primary);
		background-color: var(--color-background-primary);
	}

	.data-display-card__image {
		width: 100%;
		height: auto;
	}

	.data-display-card__body {
		padding: 1.5rem;
	}

	.data-display-card__header {
		margin-bottom: 1rem;
	}

	.data-display-card__title {
		font-size: 1.25rem;
		line-height: 1.75rem;
		font-weight: 700;
		color: var(--color-text-primary);
	}

	.data-display-card__subtitle {
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: var(--color-text-secondary);
	}

	.data-display-card__description-container {
		margin-bottom: 1rem;
	}

	.data-display-card__description {
		color: var(--color-text-primary);
	}

	.data-display-card__actions {
		margin-top: 1rem;
	}

	.data-display-card__footer {
		padding-left: 1.5rem;
		padding-right: 1.5rem;
		padding-top: 0.75rem;
		padding-bottom: 0.75rem;
		background-color: var(--color-background-secondary);
		border-top-width: 1px;
		border-style: solid;
		border-color: var(--color-border-primary);
	}
</style>
