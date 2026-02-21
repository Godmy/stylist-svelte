/**
 * MessageComposer types and interfaces following SOLID principles
 */

import type { HTMLAttributes } from 'svelte/elements';
import type { Snippet } from 'svelte';

export interface IMessageComposerProps extends HTMLAttributes<HTMLDivElement> {
  value?: string;
  placeholder?: string;
  class?: string;
  inputClass?: string;
  buttonClass?: string;
  disabled?: boolean;
  showAttachmentButton?: boolean;
  showVoiceButton?: boolean;
  onSendMessage?: (text: string) => void;
  onAttachmentClick?: () => void;
  onVoiceClick?: () => void;
}