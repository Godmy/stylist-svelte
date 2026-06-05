import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction/interaction-html-attributes';

export type RestProps = Omit<InteractionHTMLAttributes<HTMLDivElement>, 'class'>;
