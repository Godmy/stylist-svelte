<script lang="ts">
	import type { InformationHTMLAttributes } from '$stylist/information/type/struct/information-html-attributes';
	import createTeamAvatarStackState from '$stylist/media/function/state/team-avatar-stack/index.svelte';
	import type { TeamAvatarStackProps } from '$stylist/media/type/struct/team-avatar-stack/teamavatarstack-props';
	import BaseIcon from '$stylist/media/component/atom/icon/index.svelte';
	const Users = 'users';
	const User = 'user';

	let props: TeamAvatarStackProps & InformationHTMLAttributes<HTMLDivElement> = $props();
	const state = createTeamAvatarStackState(props);
</script>

<div class={state.hostClasses} {...state.restProps}>
	<!-- Render visible avatars in a stack -->
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
						class={`rounded-full border-2 border-[var(--color-background-primary)] ${state.sizeClasses}`}
					/>
				{:else}
					<div
						class={`flex items-center justify-center rounded-full border-2 border-[var(--color-background-primary)] font-medium text-[var(--color-text-inverse)] ${state.sizeClasses} bg-[var(--color-background-tertiary)] text-[var(--color-text-primary)]`}
					>
						{member.name.charAt(0).toUpperCase()}
					</div>
				{/if}

				{#if state.showStatus && member.status}
					<div
						class={`absolute right-0 bottom-0 rounded-full border-2 border-[var(--color-background-primary)] ${state.statusSize} ${state.getStatusColor(member.status)}`}
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

	<!-- Overflow indicator -->
	{#if state.overflowCount > 0}
		<div
			class={`tas-overflow ${state.stackDirection === 'horizontal' ? 'tas-item--h' : 'tas-item--v'} ${state.sizeClasses}`}
		>
			+{state.overflowCount}
			<BaseIcon
				name={Users}
				class="tas-overflow-icon"
				style={`width: ${state.size === 'sm' ? '0.75rem' : state.size === 'md' ? '1rem' : '1.25rem'}; height: ${state.size === 'sm' ? '0.75rem' : state.size === 'md' ? '1rem' : '1.25rem'}`}
			/>
		</div>
	{/if}
</div>
