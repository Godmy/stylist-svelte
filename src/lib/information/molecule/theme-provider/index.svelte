<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { InformationHTMLAttributes } from '$stylist/information/type/attribute/item';
	import type { Theme } from '$stylist/information/type/attribute/theme';
	import type { TokenThemeName } from '$stylist/information/type/token/theme-name';
	import { THEME_DARK } from '$stylist/information/const/theme/dark';
	import { THEME_LIGHT } from '$stylist/information/const/theme/light';

	import { applyThemeToDOM } from '$stylist/information/function/css';
	import { setThemeContext } from '$stylist/information/children/theme-context';

	type ThemeProviderProps = {
		initialTheme?: TokenThemeName;
		class?: string;
		children: Snippet;
	} & InformationHTMLAttributes<HTMLDivElement>;

	let { initialTheme = 'light', class: className = '', children, ...restProps }: ThemeProviderProps =
		$props();

	const themes: Record<TokenThemeName, Theme> = {
		light: THEME_LIGHT,
		dark: THEME_DARK
	};

	let currentTheme = $state<TokenThemeName>(initialTheme);

	function setTheme(themeName: TokenThemeName): void {
		currentTheme = themeName;
		const theme = themes[themeName];
		applyThemeToDOM(theme);
	}

	$effect(() => {
		if (initialTheme && initialTheme !== currentTheme) {
			setTheme(initialTheme);
		}
	});

	$effect(() => {
		setTheme(currentTheme);
	});

	$effect(() => {
		const theme = themes[currentTheme];
		setThemeContext(theme, currentTheme, setTheme);
	});

	const containerClass = $derived(className ? `w-full h-full ${className}` : 'w-full h-full');
</script>

<div class={containerClass} {...restProps}>
	{@render children()}
</div>
