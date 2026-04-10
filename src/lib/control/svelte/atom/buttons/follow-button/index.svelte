<script lang="ts">
  import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';
  import { Icon as BaseIcon } from '$stylist';
const UserPlus = 'user-plus';
const UserCheck = 'user-check';
const Check = 'check';
const Loader2 = 'loader-2';

  import { createFollowButtonState } from '$stylist/control/function/state/follow-button';

  type RestProps = Omit<InteractionHTMLAttributes<HTMLButtonElement>, 'class'>;

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

  let props: Props = $props();
  const controlState = createFollowButtonState(props);
  let isPending = $state(false);

  async function handleToggle() {
    if (controlState.disabled || isPending) return;

    isPending = true;

    if (controlState.isFollowing) {
      await props.onUnfollow?.();
    } else {
      await props.onFollow?.();
    }

    isPending = false;
  }
</script>

<button
  type="button"
  class={controlState.classes}
  onclick={handleToggle}
  disabled={controlState.disabled || isPending}
  aria-label={controlState.ariaLabel}
  {...props}
>
  {#if isPending}
    <div class="flex items-center justify-center">
      <BaseIcon name={Loader2} class="h-4 w-4 animate-spin" />
      {#if controlState.showText} {controlState.isFollowing ? 'Unfollowing...' : 'Following...'} {/if}
    </div>
  {:else}
    <div class="flex items-center justify-center">
      {#if controlState.isFollowing}
        <BaseIcon name={Check} class={`h-4 w-4 ${controlState.size === 'sm' ? 'mr-1' : 'mr-2'}`} />
      {:else}
        <BaseIcon name={controlState.isFollowing ? UserCheck : UserPlus} class={`h-4 w-4 ${controlState.size === 'sm' ? 'mr-1' : 'mr-2'}`} />
      {/if}
      {#if controlState.showText} {controlState.text} {/if}
    </div>
  {/if}
</button>








