import type { InformationHTMLAttributes } from '$stylist/information/type/struct';
import type { CodeWithCopyVariant } from '$stylist/development/type/struct/code-with-copy-variant';

export type CodeWithCopyProps = {
  language?: string;
  variant?: CodeWithCopyVariant;
  showLineNumbers?: boolean;
  startLineNumber?: number;
  copySuccessMessage?: string;
  copyErrorMessage?: string;
  children: import('svelte').Snippet;
} & InformationHTMLAttributes<HTMLElement>;
