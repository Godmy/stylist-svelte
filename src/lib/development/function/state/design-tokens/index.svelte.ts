import { THEME_MODE_DARK } from '$stylist/theme/const/struct/theme-mode-dark';
import { THEME_MODE_LIGHT } from '$stylist/theme/const/struct/theme-mode-light';
import type { Props, Theme } from '$stylist/development/type/struct/design-tokens';
import { DesignTokensStyleManager } from '$stylist/development/class/style-manager/design-tokens';

export function createDesignTokensState(props: Props) {
	let currentTheme = $state<Theme>(props.theme === 'light' ? THEME_MODE_LIGHT : THEME_MODE_DARK);
	const layoutTokens = $derived((currentTheme as any).layout ?? {});

	const theme = $derived(props.theme ?? 'light');
	const showTokens = $derived(props.showTokens ?? true);
	const showColorPalette = $derived(props.showColorPalette ?? true);
	const showSpacing = $derived(props.showSpacing ?? true);
	const showTypography = $derived(props.showTypography ?? true);
	const showBorderRadius = $derived(props.showBorderRadius ?? true);
	const showShadows = $derived(props.showShadows ?? true);

	const containerClass = $derived(DesignTokensStyleManager.getContainerClasses());
	const sectionClass = $derived(DesignTokensStyleManager.getSectionClasses());
	const sectionTitleClass = $derived(DesignTokensStyleManager.getSectionTitleClasses());
	const colorGridClass = $derived(DesignTokensStyleManager.getColorGridClasses());
	const colorItemClass = $derived(DesignTokensStyleManager.getColorItemClasses());
	const colorPreviewClass = $derived(DesignTokensStyleManager.getColorPreviewClasses());
	const colorNameClass = $derived(DesignTokensStyleManager.getColorNameClasses());
	const colorValueClass = $derived(DesignTokensStyleManager.getColorValueClasses());
	const spacingSectionClass = $derived(DesignTokensStyleManager.getSpacingSectionClasses());
	const spacingItemClass = $derived(DesignTokensStyleManager.getSpacingItemClasses());
	const spacingPreviewClass = $derived(DesignTokensStyleManager.getSpacingPreviewClasses());
	const typographySectionClass = $derived(DesignTokensStyleManager.getTypographySectionClasses());
	const typographyItemClass = $derived(DesignTokensStyleManager.getTypographyItemClasses());
	const borderRadiusSectionClass = $derived(DesignTokensStyleManager.getBorderRadiusSectionClasses());
	const borderRadiusItemClass = $derived(DesignTokensStyleManager.getBorderRadiusItemClasses());
	const borderRadiusPreviewClass = $derived(DesignTokensStyleManager.getBorderRadiusPreviewClasses());
	const shadowsSectionClass = $derived(DesignTokensStyleManager.getShadowsSectionClasses());
	const shadowItemClass = $derived(DesignTokensStyleManager.getShadowItemClasses());

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
		get sectionClass() { return sectionClass; },
		get sectionTitleClass() { return sectionTitleClass; },
		get colorGridClass() { return colorGridClass; },
		get colorItemClass() { return colorItemClass; },
		get colorPreviewClass() { return colorPreviewClass; },
		get colorNameClass() { return colorNameClass; },
		get colorValueClass() { return colorValueClass; },
		get spacingSectionClass() { return spacingSectionClass; },
		get spacingItemClass() { return spacingItemClass; },
		get spacingPreviewClass() { return spacingPreviewClass; },
		get typographySectionClass() { return typographySectionClass; },
		get typographyItemClass() { return typographyItemClass; },
		get borderRadiusSectionClass() { return borderRadiusSectionClass; },
		get borderRadiusItemClass() { return borderRadiusItemClass; },
		get borderRadiusPreviewClass() { return borderRadiusPreviewClass; },
		get shadowsSectionClass() { return shadowsSectionClass; },
		get shadowItemClass() { return shadowItemClass; },
		renderColorToken,
		isColorToken
	};
}

export default createDesignTokensState;
