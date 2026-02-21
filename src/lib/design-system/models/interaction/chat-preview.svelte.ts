import { writable } from 'svelte/store';
import { createChatPreviewStyles } from '../../styles/information/chat-preview';
import type { ChatPreviewProps } from '../../props/interaction/chat-preview';
import { mergeClasses } from '$stylist/utils/classes';

export function createChatPreviewState(props: ChatPreviewProps) {
  // Initialize props with defaults
  const title = props.title ?? 'Chat';
  const participants = props.participants ?? [];
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
    get title() {
      return title;
    },
    get participants() {
      return participants;
    },
    get messages() {
      return messages;
    },
    get displayMessages() {
      return displayMessages;
    },
    get maxMessages() {
      return maxMessages;
    },
    get showAvatars() {
      return showAvatars;
    },
    get variant() {
      return variant;
    },
    get size() {
      return size;
    },
    get classes() {
      return classes;
    },
    get headerClasses() {
      return styles.header;
    },
    get chatInfoClasses() {
      return styles.chatInfo;
    },
    get titleClasses() {
      return styles.title;
    },
    get participantsClasses() {
      return styles.participants;
    },
    get messagesContainerClasses() {
      return styles.messagesContainer;
    }
  };
}

export default createChatPreviewState;
