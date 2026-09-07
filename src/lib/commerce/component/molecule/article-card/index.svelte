<script lang="ts">
	import type { RecipeArticleCard as ArticleCardProps } from '$stylist/commerce/interface/recipe/article-card';
	import createArticleCardState from './state.svelte';

	let props: ArticleCardProps = $props();
	const state = createArticleCardState(props);
</script>

<div class="article-card">
	{#if props.image}
		<img src={props.image} alt={props.title} class="article-card__image" />
	{/if}
	<div class="article-card__body">
		<h3 class="article-card__title">{props.title}</h3>
		{#if props.subtitle}
			<p class="article-card__subtitle">{props.subtitle}</p>
		{/if}
		<div class="article-card__actions">
			{#each props.actions ?? [] as action}
				<button onclick={action.onClick} class="article-card__action-button">
					{action.label}
				</button>
			{/each}
		</div>
	</div>
</div>

<style>
	.article-card {
		border-radius: 0.75rem;
		box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
		overflow: hidden;
		border-width: 1px;
		border-style: solid;
		border-color: var(--color-border-primary);
		background-color: var(--color-background-primary);
	}

	.article-card__image {
		width: 100%;
		height: 12rem;
		object-fit: cover;
	}

	.article-card__body {
		padding: 1.5rem;
	}

	.article-card__title {
		font-size: 1.25rem;
		line-height: 1.75rem;
		font-weight: 700;
		margin-bottom: 0.5rem;
	}

	.article-card__subtitle {
		color: var(--color-text-secondary);
		margin-bottom: 1rem;
	}

	.article-card__actions {
		display: flex;
	}
	.article-card__actions > * + * {
		margin-left: 0.5rem;
	}

	.article-card__action-button {
		padding-left: 1rem;
		padding-right: 1rem;
		padding-top: 0.5rem;
		padding-bottom: 0.5rem;
		background-color: var(--color-primary-500);
		color: var(--color-text-inverse);
		border-radius: 0.25rem;
	}
	.article-card__action-button:hover {
		background-color: var(--color-primary-600);
	}
</style>
