<script lang="ts">
	import type { InformationHTMLAttributes } from '$stylist/design-system/html/attributes/information';
	import type { Theme } from '$stylist/design-system/contracts/theme/theme';
	import type { TokenThemeName } from '$stylist/design-system/tokens/theme/theme-name';
	import { darkTheme, lightTheme } from '$stylist/design-system/defaults/themes';
	import type { Snippet } from 'svelte';
	import { applyThemeToDOM } from '../css';
	import { setThemeContext } from '../theme-context';

	type ThemeProviderContract = {
		initialTheme?: TokenThemeName;
		class?: string;
		children: Snippet;
	} & InformationHTMLAttributes<HTMLDivElement>;

	let { initialTheme = 'light', class: className = '', children, ...restProps }: ThemeProviderContract = $props();

	const themes: Record<TokenThemeName, Theme> = {
		light: lightTheme,
		dark: darkTheme
	};

	let currentTheme = $state<TokenThemeName>(initialTheme);

	/**
	 * Change the current theme
	 */
	function setTheme(themeName: TokenThemeName): void {
		currentTheme = themeName;
		const theme = themes[themeName];

		// Apply theme using our new automated system
		applyThemeToDOM(theme);
	}

	// Sync when parent updates initialTheme
	$effect(() => {
		if (initialTheme && initialTheme !== currentTheme) {
			setTheme(initialTheme);
		}
	});

	// Initialize theme on mount
	$effect(() => {
		setTheme(currentTheme);
	});

	// Update context when theme changes
	$effect(() => {
		const theme = themes[currentTheme];
		setThemeContext(theme, currentTheme, setTheme);
	});

	const containerClass = $derived(className ? `w-full h-full ${className}` : 'w-full h-full');
</script>

<div class={containerClass} {...restProps}>
	{@render children()}
</div>



