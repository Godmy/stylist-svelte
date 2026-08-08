<script lang="ts">
	import type { RecipeAnnouncementBanner } from '$stylist/marketing/interface/recipe/announcement-banner';
	import { createAnnouncementBannerState } from '$stylist/marketing/function/state/announcement-banner/index.svelte';

	let props: RecipeAnnouncementBanner = $props();
	const state = createAnnouncementBannerState(props);
</script>

<div class={state.containerClasses} {...state.restProps}>
	<div class={state.flexClasses}>
		{#if props.icon}
			<img src={props.icon} alt="" class={state.iconClasses} />
		{/if}
		<div class={state.contentClasses}>
			<h3 class={state.titleClasses}>{props.title ?? ''}</h3>
			{#if props.description}
				<p class={state.descriptionClasses}>{props.description}</p>
			{/if}
			{#if props.children}
				<div class={state.childrenClasses}>
					{@render props.children()}
				</div>
			{/if}
		</div>
	</div>
</div>

<style>
	.announcement-banner__announcement-banner-container {
		border: 1px solid var(--color-border-primary);
		border-radius: 0.75rem;
		background-color: var(--color-background-secondary);
		padding: 1rem 1.25rem;
	}
	.announcement-banner__announcement-banner-flex-container {
		display: flex;
		align-items: flex-start;
		gap: 0.75rem;
	}
	.announcement-banner__announcement-banner-icon {
		width: 2rem;
		height: 2rem;
		border-radius: 0.5rem;
		object-fit: cover;
		flex-shrink: 0;
	}
	.announcement-banner__announcement-banner-content {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
		min-width: 0;
	}
	.announcement-banner__announcement-banner-title {
		margin: 0;
		font-size: 0.95rem;
		font-weight: 600;
		color: var(--color-text-primary);
	}
	.announcement-banner__announcement-banner-description {
		margin: 0;
		font-size: 0.85rem;
		color: var(--color-text-secondary);
	}
	.announcement-banner__announcement-banner-children-container {
		margin-top: 0.25rem;
	}
</style>
