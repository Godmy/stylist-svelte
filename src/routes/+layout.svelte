<script lang="ts">
	import '../app.css';
	import { onMount } from 'svelte';
	import { ThemeProvider } from '$stylist/theme/component/atom/theme-provider';
	import { applyThemeMode } from '$stylist/theme/function/script/dom/apply-theme-mode';
	import { applyThemeModeAndScheme } from '$stylist/theme/function/script/dom/apply-theme-mode-and-scheme';
	import { ManagerTheme as ThemeManager } from '$stylist/theme/class/manager/theme';

	let { children } = $props();

	function setThemeDebugAttributes(
		mode: string,
		scheme: string,
		source: 'system' | 'fallback',
		effectiveMode: string
	): void {
		const root = document.documentElement;
		root.setAttribute('data-theme-mode-debug', mode);
		root.setAttribute('data-theme-scheme-debug', scheme);
		root.setAttribute('data-theme-source-debug', source);
		root.setAttribute('data-theme-effective-debug', effectiveMode);
	}

	onMount(() => {
		try {
			const mode = ThemeManager.getSystemThemeMode();
			applyThemeModeAndScheme(mode, 'minimal');
			setThemeDebugAttributes(mode, 'minimal', 'system', mode);

			const dispose = ThemeManager.initSystemThemeListener((isDark) => {
				const nextMode = isDark ? 'dark' : 'light';
				applyThemeModeAndScheme(nextMode, 'minimal');
				setThemeDebugAttributes(nextMode, 'minimal', 'system', nextMode);
			});

			return dispose;
		} catch {
			const fallbackMode = applyThemeMode('light');
			setThemeDebugAttributes('light', 'minimal', 'fallback', fallbackMode);
		}
	});
</script>

<ThemeProvider>
	{@render children()}
</ThemeProvider>
