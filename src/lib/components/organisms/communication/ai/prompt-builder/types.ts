import type { HTMLAttributes } from 'svelte/elements';

export type PromptVariable = {
  id: string;
  name: string;
  description: string;
  type: 'text' | 'number' | 'boolean' | 'select';
  required?: boolean;
  defaultValue?: string | number | boolean;
  options?: { value: string; label: string }[]; // For select type
};

export type PromptTemplate = {
  id: string;
  name: string;
  description: string;
  content: string;
  variables: PromptVariable[];
  tags?: string[];
};

export type Props = {
  templates?: PromptTemplate[];
  initialPrompt?: string;
  variables?: PromptVariable[];
  onSave?: (prompt: string, variables: PromptVariable[]) => void;
  onRun?: (prompt: string, variables: Record<string, any>) => void;
  showTemplates?: boolean;
  showVariables?: boolean;
  class?: string;
  headerClass?: string;
  editorClass?: string;
  variablesClass?: string;
  footerClass?: string;
} & HTMLAttributes<HTMLDivElement>;
