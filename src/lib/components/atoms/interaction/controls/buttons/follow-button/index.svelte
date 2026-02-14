<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { UserPlus, UserCheck, Check, Loader2 } from 'lucide-svelte';
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
  let ButtonIcon = $derived(isFollowing ? UserCheck : UserPlus);
</script>

<button
  type="button"
  class={`follow-button ${
    isFollowing ? 'text-gray-900 bg-gray-100 hover:bg-gray-200' : 
    variant === 'primary' ? 'text-white bg-blue-600 hover:bg-blue-700' : 
    variant === 'secondary' ? 'text-white bg-purple-600 hover:bg-purple-700' : 
    variant === 'outline' ? 'text-gray-700 bg-white hover:bg-gray-50 border border-gray-300' : 
    'text-gray-700 hover:bg-gray-100'
  } ${
    size === 'sm' ? 'text-xs px-2 py-1' : 
    size === 'lg' ? 'text-base px-4 py-2' : 
    'text-sm px-3 py-1.5'
  } font-medium rounded-md ${
    disabled || isPending ? 'opacity-75 cursor-not-allowed' : 'cursor-pointer'
  } ${hostClass}`}
  onclick={handleToggle}
  disabled={disabled || isPending}
  aria-label={isFollowing ? "Unfollow user" : "Follow user"}
  {...restProps}
>
  {#if isPending}
    <div class="flex items-center justify-center">
      <Loader2 class="h-4 w-4 animate-spin" />
      {#if showText} {isFollowing ? 'Unfollowing...' : 'Following...'} {/if}
    </div>
  {:else}
    <div class="flex items-center justify-center">
      {#if isFollowing}
        <Check class={`h-4 w-4 ${size === 'sm' ? 'mr-1' : 'mr-2'}`} />
      {:else}
        <ButtonIcon class={`h-4 w-4 ${size === 'sm' ? 'mr-1' : 'mr-2'}`} />
      {/if}
      {#if showText} {buttonText} {/if}
    </div>
  {/if}
</button>



