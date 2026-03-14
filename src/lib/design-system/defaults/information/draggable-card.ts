import type { SidebarVariant } from '$stylist/design-system/tokens/interaction/variants';

export const DEFAULT_DRAGGABLE_CARD_PROPS = {
	disabled: false,
	draggable: true,
	showHandle: true,
	showMenu: true,
	variant: 'default' as SidebarVariant
};

export const DRAGGABLE_CARD_PRESETS = {
	compact: {
		variant: 'compact' as SidebarVariant,
		showHandle: true,
		showMenu: false
	},
	minimal: {
		variant: 'minimal' as SidebarVariant,
		showHandle: false,
		showMenu: true
	},
	kanban: {
		variant: 'default' as SidebarVariant,
		showHandle: true,
		showMenu: true
	}
};
