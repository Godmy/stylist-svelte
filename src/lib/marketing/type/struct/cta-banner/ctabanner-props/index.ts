export type CtaBannerProps = {
  title: string;
  description?: string;
  buttons: CtaBannerButton[];
  backgroundVariant?: TokenBackground;
  backgroundImage?: string;
  class?: string;
} & InformationHTMLAttributes<HTMLElement>;
