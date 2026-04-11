<script lang="ts">
  import type { Message, User } from '$stylist/communication/interface/component/chat/other';
  import { Avatar, Icon } from '$stylist';
  import MessageMeta from '$stylist/communication/svelte/atom/messages/message-meta/index.svelte';
  import AttachmentPreview from '$stylist/file/svelte/molecule/preview/attachment-preview/index.svelte';
  import { createMessageItemState } from '$stylist/communication/function/state/message-item';

  export type MessageItemProps = {
    message: Message;
    isOwn?: boolean;
    showAvatar?: boolean;
    enableReactions?: boolean;
    sender?: User;
    onReaction?: (reaction: string) => void;
    onReply?: () => void;
    onForward?: () => void;
  };

  let props: MessageItemProps = $props();

  const compState = createMessageItemState(props);
</script>

<style>
  .message-container {
    display: flex;
    gap: var(--spacing-2);
    width: 100%;
  }

  .message-bubble {
    display: flex;
    flex-direction: column;
    max-width: 75%;
    padding: var(--spacing-3);
    border-radius: var(--border-radius-xl);
    border: 1px solid;
    box-shadow: var(--shadow-custom28);
    position: relative;
  }

  .message-content {
    word-wrap: break-word;
    white-space: pre-wrap;
  }

  .message-actions {
    display: flex;
    gap: var(--spacing-2);
    margin-top: var(--spacing-1);
    opacity: var(--opacity-70);
  }

  .message-actions:hover {
    opacity: var(--opacity-100);
  }

  .action-button {
    background: none;
    border: none;
    cursor: pointer;
    padding: var(--spacing-1);
    border-radius: var(--border-radius-base);
  }

  .action-button:hover {
    background-color: color-mix(in srgb, var(--color-text-primary) 5%, transparent);
  }

  .reactions-picker {
    position: absolute;
    bottom: 100%;
    left: 0;
    background: var(--color-background-primary);
    border: 1px solid var(--color-border-primary);
    border-radius: var(--border-radius-lg);
    padding: var(--spacing-2);
    display: flex;
    gap: var(--spacing-1);
    box-shadow: var(--shadow-custom38);
    z-index: var(--z-index-docked);
  }

  .reaction-option {
    font-size: var(--font-size-5);
    cursor: pointer;
    padding: var(--spacing-1);
    border-radius: var(--border-radius-base);
  }

  .reaction-option:hover {
    background-color: var(--color-background-secondary);
  }
</style>

<div class="message-container {compState.messageAlignment}">
  {#if compState.showAvatar && !compState.isOwn && props.sender}
    <Avatar
      src={props.sender.avatar}
      name={props.sender.name}
      status={props.sender.status}
      size="sm"
      showStatus={false} />
  {/if}

  <div class={compState.messageBubbleClasses}>
    {#if !compState.isOwn && props.sender}
      <div class="font-semibold text-sm mb-1">{props.sender.name}</div>
    {/if}

    {#if props.message.replyTo}
      <div class="text-xs italic mb-1" style="border-left: 2px solid var(--color-border-secondary); padding-left: var(--spacing-2);">
        В ответ на сообщение
      </div>
    {/if}

    <div class={compState.messageContentClasses}>
      {#if props.message.type === 'text'}
        {props.message.content}
      {:else if props.message.type === 'image'}
        <img
          src={props.message.content}
          alt="Изображение"
          class="max-w-xs rounded-md"
        />
      {:else if props.message.type === 'file' && props.message.attachments?.length}
        {#each props.message.attachments as attachment, index}
          <AttachmentPreview
            attachment={{
              id: attachment.id ?? `${props.message.id}-attachment-${index}`,
              name: attachment.name ?? 'Attachment',
              type: attachment.type ?? 'file',
              size: typeof attachment.size === 'number' ? attachment.size : 0,
              url: attachment.url
            }}
            showActions={false}
          />
        {/each}
      {/if}
    </div>

    <MessageMeta message={props.message} />

    {#if compState.enableReactions}
      <div class={compState.messageActionsClasses}>
        <button class={compState.actionButtonClasses} onclick={() => compState.reactionsVisible = !compState.reactionsVisible}>
          <Icon name="smile" size="sm" />
        </button>
        <button class={compState.actionButtonClasses} onclick={() => props.onReply?.()}>
          <Icon name="reply" size="sm" />
        </button>
        <button class={compState.actionButtonClasses} onclick={() => props.onForward?.()}>
          <Icon name="share" size="sm" />
        </button>
      </div>
    {/if}

    {#if compState.reactionsVisible}
      <div class={compState.reactionsPickerClasses}>
        {#each compState.availableReactions as reaction}
          <span
            class={compState.reactionOptionClasses}
            role="button"
            tabindex="0"
            onclick={() => {
              props.onReaction?.(reaction);
              compState.handleReactionClick(reaction);
            }}
            onkeydown={(e) => compState.handleReactionKeydown(e, reaction)}
          >
            {reaction}
          </span>
        {/each}
      </div>
    {/if}
  </div>
</div>
