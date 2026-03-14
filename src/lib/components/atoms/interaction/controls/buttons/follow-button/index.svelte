<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { Icon as BaseIcon } from '$stylist/components/atoms';
const UserPlus = 'user-plus';
const UserCheck = 'user-check';
const Check = 'check';
const Loader2 = 'loader-2';

  import { Button } from '$stylist/components/atoms';

  type RestProps = Omit<HTMLAttributes<HTMLButtonElement>, 'class'>;

  type Props = RestProps & {
    isFollowing?: boolean;
    showText?: boolean;
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    class?: string;
    followingText?: string;
    unfollowText?: string;
    onFollow?: () => void;
    onUnfollow?: () => void;
    disabled?: boolean;
  };

  let {
    isFollowing = false,
    showText = true,
    variant = 'primary',
    size = 'md',
    class: hostClass = '',
    followingText = 'Following',
    unfollowText = 'Follow',
    onFollow,
    onUnfollow,
    disabled = false,
    ...restProps
  }: Props = $props();

  let isPending = $state(false);

  async function handleToggle() {
    if (disabled || isPending) return;
    
    isPending = true;
    
    if (isFollowing) {
      await onUnfollow?.();
    } else {
      await onFollow?.();
    }
    
    isPending = false;
  }

  let buttonVariant = $derived(isFollowing ? 'outline' : variant);
  let buttonText = $derived(isFollowing ? followingText : unfollowText);
  let buttonIcon = $derived(isFollowing ? UserCheck : UserPlus);
</script>

<button
  type="button"
  class={`follow-button ${
    isFollowing ? 'text-[var(--color-text-primary)] bg-[var(--color-background-secondary)] hover:bg-[var(--color-background-tertiary)]' : 
    variant === 'primary' ? 'text-[var(--color-text-inverse)] bg-[var(--color-primary-600)] hover:bg-[var(--color-primary-700)]' : 
    variant === 'secondary' ? 'text-[var(--color-text-inverse)] bg-[var(--color-secondary-600)] hover:bg-[var(--color-secondary-700)]' : 
    variant === 'outline' ? 'text-[var(--color-text-primary)] bg-[var(--color-background-primary)] hover:bg-[var(--color-background-secondary)] border border-[var(--color-border-primary)]' : 
    'text-[var(--color-text-primary)] hover:bg-[var(--color-background-secondary)]'
  } ${
    size === 'sm' ? 'text-xs px-2 py-1' : 
    size === 'lg' ? 'text-base px-4 py-2' : 
    'text-sm px-3 py-1.5'
  } font-medium rounded-md ${
    disabled || isPending ? 'opacity-[var(--opacity-75)] cursor-not-allowed' : 'cursor-pointer'
  } ${hostClass}`}
  onclick={handleToggle}
  disabled={disabled || isPending}
  aria-label={isFollowing ? "Unfollow user" : "Follow user"}
  {...restProps}
>
  {#if isPending}
    <div class="flex items-center justify-center">
      <BaseIcon name={Loader2} class="h-4 w-4 animate-spin" />
      {#if showText} {isFollowing ? 'Unfollowing...' : 'Following...'} {/if}
    </div>
  {:else}
    <div class="flex items-center justify-center">
      {#if isFollowing}
        <BaseIcon name={Check} class={`h-4 w-4 ${size === 'sm' ? 'mr-1' : 'mr-2'}`} />
      {:else}
        <BaseIcon name={buttonIcon} class={`h-4 w-4 ${size === 'sm' ? 'mr-1' : 'mr-2'}`} />
      {/if}
      {#if showText} {buttonText} {/if}
    </div>
  {/if}
</button>








