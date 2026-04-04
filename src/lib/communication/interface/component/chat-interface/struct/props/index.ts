import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';
import type { Message } from '$stylist/communication/type/struct/chat-interface/message';
import type { AIProvider } from '$stylist/communication/type/struct/chat-interface/ai-provider';

// ChatInterface props interface
export type ChatInterfaceProps = {
  messages?: Message[];
  onSend: (message: string) => void;
  aiProviders?: AIProvider[];
  currentProvider?: string;
  placeholder?: string;
  showSettings?: boolean;
  showProviderSelector?: boolean;
  class?: string;
  headerClass?: string;
  messageListClass?: string;
  messageClass?: string;
  inputClass?: string;
  footerClass?: string;
} & InteractionHTMLAttributes<HTMLDivElement>;
