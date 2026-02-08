<script lang="ts">
	import type { Snippet } from 'svelte';
	import { getThemeContext } from '../design-system';

	type Props = {
		children: Snippet<[{ theme: any; themeName: string; setTheme: (name: any) => void }]>;
	};

	let { children }: Props = $props();

	const context = getThemeContext();
</script>

{@render children({
	theme: context.theme,
	themeName: context.themeName,
	setTheme: context.setTheme
})}
