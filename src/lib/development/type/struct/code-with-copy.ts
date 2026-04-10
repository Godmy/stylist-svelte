import type { InformationHTMLAttributes } from '$stylist/information/type/struct';

export type CodeWithCopyVariant = 'default' | 'terminal' | 'diff';

export type Props = {
  language?: string;
  variant?: CodeWithCopyVariant;
  showLineNumbers?: boolean;
  startLineNumber?: number;
  copySuccessMessage?: string;
  copyErrorMessage?: string;
  children: import('svelte').Snippet;
} & InformationHTMLAttributes<HTMLElement>;
