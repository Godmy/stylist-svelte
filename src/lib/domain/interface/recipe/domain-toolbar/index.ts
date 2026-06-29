export interface RecipeDomainToolbar {
	active?: string;
	orientation?: 'horizontal' | 'vertical';
	showLabel?: boolean;
	onSelect?: (name: string) => void;
	class?: string;
}
