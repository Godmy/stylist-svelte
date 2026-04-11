import type { InformationHTMLAttributes } from '$stylist/information';
import type { TokenBackground } from '$stylist/layout';
import type { CtaBannerButton } from '../ctabannerbutton';

export type CtaBannerProps = {
  title: string;
  description?: string;
  buttons: CtaBannerButton[];
  backgroundVariant?: TokenBackground;
  backgroundImage?: string;
  class?: string;
} & InformationHTMLAttributes<HTMLElement>;
