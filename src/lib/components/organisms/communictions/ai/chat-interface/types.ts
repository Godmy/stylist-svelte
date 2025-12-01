import type { HTMLAttributes } from 'svelte/elements';

export type Message = {
  id: string;
  content: string;
  sender: 'user' | 'ai';
  timestamp: Date;
  status?: 'sending' | 'delivered' | 'read' | 'error';
};

export type AIProvider = {
  id: string;
  name: string;
  description: string;
};

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
} & HTMLAttributes<HTMLDivElement>;
