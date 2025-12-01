<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { Users, User } from 'lucide-svelte';

  type TeamMember = {
    id: string;
    name: string;
    avatar?: string;
    role?: string;
    status?: 'online' | 'away' | 'busy' | 'offline';
    presence?: boolean;
  };

  type Props = {
    members: TeamMember[];
    maxVisible?: number;
    showStatus?: boolean;
    showTooltip?: boolean;
    size?: 'sm' | 'md' | 'lg';
    stackDirection?: 'horizontal' | 'vertical';
    class?: string;
    avatarClass?: string;
    tooltipClass?: string;
  } & HTMLAttributes<HTMLDivElement>;

  let {
    members = [],
    maxVisible = 5,
    showStatus = true,
    showTooltip = true,
    size = 'md',
    stackDirection = 'horizontal',
    class: className = '',
    avatarClass = '',
    tooltipClass = '',
    ...restProps
  }: Props = $props();

  // Calculate size classes
  const sizeClasses = $derived(size === 'sm' ? 'w-8 h-8' : size === 'lg' ? 'w-12 h-12' : 'w-10 h-10');
  const statusSize = $derived(size === 'sm' ? 'w-2 h-2' : size === 'lg' ? 'w-3 h-3' : 'w-2.5 h-2.5');

  // Get visible members and count of overflow
  const visibleMembers = members.slice(0, maxVisible);
  const overflowCount = Math.max(0, members.length - maxVisible);
  
  // Status color mapping
  function getStatusColor(status?: string) {
    switch(status) {
      case 'online': return 'bg-green-500';
      case 'away': return 'bg-yellow-500';
      case 'busy': return 'bg-red-500';
      default: return 'bg-gray-400';
    }
  }
</script>

<div class={`flex items-center ${stackDirection === 'vertical' ? 'flex-col' : 'flex-row'} ${className}`} {...restProps}>
  <!-- Render visible avatars in a stack -->
  {#each visibleMembers as member, index}
    <div 
      class={`relative ${stackDirection === 'horizontal' ? '-ml-2' : '-mt-2'} first:ml-0 first:mt-0 ${avatarClass}`}
      style={`z-index: ${visibleMembers.length - index}`}
    >
      <div class="relative inline-block">
        {#if member.avatar}
          <img 
            src={member.avatar} 
            alt={member.name} 
            class={`rounded-full border-2 border-white ${sizeClasses}`}
          />
        {:else}
          <div class={`rounded-full border-2 border-white flex items-center justify-center text-white font-medium ${sizeClasses} bg-gray-300 text-gray-700`}>
            {member.name.charAt(0).toUpperCase()}
          </div>
        {/if}
        
        {#if showStatus && member.status}
          <div class={`absolute bottom-0 right-0 rounded-full border-2 border-white ${statusSize} ${getStatusColor(member.status)}`}></div>
        {/if}
      </div>
      
      {#if showTooltip}
        <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block z-10 bg-black bg-opacity-75 text-white text-xs rounded py-1 px-2">
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
  {#if overflowCount > 0}
    <div 
      class={`relative ${stackDirection === 'horizontal' ? '-ml-2' : '-mt-2'} flex items-center justify-center rounded-full border-2 border-white bg-indigo-100 text-indigo-800 font-medium ${sizeClasses} ${size === 'sm' ? 'text-xs' : size === 'md' ? 'text-sm' : 'text-base'}`}
    >
      +{overflowCount}
      <Users class="ml-1" style={`width: ${size === 'sm' ? '0.75rem' : size === 'md' ? '1rem' : '1.25rem'}; height: ${size === 'sm' ? '0.75rem' : size === 'md' ? '1rem' : '1.25rem'}`} />
    </div>
  {/if}
</div>