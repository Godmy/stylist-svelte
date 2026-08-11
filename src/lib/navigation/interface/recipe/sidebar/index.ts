import type { HTMLAttributes } from 'svelte/elements';
import type { Snippet } from 'svelte';
import type { BehaviorTransformable as ITransformable } from '$stylist/animation/interface/behavior/transformable';
import type { TierContent } from '$stylist/architecture/type/alias/tier';
import type { BehaviorClickable as IClickable } from '$stylist/layout/interface/behavior/clickable';
import type { BehaviorDraggable as IDraggable } from '$stylist/layout/interface/behavior/draggable';
import type { BehaviorFocusable as IFocusable } from '$stylist/layout/interface/behavior/focusable';
import type { LayoutHTMLAttributes } from '$stylist/layout/interface/behavior/layout-html-attributes';
import type { BehaviorScrollable as IScrollable } from '$stylist/layout/interface/behavior/scrollable';
import type { BehaviorSizable as ISizable } from '$stylist/layout/interface/behavior/sizable';
import type { TokenAlignment } from '$stylist/layout/type/alias/alignment';
import type { NavItem } from '$stylist/navigation/type/struct/sidebar';
import type { SlotIcon } from '$stylist/svg/interface/slot/icon';
import type { SlotChildren } from '$stylist/theme/interface/slot/children';
import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotText } from '$stylist/typography/interface/slot/text';

export interface RecipeSidebar
	extends ComputeIntersectAll<
		[
			LayoutHTMLAttributes<HTMLElement>,
			HTMLAttributes<HTMLDivElement>,
			{
				items: NavItem[];
				title?: string;
				logo?: Snippet;
				footer?: Snippet;
				collapsed?: boolean;
				collapsible?: boolean;
				mobileBreakpoint?: number;
				width?: string;
				mobileWidth?: string;
				variant?: TierContent;
				position?: TokenAlignment;
				disabled?: boolean;
				navClass?: string;
				itemClass?: string;
				activeItemClass?: string;
				disabledItemClass?: string;
				titleClass?: string;
				logoClass?: string;
				footerClass?: string;
				class?: string;
			},
			SlotChildren,
			SlotTheme,
			SlotText,
			SlotIcon,
			IClickable,
			IDraggable,
			ITransformable,
			IFocusable,
			ISizable,
			IScrollable
		]
	> {}
