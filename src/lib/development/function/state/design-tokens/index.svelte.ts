import { THEME_MODE_DARK } from '$stylist/theme/const/record/theme-mode-dark';
import { THEME_MODE_LIGHT } from '$stylist/theme/const/record/theme-mode-light';
import type { RecipeDesignTokens } from '$stylist/development/interface/recipe/design-tokens';
import type { DesignTokensTheme } from '$stylist/development/type/struct/design-tokens-theme';

export function createDesignTokensState(props: RecipeDesignTokens) {
	let currentTheme = $state<DesignTokensTheme>(
		props.theme === 'light' ? THEME_MODE_LIGHT : THEME_MODE_DARK
	);
	const layoutTokens = $derived((currentTheme as any).layout ?? {});

	const theme = $derived(props.theme ?? 'light');
	const showTokens = $derived(props.showTokens ?? true);
	const showColorPalette = $derived(props.showColorPalette ?? true);
	const showSpacing = $derived(props.showSpacing ?? true);
	const showTypography = $derived(props.showTypography ?? true);
	const showBorderRadius = $derived(props.showBorderRadius ?? true);
	const showShadows = $derived(props.showShadows ?? true);

	const containerClass = $derived('dt-container');
	const headerClass = $derived('dt-header');
	const titleClass = $derived('dt-title');
	const descriptionClass = $derived('dt-description');
	const tokensGridClass = $derived('dt-tokens-grid');
	const tokenCardClass = $derived('dt-token-card');
	const getTokenPreviewClass = (color: string) => `dt-token-preview ${color}`;
	const tokenNameClass = $derived('dt-token-name');
	const tokenValueClass = $derived('dt-token-value');
	const tokenCategoryClass = $derived('dt-token-category');
	const sectionContainerClass = $derived('dt-section');
	const sectionTitleClass = $derived('dt-section-title');
	const tokensTableClass = $derived('dt-table');
	const tableRowClass = $derived('dt-table-row');
	const tableCellClass = $derived('dt-table-cell');
	const previewCellClass = $derived('dt-preview-cell');
	const getColorPreviewClass = (color: string) => `dt-color-preview ${color}`;
	const nameCellClass = $derived('dt-name-cell');
	const valueCellClass = $derived('dt-value-cell');
	const copyButtonClass = $derived('dt-copy-btn');
	const copyIconClass = $derived('dt-copy-icon');
	const filtersContainerClass = $derived('dt-filters');
	const getFilterButtonClass = (isActive: boolean) =>
		`dt-filter-btn ${isActive ? 'dt-filter-btn--active' : ''}`;

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
		return (
			tokenName.includes('color-') &&
			!tokenName.includes('text') &&
			!tokenName.includes('bg') &&
			!tokenName.includes('control')
		);
	}

	return {
		get currentTheme() {
			return currentTheme;
		},
		get layoutTokens() {
			return layoutTokens;
		},
		get theme() {
			return theme;
		},
		get showTokens() {
			return showTokens;
		},
		get showColorPalette() {
			return showColorPalette;
		},
		get showSpacing() {
			return showSpacing;
		},
		get showTypography() {
			return showTypography;
		},
		get showBorderRadius() {
			return showBorderRadius;
		},
		get showShadows() {
			return showShadows;
		},
		get containerClass() {
			return containerClass;
		},
		get headerClass() {
			return headerClass;
		},
		get titleClass() {
			return titleClass;
		},
		get descriptionClass() {
			return descriptionClass;
		},
		get tokensGridClass() {
			return tokensGridClass;
		},
		get tokenCardClass() {
			return tokenCardClass;
		},
		getTokenPreviewClass,
		get tokenNameClass() {
			return tokenNameClass;
		},
		get tokenValueClass() {
			return tokenValueClass;
		},
		get tokenCategoryClass() {
			return tokenCategoryClass;
		},
		get sectionContainerClass() {
			return sectionContainerClass;
		},
		get sectionTitleClass() {
			return sectionTitleClass;
		},
		get tokensTableClass() {
			return tokensTableClass;
		},
		get tableRowClass() {
			return tableRowClass;
		},
		get tableCellClass() {
			return tableCellClass;
		},
		get previewCellClass() {
			return previewCellClass;
		},
		getColorPreviewClass,
		get nameCellClass() {
			return nameCellClass;
		},
		get valueCellClass() {
			return valueCellClass;
		},
		get copyButtonClass() {
			return copyButtonClass;
		},
		get copyIconClass() {
			return copyIconClass;
		},
		get filtersContainerClass() {
			return filtersContainerClass;
		},
		getFilterButtonClass,
		renderColorToken,
		isColorToken
	};
}
