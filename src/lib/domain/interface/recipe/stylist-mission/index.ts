export interface RecipeStylistMission {
	badgeText?: string;
	title?: string;
	description?: string;
	primaryLabel?: string;
	primaryHref?: string;
	secondaryLabel?: string;
	secondaryHref?: string;
	onPrimaryOpen?: () => void;
	onSecondaryOpen?: () => void;
	class?: string;
}
