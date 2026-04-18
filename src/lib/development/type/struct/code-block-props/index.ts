import type { CodeBlockRestProps } from '$stylist/development/type/struct/code-block-rest-props';

export type CodeBlockProps = CodeBlockRestProps & {
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
