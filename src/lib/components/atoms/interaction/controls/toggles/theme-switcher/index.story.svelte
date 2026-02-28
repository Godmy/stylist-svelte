<script lang="ts">
	import { Story } from '$stylist/design-system/playground';
	import type { ControlConfig } from '$stylist/design-system/tokens/interaction/controls';
	import ThemeSwitcher from './index.svelte';

	let selectedTheme = $state<'minimal' | 'ocean' | 'forest' | 'sunset'>('minimal');

	const controls: ControlConfig[] = [
		{ name: 'currentTheme', type: 'select', defaultValue: 'minimal', options: ['minimal', 'ocean', 'forest', 'sunset'] },
		{ name: 'showLabels', type: 'boolean', defaultValue: true }
	];
</script>

<Story component={ThemeSwitcher} title="ThemeSwitcher" description="Switch between multiple UI color palettes." {controls}>
	{#snippet children(values: any)}
		<div class="space-y-3 rounded-xl border p-4" style="background:var(--app-bg,#f7f7f9);color:var(--app-text,#171923);border-color:var(--app-line,#d8deea);">
			<ThemeSwitcher
				currentTheme={values.currentTheme}
				showLabels={values.showLabels}
				onThemeChange={(theme) => (selectedTheme = theme)}
			/>
			<p class="text-sm">Selected UI theme: {selectedTheme}</p>
		</div>
	{/snippet}
</Story>
