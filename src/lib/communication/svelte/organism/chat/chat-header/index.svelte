<script lang="ts">
  import { Avatar, Button, Icon } from '$stylist';
  import { UserStatus } from '$stylist';
  import type { User } from '$stylist/communication/interface/component/chat/other';
  import { ChatHeaderStyleManager } from '$stylist/communication/class/style-manager/chat-header';
  import { createChatHeaderState } from '$stylist/communication/function/state/chat-header';

  export type ChatHeaderChat = {
    id: string;
    name?: string;
    participants: User[];
    isGroup: boolean;
    avatar?: string;
  };

  export type ChatHeaderOrganismProps = {
    chat: ChatHeaderChat;
    currentUser: User;
    showActions?: boolean;
    class?: string;
    onCall?: () => void;
    onVideoCall?: () => void;
    onInfo?: () => void;
  };

  let props: ChatHeaderOrganismProps = $props();

  const state = createChatHeaderState(props);
</script>

<style>
  .c-chat-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--spacing-4);
    border-bottom: 1px solid var(--color-border-primary);
    background-color: var(--color-background-primary);
  }

  .chat-info {
    display: flex;
    align-items: center;
    gap: var(--spacing-3);
    flex: 1;
  }

  .chat-details {
    display: flex;
    flex-direction: column;
    flex: 1;
  }

  .chat-name {
    font-weight: var(--font-weight-semibold);
    color: var(--color-text-primary);
    font-size: var(--font-size-4);
  }

  .chat-actions {
    display: flex;
    gap: var(--spacing-2);
  }
</style>

<div class={state.containerClasses}>
  <div class={state.infoClasses}>
    <div class="relative">
      <Avatar
        id={state.isGroupChat ? props.chat.id : state.otherUser?.id || props.chat.id}
        name={state.isGroupChat ? props.chat.name || '' : state.otherUser?.name || ''}
        status={state.isGroupChat ? 'online' : state.otherUser?.status}
        size="lg"
        showStatus={!state.isGroupChat}
      />
    </div>

    <div class={state.detailsClasses}>
      <div class={state.nameClasses}>
        {state.isGroupChat ? props.chat.name : state.otherUser?.name}
      </div>
      {#if !state.isGroupChat && state.otherUser}
        <UserStatus
          user={state.otherUser}
          showAvatar={false}
          showName={false}
          showStatusText={true}
        />
      {/if}
    </div>
  </div>

  {#if state.showActions}
    <div class={state.actionsClasses}>
      <Button
        variant="ghost"
        size="sm"
        onclick={state.handleCall}
        title="Start call"
      >
        <Icon name="call" size="sm" />
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onclick={state.handleVideoCall}
        title="Start video call"
      >
        <Icon name="video" size="sm" />
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onclick={state.handleInfo}
        title="Chat info"
      >
        <Icon name="info" size="sm" />
      </Button>
    </div>
  {/if}
</div>
