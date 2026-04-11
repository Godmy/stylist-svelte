export type GeneralToolbarRecipe = ThemeAttributes<HTMLDivElement> & {
	toolbarItems?: ToolbarItem[];
	compact?: boolean;
	disabled?: boolean;
	class?: string;
}
