export interface RecipeDomainToolbar {
	active?: string;
	domains?: readonly string[];
	orientation?: 'horizontal' | 'vertical';
	showLabel?: boolean;
	onSelect?: (name: string) => void;
	class?: string;
}
