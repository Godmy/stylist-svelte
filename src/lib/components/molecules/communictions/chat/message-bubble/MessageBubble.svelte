<script lang="ts">
  /**
   * @component MessageBubble
   * @description Chat message bubble component for displaying messages in a conversation
   * 
   * SOLID Principles Applied:
   * - Single Responsibility: Only handles chat message display
   * - Open/Closed: Extensible through props without modifying source
   * - Liskov Substitution: Can substitute any message display
   * - Interface Segregation: Minimal interface via IMessageBubbleProps
   * - Dependency Inversion: Depends on abstractions (props interface)
   * 
   * Atomic Design: Atom - Basic UI element for chat message display
   */

  import type { IMessageBubbleProps } from './types';
  import { MessageBubbleStyleManager } from './styles';
  import Avatar from '../../../atoms/media/avatar/Avatar.svelte';

  // Define component props using the interface
  let {
    author,
    message,
    timestamp,
    align = 'left',
    avatar,
    variant = 'default',
    class: className = ''
  }: IMessageBubbleProps = $props();

  // Get CSS classes from style manager
  let containerClasses = $derived(MessageBubbleStyleManager.getContainerClasses(align, className));
  let wrapperClasses = $derived(MessageBubbleStyleManager.getWrapperClasses(align, variant));
  let authorClasses = $derived(MessageBubbleStyleManager.getAuthorClasses(align, variant));
  let messageClasses = $derived(MessageBubbleStyleManager.getMessageClasses(align, variant));
  let timestampClasses = $derived(MessageBubbleStyleManager.getTimestampClasses(align, variant));
  let avatarContainerClasses = $derived(MessageBubbleStyleManager.getAvatarContainerClasses(align));
</script>

<div class={containerClasses}>
  {#if avatar && align === 'left'}
    <div class={avatarContainerClasses}>
      <Avatar src={avatar} size="sm" />
    </div>
  {/if}
  
  <div class={wrapperClasses}>
    <div class={authorClasses}>{author}</div>
    <div class={messageClasses}>{message}</div>
    {#if timestamp}
      <div class={timestampClasses}>{timestamp}</div>
    {/if}
  </div>
  
  {#if avatar && align === 'right'}
    <div class={avatarContainerClasses}>
      <Avatar src={avatar} size="sm" />
    </div>
  {/if}
</div>