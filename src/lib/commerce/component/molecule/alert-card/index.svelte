<script lang="ts">
	import { PresetAlertCard } from '$stylist/commerce/const/preset/alert-card';
	import type { RecipeAlertCard } from '$stylist/commerce/interface/recipe/alert-card';
	import { createAlertCardState } from './state.svelte';

	let props: RecipeAlertCard = $props();
	const state = createAlertCardState(PresetAlertCard, props);
</script>

<div class={`alert-card ${state.classes}`} {...state.attrs}>
	{#if props.icon}
		<div class="alert-card__icon-container" aria-hidden="true">
			<span class="alert-card__icon">{props.icon}</span>
		</div>
	{/if}

	<div class="alert-card__content">
		{#if props.title}
			<h3 class="alert-card__title">{props.title}</h3>
		{/if}

		{#if props.subtitle}
			<p class="alert-card__subtitle">{props.subtitle}</p>
		{/if}

		{#if props.children}
			<div class="alert-card__body">
				{@render props.children()}
			</div>
		{/if}

		{#if props.actions?.length}
			<div class="alert-card__actions-container">
				{#each props.actions as action}
					<button
						type="button"
						class="alert-card__action-button"
						disabled={state.disabled}
						onclick={action.onClick}
					>
						{action.label}
					</button>
				{/each}
			</div>
		{/if}
	</div>
</div>

<style>
	.alert-card {
		display: flex;
		align-items: flex-start;
		gap: var(--spacing-md);
		border-radius: 0.5rem;
		border-width: 1px;
		border-style: solid;
		border-color: var(--color-border-primary);
		background-color: var(--color-background-primary);
		padding: 1rem;
	}

	.alert-card__content {
		min-width: 0;
		flex: 1;
	}

	.alert-card__icon-container {
		display: flex;
		align-items: center;
	}

	.alert-card__icon {
		width: 2.5rem;
		height: 2.5rem;
	}

	.alert-card__title {
		font-size: 1.125rem;
		line-height: 1.75rem;
		font-weight: 600;
	}

	.alert-card__subtitle {
		margin-top: 0.25rem;
		color: var(--color-text-secondary);
	}

	.alert-card__body {
		margin-top: var(--spacing-sm);
	}

	.alert-card__actions-container {
		margin-top: var(--spacing-md);
		display: flex;
		flex-wrap: wrap;
		gap: var(--spacing-sm);
	}

	.alert-card__action-button {
		border-radius: 0.25rem;
		background-color: var(--color-primary-500);
		padding: 0.5rem 1rem;
		color: var(--color-text-inverse);
	}

	.alert-card__action-button:hover:not(:disabled) {
		background-color: var(--color-primary-600);
	}

	.alert-card__action-button:disabled {
		cursor: not-allowed;
		opacity: 0.6;
	}
</style>
