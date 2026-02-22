import type { HTMLAttributes } from 'svelte/elements';

export type Model = {
  id: string;
  name: string;
  description: string;
  capabilities: string[];
  provider: string;
  version: string;
  tags?: string[];
};

export type ModelSelectorProps = {
  models?: Model[];
  selectedModel?: string;
  onModelSelect?: (modelId: string) => void;
  showTags?: boolean;
  showCapabilities?: boolean;
  placeholder?: string;
  class?: string;
  dropdownClass?: string;
  modelItemClass?: string;
  headerClass?: string;
} & HTMLAttributes<HTMLDivElement>;
