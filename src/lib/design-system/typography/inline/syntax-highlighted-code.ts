export type SyntaxHighlightedCodeVariant = 'default' | 'terminal' | 'diff';
export type SyntaxHighlightedCodeSize = 'sm' | 'md' | 'lg';

export interface SyntaxHighlightedCodeProps {
  language?: string;
  code?: string;
  variant?: SyntaxHighlightedCodeVariant;
  size?: SyntaxHighlightedCodeSize;
  showLineNumbers?: boolean;
  startLineNumber?: number;
  class?: string;
}

export const DEFAULT_SYNTAX_HIGHLIGHTED_CODE_VARIANT: SyntaxHighlightedCodeVariant = 'default';
export const DEFAULT_SYNTAX_HIGHLIGHTED_CODE_SIZE: SyntaxHighlightedCodeSize = 'md';

export const getSyntaxHighlightedCodeContainerClasses = (
  variant: SyntaxHighlightedCodeVariant,
  size: SyntaxHighlightedCodeSize,
  className = ''
) => {
  const base = `rounded-md ${className}`;
  return base.trim();
};

export const getSyntaxHighlightedCodeClasses = (language: string) => {
  return 'font-mono text-sm';
};
