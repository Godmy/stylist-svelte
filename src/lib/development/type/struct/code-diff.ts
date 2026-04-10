export type CodeDiffRestProps = Omit<import('$stylist/information/type/struct').InformationHTMLAttributes<HTMLDivElement>, 'class'>;

export type Props = CodeDiffRestProps & {
  original?: string;
  modified?: string;
  language?: string;
  class?: string;
  contentClass?: string;
  headerClass?: string;
  showLineNumbers?: boolean;
};

export type DiffLine = {
  type: 'unchanged' | 'added' | 'removed' | 'changed';
  original: string | null;
  modified: string | null;
  lineNumber: number;
};
