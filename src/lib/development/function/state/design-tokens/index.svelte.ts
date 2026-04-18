import { THEME_MODE_DARK } from '$stylist/theme/const/record/theme-mode-dark';
import { THEME_MODE_LIGHT } from '$stylist/theme/const/record/theme-mode-light';
import type { DesignTokensProps } from '$stylist/development/type/struct/design-tokens-props';
import type { DesignTokensTheme } from '$stylist/development/type/struct/design-tokens-theme';
import { DesignTokensStyleManager } from '$stylist/development/class/style-manager/design-tokens';

export function createDesignTokensState(props: DesignTokensProps) {
	let currentTheme = $state<DesignTokensTheme>(props.theme === 'light' ? THEME_MODE_LIGHT : THEME_MODE_DARK);
	const layoutTokens = $derived((currentTheme as any).layout ?? {});

	const theme = $derived(props.theme ?? 'light');
	const showTokens = $derived(props.showTokens ?? true);
	const showColorPalette = $derived(props.showColorPalette ?? true);
	const showSpacing = $derived(props.showSpacing ?? true);
	const showTypography = $derived(props.showTypography ?? true);
	const showBorderRadius = $derived(props.showBorderRadius ?? true);
	const showShadows = $derived(props.showShadows ?? true);

	const containerClass = $derived(DesignTokensStyleManager.getContainerClasses());
	const headerClass = $derived(DesignTokensStyleManager.getHeaderClasses());
	const titleClass = $derived(DesignTokensStyleManager.getTitleClasses());
	const descriptionClass = $derived(DesignTokensStyleManager.getDescriptionClasses());
	const tokensGridClass = $derived(DesignTokensStyleManager.getTokensGridClasses());
	const tokenCardClass = $derived(DesignTokensStyleManager.getTokenCardClasses());
	const getTokenPreviewClass = (color: string) => DesignTokensStyleManager.getTokenPreviewClasses(color);
	const tokenNameClass = $derived(DesignTokensStyleManager.getTokenNameClasses());
	const tokenValueClass = $derived(DesignTokensStyleManager.getTokenValueClasses());
	const tokenCategoryClass = $derived(DesignTokensStyleManager.getTokenCategoryClasses());
	const sectionContainerClass = $derived(DesignTokensStyleManager.getSectionContainerClasses());
	const sectionTitleClass = $derived(DesignTokensStyleManager.getSectionTitleClasses());
	const tokensTableClass = $derived(DesignTokensStyleManager.getTokensTableClasses());
	const tableRowClass = $derived(DesignTokensStyleManager.getTableRowClasses());
	const tableCellClass = $derived(DesignTokensStyleManager.getTableCellClasses());
	const previewCellClass = $derived(DesignTokensStyleManager.getPreviewCellClasses());
	const getColorPreviewClass = (color: string) => DesignTokensStyleManager.getColorPreviewClasses(color);
	const nameCellClass = $derived(DesignTokensStyleManager.getNameCellClasses());
	const valueCellClass = $derived(DesignTokensStyleManager.getValueCellClasses());
	const copyButtonClass = $derived(DesignTokensStyleManager.getCopyButtonClasses());
	const copyIconClass = $derived(DesignTokensStyleManager.getCopyIconClasses());
	const filtersContainerClass = $derived(DesignTokensStyleManager.getFiltersContainerClasses());
	const getFilterButtonClass = (isActive: boolean) => DesignTokensStyleManager.getFilterButtonClasses(isActive);

	$effect(() => {
		currentTheme = theme === 'light' ? THEME_MODE_LIGHT : THEME_MODE_DARK;
	});

	function renderColorToken(tokenName: string, tokenValue: string) {
		return `
      <div class="flex flex-col items-center p-2">
        <div
          class="w-16 h-16 rounded-md border border-[--color-border-primary] mb-2"
          style="background-color: ${tokenValue}"
        ></div>
        <span class="text-xs font-mono">${tokenName}</span>
        <span class="text-xs">${tokenValue}</span>
      </div>
    `;
	}

	function isColorToken(tokenName: string) {
		return tokenName.includes('color-') &&
			!tokenName.includes('text') &&
			!tokenName.includes('bg') &&
			!tokenName.includes('control');
	}

	return {
		get currentTheme() { return currentTheme; },
		get layoutTokens() { return layoutTokens; },
		get theme() { return theme; },
		get showTokens() { return showTokens; },
		get showColorPalette() { return showColorPalette; },
		get showSpacing() { return showSpacing; },
		get showTypography() { return showTypography; },
		get showBorderRadius() { return showBorderRadius; },
		get showShadows() { return showShadows; },
		get containerClass() { return containerClass; },
		get headerClass() { return headerClass; },
		get titleClass() { return titleClass; },
		get descriptionClass() { return descriptionClass; },
		get tokensGridClass() { return tokensGridClass; },
		get tokenCardClass() { return tokenCardClass; },
		getTokenPreviewClass,
		get tokenNameClass() { return tokenNameClass; },
		get tokenValueClass() { return tokenValueClass; },
		get tokenCategoryClass() { return tokenCategoryClass; },
		get sectionContainerClass() { return sectionContainerClass; },
		get sectionTitleClass() { return sectionTitleClass; },
		get tokensTableClass() { return tokensTableClass; },
		get tableRowClass() { return tableRowClass; },
		get tableCellClass() { return tableCellClass; },
		get previewCellClass() { return previewCellClass; },
		getColorPreviewClass,
		get nameCellClass() { return nameCellClass; },
		get valueCellClass() { return valueCellClass; },
		get copyButtonClass() { return copyButtonClass; },
		get copyIconClass() { return copyIconClass; },
		get filtersContainerClass() { return filtersContainerClass; },
		getFilterButtonClass,
		renderColorToken,
		isColorToken
	};
}

export default createDesignTokensState;
