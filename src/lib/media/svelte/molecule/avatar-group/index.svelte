<script lang="ts">
  import type { InformationHTMLAttributes } from '$stylist/information/type/struct';

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
  } & InformationHTMLAttributes<HTMLDivElement>;

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
          class={`${sizeClasses} rounded-full object-cover border-2 border-[var(--color-background-primary)]`}
        />
      {:else}
        <div class={`${sizeClasses} rounded-full bg-[var(--color-background-tertiary)] border-2 border-[var(--color-background-primary)] flex items-center justify-center ${fontSizeClasses} font-medium text-[var(--color-text-primary)]`}>
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
  
  {#if overflowCount > 0}
    <div class={`relative -ml-2 ${overflowClass}`}>
      <div class={`w-8 h-8 rounded-full bg-[var(--color-background-tertiary)] border-2 border-[var(--color-background-primary)] flex items-center justify-center text-xs font-medium text-[var(--color-text-primary)]`}>
        +{overflowCount}
      </div>
    </div>
  {/if}
</div>




