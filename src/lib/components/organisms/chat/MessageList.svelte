<script lang="ts">
  import type { Message, User } from '$lib/types';
  import MessageItem from './MessageItem.svelte';
  import { createEventDispatcher, onMount } from 'svelte';

  // Props
  let { 
    messages = [],
    currentUser,
    onMessageAction
  }: {
    messages: Message[];
    currentUser: User;
    onMessageAction?: (action: string, message: Message) => void;
  } = $props();

  // Events
  const dispatch = createEventDispatcher<{
    messageClick: { message: Message };
    messageReaction: { message: Message; reaction: string };
  }>();

  // Handle message click
  function handleMessageClick(message: Message) {
    dispatch('messageClick', { message });
  }

  // Handle message reaction
  function handleMessageReaction(event: CustomEvent<{ reaction: string }>, message: Message) {
    dispatch('messageReaction', { message, reaction: event.detail.reaction });
    onMessageAction?.('reaction', message);
  }

  // Function to enhance scroll behavior for chat
  function enhanceScroll(node: HTMLElement) {
    let handleScroll: () => void;
    
    // Auto-scroll to bottom when new messages arrive
    onMount(() => {
      if (messages.length > 0) {
        node.scrollTop = node.scrollHeight;
      }
      
      // Handle scroll events to detect if user has scrolled up
      handleScroll = () => {
        // This could be used to implement "show new messages" indicator
        // when user scrolls up and new messages arrive
      };
      
      node.addEventListener('scroll', handleScroll);
    });
    
    return {
      destroy() {
        if (handleScroll) {
          node.removeEventListener('scroll', handleScroll);
        }
      }
    };
  }
</script>

<style>
  .message-list {
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow-y: auto;
    padding: 1rem;
    gap: 1rem;
    background-color: #f0f4f8;
  }

  .message-list::-webkit-scrollbar {
    width: 6px;
  }

  .message-list::-webkit-scrollbar-track {
    background: #f1f5f9;
  }

  .message-list::-webkit-scrollbar-thumb {
    background: #cbd5e1;
    border-radius: 3px;
  }

  .message-list::-webkit-scrollbar-thumb:hover {
    background: #94a3b8;
  }
</style>

<div class="message-list" use:enhanceScroll>
  {#each messages as message (message.id)}
    <MessageItem
      {message}
      isOwn={message.senderId === currentUser.id}
      on:click={() => handleMessageClick(message)}
      on:reaction={(e: CustomEvent<{ reaction: string }>) => handleMessageReaction(e, message)}
    />
  {/each}
</div>