import type { TokenArchitecture } from '$stylist/design-system/tokens/architecture/architecture';

export const DEFAULT_DRAGGABLE_CARD_PROPS = {
	disabled: false,
	draggable: true,
	showHandle: true,
	showMenu: true,
	variant: 'default' as TokenArchitecture
};

export const DRAGGABLE_CARD_PRESETS = {
	compact: {
		variant: 'compact' as TokenArchitecture,
		showHandle: true,
		showMenu: false
	},
	minimal: {
		variant: 'minimal' as TokenArchitecture,
		showHandle: false,
		showMenu: true
	},
	kanban: {
		variant: 'default' as TokenArchitecture,
		showHandle: true,
		showMenu: true
	}
};
