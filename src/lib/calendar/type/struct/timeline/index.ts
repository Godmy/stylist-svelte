import type { RecipeTimeline as TimelineContract } from '$stylist/calendar/interface/recipe/timeline';
import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';

export type TimelineProps = TimelineContract & InteractionHTMLAttributes<HTMLDivElement>;
