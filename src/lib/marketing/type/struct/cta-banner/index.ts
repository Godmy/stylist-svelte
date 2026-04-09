import type { InformationHTMLAttributes } from '$stylist/information/type/struct';
import type { TokenBackground } from '$stylist/layout/type/enum/background';

export type CtaBannerButton = {
  label: string;
  variant: 'primary' | 'secondary' | 'outline';
  onClick: () => void;
};

export type CtaBannerProps = {
  title: string;
  description?: string;
  buttons: CtaBannerButton[];
  backgroundVariant?: TokenBackground;
  backgroundImage?: string;
  class?: string;
} & InformationHTMLAttributes<HTMLElement>;
