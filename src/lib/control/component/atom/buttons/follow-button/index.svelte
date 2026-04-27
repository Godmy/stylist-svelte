<script lang="ts">
  import { Icon as BaseIcon } from '$stylist';
const UserPlus = 'user-plus';
const UserCheck = 'user-check';
const Check = 'check';
const Loader2 = 'loader-2';

  import { createFollowButtonState } from '$stylist/control/function/state/follow-button';
  import type { FollowButtonProps } from '$stylist/control/type/struct/follow-button-props';

  let props: FollowButtonProps = $props();
  const state = createFollowButtonState(props);
</script>

<button
  type="button"
  class={state.classes}
  onclick={state.handleToggle}
  disabled={state.disabled || state.isPending}
  aria-label={state.ariaLabel}
  {...props}
>
  {#if state.isPending}
    <div class="flex items-center justify-center">
      <BaseIcon name={Loader2} class="h-4 w-4 animate-spin" />
      {#if state.showText} {state.isFollowing ? 'Unfollowing...' : 'Following...'} {/if}
    </div>
  {:else}
    <div class="flex items-center justify-center">
      {#if state.isFollowing}
        <BaseIcon name={Check} class={`h-4 w-4 ${state.size === 'sm' ? 'mr-1' : 'mr-2'}`} />
      {:else}
        <BaseIcon name={state.isFollowing ? UserCheck : UserPlus} class={`h-4 w-4 ${state.size === 'sm' ? 'mr-1' : 'mr-2'}`} />
      {/if}
      {#if state.showText} {state.text} {/if}
    </div>
  {/if}
</button>








