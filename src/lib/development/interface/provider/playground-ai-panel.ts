export interface AIProvider {
  id: string;
  name: string;
  options: AIOption[];
}

export interface AIOption {
  id: string;
  label: string;
  action?: () => void;
}

export interface Props {
  selectedProviderId?: string | null;
  onOptionSelect?: (providerId: string, optionId: string) => void;
  onStartChat?: (providerId: 'gemini' | 'qwen' | 'claude' | 'codex') => void;
}
