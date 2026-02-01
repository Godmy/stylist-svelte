import type { MessageInputProps } from '$stylist/design-system/interaction/communications/message-input';

export function createMessageInputState(props: MessageInputProps) {
  const placeholder = $derived(props.placeholder ?? 'Type a message...');
  const disabled = $derived(props.disabled ?? false);
  const showAttachmentButton = $derived(props.showAttachmentButton ?? true);
  const showEmojiButton = $derived(props.showEmojiButton ?? true);
  const showSendButton = $derived(props.showSendButton ?? true);
  const containerClasses = $derived(
    `flex items-end gap-2 p-3 rounded-xl border border-slate-200 bg-white ${
      props.class ?? ''
    }`.trim()
  );
  const inputContainerClasses = $derived('flex-1 relative');
  const inputClasses = $derived(
    'w-full border-none resize-none px-4 py-2 rounded-full bg-slate-50 max-h-40 overflow-y-auto focus:outline-none focus:ring-2 focus:ring-blue-500'
  );
  const actionButtonsClasses = $derived('flex gap-1');
  const actionButtonClasses = $derived(
    'flex items-center justify-center w-10 h-10 rounded-full bg-transparent border-none cursor-pointer text-slate-500 hover:bg-slate-100 hover:text-slate-600 disabled:opacity-50 disabled:cursor-not-allowed'
  );
  const sendButtonClasses = $derived(
    'flex items-center justify-center w-10 h-10 rounded-full bg-blue-500 text-white hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed'
  );

  return {
    get placeholder() {
      return placeholder;
    },
    get disabled() {
      return disabled;
    },
    get showAttachmentButton() {
      return showAttachmentButton;
    },
    get showEmojiButton() {
      return showEmojiButton;
    },
    get showSendButton() {
      return showSendButton;
    },
    get containerClasses() {
      return containerClasses;
    },
    get inputContainerClasses() {
      return inputContainerClasses;
    },
    get inputClasses() {
      return inputClasses;
    },
    get actionButtonsClasses() {
      return actionButtonsClasses;
    },
    get actionButtonClasses() {
      return actionButtonClasses;
    },
    get sendButtonClasses() {
      return sendButtonClasses;
    }
  };
}

export function createChatPreviewState(props: import('$stylist/design-system/interaction/communications').ChatPreviewProps) {
  const title = $derived(props.title ?? '');
  const participants = $derived(props.participants ?? []);
  const maxMessages = $derived(props.maxMessages ?? 3);
  const showAvatars = $derived(props.showAvatars ?? true);
  const classes = $derived(
    `flex flex-col gap-2 p-4 rounded-lg border border-gray-200 bg-white ${
      props.class ?? ''
    }`.trim()
  );
  const headerClasses = $derived('flex items-center justify-between mb-2');
  const chatInfoClasses = $derived('flex-1');
  const titleClasses = $derived('text-lg font-semibold truncate');
  const participantsClasses = $derived('text-sm text-gray-500 truncate');
  const messagesContainerClasses = $derived('space-y-2 max-h-60 overflow-y-auto');
  const displayMessages = $derived(props.messages?.slice(0, maxMessages) ?? []);

  return {
    get title() {
      return title;
    },
    get participants() {
      return participants;
    },
    get maxMessages() {
      return maxMessages;
    },
    get showAvatars() {
      return showAvatars;
    },
    get classes() {
      return classes;
    },
    get headerClasses() {
      return headerClasses;
    },
    get chatInfoClasses() {
      return chatInfoClasses;
    },
    get titleClasses() {
      return titleClasses;
    },
    get participantsClasses() {
      return participantsClasses;
    },
    get messagesContainerClasses() {
      return messagesContainerClasses;
    },
    get displayMessages() {
      return displayMessages;
    }
  };
}

export function createMessageThreadState(props: import('$stylist/design-system/interaction/communications').MessageThreadProps) {
  const variant = $derived(props.variant ?? 'default');
  const title = $derived(props.title ?? '');
  const messages = $derived(props.messages ?? []);
  const loading = $derived(props.loading ?? false);
  const classes = $derived(
    `flex flex-col gap-4 p-4 rounded-lg ${
      variant === 'compact' ? 'p-2' : 'p-4'
    } ${props.class ?? ''}`.trim()
  );
  const hostClasses = $derived(`flex flex-col gap-4 ${props.class ?? ''}`.trim());
  const headerClasses = $derived('mb-4');
  const containerClasses = $derived('flex-1 overflow-y-auto');
  const variantClass = $derived(variant === 'compact' ? 'gap-2' : 'gap-4');
  const loadingClasses = $derived('flex justify-center items-center py-4');
  const spinnerClasses = $derived('animate-spin rounded-full h-6 w-6 border-b-2 border-blue-500');
  const messageContainerClasses = $derived('space-y-3');
  const messageVariant = $derived(props.messageVariant);

  return {
    get variant() {
      return variant;
    },
    get title() {
      return title;
    },
    get classes() {
      return classes;
    },
    get hostClasses() {
      return hostClasses;
    },
    get headerClasses() {
      return headerClasses;
    },
    get containerClasses() {
      return containerClasses;
    },
    get variantClass() {
      return variantClass;
    },
    get loading() {
      return loading;
    },
    get loadingClasses() {
      return loadingClasses;
    },
    get spinnerClasses() {
      return spinnerClasses;
    },
    get messageContainerClasses() {
      return messageContainerClasses;
    },
    get messages() {
      return messages;
    },
    get messageVariant() {
      return messageVariant;
    }
  };
}