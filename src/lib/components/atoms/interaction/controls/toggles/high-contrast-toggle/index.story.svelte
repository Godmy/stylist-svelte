<script lang="ts">
	import { Story } from '$stylist/design-system/playground';
	import type { ControlConfig } from '$stylist/design-system/tokens/interaction/controls';
	import HighContrastToggle from './index.svelte';

	const controls: ControlConfig[] = [
		{ name: 'enabled', type: 'boolean', defaultValue: false },
		{ name: 'theme', type: 'select', defaultValue: 'light', options: ['light', 'dark'] }
	];
</script>

<Story component={HighContrastToggle} title="HighContrastToggle" description="Accessibility switch for high-contrast rendering." {controls}>
	{#snippet children(values: any)}
		<div class="space-y-4">
			<HighContrastToggle enabled={values.enabled} theme={values.theme} />
			<div class="rounded-xl border border-[--color-border-primary] bg-[--color-background-secondary] p-3 text-sm text-[--color-text-secondary]">
				Current mode: <strong class="text-[--color-text-primary]">{values.enabled ? 'High contrast on' : 'High contrast off'}</strong>
			</div>
		</div>
	{/snippet}
</Story>
