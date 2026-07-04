<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import type { SlotThemeBorder } from '$stylist/theme/interface/slot/theme-border';
	import type { SlotTypography } from '$stylist/theme/interface/slot/typography';
	import type { RecipeTeamAvatarStack } from '$stylist/media/interface/recipe/team-avatar-stack';
	import { createTeamAvatarStackState } from '$stylist/media/function/state/team-avatar-stack/index.svelte';
	import BaseIcon from '$stylist/svg/component/atom/icon/index.svelte';
	const Users = 'users';
	const User = 'user';

	let props: RecipeTeamAvatarStack & HTMLAttributes<HTMLDivElement> & SlotThemeBorder & SlotTypography = $props();
	const state = createTeamAvatarStackState(props);
</script>

<div class={state.hostClasses} {...state.restProps}>
	{#each state.visibleMembers as member, index}
		<div
			class={`tas-item ${state.stackDirection === 'vertical' ? 'tas-item--v' : 'tas-item--h'} ${state.avatarClass}`}
			style={`z-index: ${state.visibleMembers.length - index}`}
		>
			<div class="tas-avatar-wrap">
				{#if member.avatar}
					<img
						src={member.avatar}
						alt={member.name}
						class={`tas-avatar-img ${state.sizeClasses}`}
					/>
				{:else}
					<div class={`tas-avatar-initials ${state.sizeClasses}`}>
						{member.name.charAt(0).toUpperCase()}
					</div>
				{/if}

				{#if state.showStatus && member.status}
					<div
						class={`tas-status-dot ${state.statusSize} ${state.getStatusColor(member.status)}`}
					></div>
				{/if}
			</div>

			{#if state.showTooltip}
				<div class="tas-tooltip">
					{member.name}
					{#if member.role && member.role !== ''}
						<div class="tas-tooltip-line">{member.role}</div>
					{/if}
					{#if member.status}
						<div class="tas-tooltip-line">{member.status}</div>
					{/if}
				</div>
			{/if}
		</div>
	{/each}

	{#if state.overflowCount > 0}
		<div
			class={`tas-overflow ${state.stackDirection === 'horizontal' ? 'tas-item--h' : 'tas-item--v'} ${state.sizeClasses}`}
		>
			+{state.overflowCount}
			<BaseIcon
				name={Users}
				style={`width: ${state.size === 'sm' ? '0.75rem' : state.size === 'md' ? '1rem' : '1.25rem'}; height: ${state.size === 'sm' ? '0.75rem' : state.size === 'md' ? '1rem' : '1.25rem'}`}
			/>
		</div>
	{/if}
</div>

<style>
	.tas-item {
		position: relative;
	}
	.tas-item--h {
		margin-left: -0.5rem;
	}
	.tas-item--h:first-child {
		margin-left: 0;
	}
	.tas-item--v {
		margin-top: -0.5rem;
	}
	.tas-item--v:first-child {
		margin-top: 0;
	}
	.tas-avatar-wrap {
		position: relative;
	}
	.tas-avatar-img {
		border-radius: 9999px;
		border: 2px solid var(--color-background-primary);
	}
	.tas-avatar-initials {
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 9999px;
		border: 2px solid var(--color-background-primary);
		background-color: var(--color-background-tertiary);
		font-weight: 500;
		color: var(--color-text-primary);
	}
	.tas-status-dot {
		position: absolute;
		right: 0;
		bottom: 0;
		border-radius: 9999px;
		border: 2px solid var(--color-background-primary);
	}
	.tas-tooltip {
		position: absolute;
		bottom: 100%;
		left: 50%;
		transform: translateX(-50%);
		padding: 0.25rem 0.5rem;
		background-color: var(--color-neutral-900);
		color: var(--color-text-inverse);
		border-radius: 0.25rem;
		font-size: 0.75rem;
		white-space: nowrap;
		pointer-events: none;
		opacity: 0;
		transition: opacity 0.15s;
		z-index: 10;
	}
	.tas-item:hover .tas-tooltip {
		opacity: 1;
	}
	.tas-tooltip-line {
		font-size: 0.625rem;
		color: var(--color-neutral-400);
	}
	.tas-overflow {
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
</style>
