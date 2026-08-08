<script lang="ts">
	import { ThemeSwitcher } from '$stylist';
	import type { TokenThemeScheme } from '$stylist/theme/type/alias/theme-scheme';

	let theme = $state<TokenThemeScheme>('minimal');
	let changeCount = $state(0);

	function handleThemeChange(nextTheme: TokenThemeScheme) {
		theme = nextTheme;
		changeCount += 1;
	}
</script>

<ThemeSwitcher themeScheme={theme} themeMode="light" onThemeSchemeChange={handleThemeChange} />

<output data-testid="theme-switcher-value">{theme}</output>
<output data-testid="theme-switcher-count">{changeCount}</output>
