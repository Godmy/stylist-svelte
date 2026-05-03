<script lang="ts">
	// @ts-nocheck
	import { Story } from '$stylist/playground/component';
	import ThemeSurface from './index.svelte';
	import { ThemeProvider } from '$stylist/theme';
</script>

<Story component={ThemeSurface} title="ThemeSurface" description="Content-oriented molecule that renders themed header, content and footer snippets.">
	{#snippet children()}
		<ThemeProvider initialTheme="light">
			<ThemeSurface>
				{#snippet header(themeContext)}
					<div class="space-y-1">
						<h3 class="text-lg font-semibold">Themed Surface</h3>
						<p class="text-sm opacity-[var(--opacity-80)]">Current mode: {themeContext?.themeMode}</p>
					</div>
				{/snippet}

				{#snippet content(themeContext)}
					<div class="space-y-2">
						<p class="text-sm">Theme name: {themeContext?.theme.name}</p>
						<p class="text-sm">Use this molecule for cards, callouts and dashboard sections that need contextual theme access.</p>
					</div>
				{/snippet}

				{#snippet footer(themeContext)}
					<div class="text-xs opacity-[var(--opacity-70)]">
						Context bridge active for: {themeContext?.themeMode}
					</div>
				{/snippet}
			</ThemeSurface>
		</ThemeProvider>
	{/snippet}
</Story>
