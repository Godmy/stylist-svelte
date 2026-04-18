import type { CodeBlockWithLineNumbersRestProps } from '$stylist/development/type/struct/code-block-with-line-numbers-rest-props';

export type CodeBlockWithLineNumbersProps = CodeBlockWithLineNumbersRestProps & {
  code?: string;
  language?: string;
  highlightLines?: number[];
  title?: string;
  copyable?: boolean;
  class?: string;
  contentClass?: string;
  lineNumberClass?: string;
  codeClass?: string;
  headerClass?: string;
};
