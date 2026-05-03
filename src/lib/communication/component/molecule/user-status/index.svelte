<script lang="ts">
  import type { SlotUser as User } from '$stylist/communication/interface/slot/user';
  import ChatStatusIndicator from '$stylist/communication/component/atom/chat-status-indicator/index.svelte';
  import { createUserStatusState } from '$stylist/communication/function/state/user-status';

  export type UserStatusProps = {
    user: User;
    showAvatar?: boolean;
    showName?: boolean;
    showStatusText?: boolean;
  };

  let props: UserStatusProps = $props();

  const state = createUserStatusState({
    user: props.user,
    showAvatar: props.showAvatar,
    showName: props.showName,
    showStatusText: props.showStatusText
  });
</script>

<style>
  .user-status {
    display: flex;
    align-items: center;
    gap: var(--spacing-2);
  }

  .user-info {
    display: flex;
    flex-direction: column;
  }

  .user-name {
    font-weight: var(--font-weight-medium);
    color: var(--color-text-primary);
    font-size: var(--font-size-3);
  }

  .status-text {
    font-size: var(--font-size-3);
    color: var(--color-text-secondary);
  }
</style>

<div class={state.containerClasses}>
  {#if state.showAvatar && props.user}
    <ChatStatusIndicator
      status={props.user.status === 'idle' ? 'away' : props.user.status}
      size="md"
      showLabel={false}
    />
  {/if}

  {#if state.showName || state.showStatusText}
    <div class={state.userInfoClasses}>
      {#if state.showName && props.user.name}
        <div class={state.userNameClasses}>{props.user.name}</div>
      {/if}
      {#if state.showStatusText}
        <div class={state.statusTextClasses}>{state.statusText}</div>
      {/if}
    </div>
  {/if}
</div>

