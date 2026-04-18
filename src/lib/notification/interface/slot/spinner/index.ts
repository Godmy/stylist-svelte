import type { Snippet } from 'svelte';
import type { TokenSize } from '$stylist/layout/type/enum/size';
import type { TokenAlignment } from '$stylist/layout/type/enum/alignment';
import type { TokenAppearance } from '$stylist/interaction/type/record/appearance';
import type { TokenMarker } from '$stylist/architecture/type/enum/marker';
import type { TokenSkeleton } from '$stylist/architecture/type/enum/skeleton';
import type { HtmlAttributesBase, HtmlAttributesWithChildren } from '$stylist/information/interface/slot';

export interface SlotSpinner extends HtmlAttributesBase<HTMLDivElement> {
	size?: TokenSize;
	variant?: 'white' | 'gray' | TokenAppearance;
	label?: string;
}
