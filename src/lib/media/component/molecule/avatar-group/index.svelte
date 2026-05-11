<script lang="ts">
	import type { InformationHTMLAttributes } from '$stylist/information/type/struct';
	import { createAvatarGroupState } from '$stylist/media/function/state/avatar-group';
	import type { AvatarGroupProps } from '$stylist/media/type/struct/avatar-group';

	let props: AvatarGroupProps & InformationHTMLAttributes<HTMLDivElement> = $props();
	const state = createAvatarGroupState(props);
</script>

<div class={state.hostClasses} {...state.restProps}>
	{#each state.visibleAvatars as avatar, index}
		<div
			class={`relative -ml-2 first:ml-0 ${state.avatarClass}`}
			style={`z-index: ${state.visibleAvatars.length - index}`}
			onclick={() => avatar.onClick && avatar.onClick()}
			role="button"
			tabindex="0"
			onkeydown={(e) => (e.key === 'Enter' || e.key === ' ') && avatar.onClick && avatar.onClick()}
		>
			{#if avatar.src}
				<img
					src={avatar.src}
					alt={avatar.name}
					class={`${state.sizeClasses} rounded-full border-2 border-[var(--color-background-primary)] object-cover`}
				/>
			{:else}
				<div
					class={`${state.sizeClasses} flex items-center justify-center rounded-full border-2 border-[var(--color-background-primary)] bg-[var(--color-background-tertiary)] ${state.fontSizeClasses} font-medium text-[var(--color-text-primary)]`}
				>
					{avatar.name ? avatar.name.charAt(0).toUpperCase() : '?'}
				</div>
			{/if}

			{#if avatar.status}
				<div
					class={`absolute right-0 bottom-0 h-3 w-3 rounded-full border-2 border-[var(--color-background-primary)] ${
						avatar.status === 'online'
							? 'bg-[var(--color-success-500)]'
							: avatar.status === 'away'
								? 'bg-yellow-500'
								: avatar.status === 'busy'
									? 'bg-[var(--color-danger-500)]'
									: 'bg-[var(--color-neutral-400)]'
					}`}
				></div>
			{/if}
		</div>
	{/each}

	{#if state.overflowCount > 0}
		<div class={`relative -ml-2 ${state.overflowClass}`}>
			<div
				class={`flex h-8 w-8 items-center justify-center rounded-full border-2 border-[var(--color-background-primary)] bg-[var(--color-background-tertiary)] text-xs font-medium text-[var(--color-text-primary)]`}
			>
				+{state.overflowCount}
			</div>
		</div>
	{/if}
</div>
