import { writable } from 'svelte/store';
import { createChatPreviewStyles } from '../styles/chat-preview';
import type { ChatPreviewProps } from '../props/chat-preview';
import { mergeClasses } from '../../utils/classes';

export function createChatPreviewState(props: ChatPreviewProps) {
  // Initialize props with defaults
  const title = props.title;
  const participants = props.participants;
  const messages = props.messages ?? [];
  const maxMessages = props.maxMessages ?? 3;
  const showAvatars = props.showAvatars ?? true;
  const variant = props.variant ?? 'default';
  const size = props.size ?? 'md';

  // Get display messages (limited by maxMessages)
  const displayMessages = $derived(messages.slice(0, maxMessages));

  // Generate styles
  const styles = createChatPreviewStyles({
    variant,
    size
  });

  // Merge classes with custom classes
  const classes = $derived(mergeClasses(props.class ?? '', styles.container));

  return {
    title,
    participants,
    messages,
    displayMessages,
    maxMessages,
    showAvatars,
    variant,
    size,
    classes,
    headerClasses: styles.header,
    chatInfoClasses: styles.chatInfo,
    titleClasses: styles.title,
    participantsClasses: styles.participants,
    messagesContainerClasses: styles.messagesContainer
  };
}

export default createChatPreviewState;
