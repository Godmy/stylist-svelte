<script lang="ts">
	import { Story } from '$stylist/design-system/playground';
	import type { ControlConfig } from '$stylist/design-system/tokens/interaction/controls';
	import ThemeSwitcher from './index.svelte';

	let selectedTheme = $state<'light' | 'dark' | 'system'>('light');

	const controls: ControlConfig[] = [
		{ name: 'currentTheme', type: 'select', defaultValue: 'light', options: ['light', 'dark', 'system'] },
		{ name: 'showLabels', type: 'boolean', defaultValue: true }
	];
</script>

<Story component={ThemeSwitcher} title="ThemeSwitcher" description="Theme toggle between light, dark, and system modes." {controls}>
	{#snippet children(values: any)}
		<div class="space-y-3">
			<ThemeSwitcher
				currentTheme={values.currentTheme}
				showLabels={values.showLabels}
				onThemeChange={(theme) => (selectedTheme = theme)}
			/>
			<p class="text-sm text-[--color-text-secondary]">Selected theme: {selectedTheme}</p>
		</div>
	{/snippet}
</Story>
