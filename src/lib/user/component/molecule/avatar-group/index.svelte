<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import type { SlotThemeBorder } from '$stylist/theme/interface/slot/theme-border';
	import type { SlotTypography } from '$stylist/theme/interface/slot/typography';
	import type { RecipeAvatarGroup } from '$stylist/user/interface/recipe/avatar-group';
	import { createAvatarGroupState } from './state.svelte';

	let props: RecipeAvatarGroup & HTMLAttributes<HTMLDivElement> & SlotThemeBorder & SlotTypography = $props();
	const state = createAvatarGroupState(props);
</script>

<div class={state.hostClasses} {...state.restProps}>
	{#each state.visibleAvatars as avatar, index}
		{#if avatar.onClick}
			<button
				type="button"
				class={`ag-item ag-item--button ${state.itemDirectionClass} ${state.avatarClass}`}
				style={`z-index: ${state.visibleAvatars.length - index}`}
				onclick={avatar.onClick}
			>
				{#if avatar.src}
					<img src={avatar.src} alt={avatar.name} class={`ag-avatar-img ${state.sizeClasses}`} />
				{:else}
					<div class={`ag-avatar-initials ${state.sizeClasses} ${state.fontSizeClasses}`}>
						{avatar.name ? avatar.name.charAt(0).toUpperCase() : '?'}
					</div>
				{/if}

				{#if state.showStatus && avatar.status}
					<div
						class={`ag-status-dot ${state.statusSizeClasses} ${state.statusDotClass(avatar.status)}`}
					></div>
				{/if}

				{#if state.showTooltip}
					<div class={`ag-tooltip ${state.tooltipClass}`}>
						{avatar.name}
						{#if avatar.role}
							<div class="ag-tooltip-line">{avatar.role}</div>
						{/if}
					</div>
				{/if}
			</button>
		{:else}
			<div
				class={`ag-item ${state.itemDirectionClass} ${state.avatarClass}`}
				style={`z-index: ${state.visibleAvatars.length - index}`}
			>
				{#if avatar.src}
					<img src={avatar.src} alt={avatar.name} class={`ag-avatar-img ${state.sizeClasses}`} />
				{:else}
					<div class={`ag-avatar-initials ${state.sizeClasses} ${state.fontSizeClasses}`}>
						{avatar.name ? avatar.name.charAt(0).toUpperCase() : '?'}
					</div>
				{/if}

				{#if state.showStatus && avatar.status}
					<div
						class={`ag-status-dot ${state.statusSizeClasses} ${state.statusDotClass(avatar.status)}`}
					></div>
				{/if}

				{#if state.showTooltip}
					<div class={`ag-tooltip ${state.tooltipClass}`}>
						{avatar.name}
						{#if avatar.role}
							<div class="ag-tooltip-line">{avatar.role}</div>
						{/if}
					</div>
				{/if}
			</div>
		{/if}
	{/each}

	{#if state.overflowCount > 0}
		<div class={`ag-overflow ${state.itemDirectionClass} ${state.sizeClasses} ${state.overflowClass}`}>
			+{state.overflowCount}
		</div>
	{/if}
</div>

<style>
	.ag-host {
		display: flex;
		align-items: center;
	}
	.ag-host--vertical {
		flex-direction: column;
	}
	.ag-host--horizontal {
		flex-direction: row;
	}
	.ag-size--sm {
		width: 2rem;
		height: 2rem;
	}
	.ag-size--md {
		width: 2.5rem;
		height: 2.5rem;
	}
	.ag-size--lg {
		width: 3rem;
		height: 3rem;
	}
	.ag-font-size--sm {
		font-size: 0.75rem;
	}
	.ag-font-size--md {
		font-size: 0.875rem;
	}
	.ag-font-size--lg {
		font-size: 1rem;
	}
	.ag-status-size--sm {
		width: 0.5rem;
		height: 0.5rem;
	}
	.ag-status-size--md {
		width: 0.625rem;
		height: 0.625rem;
	}
	.ag-status-size--lg {
		width: 0.75rem;
		height: 0.75rem;
	}
	.ag-item {
		position: relative;
	}
	.ag-item--button {
		margin: 0;
		padding: 0;
		border: 0;
		background: transparent;
		color: inherit;
		font: inherit;
		cursor: pointer;
	}
	.ag-item--button:focus-visible {
		outline: 2px solid var(--color-primary-500);
		outline-offset: 2px;
		border-radius: 9999px;
	}
	.ag-item--h {
		margin-left: -0.5rem;
	}
	.ag-item--h:first-child {
		margin-left: 0;
	}
	.ag-item--v {
		margin-top: -0.5rem;
	}
	.ag-item--v:first-child {
		margin-top: 0;
	}
	.ag-overflow {
		position: relative;
		display: flex;
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
		border-radius: 9999px;
		border: 2px solid var(--color-background-primary);
	}
	.ag-status-dot--online {
		background-color: var(--color-success-500);
	}
	.ag-status-dot--away {
		background-color: var(--color-warning-500, #eab308);
	}
	.ag-status-dot--busy {
		background-color: var(--color-danger-500);
	}
	.ag-status-dot--offline {
		background-color: var(--color-neutral-400);
	}
	.ag-tooltip {
		position: absolute;
		bottom: 100%;
		left: 50%;
		transform: translateX(-50%);
		margin-bottom: 0.4rem;
		padding: 0.25rem 0.5rem;
		border-radius: 0.25rem;
		background-color: var(--color-neutral-900);
		color: var(--color-text-inverse);
		font-size: 0.75rem;
		white-space: nowrap;
		text-align: center;
		pointer-events: none;
		opacity: 0;
		transition: opacity 0.15s;
		z-index: 10;
	}
	.ag-item:hover .ag-tooltip {
		opacity: 1;
	}
	.ag-tooltip-line {
		font-size: 0.625rem;
		color: var(--color-neutral-400);
	}
</style>
