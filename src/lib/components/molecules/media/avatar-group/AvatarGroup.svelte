<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';

  type Avatar = {
    id: string;
    name: string;
    src?: string;
    status?: 'online' | 'offline' | 'away' | 'busy';
    onClick?: () => void;
  };

  type Props = {
    avatars: Avatar[];
    maxVisible?: number;
    size?: 'sm' | 'md' | 'lg';
    showTooltip?: boolean;
    tooltipPosition?: 'top' | 'bottom' | 'left' | 'right';
    class?: string;
    avatarClass?: string;
    overflowClass?: string;
  } & HTMLAttributes<HTMLDivElement>;

  let {
    avatars = [],
    maxVisible = 5,
    size = 'md',
    showTooltip = true,
    tooltipPosition = 'top',
    class: className = '',
    avatarClass = '',
    overflowClass = '',
    ...restProps
  }: Props = $props();

  // Define size classes
  let sizeClasses = $state('');
  let fontSizeClasses = $state('');
  
  if (size === 'sm') {
    sizeClasses = 'w-8 h-8';
    fontSizeClasses = 'text-xs';
  } else if (size === 'lg') {
    sizeClasses = 'w-12 h-12';
    fontSizeClasses = 'text-base';
  } else {
    // md (default)
    sizeClasses = 'w-10 h-10';
    fontSizeClasses = 'text-sm';
  }

  // Get visible avatars and overflow count
  let visibleAvatars = avatars.slice(0, maxVisible);
  let overflowCount = Math.max(0, avatars.length - maxVisible);
</script>

<div class={`flex items-center ${className}`} {...restProps}>
  {#each visibleAvatars as avatar, index}
    <div 
      class={`relative -ml-2 first:ml-0 ${avatarClass}`}
      style={`z-index: ${visibleAvatars.length - index}`}
      onclick={() => avatar.onClick && avatar.onClick()}
      role="button"
      tabindex="0"
      onkeydown={(e) => (e.key === 'Enter' || e.key === ' ') && avatar.onClick && avatar.onClick()}
    >
      {#if avatar.src}
        <img 
          src={avatar.src} 
          alt={avatar.name} 
          class={`${sizeClasses} rounded-full object-cover border-2 border-white`}
        />
      {:else}
        <div class={`${sizeClasses} rounded-full bg-gray-200 border-2 border-white flex items-center justify-center ${fontSizeClasses} font-medium text-gray-700`}>
          {avatar.name ? avatar.name.charAt(0).toUpperCase() : '?'}
        </div>
      {/if}
      
      {#if avatar.status}
        <div class={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white ${
          avatar.status === 'online' ? 'bg-green-500' :
          avatar.status === 'away' ? 'bg-yellow-500' :
          avatar.status === 'busy' ? 'bg-red-500' : 'bg-gray-400'
        }`}></div>
      {/if}
    </div>
  {/each}
  
  {#if overflowCount > 0}
    <div class={`relative -ml-2 ${overflowClass}`}>
      <div class={`w-8 h-8 rounded-full bg-gray-300 border-2 border-white flex items-center justify-center text-xs font-medium text-gray-700`}>
        +{overflowCount}
      </div>
    </div>
  {/if}
</div>