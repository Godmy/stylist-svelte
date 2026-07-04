<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import type { SlotThemeBorder } from '$stylist/theme/interface/slot/theme-border';
	import type { SlotTypography } from '$stylist/theme/interface/slot/typography';
	import type { RecipeAvatarGroup } from '$stylist/media/interface/recipe/avatar-group';
	import { createAvatarGroupState } from '$stylist/media/function/state/avatar-group/index.svelte';

	let props: RecipeAvatarGroup & HTMLAttributes<HTMLDivElement> & SlotThemeBorder & SlotTypography = $props();
	const state = createAvatarGroupState(props);
</script>

<div class={state.hostClasses} {...state.restProps}>
	{#each state.visibleAvatars as avatar, index}
		<div
			class={`ag-item ${state.avatarClass}`}
			style={`z-index: ${state.visibleAvatars.length - index}`}
			onclick={() => avatar.onClick && avatar.onClick()}
			role="button"
			tabindex="0"
			onkeydown={(e) => (e.key === 'Enter' || e.key === ' ') && avatar.onClick && avatar.onClick()}
		>
			{#if avatar.src}
				<img src={avatar.src} alt={avatar.name} class={`ag-avatar-img ${state.sizeClasses}`} />
			{:else}
				<div class={`ag-avatar-initials ${state.sizeClasses} ${state.fontSizeClasses}`}>
					{avatar.name ? avatar.name.charAt(0).toUpperCase() : '?'}
				</div>
			{/if}

			{#if avatar.status}
				<div class={`ag-status-dot ag-status--${avatar.status ?? 'offline'}`}></div>
			{/if}
		</div>
	{/each}

	{#if state.overflowCount > 0}
		<div class={`ag-overflow ${state.overflowClass}`}>
			<div class="ag-overflow-count">
				+{state.overflowCount}
			</div>
		</div>
	{/if}
</div>

<style>
	.ag-item {
		position: relative;
		margin-left: -0.5rem;
	}
	.ag-item:first-child {
		margin-left: 0;
	}
	.ag-overflow {
		position: relative;
		margin-left: -0.5rem;
	}
	.ag-overflow-count {
		display: flex;
		width: 2rem;
		height: 2rem;
		align-items: center;
		justify-content: center;
		border-radius: 9999px;
		border: 2px solid var(--color-background-primary);
		background-color: var(--color-background-tertiary);
		font-size: 0.75rem;
		font-weight: 500;
		color: var(--color-text-primary);
	}
	.ag-avatar-img {
		border-radius: 9999px;
		border: 2px solid var(--color-background-primary);
		object-fit: cover;
	}
	.ag-avatar-initials {
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 9999px;
		border: 2px solid var(--color-background-primary);
		background-color: var(--color-background-tertiary);
		font-weight: 500;
		color: var(--color-text-primary);
	}
	.ag-status-dot {
		position: absolute;
		right: 0;
		bottom: 0;
		width: 0.75rem;
		height: 0.75rem;
		border-radius: 9999px;
		border: 2px solid var(--color-background-primary);
		background-color: var(--color-neutral-400);
	}
	.ag-status--online {
		background-color: var(--color-success-500);
	}
	.ag-status--away {
		background-color: #eab308;
	}
	.ag-status--busy {
		background-color: var(--color-danger-500);
	}
</style>
