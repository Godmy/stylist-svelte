import type { TimelineContract } from '$stylist/calendar/interface/record/calendar';
import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';

export type TimelineProps = TimelineContract & InteractionHTMLAttributes<HTMLDivElement>;
