<script lang="ts">
	import type { Snippet } from 'svelte';
	import { getThemeContext } from '../theme-context';

	type ThemeConsumerContract = {
		children: Snippet<[{ theme: any; themeName: string; setTheme: (name: any) => void }]>;
	};

	let { children }: ThemeConsumerContract = $props();

	const context = getThemeContext();
</script>

{@render children({
	theme: context.theme,
	themeName: context.themeName,
	setTheme: context.setTheme
})}


