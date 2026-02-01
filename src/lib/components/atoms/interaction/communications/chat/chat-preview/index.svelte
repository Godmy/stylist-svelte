<script lang="ts">
  import { Avatar } from '$stylist/components/atoms';
  import { Check, CheckCheck } from 'lucide-svelte';

  import type { ChatPreviewProps } from '$stylist/design-system/interaction/communications/chat-preview';
  import {
    DEFAULT_CHAT_MESSAGE_VARIANT,
    getChatMessageAlignmentClass,
    getChatMessageBubbleClasses,
    getChatMessageFooterClasses,
    getChatMessageHeaderClasses,
    getChatMessageStatusIconClasses
  } from '$stylist/design-system/interaction/communications/chat-message';
  import { createChatPreviewState } from '../../state.svelte';

  let props: ChatPreviewProps = $props();

  const state = createChatPreviewState(props);
</script>

<div class={state.classes} role="region" aria-label={`Chat preview: ${state.title}`}>
  <div class={state.headerClasses}>
    <div class={state.chatInfoClasses}>
      <h3 class={state.titleClasses} aria-label={state.title}>{state.title}</h3>
      <div class={state.participantsClasses} aria-label={`Participants: ${state.participants.join(', ')}`}>
        ({state.participants.join(', ')})
      </div>
    </div>
  </div>

  <div class={state.messagesContainerClasses}>
    {#each state.displayMessages as message}
      <div class={`flex ${getChatMessageAlignmentClass(!!message.isOwn)}`}>
        <div class="max-w-xs md:max-w-md">
          {#if !message.isOwn}
            <div class={getChatMessageHeaderClasses()}>
              {#if state.showAvatars && message.avatar}
                <Avatar src={message.avatar} alt={message.sender} size="sm" class="mr-2" />
              {/if}
              <span>{message.sender}</span>
            </div>
          {/if}

          <div class={getChatMessageBubbleClasses(!!message.isOwn, DEFAULT_CHAT_MESSAGE_VARIANT)}>
            <p class="text-sm">{message.text}</p>
          </div>

          <div class={getChatMessageFooterClasses()}>
            {#if message.timestamp}
              <span>{message.timestamp}</span>
            {/if}
            {#if message.isOwn && message.status}
              {#if message.status === 'read'}
                <CheckCheck class={getChatMessageStatusIconClasses(message.status)} />
              {:else}
                <Check class={getChatMessageStatusIconClasses(message.status)} />
              {/if}
            {/if}
          </div>
        </div>
      </div>
    {/each}
  </div>
</div>
