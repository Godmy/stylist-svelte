<script lang="ts">
	import type { InformationHTMLAttributes } from '$stylist/information/type/struct/information-html-attributes';
	import createAvatarGroupState from '$stylist/media/function/state/avatar-group/index.svelte';
	import type { AvatarGroupProps } from '$stylist/media/type/struct/avatar-group/avatargroup-props';

	let props: AvatarGroupProps & InformationHTMLAttributes<HTMLDivElement> = $props();
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
</style>
