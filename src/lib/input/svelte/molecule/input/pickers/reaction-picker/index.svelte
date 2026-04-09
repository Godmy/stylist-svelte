<script lang="ts">
  import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';
  import type { IReactionPickerProps } from '$stylist/input/interface/component/reaction-picker/other';
  import { createReactionPickerState } from '$stylist/input/function/state/reaction-picker';
  import { Icon as BaseIcon } from '$stylist';
  const Smile = 'smile';

  let props: IReactionPickerProps & Omit<InteractionHTMLAttributes<HTMLDivElement>, 'class'> = $props();
  const state = createReactionPickerState(props);
</script>

<div 
  class={`reaction-picker relative flex items-center ${state.hostClass}`} 
  {...props}
  onmouseenter={state.handleMouseEnter}
  onmouseleave={state.handleMouseLeave}
>
  <div class="flex items-center space-x-1">
    {#each state.reactions as reaction}
      {#if reaction.active || reaction.count > 0}
        {@const ReactionIcon = state.getReactionIcon(reaction.type)}
        <button
          type="button"
          class={`flex items-center rounded-full px-2 py-1 ${
            reaction.active 
              ? 'bg-[var(--color-primary-100)] text-[var(--color-primary-700)] border border-[var(--color-primary-300)]' 
              : 'bg-[var(--color-background-secondary)] text-[var(--color-text-secondary)] hover:bg-[var(--color-background-tertiary)]'
          } ${state.reactionClass}`}
          onclick={() => state.toggleReaction(reaction.type)}
          aria-label={`${reaction.active ? 'Remove' : 'Add'} ${state.getReactionLabel(reaction.type)} reaction`}
        >
          <BaseIcon name={ReactionIcon} class={`${state.sizeClass} ${reaction.active ? 'fill-current' : ''}`} />
          {#if state.showCounts && reaction.count > 0}
            <span class={`ml-1 ${state.textSizeClass} font-medium`}>
              {reaction.count > 99 ? '99+' : reaction.count}
            </span>
          {/if}
        </button>
      {/if}
    {/each}
  </div>
  
  {#if state.showPicker && state.showEmojiPicker}
    <div
      class={`absolute bottom-full mb-2 left-1/2 -translate-x-1/2 rounded-lg border border-[var(--color-border-primary)] bg-[var(--color-background-primary)] shadow-lg ${state.pickerClass}`}
    >
      <div class="p-2">
        <div class="grid grid-cols-5 gap-2">
          {#each state.reactions as reaction}
            {@const ReactionIcon = state.getReactionIcon(reaction.type)}
            <button
              type="button"
              class={`p-2 rounded-lg hover:bg-[var(--color-background-secondary)] ${
                reaction.active ? 'bg-[var(--color-primary-100)] text-[var(--color-primary-700)]' : 'text-[var(--color-text-primary)]'
              }`}
              onclick={() => state.toggleReaction(reaction.type)}
              aria-label={state.getReactionLabel(reaction.type)}
            >
              <BaseIcon name={ReactionIcon} class={state.sizeClass} />
            </button>
          {/each}
        </div>
      </div>
    </div>
  {/if}
  
  <button
    type="button"
    class={`ml-1 p-1.5 rounded-full hover:bg-[var(--color-background-secondary)] ${
      state.hasActiveReaction ? 'text-[var(--color-primary-600)]' : 'text-[var(--color-text-secondary)]'
    }`}
    onclick={state.togglePicker}
    aria-label="Add reaction"
  >
    {#if state.hasActiveReaction}
      {@const FirstActiveIcon = state.getReactionIcon(state.firstActiveReaction?.type || 'like')}
      <BaseIcon name={FirstActiveIcon} class={`h-5 w-5 ${state.firstActiveReaction ? 'fill-current' : ''}`} />
    {:else}
      <BaseIcon name={Smile} class="h-5 w-5" />
    {/if}
  </button>
</div>




