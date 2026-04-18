import type { CodeDiffRestProps } from '$stylist/development/type/struct/code-diff-rest-props';

export type CodeDiffProps = CodeDiffRestProps & {
  original?: string;
  modified?: string;
  language?: string;
  class?: string;
  contentClass?: string;
  headerClass?: string;
  showLineNumbers?: boolean;
};
