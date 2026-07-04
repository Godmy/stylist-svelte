import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { TokenAppearance } from '$stylist/interaction/type/record/appearance';
import type { TokenSize } from '$stylist/theme/type/alias/size';
import type { ListItemMarkerType } from '$stylist/information/type/alias/list-item-marker-type';

export interface RecipeListItemMarker
	extends ComputeIntersectAll<[SlotTheme, HTMLAttributes<HTMLSpanElement>]> {
	type?: ListItemMarkerType;
	value?: string | number;
	color?: TokenAppearance;
	size?: TokenSize;
}

