import type { InformationHTMLAttributes } from '$stylist/information/type/struct';

export type RestProps = Omit<InformationHTMLAttributes<HTMLDivElement>, 'class'>;

export type CodeBlockProps = RestProps & {
  code?: string;
  language?: string;
  showLineNumbers?: boolean;
  highlightLines?: number[];
  title?: string;
  copyable?: boolean;
  class?: string;
  contentClass?: string;
  lineNumberClass?: string;
  codeClass?: string;
  headerClass?: string;
};
