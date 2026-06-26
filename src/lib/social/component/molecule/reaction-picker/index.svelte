<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import type { SlotInteraction } from '$stylist/interaction/interface/slot/interaction';

	import type { SlotReactionPicker as IReactionPickerProps } from '$stylist/social/interface/slot/reaction-picker';

	import { createReactionPickerState } from '$stylist/social/function/state/reaction-picker/index.svelte';

	import BaseIcon from '$stylist/svg/component/atom/icon/index.svelte';

	const Smile = 'smile';

	let props: IReactionPickerProps & Omit<HTMLAttributes<HTMLDivElement>, 'class'> & SlotInteraction =
		$props();

	const state = createReactionPickerState(props);
</script>


<div
	class={`reaction-picker ${state.hostClass}`}
	{...props}
	onmouseenter={state.handleMouseEnter}
	onmouseleave={state.handleMouseLeave}
>
	<div class="reaction-picker__reactions">
		{#each state.reactions as reaction}
			{#if reaction.active || reaction.count > 0}
				{@const ReactionIcon = state.getReactionIcon(reaction.type)}

				<button
					type="button"
					class={`reaction-picker__chip ${reaction.active ? 'reaction-picker__chip--active' : ''} ${state.reactionClass}`}
					onclick={() => state.toggleReaction(reaction.type)}
					aria-label={`${reaction.active ? 'Remove' : 'Add'} ${state.getReactionLabel(reaction.type)} reaction`}
				>
					<BaseIcon
						name={ReactionIcon}
						class={`${state.sizeClass} ${reaction.active ? 'fill-current' : ''}`}
					/>

					{#if state.showCounts && reaction.count > 0}
						<span class={`reaction-picker__count ${state.textSizeClass}`}>
							{reaction.count > 99 ? '99+' : reaction.count}
						</span>
					{/if}
				</button>
			{/if}
		{/each}
	</div>

	{#if state.showPicker && state.showEmojiPicker}
		<div class={`reaction-picker__panel ${state.pickerClass}`}>
			<div class="reaction-picker__grid">
				{#each state.reactions as reaction}
					{@const ReactionIcon = state.getReactionIcon(reaction.type)}

					<button
						type="button"
						class={`reaction-picker__grid-item ${reaction.active ? 'reaction-picker__grid-item--active' : ''}`}
						onclick={() => state.toggleReaction(reaction.type)}
						aria-label={state.getReactionLabel(reaction.type)}
					>
						<BaseIcon name={ReactionIcon} class={state.sizeClass} />
					</button>
				{/each}
			</div>
		</div>
	{/if}

	<button
		type="button"
		class={`reaction-picker__trigger ${state.hasActiveReaction ? 'reaction-picker__trigger--active' : ''}`}
		onclick={state.togglePicker}
		aria-label="Add reaction"
	>
		{#if state.hasActiveReaction}
			{@const FirstActiveIcon = state.getReactionIcon(state.firstActiveReaction?.type || 'like')}

			<BaseIcon
				name={FirstActiveIcon}
				class={`${state.firstActiveReaction ? 'fill-current' : ''} _c1`}
			/>
		{:else}
			<BaseIcon name={Smile} style="width: 1.25rem; height: 1.25rem;" />
		{/if}
	</button>
</div>

<style>
	.reaction-picker {
		position: relative;

		display: flex;

		align-items: center;
	}

	.reaction-picker__reactions {
		display: flex;

		align-items: center;

		gap: 0.25rem;
	}

	.reaction-picker__chip {
		display: flex;

		align-items: center;

		border-radius: 9999px;

		padding: 0.25rem 0.5rem;

		background-color: var(--color-background-secondary);

		color: var(--color-text-secondary);

		border: none;

		cursor: pointer;
	}

	.reaction-picker__chip:hover {
		background-color: var(--color-background-tertiary);
	}

	.reaction-picker__chip--active {
		border: 1px solid var(--color-primary-300);

		background-color: var(--color-primary-100);

		color: var(--color-primary-700);
	}

	.reaction-picker__count {
		margin-inline-start: 0.25rem;

		font-weight: 500;
	}

	.reaction-picker__panel {
		position: absolute;

		bottom: 100%;

		left: 50%;

		transform: translateX(-50%);

		margin-block-end: 0.5rem;

		border-radius: var(--border-radius-large, 0.5rem);

		border: 1px solid var(--color-border-primary);

		background-color: var(--color-background-primary);

		box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
	}

	.reaction-picker__grid {
		display: grid;

		grid-template-columns: repeat(5, 1fr);

		gap: 0.5rem;

		padding: 0.5rem;
	}

	.reaction-picker__grid-item {
		border-radius: var(--border-radius-base, 0.375rem);

		padding: 0.5rem;

		background: none;

		border: none;

		cursor: pointer;

		color: var(--color-text-primary);
	}

	.reaction-picker__grid-item:hover {
		background-color: var(--color-background-secondary);
	}

	.reaction-picker__grid-item--active {
		background-color: var(--color-primary-100);

		color: var(--color-primary-700);
	}

	.reaction-picker__trigger {
		margin-inline-start: 0.25rem;

		border-radius: 9999px;

		padding: 0.375rem;

		background: none;

		border: none;

		cursor: pointer;

		color: var(--color-text-secondary);
	}

	.reaction-picker__trigger:hover {
		background-color: var(--color-background-secondary);
	}

	.reaction-picker__trigger--active {
		color: var(--color-primary-600);
	}

	._c1 {
		height: 1.25rem;
		width: 1.25rem;
	}
</style>
