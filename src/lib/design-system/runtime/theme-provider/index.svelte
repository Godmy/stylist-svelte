<script lang="ts">
	import type { Snippet } from 'svelte';

	import type { InformationHTMLAttributes } from '$stylist/design-system/html/attributes/information';
	import type { Theme } from '$stylist/design-system/contracts/theme/theme';
	import type { TokenThemeName } from '$stylist/design-system/tokens/theme/theme-name';
	import { darkTheme, lightTheme } from '$stylist/design-system/defaults/theme';

	import { applyThemeToDOM } from '../css';
	import { setThemeContext } from '../theme-context';

	type ThemeProviderProps = {
		initialTheme?: TokenThemeName;
		class?: string;
		children: Snippet;
	} & InformationHTMLAttributes<HTMLDivElement>;

	let { initialTheme = 'light', class: className = '', children, ...restProps }: ThemeProviderProps =
		$props();

	const themes: Record<TokenThemeName, Theme> = {
		light: lightTheme,
		dark: darkTheme
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
