import type { InformationHTMLAttributes } from '$stylist/information/type/struct/information-html-attributes';

export type RestProps = Omit<InformationHTMLAttributes<HTMLDivElement>, 'class'>;
