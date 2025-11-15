<script lang="ts">
  // Define local types
  interface User {
    id: string;
    name: string;
    avatar?: string;
    status?: 'online' | 'away' | 'offline' | 'typing';
    lastSeen?: Date;
  }

  interface Chat {
    id: string;
    name?: string;
    participants: User[];
    isGroup: boolean;
    lastMessage?: string;
    lastMessageTime?: Date;
    unreadCount?: number;
    avatar?: string;
  }

  import { Avatar, Button, Icon } from '$lib/components/atoms';
  import { UserStatus } from '$lib/components/molecules';
  import { createEventDispatcher } from 'svelte';

  // Props
  let { 
    chat,
    currentUser,
    showActions = true
  }: {
    chat: Chat;
    currentUser: User;
    showActions?: boolean;
  } = $props();

  // Events
  const dispatch = createEventDispatcher<{
    call: { chat: Chat };
    videoCall: { chat: Chat };
    info: { chat: Chat };
  }>();

  // Determine if it's a one-on-one chat or a group
  const isGroupChat = $derived(chat.participants.length > 2);

  // Get the other participant in a one-on-one chat
  const otherUser = $derived(
    !isGroupChat 
      ? chat.participants.find((user: User) => user.id !== currentUser.id) 
      : null
  );

  // Handle call action
  function handleCall() {
    dispatch('call', { chat });
  }

  // Handle video call action
  function handleVideoCall() {
    dispatch('videoCall', { chat });
  }

  // Handle info action
  function handleInfo() {
    dispatch('info', { chat });
  }
</script>

<style>
  .chat-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    border-bottom: 1px solid #e2e8f0;
    background-color: white;
  }

  .chat-info {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    flex: 1;
  }

  .chat-details {
    display: flex;
    flex-direction: column;
    flex: 1;
  }

  .chat-name {
    font-weight: 600;
    color: #1e293b;
    font-size: 1rem;
  }

  .chat-actions {
    display: flex;
    gap: 0.5rem;
  }
</style>

<div class="chat-header">
  <div class="chat-info">
    <div class="relative">
      <Avatar 
        id={isGroupChat ? chat.id : otherUser?.id || chat.id} 
        name={isGroupChat ? chat.name || '' : otherUser?.name || ''} 
        status={isGroupChat ? 'online' : otherUser?.status} 
        size="lg" 
        showStatus={!isGroupChat} 
      />
    </div>
    
    <div class="chat-details">
      <div class="chat-name">
        {isGroupChat ? chat.name : otherUser?.name}
      </div>
      {#if !isGroupChat && otherUser}
        <UserStatus 
          user={otherUser}
          showAvatar={false}
          showName={false}
          showStatusText={true}
        />
      {/if}
    </div>
  </div>
  
  {#if showActions}
    <div class="chat-actions">
      <Button 
        variant="ghost" 
        size="sm" 
        onclick={handleCall}
        title="Позвонить"
      >
        <Icon name="call" size="sm" />
      </Button>
      <Button 
        variant="ghost" 
        size="sm" 
        onclick={handleVideoCall}
        title="Видео вызов"
      >
        <Icon name="video" size="sm" />
      </Button>
      <Button 
        variant="ghost" 
        size="sm" 
        onclick={handleInfo}
        title="Информация о чате"
      >
        <Icon name="info" size="sm" />
      </Button>
    </div>
  {/if}
</div>
