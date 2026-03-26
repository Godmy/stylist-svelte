<script lang="ts">
  import { Avatar, Button, Icon } from '$stylist';
  import { UserStatus } from '$stylist';
  import { ChatHeaderModel } from '$stylist/interaction/state/chat-header';
  import type { ChatHeaderProps } from '$stylist/interaction/type/attribute/chat-header';
  import { ChatHeaderStyleManager } from '$stylist/interaction/class/style-manager/chat-header';
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher<{
    call: { chat: any };
    videoCall: { chat: any };
    info: { chat: any };
  }>();

  // Props including event handlers using Svelte 5 runes syntax
  let {
    chat,
    currentUser,
    showActions = true,
    class: className = ''
  }: ChatHeaderProps = $props();

  // Initialize the model
  const model = ChatHeaderModel({
    chat,
    currentUser,
    showActions
  });
  
  // Update model when props change
  $effect(() => {
    model.updateFromProps({
      chat,
      currentUser,
      showActions
    });
  });

  // Handle call action
  function handleCall() {
    model.handleCall(chat, (type, detail) => dispatch(type as any, detail));
  }

  // Handle video call action
  function handleVideoCall() {
    model.handleVideoCall(chat, (type, detail) => dispatch(type as any, detail));
  }

  // Handle info action
  function handleInfo() {
    model.handleInfo(chat, (type, detail) => dispatch(type as any, detail));
  }
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

<div class={ChatHeaderStyleManager.getAllClasses(className)}>
  <div class={ChatHeaderStyleManager.getInfoClasses()}>
    <div class="relative">
      <Avatar
        id={model.isGroupChat ? chat.id : model.otherUser?.id || chat.id}
        name={model.isGroupChat ? chat.name || '' : model.otherUser?.name || ''}
        status={model.isGroupChat ? 'online' : model.otherUser?.status}
        size="lg"
        showStatus={!model.isGroupChat}
      />
    </div>

    <div class={ChatHeaderStyleManager.getDetailsClasses()}>
      <div class={ChatHeaderStyleManager.getNameClasses()}>
        {model.isGroupChat ? chat.name : model.otherUser?.name}
      </div>
      {#if !model.isGroupChat && model.otherUser}
        <UserStatus
          user={model.otherUser}
          showAvatar={false}
          showName={false}
          showStatusText={true}
        />
      {/if}
    </div>
  </div>

  {#if showActions}
    <div class={ChatHeaderStyleManager.getActionsClasses()}>
      <Button
        variant="ghost"
        size="sm"
        onclick={handleCall}
        title="Start call"
      >
        <Icon name="call" size="sm" />
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onclick={handleVideoCall}
        title="Start video call"
      >
        <Icon name="video" size="sm" />
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onclick={handleInfo}
        title="Chat info"
      >
        <Icon name="info" size="sm" />
      </Button>
    </div>
  {/if}
</div>





