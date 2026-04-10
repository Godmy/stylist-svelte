import type { InformationHTMLAttributes } from '$stylist/information/type/struct';

export type DocumentationBlockVariant = 'default' | 'info' | 'warning' | 'success' | 'danger';

export type Props = {
  title?: string;
  content: string;
  variant?: DocumentationBlockVariant;
  codeExamples?: {
    title?: string;
    code: string;
    language?: string;
    showLineNumbers?: boolean;
  }[];
  tags?: string[];
} & InformationHTMLAttributes<HTMLElement>;
