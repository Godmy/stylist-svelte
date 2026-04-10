export const ACCORDION_PANEL_CONTEXT = {
	accordionId: '',
	isPanelOpen: (_panelId: string) => false,
	handleValueChange: (_panelId: string) => {}
} satisfies {
	accordionId: string;
	isPanelOpen: (panelId: string) => boolean;
	handleValueChange: (panelId: string) => void;
};
