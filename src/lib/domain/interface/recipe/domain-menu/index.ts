export interface RecipeDomainMenu {
	landingVisible?: boolean;
	domainVisible?: boolean;
	diagnosticsOpen?: boolean;
	settingsOpen?: boolean;
	onLandingToggle?: () => void;
	onDomainToggle?: () => void;
	onDiagnosticsToggle?: () => void;
	onSettingsToggle?: () => void;
	class?: string;
}
