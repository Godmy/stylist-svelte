import type { InteractionHTMLAttributes } from '$stylist/interaction';

export type RestProps = Omit<InteractionHTMLAttributes<HTMLDivElement>, 'class'>;
