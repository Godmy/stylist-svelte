<script lang="ts">
	import type { RecipePostCard } from '$stylist/social/interface/recipe/post-card';
	import createPostCardState from './state.svelte';

	let props: RecipePostCard = $props();
	const state = createPostCardState(props);
</script>

<div class="post-card">
	{#if props.image}
		<img src={props.image} alt={props.title} class="post-card__image" />
	{/if}
	<div class="post-card__body">
		<div class="post-card__header">
			<h3 class="post-card__title">{props.title ?? ''}</h3>
			{#if props.date}
				<span class="post-card__date">{props.date}</span>
			{/if}
		</div>
		{#if props.subtitle}
			<p class="post-card__subtitle">{props.subtitle}</p>
		{/if}
		{#if props.excerpt}
			<p class="post-card__excerpt">{props.excerpt}</p>
		{/if}
		<div class="post-card__meta">
			{#if props.author}
				<span class="post-card__author">By {props.author}</span>
			{/if}
			{#if (props.tags ?? []).length > 0}
				<div class="post-card__tags">
					{#each props.tags ?? [] as tag}
						<span class="post-card__tag">{tag}</span>
					{/each}
				</div>
			{/if}
		</div>
		<div class="post-card__actions">
			{#each props.actions ?? [] as action}
				<button onclick={action.onClick} class="post-card__action-button">
					{action.label}
				</button>
			{/each}
		</div>
	</div>
</div>

<style>
	.post-card {
		border-radius: 0.75rem;
		box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
		overflow: hidden;
		border-width: 1px;
		border-style: solid;
		border-color: var(--color-border-primary);
		background-color: var(--color-background-primary);
	}

	.post-card__image {
		width: 100%;
		height: 12rem;
		object-fit: cover;
	}

	.post-card__body {
		padding: 1.5rem;
	}

	.post-card__header {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		margin-bottom: 0.5rem;
	}

	.post-card__title {
		font-size: 1.25rem;
		line-height: 1.75rem;
		font-weight: 700;
	}

	.post-card__date {
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: var(--color-text-secondary);
	}

	.post-card__subtitle {
		color: var(--color-text-secondary);
		margin-bottom: 0.75rem;
	}

	.post-card__excerpt {
		color: var(--color-text-primary);
		margin-bottom: 1rem;
	}

	.post-card__meta {
		display: flex;
		align-items: center;
		margin-bottom: 1rem;
	}

	.post-card__author {
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: var(--color-text-secondary);
	}

	.post-card__tags {
		margin-left: auto;
		display: flex;
	}
	.post-card__tags > * + * {
		margin-left: 0.25rem;
	}

	.post-card__tag {
		font-size: 0.75rem;
		line-height: 1rem;
		background-color: var(--color-background-secondary);
		color: var(--color-text-primary);
		padding-left: 0.5rem;
		padding-right: 0.5rem;
		padding-top: 0.25rem;
		padding-bottom: 0.25rem;
		border-radius: 0.25rem;
	}

	.post-card__actions {
		display: flex;
	}
	.post-card__actions > * + * {
		margin-left: 0.5rem;
	}

	.post-card__action-button {
		padding-left: 0.75rem;
		padding-right: 0.75rem;
		padding-top: 0.25rem;
		padding-bottom: 0.25rem;
		background-color: var(--color-primary-500);
		color: var(--color-text-inverse);
		font-size: 0.875rem;
		line-height: 1.25rem;
		border-radius: 0.25rem;
	}
	.post-card__action-button:hover {
		background-color: var(--color-primary-600);
	}
</style>
