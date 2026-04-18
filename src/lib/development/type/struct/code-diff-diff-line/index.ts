export type CodeDiffDiffLine = {
  type: 'unchanged' | 'added' | 'removed' | 'changed';
  original: string | null;
  modified: string | null;
  lineNumber: number;
};
