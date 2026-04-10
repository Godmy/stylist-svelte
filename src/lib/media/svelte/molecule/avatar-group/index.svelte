<script lang="ts">
  import type { InformationHTMLAttributes } from '$stylist/information/type/struct';
  import { createAvatarGroupState, type AvatarGroupProps } from '$stylist/media/function/state/avatar-group';

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
          class={`${state.sizeClasses} rounded-full object-cover border-2 border-[var(--color-background-primary)]`}
        />
      {:else}
        <div class={`${state.sizeClasses} rounded-full bg-[var(--color-background-tertiary)] border-2 border-[var(--color-background-primary)] flex items-center justify-center ${state.fontSizeClasses} font-medium text-[var(--color-text-primary)]`}>
          {avatar.name ? avatar.name.charAt(0).toUpperCase() : '?'}
        </div>
      {/if}

      {#if avatar.status}
        <div class={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-[var(--color-background-primary)] ${
          avatar.status === 'online' ? 'bg-[var(--color-success-500)]' :
          avatar.status === 'away' ? 'bg-yellow-500' :
          avatar.status === 'busy' ? 'bg-[var(--color-danger-500)]' : 'bg-[var(--color-neutral-400)]'
        }`}></div>
      {/if}
    </div>
  {/each}

  {#if state.overflowCount > 0}
    <div class={`relative -ml-2 ${state.overflowClass}`}>
      <div class={`w-8 h-8 rounded-full bg-[var(--color-background-tertiary)] border-2 border-[var(--color-background-primary)] flex items-center justify-center text-xs font-medium text-[var(--color-text-primary)]`}>
        +{state.overflowCount}
      </div>
    </div>
  {/if}
</div>
