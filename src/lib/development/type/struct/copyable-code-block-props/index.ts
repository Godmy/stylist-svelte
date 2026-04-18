import type { CopyableCodeBlockRestProps } from '$stylist/development/type/struct/copyable-code-block-rest-props';

export type CopyableCodeBlockProps = CopyableCodeBlockRestProps & {
  code?: string;
  language?: string;
  title?: string;
  class?: string;
  contentClass?: string;
  headerClass?: string;
};
