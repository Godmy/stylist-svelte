import type { InformationHTMLAttributes } from '$stylist/information/type/struct';

export type RestProps = Omit<InformationHTMLAttributes<HTMLDivElement>, 'class'>;

export type CopyableCodeBlockProps = RestProps & {
  code?: string;
  language?: string;
  title?: string;
  class?: string;
  contentClass?: string;
  headerClass?: string;
};
