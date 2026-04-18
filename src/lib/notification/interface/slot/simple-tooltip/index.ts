import type { Snippet } from 'svelte';
import type { TokenSize } from '$stylist/layout/type/enum/size';
import type { TokenAlignment } from '$stylist/layout/type/enum/alignment';
import type { TokenAppearance } from '$stylist/interaction/type/record/appearance';
import type { TokenMarker } from '$stylist/architecture/type/enum/marker';
import type { TokenSkeleton } from '$stylist/architecture/type/enum/skeleton';
import type { HtmlAttributesBase, HtmlAttributesWithChildren } from '$stylist/information/interface/slot';
import type { SlotBaseFeedback } from '$stylist/notification/interface/slot/base-feedback';

export interface SlotSimpleTooltip extends SlotBaseFeedback {
	text: string;
	position?: 'top' | 'right' | 'bottom' | 'left';
	show?: boolean;
}
