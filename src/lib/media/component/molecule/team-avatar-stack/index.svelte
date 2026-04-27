<script lang="ts">
  import type { InformationHTMLAttributes } from '$stylist/information/type/struct';
  import { createTeamAvatarStackState } from '$stylist/media/function/state/team-avatar-stack';
  import type { TeamAvatarStackProps } from '$stylist/media/type/struct/team-avatar-stack';
  import { Icon as BaseIcon } from '$stylist';
const Users = 'users';
const User = 'user';


  let props: TeamAvatarStackProps & InformationHTMLAttributes<HTMLDivElement> = $props();
  const state = createTeamAvatarStackState(props);
</script>

<div class={state.hostClasses} {...state.restProps}>
  <!-- Render visible avatars in a stack -->
  {#each state.visibleMembers as member, index}
    <div
      class={`relative ${state.stackDirection === 'vertical' ? '-mt-2' : '-ml-2'} first:ml-0 first:mt-0 ${state.avatarClass}`}
      style={`z-index: ${state.visibleMembers.length - index}`}
    >
      <div class="relative inline-block">
        {#if member.avatar}
          <img
            src={member.avatar}
            alt={member.name}
            class={`rounded-full border-2 border-[var(--color-background-primary)] ${state.sizeClasses}`}
          />
        {:else}
          <div class={`rounded-full border-2 border-[var(--color-background-primary)] flex items-center justify-center text-[var(--color-text-inverse)] font-medium ${state.sizeClasses} bg-[var(--color-background-tertiary)] text-[var(--color-text-primary)]`}>
            {member.name.charAt(0).toUpperCase()}
          </div>
        {/if}

        {#if state.showStatus && member.status}
          <div class={`absolute bottom-0 right-0 rounded-full border-2 border-[var(--color-background-primary)] ${state.statusSize} ${state.getStatusColor(member.status)}`}></div>
        {/if}
      </div>

      {#if state.showTooltip}
        <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block z-[var(--z-index-docked)] bg-[var(--color-neutral-900)] bg-opacity-[var(--opacity-75)] text-[var(--color-text-inverse)] text-xs rounded py-1 px-2">
          {member.name}
          {#if member.role && member.role !== ''}
            <div class="text-xs">{member.role}</div>
          {/if}
          {#if member.status}
            <div class="text-xs">{member.status}</div>
          {/if}
        </div>
      {/if}
    </div>
  {/each}

  <!-- Overflow indicator -->
  {#if state.overflowCount > 0}
    <div
      class={`relative ${state.stackDirection === 'horizontal' ? '-ml-2' : '-mt-2'} flex items-center justify-center rounded-full border-2 border-[var(--color-background-primary)] bg-[var(--color-primary-100)] text-[var(--color-primary-800)] font-medium ${state.sizeClasses} ${state.size === 'sm' ? 'text-xs' : state.size === 'md' ? 'text-sm' : 'text-base'}`}
    >
      +{state.overflowCount}
      <BaseIcon name={Users} class="ml-1" style={`width: ${state.size === 'sm' ? '0.75rem' : state.size === 'md' ? '1rem' : '1.25rem'}; height: ${state.size === 'sm' ? '0.75rem' : state.size === 'md' ? '1rem' : '1.25rem'}`} />
    </div>
  {/if}
</div>
