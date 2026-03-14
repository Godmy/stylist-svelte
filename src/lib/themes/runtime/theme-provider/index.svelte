<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import type { Snippet } from 'svelte';
	import { applyThemeToDOM } from '../css';
	import { setThemeContext } from '../theme-context';
	import { darkTheme, lightTheme } from '../../defaults/themes';
	import type { Theme } from '../../contracts/theme';
	import type { ThemeName } from '../../contracts/theme-name';

	type ThemeProviderContract = {
		initialTheme?: ThemeName;
		class?: string;
		children: Snippet;
	} & HTMLAttributes<HTMLDivElement>;

	let { initialTheme = 'light', class: className = '', children, ...restProps }: ThemeProviderContract = $props();

	const themes: Record<ThemeName, Theme> = {
		light: lightTheme,
		dark: darkTheme
	};

	let currentTheme = $state<ThemeName>(initialTheme);

	/**
	 * Change the current theme
	 */
	function setTheme(themeName: ThemeName): void {
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




