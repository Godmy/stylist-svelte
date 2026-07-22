<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import type { SlotThemeBorder } from '$stylist/theme/interface/slot/theme-border';
	import type { SlotTypography } from '$stylist/theme/interface/slot/typography';
	import type { RecipeAvatar } from '$stylist/media/interface/recipe/avatar';
	import { createAvatarState } from '$stylist/media/function/state/avatar/index.svelte';

	let props: RecipeAvatar & HTMLAttributes<HTMLDivElement> & SlotThemeBorder & SlotTypography = $props();
	const state = createAvatarState(props);
</script>

<div {...state.restProps} class={state.avatarClasses}>
	{#if state.src}
		<img src={state.src} alt={state.alt || state.name || 'Avatar'} class={state.imageClasses} />
	{:else}
		<div class={state.fallbackClasses}>
			{state.initials}
		</div>
	{/if}

	{#if state.showStatus && state.status}
		<span class={state.statusIndicatorClasses}></span>
	{/if}
</div>

<style>
	.c-avatar {
		position: relative;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		border-radius: 9999px;
		overflow: hidden;
		background-color: var(--color-background-secondary);
		color: var(--color-text-primary);
	}
	.c-avatar--sm {
		width: 1.5rem;
		height: 1.5rem;
		font-size: 0.875rem;
	}
	.c-avatar--md {
		width: 2rem;
		height: 2rem;
		font-size: 1rem;
	}
	.c-avatar--lg {
		width: 2.5rem;
		height: 2.5rem;
		font-size: 1.125rem;
	}
	.c-avatar--xl {
		width: 3rem;
		height: 3rem;
		font-size: 1.25rem;
	}
	.c-avatar__image {
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: 9999px;
	}
	.c-avatar__fallback {
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.c-avatar__status {
		position: absolute;
		bottom: 0;
		right: 0;
		border-radius: 9999px;
		border: 2px solid var(--color-background-primary);
	}
	.c-avatar__status--online {
		background-color: var(--color-success-500, #10b981);
	}
	.c-avatar__status--away,
	.c-avatar__status--idle {
		background-color: var(--color-warning-500, #f59e0b);
	}
	.c-avatar__status--offline {
		background-color: var(--color-text-secondary);
	}
	.c-avatar__status--typing {
		background-color: var(--color-primary-500);
	}
	.c-avatar__status--sm {
		width: 0.5rem;
		height: 0.5rem;
	}
	.c-avatar__status--md {
		width: 0.625rem;
		height: 0.625rem;
	}
	.c-avatar__status--lg {
		width: 0.75rem;
		height: 0.75rem;
	}
	.c-avatar__status--xl {
		width: 0.875rem;
		height: 0.875rem;
	}
</style>
