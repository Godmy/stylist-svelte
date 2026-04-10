import type { InformationHTMLAttributes } from '$stylist/information/type/struct';

export type CodeSectionVariant = 'default' | 'terminal' | 'diff';

export type Props = {
  title?: string;
  language?: string;
  code: string;
  variant?: CodeSectionVariant;
  showLineNumbers?: boolean;
  startLineNumber?: number;
  showCopyButton?: boolean;
  copySuccessMessage?: string;
  copyErrorMessage?: string;
  tags?: string[];
} & InformationHTMLAttributes<HTMLElement>;
