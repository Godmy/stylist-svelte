<script lang="ts">
	import { ThemeModeToggle } from '$stylist';

	let theme = $state<'default' | 'light' | 'dark'>('default');
	let themeChangeCount = $state(0);
	let toggleCount = $state(0);

	function handleThemeChange(nextTheme: 'default' | 'light' | 'dark') {
		theme = nextTheme;
		themeChangeCount += 1;
	}

	function handleToggle() {
		toggleCount += 1;
	}
</script>

<ThemeModeToggle currentTheme={theme} onThemeChange={handleThemeChange} onToggle={handleToggle} />

<output data-testid="theme-mode-value">{theme}</output>
<output data-testid="theme-change-count">{themeChangeCount}</output>
<output data-testid="toggle-count">{toggleCount}</output>
