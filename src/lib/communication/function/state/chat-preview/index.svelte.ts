import type { ChatPreviewProps } from '$stylist/communication/type/struct/chat-preview';
import type { ChatPreviewContract } from '$stylist/communication/type/struct/chat-preview-contract';
import { joinClassNames } from '$stylist/layout/function/script/join-class-names';

export function createChatPreviewState(props: ChatPreviewProps | ChatPreviewContract) {
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

  const variantClasses: Record<string, string> = {
    default: 'border-[--color-border-secondary] bg-[--color-background-primary]',
    elevated: 'border-transparent bg-[--color-background-primary] shadow-md',
    muted: 'border-[--color-border-secondary] bg-[--color-background-secondary]'
  };

  const sizeClasses: Record<string, string> = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg'
  };

  const styles = {
    container: joinClassNames(
      'rounded-xl border p-4',
      variantClasses[variant] ?? variantClasses.default,
      sizeClasses[size] ?? sizeClasses.md
    ),
    header: 'mb-4 flex items-center justify-between gap-3',
    chatInfo: 'min-w-0',
    title: 'truncate text-sm font-semibold text-[var(--color-text-primary)]',
    participants: 'mt-1 text-xs text-[var(--color-text-secondary)]',
    messagesContainer: 'space-y-3'
  };

  // Merge classes with custom classes
  const classes = $derived(joinClassNames(String(props.class ?? ''), styles.container));

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

