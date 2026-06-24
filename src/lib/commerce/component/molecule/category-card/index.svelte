<script lang="ts">
	import type { RecipeCategoryCard as ICategoryCardProps } from '$stylist/commerce/interface/recipe/category-card';
	import Icon from '$stylist/svg/component/atom/icon/index.svelte';
	import createCategoryCardState from '$stylist/commerce/function/state/category-card/index.svelte';

	let props: ICategoryCardProps = $props();
	const state = createCategoryCardState(props);
</script>

<a href={props.link} class={state.classes} aria-label={state.ariaLabel}>
	<div class="category-card__link-wrapper">
		<div class="category-card__header">
			<div class="category-card__icon-container">
				<Icon name={props.icon} container="circle" containerSize="md" variant="primary" />
			</div>
			<div class="category-card__content-container">
				<h3 class="category-card__title">
					{props.title}
					<span class="category-card__count-badge">{props.count}</span>
				</h3>
			</div>
		</div>

		<p class="category-card__description">{props.description}</p>

		{#if (props.examples ?? []).length > 0}
			<div class="category-card__examples-container">
				<h4 class="category-card__examples-title">Examples:</h4>
				<div class="category-card__examples-list">
					{#each props.examples ?? [] as example}
						<span class="category-card__example-item">{example}</span>
					{/each}
				</div>
			</div>
		{/if}
	</div>
</a>

<style>
	.category-card__base {
		cursor: pointer;
		overflow: hidden;
		transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
		border-radius: 0.5rem;
		border-width: 1px;
		border-style: solid;
		border-color: var(--color-border-primary);
		background-color: var(--color-background-primary);
		box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
	}
	.category-card__base:hover {
		border-color: var(--color-primary-300);
		box-shadow:
			0 4px 6px -1px rgb(0 0 0 / 0.1),
			0 2px 4px -2px rgb(0 0 0 / 0.1);
	}

	.category-card__link-wrapper {
		display: block;
		height: 100%;
		padding: 1.5rem;
	}

	.category-card__header {
		margin-bottom: 1rem;
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
	}

	.category-card__icon-container {
		margin-right: 1rem;
	}

	.category-card__content-container {
		min-width: 0;
		flex: 1 1 0%;
	}

	.category-card__title {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		font-size: 1.125rem;
		line-height: 1.75rem;
		font-weight: 700;
		color: var(--color-text-primary);
	}

	.category-card__count-badge {
		margin-left: 0.5rem;
		display: inline-flex;
		align-items: center;
		border-radius: 9999px;
		background-color: var(--color-primary-100);
		padding-left: 0.625rem;
		padding-right: 0.625rem;
		padding-top: 0.125rem;
		padding-bottom: 0.125rem;
		font-size: 0.75rem;
		line-height: 1rem;
		font-weight: 500;
		color: var(--color-primary-800);
	}

	.category-card__description {
		margin-bottom: 0.75rem;
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: var(--color-text-secondary);
	}

	.category-card__examples-container {
		margin-top: 0.75rem;
	}

	.category-card__examples-title {
		margin-bottom: 0.25rem;
		font-size: 0.75rem;
		line-height: 1rem;
		font-weight: 600;
		color: var(--color-text-tertiary);
	}

	.category-card__examples-list {
		display: flex;
		flex-wrap: wrap;
		gap: 0.25rem;
	}

	.category-card__example-item {
		border-radius: 0.25rem;
		background-color: var(--color-background-secondary);
		padding-left: 0.5rem;
		padding-right: 0.5rem;
		padding-top: 0.25rem;
		padding-bottom: 0.25rem;
		font-size: 0.75rem;
		line-height: 1rem;
		color: var(--color-text-secondary);
	}
</style>
